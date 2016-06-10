
var Model = Backbone.Model.extend({

    defaults: {
        "strokeWidth"   : 10,
        "color"         : "F00",
        "mouseDown"     : false
    },
    
    initialize: function(){
      if( !this.get('listPts') ){ 
        this.set({listPts: new Array()});
      }
    },

    clear: function() {
      this.set({listPts: new Array()});
    }
});

