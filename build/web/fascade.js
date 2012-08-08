/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//$(document).ready(function() {
$(function(){
  
   // Declare, initialize
   var model = new Model();
   var appView = new AppView({model: model});

   $.getJSON("assets/intro.json", function(data){
      $(".divInfo").append(data.info);
   });
   
   /*
   // Command 
   var onThinningApply = function() {
      
   }
   
   // event listener
   $(document).bind(EVENT_BUTTON_THIN, onThinningApply);*/
});

