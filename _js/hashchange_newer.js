$(document).ready(function() {

$(function(){

  // Bind an event to window.onhashchange 
  
  $(window).hashchange( function(){


    var hash = location.hash;
    var anchor = window.location.href.split('#')[1];

var page = window.location.href.split('#')[0];

console.log('anchor: %s', anchor);

console.log('page: %s', page);


console.log('hash: %s', hash);



// Iterate over all links

	if (/\/texts\/letters\/people\.shtml/.test(page)) {
		$('.briefbio').hide();

		$('.authorname h3').each(function(){
		      var that = $(this);
		    
				
				
		for (var i=0; i<that.length; i++) {

				if(that.attr( 'id' ) === anchor) {

			if ($(that).next('.briefbio').is(':hidden')) {
	          	
	          	
	          	$(that).click();
	             	return false;
	          	
	          	
	          	
	          	}
	          	
	          	else if ($(that).next('.briefbio').is(':visible')){
	          	
	          	
				   $(that).next('.briefbio').fadeOut();
	          		$(that).removeClass('close');
	          	return false;
	          	
	          	}
	          	
	           	



}



				}

		    }); //end each function

	} //end if people page
	
	else if  (/\/texts\/letters\/dates\.shtml/.test(page)) {
		
		
		
					
					
		$('.datelist a').each(function(){
			var that = $(this);
						    
		
	
	
		for (var i=0; i<that.length; i++) {
	
				if(that.attr( 'href' ) === hash) {
				
				
			if ($('div#' + anchor).is(':hidden')) {
	          	
	          	
	          	
	          	$('.datesummary').hide();
							$('.datelist a.active').removeClass('active');
							that.addClass('active').blur();
							
							$(hash).fadeIn(250);
				    $(that).closest('ul').prev('h3').click();
	          	
	          	
	          	}
	          	
	          	
					
					
	
								} //end if
					
					} // end for
	
				 }); //end each function
				 
				 
			
				 
				 
		
	} //end if date page
	
	else if  (/\/texts\/letters\/places\.shtml/.test(page)) {
			
			
			
						
						
			$('.placelist a').each(function(){
				var that = $(this);
							    
			
		
		
			for (var i=0; i<that.length; i++) {
		
					if(that.attr( 'href' ) === hash) {
					
					
				if ($('div#' + anchor).is(':hidden')) {
		          	
		          	
		          	
		          	$('.placesummary').hide();
								$('.placelist a.active').removeClass('active');
								that.addClass('active').blur();
								
								$(hash).fadeIn(250);
					    $(that).closest('ul').prev('h3').click();
		          	
		          	
		          	}
		          	
		          	
						
						
		
									} //end if
						
						} // end for
		
					 }); //end each function
					 
					 
				
					 
					 
			
	} //end if places page

else if  (/\/texts\/letters\/holdings\.shtml/.test(page)) {
			
			
			
						
						
			$('.holdinglist a').each(function(){
				var that = $(this);
							    
			
		
		
			for (var i=0; i<that.length; i++) {
		
					if(that.attr( 'href' ) === hash) {
					
					
				if ($('div#' + anchor).is(':hidden')) {
		          	
		          	
		          	
		          	$('.holdingsummary').hide();
								$('.holdinglist a.active').removeClass('active');
								that.addClass('active').blur();
								
								$(hash).fadeIn(250);
					   
		          	$(that).closest('ul').prev('h3').click();
		          	
		          	}
		          	
		          	
						
						
		
									} //end if
						
						} // end for
		
					 }); //end each function
					 
					 
				
					 
					 
			
	} //end if holdings page
	
else if  (/\/resources\/findaid\.shtml/.test(page)) {
			
			
			
						
						
			$('.findingAid').each(function(){
				var that = $(this);
							    
			
		
		
			for (var i=0; i<that.length; i++) {
		
					if(that.attr( 'href' ) === hash) {
					
					if ($('#panel_overview').is(':hidden')) {
					$('.panel').hide();
										                               $('.tabs a.active').removeClass('active');
										                              $('a[href="#panel_overview"]').addClass('active').blur();
										                               
                               						 $('#panel_overview').fadeIn(250);
					
					
					
					$.scrollTo( $(hash), {duration:1} );
						return false;
					
					}
					
					else {
					
					$.scrollTo( $(hash), {duration:1} );
					
					
					}
					
					
				
		          	
						
						
		
									} //end if
						
						} // end for
		
					 }); //end each function
					 
					 
		$('ul.tabs a').each(function(){
				var that = $(this);
							    
			
		
		
			for (var i=0; i<that.length; i++) {
		
					if(that.attr( 'href' ) === hash) {
					var panel = that.attr('href');
					
					if ($(panel).is(':hidden')) {
					
				
		 			 
					                               $('.panel').hide();
					                               $('.tabs a.active').removeClass('active');
					                              that.addClass('active').blur();
					                               var panel = that.attr('href');
					                                
					             
					              $(panel).fadeIn(250);
					               $.scrollTo( 0 , 0, {duration:1} );    
                              return false;
				
							}		
					      
		          	
		          	
						
						
		
									} //end if
						
						} // end for
		
					 }); //end each function		
					 
					 
			
	} //end if findingaid page	
	

	
	
else {


$('ul.tabs a').each(function(){
				var that = $(this);
							    
			
		
		
			for (var i=0; i<that.length; i++) {
		
					if(that.attr( 'href' ) === hash) {
					var panel = that.attr('href');
					
					if ($(panel).is(':hidden')) {
					
				
		 			 
					                               $('.panel').hide();
					                               $('.tabs a.active').removeClass('active');
					                              that.addClass('active').blur();
					                               var panel = that.attr('href');
					                                
					             
					              $(panel).fadeIn(250);
					               $.scrollTo( 0 , 0, {duration:1} );    
                              return false;
				
							}		
					      
		          	
		          	
						
						
		
									} //end if
						
						} // end for
		
					 }); //end each function









                      
            
            

} //end else




  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.



}); //end hashchange function
$(window).hashchange();
});  //end hash function


}); // end ready
