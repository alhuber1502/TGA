

jq(document).ready(function() {




jq('#main h2').append('<a href="#top" class="backtotop"><img src="/images/backtotop.png" alt="back to top link" title="Back to Top"/></a>');


                jq('.tabs a').click(function() {
                               $this = jq(this);
                               jq('.panel').hide();
                               jq('.tabs a.active').removeClass('active');
                              $this.addClass('active').blur();
                               var panel = $this.attr('href');
                                jq(panel).fadeIn(250);
                              return false;
               }); // end click
                jq('.tabs li:first a').click();
                
                 
   
   // Letters Form restrictions            
                
                jq('#author :input:first, #addressee :input:first, #dateletto :input:last, #dateletfrom :input:first').focus();
                
               
                jq('#dateletto').val('1771').attr('selected', true).blur();
               
               jq('#author').change(function() {
               
               
             
		jq('#addressee').val( jq('#addressee').prop('defaultSelected') );
               
               
               
               if (jq(this).val()=='Gray, Thomas, 1716-1771') {
	       	                     
	       	      	                      
	       	                     jq('#addresseeGray').hide();
	       	                     jq('.addresseeOther').show();
	       	                     
	       	                     
	       	                     
	       	                     } else 
	       	                     
	       	                     {
	       	                    
	       	                     jq('.addresseeOther').hide();
	       	                     jq('#addresseeGray').show();
	       	                     
	       	                     
               }
               
               }); // end change
               
               
               jq('#dateletfrom').change(function() {
	                      
	                var yearFrom = jq(this).val();
	                var yearTo = jq('#dateletto :selected').val();
	                    
	       		
	                  
	                      
	                      
	                      if (+yearFrom > +yearTo) {
	       	       	                     
	       	       	      	            
	       	       	                     jq('#dateletto').val(yearFrom);
	       	       	                     
	       	       	                    
	       	       	                     var newyearTo = jq('#dateletto :selected').val();
	       	       	                     
	       	       	               //   console.log('date from %s dateto %s', yearFrom, yearTo); 
	       	       	                     
	       	       	                     
	                      }
	                      
	                      }); // end change
	                      
	                      
	         jq('#dateletto').change(function() {
		 	                      
		 	                var yearTo = jq(this).val();
		 	                var yearFrom = jq('#dateletfrom :selected').val();
		 	                    
		 	       		
		 	                   
		 	                      
		 	                      
		 	                      if (+yearTo < +yearFrom) {
		 	       	       	                     
		 	       	       	      	            
		 	       	       	                     jq('#dateletfrom').val( jq('#dateletfrom').prop('defaultSelected') );
		 	       	       	                     
		 	       	       	          //  console.log('date from %s dateto %s', yearFrom, yearTo);       
		 	       	       	                     
		 	       	       	                     
		 	                      }
		 	                      
	                      }); // end change

//Letters Tab author page

	                      
	                      
	     //      jq('.briefbio').hide();
	           
	           
	           
	           
	      //     jq('.authorname h3').toggle(
	      //     	function() {
	      //     	jq('.authorname h3').removeClass('close');
		//	       	           	jq('.briefbio').fadeOut();
	      //     		jq(this).next('.briefbio').fadeIn();
	      //     		jq(this).addClass('close');
	      //        	
	      //     	
	      //     	},
	      //     	function() {
	      //     	
		//		   jq(this).next('.briefbio').fadeOut();
	      //     		jq(this).removeClass('close');
	      //     	
	      //     	}
	      //     	); //end toggle
	           	


	           	
	           	
	           	
	           	
	      //     	jq('.datesummary').hide();
	       //    	jq('.datelist a').click(function() {
		//	                                $this = jq(this);
		//	                                jq('.datesummary').hide();
		//	                                jq('.datelist a.active').removeClass('active');
		//	                                $this.addClass('active').blur();
		//	                                var datesummary = $this.attr('href');
		//	                                jq(datesummary).fadeIn(250);
		//	                                return false;
		//	                }); // end click
              //  jq('.datelist #date1734 a').click();

                
                
               
                
                
                jq('.datelist').hide();
			       	           jq('.datebrowse h3').toggle(
			       	           	function() {
			       	           	jq('.datebrowse h3').removeClass('close');
			       	           	jq('.datelist').fadeOut();
			       	           		jq(this).next('.datelist').fadeIn();
			       	           		jq(this).addClass('close');
			       	              	
			       	           	
			       	           	},
			       	           	function() {
			       	           	
			       				   jq(this).next('.datelist').fadeOut();
			       	           		jq(this).removeClass('close');
			       	           	
			       	           	}
	           	); //end toggle
	           	
	           	jq('.datebrowse h3:first').click();
                
                
                
                
                jq('.placesummary').hide();
			           	jq('.placelist a').click(function() {
					                                $this = jq(this);
					                                jq('.placesummary').hide();
					                                jq('.placelist a.active').removeClass('active');
					                                $this.addClass('active').blur();
					                                var placesummary = $this.attr('href');
					                                jq(placesummary).fadeIn(250);
					                                return false;
					                }); // end click
					                
					 jq('.placelist #placeAbbeville a').click();
               
                
               jq('.placelist').hide();
	       	       	           jq('.placebrowse h3').toggle(
	       	       	           	function() {
	       	       	           	jq('.placebrowse h3').removeClass('close');
			       	           	jq('.placelist').fadeOut();
	       	       	           		jq(this).next('.placelist').fadeIn();
	       	       	           		jq(this).addClass('close');
	       	       	              	
	       	       	           	
	       	       	           	},
	       	       	           	function() {
	       	       	           	
	       	       				   jq(this).next('.placelist').fadeOut();
	       	       	           		jq(this).removeClass('close');
	       	       	           	
	       	       	           	}
	           	); //end toggle
	           	
	           	jq('.placebrowse h3:first').click();
               
               
               
               
               jq('.holdingsummary').hide();
					           	jq('.holdinglist a').click(function() {
							                                $this = jq(this);
							                                jq('.holdingsummary').hide();
							                                jq('.holdinglist a.active').removeClass('active');
							                                $this.addClass('active').blur();
							                                var holdingsummary = $this.attr('href');
							                                jq(holdingsummary).fadeIn(250);
							                                return false;
							                }); // end click
							                
							jq('.holdinglist #holdingBDLN a').click();
                
               
                jq('.holdinglist').hide();
	       	           jq('.holdingbrowse h3').toggle(
	       	           	function() {
	       	           	jq('.holdingbrowse h3').removeClass('close');
			       	           	jq('.holdinglist').fadeOut();
	       	           		jq(this).next('.holdinglist').fadeIn();
	       	           		jq(this).addClass('close');
	       	              	
	       	           	
	       	           	},
	       	           	function() {
	       	           	
	       				   jq(this).next('.holdinglist').fadeOut();
	       	           		jq(this).removeClass('close');
	       	           	
	       	           	}
	           	); //end toggle
	           	
	        jq('.holdingbrowse h3:first').click();
                





//jq(function() {      //Getting letter anchors to work!



//var anchor = window.location.href.split('#')[1];

//var page = window.location.href.split('#')[0];


// var current_url_w_hash = page + window.location.hash; // now you might have something like: http://www.yoursite.com/#123

// console.log('anchor: %s', anchor);

//console.log('page: %s', page);

//console.log('page with hash: %s', current_url_w_hash);


//var TrackHash = function(TrackHash) {
//    if (document.location != page + current_url_w_hash) {
//       window.location = document.location;
//	toggle(window.location.hash);
//    }
//    return false;
//}
// var RunTabs = setInterval('TrackHash()', 200);


// from http://stackoverflow.com/questions/680785/on-window-location-hash-change

// or

// if (window.location.hash) toggle(window.location.hash); 

// from http://stackoverflow.com/questions/6894125/how-to-open-a-hidden-div-when-a-hash-is-on-the-url

// if(location.hash) $("#main").load(location.hash.substring(1));

//});



jq(function(){
       


var anchor = window.location.href.split('#')[1];

var page = window.location.href.split('#')[0];


console.log('anchor: %s', anchor);

console.log('page: %s', page);

if (anchor != '') {

//	if (page == 'http://192.168.0.5/texts/letters/people.shtml') {
	if (/\/texts\/letters\/people\.shtml/.test(page)) {
	
//	jq('.authorname #' + anchor).click(); 
//	return false;

	
	}
	
	else 
	
//	if (page == 'http://192.168.0.5/texts/letters/dates.shtml') {
	if (/\/texts\/letters\/dates\.shtml/.test(page)) {
	
	jq('.datelist #' + anchor + ' a').click(); 
	jq(window).scrollTop();
	jq('.datelist #' + anchor).closest('ul').prev('h3').click();
	return false;

	
	
	}
	
	else 
//	if (page == 'http://192.168.0.5/texts/letters/places.shtml') {
	if (/\/texts\/letters\/places\.shtml/.test(page)) {
		
		jq('.placelist #' + anchor + ' a').click(); 
		jq(window).scrollTop();

		jq('.placelist #' + anchor).closest('ul').prev('h3').click();
		return false;

		
		
	}
	
	else 
//	if (page == 'http://192.168.0.5/texts/letters/holdings.shtml') {
	if (/\/texts\/letters\/holdings\.shtml/.test(page)) {		
		jq('.holdinglist #' + anchor + ' a').click(); 
		jq(window).scrollTop();

		jq('.holdinglist #' + anchor).closest('ul').prev('h3').click(); 
		
		return false;

	}
	
	else if (anchor == 'panel_record') {
		
		jq('a[href="#' + anchor + '"]').click(); 
		return false;

		
		}
	


}

}); //end getting letter  anchors to work!








}); // end ready





   
   
  
   			       
   			       
   			       
   			     



			  



	           	