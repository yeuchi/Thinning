/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var AppView = Backbone.View.extend({
    
    events: {
      "click .btnThin"   : "onThin",
      "click .btnClear"  : "onClear",
      "click #myCanvas" : "onDraw"
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
      
      this.canvas = document.getElementById('myCanvas');
      this.context = canvas.getContext('2d');
    },

    // Re-render the titles of the todo item.
    render: function() {
      
      return this;
    },
    
    onDraw: function() {
      this.context.beginPath();
      this.context.strokeStyle = "#"+this.model.color;
    },
    
    onClear: function() {
       this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
       this.model.clear();
    },
    
    onThin: function() {
       // dispatch event for thinning.
    }
});

