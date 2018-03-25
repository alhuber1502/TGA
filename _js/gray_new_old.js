

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

//Letters Tab people page

	                      
	                      
	           jq('.briefbio').hide();
	           
	           
	           
	           
	          jq('.authorname h3').click(function() {
	          	
	          	if (jq(this).next('.briefbio').is(':hidden')) {
	          	
	          	document.location.hash=jq(this).attr("id");
	          	jq('.authorname h3').removeClass('close');
			       	           	jq('.briefbio').fadeOut();
	          		jq(this).next('.briefbio').fadeIn();
	          		jq(this).addClass('close');
	             	
	          	
	          	return false;
	          	
	          	}
	          	
	          	else if (jq(this).next('.briefbio').is(':visible')){
	          	
	          	
				   jq(this).next('.briefbio').fadeOut();
	          		jq(this).removeClass('close');
	          	
	          	return false;
	          	}
	          	}); //end click
	           	


	           	
	           	
//Letters Tab date page	           	
	           	
	           	jq('.datesummary').hide();
	          	
                
                
               
                
                
                jq('.datelist').hide();
			       	           jq('.datebrowse h3').click(function() {
			       	           
			       	           if (jq(this).next('.datelist').is(':hidden')) {
			       	           	jq('.datebrowse h3').removeClass('close');
			       	           	jq('.datelist').fadeOut();
			       	           		jq(this).next('.datelist').fadeIn();
			       	           		jq(this).addClass('close');
			       	              	
			       	           	
			       	           	return false;
										          	
										          	}
										          	
				          	else if (jq(this).next('.datelist').is(':visible')){
			       	           	
			       				   jq(this).next('.datelist').fadeOut();
			       	           		jq(this).removeClass('close');
			       	           		return false;
			       	           	
			       	           	}
	           	}); //end click
	           	
	           	jq('.datebrowse h3:first').click();
	           	
	           	
	           	jq('.datelist a').click(function() {
						                                $this = jq(this);
						                                jq('.datesummary').hide();
						                                jq('.datelist a.active').removeClass('active');
						                                $this.addClass('active').blur();
						                                var datesummary = $this.attr('href');
						                                jq(datesummary).fadeIn(250);
						                             $this.closest('h3').click();
						                             
						                }); // end click
              
	        
	         	jq('.datelist #date1734 a').click();  

	        	
	           	
	           	
	           	
                
                
                
                
                jq('.placesummary').hide();
			           	jq('.placelist a').click(function() {
					                                $this = jq(this);
					                                jq('.placesummary').hide();
					                                jq('.placelist a.active').removeClass('active');
					                                $this.addClass('active').blur();
					                                var placesummary = $this.attr('href');
					                                jq(placesummary).fadeIn(250);
					                                
					                }); // end click
					                
					 jq('.placelist #placeAbbeville a').click();
               
                
               jq('.placelist').hide();
	       	       	           jq('.placebrowse h3').click(function() {
	       	       	           
	       	       	           
	       	       	            if (jq(this).next('.placelist').is(':hidden')) {
				   			       	           	
				   			       	              	
					jq('.placebrowse h3').removeClass('close');
					jq('.placelist').fadeOut();
					jq(this).next('.placelist').fadeIn();
					jq(this).addClass('close');
					return false;
				   										          	
				   	}
				   										          	
					else if (jq(this).next('.placelist').is(':visible')){

						   jq(this).next('.placelist').fadeOut();
						jq(this).removeClass('close');
						return false;
				   			       	           	
			       	           	}
	       	       	           
	       	       	           
	       	       	         
	       	       	           	
	       	       	              	
	       	       	           	
	       	       	           	
	           	}); //end click
	           	
	           	jq('.placebrowse h3:first').click();
               
               
               
               
               jq('.holdingsummary').hide();
					           	jq('.holdinglist a').click(function() {
							                                $this = jq(this);
							                                jq('.holdingsummary').hide();
							                                jq('.holdinglist a.active').removeClass('active');
							                                $this.addClass('active').blur();
							                                var holdingsummary = $this.attr('href');
							                                jq(holdingsummary).fadeIn(250);
							                                
							                }); // end click
							                
							jq('.holdinglist #holdingBDLN a').click();
                
               
                jq('.holdinglist').hide();
                
                
	       	           jq('.holdingbrowse h3').click(function() {
	       	           
	       	           if (jq(this).next('.holdinglist').is(':hidden')) {
	       	           
	       	           	jq('.holdingbrowse h3').removeClass('close');
			       	           	jq('.holdinglist').fadeOut();
	       	           		jq(this).next('.holdinglist').fadeIn();
	       	           		jq(this).addClass('close');
	       	              	return false;
	       	           	
	       	           	}
								   										          	
					else if (jq(this).next('.holdinglist').is(':visible')){
	       	           	
	       				   jq(this).next('.holdinglist').fadeOut();
	       	           		jq(this).removeClass('close');
	       	           		return false;
	       	           	}
	           	}); //end click
	           	
	        jq('.holdingbrowse h3:first').click();
                








