/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var AppView = Backbone.View.extend({
    
    el: $("#divAppView"),
    
    events: {
      "click .btnThin"   : "onThin",
      "click .btnClear"  : "onClear",
      "click #myCanvas" : "onDraw"
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      
      model.on('change', this.render, this);
      model.on('destroy', this.remove, this);
      
      this.canvas = document.getElementById('myCanvas');
      this.context = this.canvas.getContext('2d');
    },

    // Re-render the titles of the todo item.
    render: function() {
      
      return this;
    },
    
    onDraw: function(event) {
      var pos = $(".divCanvas").position();
      var off = $("#myCanvas").position();
      var pt = new Point(event.pageX-pos.left-off.left, event.pageY-pos.top-pos.top);
      var last = model.listPts.length;
      
      if(last) {
         this.context.beginPath();
         this.context.strokeStyle = "#"+model.color;
      
         var ptLast = model.listPts[last-1];
         this.context.moveTo(ptLast.x, ptLast.y);
         this.context.lineTo(pt.x, pt.y);
         this.context.stroke();
      }
      model.listPts.push(pt);
    },
    
    onClear: function() {
       this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
       model.clear();
    },
    
    onThin: function() {
       alert("start Thinning");
       // dispatch event for thinning.
    }
});

