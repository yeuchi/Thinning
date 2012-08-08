/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var model;
var Model = Backbone.Model.extend({

    // Default attributes for the todo item.
    defaults: function() {
      return {
        thickness: 1,
        color: "F00",
        listPts: []
      };
    },

    // Ensure that each todo created has `title`.
    initialize: function() {
       this.thickness = 1;
       this.color = "F00";
       this.listPts = [];
    },

    // Remove this Todo from *localStorage* and delete its view.
    clear: function() {
      this.destroy();
    }

});

