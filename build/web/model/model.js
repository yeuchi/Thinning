
var Model = Backbone.Model.extend({

    defaults: {
        "strokeWidth"   : 20,
        "color"         : "F00"
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

