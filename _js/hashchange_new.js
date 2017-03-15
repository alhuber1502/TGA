
$(document).ready(function() {
$(function(){
  
  // Bind an event to window.onhashchange that, when the hash changes, gets the
  // hash and adds the class "selected" to any matching nav link.
  $(window).hashchange( function(){
    var hash = location.hash;
    console.log('hash: %s', hash);

    $('a[href="#' + hash + '"]').click();
    return false;
    
    // Iterate over all nav links, setting the "selected" class as-appropriate.
 //   $('a').each(function(){
 //     var that = $(this);
 //     that[ that.attr( 'href' ) === hash ? 'addClass' : 'removeClass' ]( 'selected' );
 //   }); //end each
    
  
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).hashchange();
  
}); //end hashchange function

});

}); // end ready
