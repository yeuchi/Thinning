
var AppView = Backbone.View.extend({
    
    el: $("#divAppView"),
    
    events: {
      "click .btnThin"      : "onThin",
      "click .btnClear"     : "onClear",
      "click #myCanvas"     : "onDraw",
      "change #sliderThick" : "onStrokeWidth",
      "change #sliderColor" : "onColor"
    },

    initialize: function() {
      
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
      
      this.canvas = document.getElementById('myCanvas');
      this.context = this.canvas.getContext('2d');
    },

    render: function() {
      this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
      if(this.model.listPts.length>1) {
         this.context.beginPath();
         this.context.strokeStyle = "#"+this.model.color;
         this.context.lineWidth = this.model.strokeWidth;

         var ptLast = this.model.listPts[0];
         for(var i=1; i<this.model.listPts.length; i++){
            var pt = this.model.listPts[i];
            this.context.moveTo(ptLast.x, ptLast.y);
            this.context.lineTo(pt.x, pt.y);
            ptLast = pt;
         }
         this.context.stroke();
      }
    },
    
    onAddPoint: function(event) {
      var pos = $(".divCanvas").position();
      var off = $("#myCanvas").position();
      var pt = new Point(event.pageX-pos.left-off.left, event.pageY-pos.top-off.top);
      this.model.listPts.push(pt);
    },
    
    onDraw: function(event) {
      var pos = $(".divCanvas").position();
      var off = $("#myCanvas").position();
      var pt = new Point(event.pageX-pos.left-off.left, event.pageY-pos.top-off.top);
      var last = this.model.listPts.length;
      
      if(last) {
         this.context.beginPath();
         this.context.strokeStyle = "#"+this.model.color;
         this.context.lineWidth = this.model.strokeWidth;
      
         var ptLast = this.model.listPts[last-1];
         this.context.moveTo(ptLast.x, ptLast.y);
         this.context.lineTo(pt.x, pt.y);
         this.context.stroke();
      }
      this.model.listPts.push(pt);
    },
    
    onClear: function() {
       this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
       this.model.clear();
    },
    
    onThin: function() {
       alert("start Thinning");
       // dispatch event for thinning.
    },
    
    onStrokeWidth: function() {
       var strokeWidth = $("#sliderThick").val();
       this.model.strokeWidth = strokeWidth;
    },
    
    onColor: function() {
       var color = $("#sliderColor").val();
       this.model.color = color;
    }
});