jq(function(){  // Letters anchors
       


var anchor = window.location.href.split('#')[1];

var page = window.location.href.split('#')[0];


//console.log('anchor: %s', anchor);

//console.log('page: %s', page);

if (anchor != '') {


	if (/\/texts\/letters\/people\.shtml/.test(page)) {
	
	jq('.authorname #' + anchor).click(); 
	return false;

	
	}
	
	else 
	

	if (/\/texts\/letters\/dates\.shtml/.test(page)) {
	
	jq('.datelist #' + anchor + ' a').click(); 
	jq(window).scrollTop();
	jq('.datelist #' + anchor).closest('ul').prev('h3').click();
	return false;

	
	
	}
	
	else 

	if (/\/texts\/letters\/places\.shtml/.test(page)) {
		
		jq('.placelist #' + anchor + ' a').click(); 
		jq(window).scrollTop();

		jq('.placelist #' + anchor).closest('ul').prev('h3').click();
		return false;

		
		
	}
	
	else 

	if (/\/texts\/letters\/holdings\.shtml/.test(page)) {		
		jq('.holdinglist #' + anchor + ' a').click(); 
		jq(window).scrollTop();

		jq('.holdinglist #' + anchor).closest('ul').prev('h3').click(); 
		
		return false;

	}
	
	else if (anchor == 'record') {
		
		jq('a[href="#' + anchor + '"]').click(); 
		return false;

		
		}
	


}

}); //end getting letter  anchors to work!



jq("ul.tabs a").click(function(){
 var $this = jq(this);
            
                        document.location.hash=$this.attr("href");
            
            return false;
    });



// poems filter




               
               
         function poemsLang_filter() {    
		
               
               if (jq('#english').attr('checked')) {
	       	                     
	       	      	                      
	       	            
	       	                     
	       	                      if (jq('#lyric' || '#satire' || '#imitation' || '#doubtful').attr('checked')) {
				     	       	                     
				     					     if (jq('#lyric').attr('checked')) {
				     
				     					     jq('.lyric').show();
				     					     }
				     					     
				     					     else {
				     					     
				     					     jq('.lyric').hide();
				     					     
				     					     };
				     					     
				     					     
				     					     if (jq('#satire').attr('checked')) {
				     
				     									     jq('.satire').show();
				     									     }
				     					     
				     					     else {
				     					     					     
				     					     					     jq('.satire').hide();
				     					     					     
				     					     };
				     
				     					     if (jq('#imitation').attr('checked')) {
				     
				     									     jq('.imitation').show();
				     									     }
				     					     
				     					     else {
				     					     					     
				     					     					     jq('.imitation').hide();
				     					     					     
				     					     };
				     
				     					     if (jq('#doubtful').attr('checked')) {
				     
				     									     jq('.doubtful').show();
				     									     }
				     					     
				     					     else {
				     					     					     
				     					     					     jq('.doubtful').hide();
				     					     					     
				     					     };
				     	       	                     
				     	       	                     }
				     	       	                     
				     	       	                     else {
				     	       	                     
				     	       	                     jq('.english').show();
				     	       	                     
				     	       	                     };
	       	                     
	       	                    
	       	                     }
	       	                     
	       	           else {
	       	           
	       	           jq('.english').hide();
	       	           var english = 1;
	       	           
	       	           };
	       	                     
	       	                     
	    
   	                     
	       	                     
	      if (jq('#latin').attr('checked')) {
	       	                     
	       	      	                      
	       	                     jq('.latin').show();
	       	                     
	       	                     
	       	                     
	       	                     
	       	                     }                 
	       	                     
	       	                      else {
				     	       	           
				     	       	           jq('.latin').hide();
				     	       	           var latin = 1;
				     	       	           
	       	           };
	       	                     
	       	if (jq('#greek').attr('checked')) {
	       	                     
	       	      	                      
	       	                     jq('.greek').show();
	       	                     
	       	                     
	       	                     
	       	                     
	       	                     }  
	       	                     
	        else {
	       	       	           
	       	       	           jq('.greek').hide();
	       	       	           var greek = 1;
	       	       	           
	       	           };
	       	           
	       	if (english == 1 && latin == 1 && greek ==1) {
	       	jq('.english').show();
	       	jq('.latin').show();
	       	jq('.greek').show();
	       	}
	       	
}	; // end function


