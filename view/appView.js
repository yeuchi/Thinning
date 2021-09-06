// ==================================================================
// Module:        AppView.js
//
// Description:	Application view control for thinning exercise.
//
// Author(s):     Chi T. Yeung	(cty)
//
// History:       September 05, 2021 - rewrite
// ==================================================================
class AppView  {

    initialize(frame, canvas, context, color, width) {
       this.frame = frame;
       this.canvas = canvas;
       this.context = context
       this.listPts = []
       this.isMouseDown = false
       this.strokeColor = color
       this.strokeWidth = width
    }

    onAddPoint(event) {
      var pos = $(this.frame).position();
      var off = $(this.canvas).position();
      var pt = new Point(event.pageX-pos.left-off.left, event.pageY-pos.top-off.top);
      this.listPts.push(pt);
    }
    
    onDrawBegin(event) {
       this.isMouseDown = true
    }
    
    onDraw(event) {
      if(this.isMouseDown){
         var pos = $(this.frame).position();
         var off = $(this.canvas).position();
         var pt = new Point(event.pageX-pos.left-off.left, event.pageY-pos.top-off.top);

         if(this.listPts.length) {
            this.context.beginPath();
            this.context.strokeStyle = "#"+$(this.strokeColor).val()
            this.context.lineWidth = $(this.strokeWidth).val()

            if(this.listPts.length>2){
                var ptPrev = this.listPts[this.listPts.length-3];
                var ptLast = this.listPts[this.listPts.length-2];
                var ptNew = this.listPts[this.listPts.length-1];
                this.context.moveTo(ptPrev.x, ptPrev.y);
                this.context.quadraticCurveTo(ptLast.x, ptLast.y, ptNew.x, ptNew.y);
            }
            else if(this.listPts.length>1) {
                var ptLast = this.listPts[0];
                var pt = this.listPts[1];
                this.context.moveTo(ptLast.x, ptLast.y);
                this.context.lineTo(pt.x, pt.y);
            }
            this.context.stroke();
         }
         this.listPts.push(pt);
       }
    }
    
    onDrawEnd(event) {
       this.isMouseDown = false;
    }
    
    onClear() {
       this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    onRender() {
       // clear canvas
      this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
      
      // get points to render
      if(this.listPts.length>1) {
         this.context.beginPath();
         this.context.strokeStyle = "#"+$(this.strokeColor).val()
         this.context.lineWidth = $(this.strokeWidth).val()

         
        if(this.listPts.length>2){
            for(var i=0; i<this.listPts.length-2; i++){
                var ptPrev = this.listPts[i];
                var ptLast = this.listPts[i+1];
                var ptNew = this.listPts[i+2];
                this.context.moveTo(ptPrev.x, ptPrev.y);
                this.context.quadraticCurveTo(ptLast.x, ptLast.y, ptNew.x, ptNew.y);
            }
        }
        else {
            var ptLast = this.listPts[0];
            var pt = this.listPts[1];
            this.context.moveTo(ptLast.x, ptLast.y);
            this.context.lineTo(pt.x, pt.y);
        }
        // draw line
        this.context.stroke();
      }
    }
    
    onThin() {
       this.dataDes = this.context.getImageData(0, 0,this.canvas.width, this.canvas.height);
       this.dataMask = this.context.createImageData(this.canvas.width, this.canvas.height);
      
       this.gonzalezThin = new GonzalezThin();
       this.gonzalezThin.apply(this.dataDes, this.dataMask);
       this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
       this.context.putImageData(this.dataDes, 0, 0);
    }
}

