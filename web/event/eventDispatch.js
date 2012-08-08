/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* appView events */
var EVENT_BUTTON_THIN = "onEventThinButton";

// function to dispatch event !
var dispatchEvent = function(event) {
    $(document).trigger(event);        
    /*  if we want to be a purist....
    var event = document.createEvent('UIEvents');
    event.initEvent(eventType, true, true);
    document.dispatchEvent(event);
    */
}