function poemsGenre_filter() {    
		
               
               if (jq('#lyric').attr('checked')) {
	       	                     
			    jq('#english').attr('checked', true);
								     ;
				
				     
				     jq('.latin').hide();
	       	       	             jq('.greek').hide();
	       	       	      
	       	       	      if (jq('#latin').attr('checked')) {
	       	       	      
	       	       	       jq('.latin').show();
	       	       	      }
	       	       	      
	       	       	      if (jq('#greek').attr('checked')) {
			      	       	       	      
			      	       	       	       jq('.greek').show();
	       	       	      }
	       	                     
	       	                     
	       	                     
	       	                     jq('.lyric').show();
	       	                     
	       	                     
	       	                     
	       	                     
	       	                     } 
	       	                     
	       	           else {
	       	           
	       	           jq('.lyric').hide();
	       	           var lyric = 1;
	       	           
	       	           };
	       	                     
	       	                     
	    
   	                     
	       	                     
	      if (jq('#satire').attr('checked')) {
	       	                     
	       	      	                      
	       	                     			    
				   jq('#english').attr('checked', true);
				   								     ;
				   				
				   				     
				   				     jq('.latin').hide();
				   	       	       	             jq('.greek').hide();
				   	       	       	      
				   	       	       	      if (jq('#latin').attr('checked')) {
				   	       	       	      
				   	       	       	       jq('.latin').show();
				   	       	       	      }
				   	       	       	      
				   	       	       	      if (jq('#greek').attr('checked')) {
				   			      	       	       	      
				   			      	       	       	       jq('.greek').show();
				   	       	       	      }
	       	                     
	       	                     jq('.satire').show();
	       	                     
	       	                     
	       	                     
	       	                     }                 
	       	                     
	       	                      else {
				     	       	           
				     	       	           jq('.satire').hide();
				     	       	           var satire = 1;
				     	       	           
	       	           };
	       	                     
	       	if (jq('#imitation').attr('checked')) {
	       	                     
	       	      	        jq('#english').attr('checked', true);
												     ;
								
								     
								     jq('.latin').hide();
					       	       	             jq('.greek').hide();
					       	       	      
					       	       	      if (jq('#latin').attr('checked')) {
					       	       	      
					       	       	       jq('.latin').show();
					       	       	      }
					       	       	      
					       	       	      if (jq('#greek').attr('checked')) {
							      	       	       	      
							      	       	       	       jq('.greek').show();
					       	       	      }
	       	                     
	       	                     jq('.imitation').show();
	       	                     
	       	                     
	       	                     
	       	                     
	       	                     }  
	       	                     
	        else {
	       	       	           
	       	       	           jq('.imitation').hide();
	       	       	           var imitation = 1;
	       	       	           
	       	           };
	       	           
	       if (jq('#doubtful').attr('checked')) {
	       	       	                     
	       	       	      	        jq('#english').attr('checked', true);
													     ;
									
									     
									     jq('.latin').hide();
						       	       	             jq('.greek').hide();
						       	       	      
						       	       	      if (jq('#latin').attr('checked')) {
						       	       	      
						       	       	       jq('.latin').show();
						       	       	      }
						       	       	      
						       	       	      if (jq('#greek').attr('checked')) {
								      	       	       	      
								      	       	       	       jq('.greek').show();
						       	       	      }
	       	                     
	       	       	                    jq('.doubtful').show();
	       	       	                     
	       	       	                     
	       	       	                     
	       	       	                     
	       	       	                     }  
	       	       	                     
	       	        else {
	       	       	       	           
	       	       	       	           jq('.doubtful').hide();
	       	       	       	           var doubtful = 1;
	       	       	       	           
	       	           };
	       	           
	       	if (lyric == 1 && satire == 1 && imitation ==1 && doubtful ==1) {
	       	jq('.lyric').show();
	       	jq('.satire').show();
	       	jq('.imitation').show();
	       	jq('.doubtful').show();
	  
	       	}
	       	
}	; // end function

jq('#poemsfilter #english').change(function() {	       	
	       	
	       poemsLang_filter();	
               jq('#poemsfilter #submit').click();
               return false;
               
             }); //end change function  
             
jq('#poemsfilter #latin').change(function() {	       	
	       	
	       poemsLang_filter();	
               jq('#poemsfilter #submit').click();
               return false;
               
             }); //end change function  
             
jq('#poemsfilter #greek').change(function() {	       	
	       	
	       poemsLang_filter();	
               jq('#poemsfilter #submit').click();
               return false;
               
             }); //end change function  

jq('#poemsfilter #lyric').change(function() {	
	       poemsGenre_filter();	
               jq('#poemsfilter #submit').click();
               return false;
               
             }); //end change function  

jq('#poemsfilter #satire').change(function() {	
	       poemsGenre_filter();	
               jq('#poemsfilter #submit').click();
               return false;
               
             }); //end change function  

jq('#poemsfilter #imitation').change(function() {	
	       poemsGenre_filter();	
               jq('#poemsfilter #submit').click();
               return false;
               
             }); //end change function  

jq('#poemsfilter #doubtful').change(function() {	
	       poemsGenre_filter();	
               jq('#poemsfilter #submit').click();
               return false;
               
             }); //end change function  









}); // end ready





   
   
  
   			       
   			       
   			       
   			     



			  



	           	
