$(document).ready(function() {
$(function(){

//change the hash when link clicked
// $("a.bookmark").click(function(){
// var $this = $(this);
//            $(".bookmark").removeClass('selected');
//            $this.addClass('selected');
//            
//                        document.location.hash=$this.attr("href");
//            
//            return false;
//    }
//
//
//    );//end click
//    
//   
//    $("a.lettertab").click(function(){
//     var $this = $(this);
//                $(".bookmark").removeClass('selected');
//                $this.addClass('selected');
//                
//                            document.location.hash=$this.attr("tabindex");
//                
//                return false;
//        }
//    
//    
//    );//end click
    
    
    
     $("h3.bookmark").toggle(function(){
                $(".bookmark").removeClass('selected');
                $(this).addClass('selected');
                 
                document.location.hash=$(this).attr("id");
                return false;
        },
        function() {
        $(this).removeClass('selected');
        document.location.hash=('');
    return false;
    
        }
    
    
    );//end toggle
    });
  
$(function(){

  // Bind an event to window.onhashchange that, when the hash changes, gets the
  // hash and adds the class "selected" to any matching nav link.
  $(window).hashchange( function(){


    var hash = location.hash;
    var anchor = window.location.href.split('#')[1];

var page = window.location.href.split('#')[0];

console.log('anchor: %s', anchor);

console.log('page: %s', page);


console.log('hash: %s', hash);



// Iterate over all links, setting the "selected" class as-appropriate.

	if (/\/texts\/letters\/people\.shtml/.test(page)) {
		$('.briefbio').hide();

		$('.authorname h3').each(function(){
		      var that = $(this);
		    //  that[ that.attr( 'id' ) === anchor ? 'addClass' : 'removeClass' ]( 'close' );
var position = $(that).offset();
var scrollTop = $(document).scrollTop();
				
				
		for (var i=0; i<that.length; i++) {

				if(that.attr( 'id' ) === anchor) {


				$('.briefbio').fadeOut();
				
				

				
				$(that).scrollTop(position.top);
				$(that).next('.briefbio').fadeIn();

				$(that).addClass('close');

				


				}

				else {

				$(that).removeClass('close');
				$(that).next('.briefbio').fadeOut();
				}

				}

		    }); //end each function

	} //end if people page
	
	
	else if  (/\/texts\/letters\/dates\.shtml/.test(page)) {
	
	
				$('.datesummary').hide();
				
				
				$('.datelist a').each(function(){
					      var that = $(this);
					    



			  for (var i=0; i<that.length; i++) {

			if(that.attr( 'href' ) === hash) {
							$('.datesummary').hide();
							$('.datelist a.active').removeClass('active');
							$(that).addClass('active').blur();
							
							$(hash).fadeIn(250);
							return false;
					}

			else {

				$(that).removeClass('active');
				var datesummary = that.attr('href');
				$(datesummary).fadeOut(250);
				}
				
				}

			 }); //end each function
			 
			 
		// currently if you press back button until get to main page, no content is shown.  Trying to get it to click the first option when there isn't a hash, but not working yet.	 
			 
			 if(anchor == '') {
			 
			 $('.datelist #date1734 a').click();
			 }
			 
			 
	
	} //end if date page
	
	else if  (/\/texts\/letters\/places\.shtml/.test(page)) {
		
		
					$('.placesummary').hide();
					
					
					$('.placelist a').each(function(){
						      var that = $(this);
						    
	
	
	
				  for (var i=0; i<that.length; i++) {
	
				if(that.attr( 'href' ) === hash) {
								$('.placesummary').hide();
								$('.placelist a.active').removeClass('active');
								$(that).addClass('active').blur();
								
								$(hash).fadeIn(250);
								return false;
						}
	
				else {
	
					$(that).removeClass('active');
					var placesummary = that.attr('href');
					$(placesummary).fadeOut(250);
					}
					
					}
	
				 }); //end each function
				 
				 
			// currently if you press back button until get to main page, no content is shown.  Trying to get it to click the first option when there isn't a hash, but not working yet.	 
				 
				 if(anchor == '') {
				 
				 $('.placelist #placeAbbeville a').click();
				 }
				 
				 
		
		} //end if places page
		
		else if  (/\/texts\/letters\/holdings\.shtml/.test(page)) {
				
				
							$('.holdingsummary').hide();
							
							
							$('.holdinglist a').each(function(){
								      var that = $(this);
								    
			
			
			
						  for (var i=0; i<that.length; i++) {
			
						if(that.attr( 'href' ) === hash) {
										$('.holdingsummary').hide();
										$('.holdinglist a.active').removeClass('active');
										$(that).addClass('active').blur();
										
										$(hash).fadeIn(250);
										return false;
								}
			
						else {
			
							$(that).removeClass('active');
							var holdingsummary = that.attr('href');
							$(holdingsummary).fadeOut(250);
							}
							
							}
			
						 }); //end each function
						 
						 
					// currently if you press back button until get to main page, no content is shown.  Trying to get it to click the first option when there isn't a hash, but not working yet.	 
						 
						 if(anchor == '') {
						 
						 $('.holdinglist #holdingBDLN a').click();
						 }
						 
						 
				
		} //end if holding institutions page


  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.



}); //end hashchange function
$(window).hashchange();
});  //end hash function

$('.datelist #date1734 a').click();

$('.placelist #placeAbbeville a').click();

 $('.holdinglist #holdingBDLN a').click();

}); // end ready
