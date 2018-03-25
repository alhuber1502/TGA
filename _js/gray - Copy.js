

jq(document).ready(function() {




//                jq('.tabs a').click(function() {
//                                $this = jq(this);
//                                jq('.panel').hide();
//                                jq('.tabs a.active').removeClass('active');
//                                $this.addClass('active').blur();
//                                var panel = $this.attr('href');
//                                jq(panel).fadeIn(250);
//                                return false;
//                }); // end click
//                jq('.tabs li:first a').click();
                
                 
   
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

	                      
	                      
	           jq('.briefbio').hide();
	           jq('.authorname h3').toggle(
	           	function() {
	           		jq(this).next('.briefbio').fadeIn();
	           		jq(this).addClass('close');
	              	
	           	
	           	},
	           	function() {
	           	
				   jq(this).next('.briefbio').fadeOut();
	           		jq(this).removeClass('close');
	           	
	           	}
	           	); //end toggle
	           	


	           	
	           	
	           	
	           	
	           	jq('.datesummary').hide();
	           	jq('.datelist a').click(function() {
			                                $this = jq(this);
			                                jq('.datesummary').hide();
			                                jq('.datelist a.active').removeClass('active');
			                                $this.addClass('active').blur();
			                                var datesummary = $this.attr('href');
			                                jq(datesummary).fadeIn(250);
			                                return false;
			                }); // end click
                jq('.datelist #date1734 a').click();

                
                
               
                
                
                jq('.datelist').hide();
			       	           jq('.datebrowse h3').toggle(
			       	           	function() {
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
	       	           		jq(this).next('.holdinglist').fadeIn();
	       	           		jq(this).addClass('close');
	       	              	
	       	           	
	       	           	},
	       	           	function() {
	       	           	
	       				   jq(this).next('.holdinglist').fadeOut();
	       	           		jq(this).removeClass('close');
	       	           	
	       	           	}
	           	); //end toggle
	           	
	        jq('.holdingbrowse h3:first').click();
                
}); // end ready




jq(function() {      //Getting tabs anchors to work!



var anchor = window.location.href.split('#')[1];

var parentTab = jq('#tabbedPanels').find('[id="' + anchor + '"]').closest('.tab').attr('id');



if (anchor != ''|'tabs-1'|'tabs-2'|'tabs-3'|'tabs-4'|'tabs-5') {

	if (parentTab == 'tabs-2') {
	
	jq('.authorname #' + anchor).click(); 
	jq(window).scrollTop();
	}
	
	else if (parentTab == 'tabs-3') {
	
	jq('.datelist #' + anchor + ' a').click(); 
	jq(window).scrollTop();
	jq('.datebrowse h3:first').click();
		jq('.datelist #' + anchor).closest('ul').prev('h3').click();
	
	
	}
	
	else if (parentTab == 'tabs-4') {
		
		jq('.placelist #' + anchor + ' a').click(); 
		jq(window).scrollTop();
		jq('.placebrowse h3:first').click();
		jq('.placelist #' + anchor).closest('ul').prev('h3').click();
		
		
	}
	
	else if (parentTab == 'tabs-5') {
		
		jq('.holdinglist #' + anchor + ' a').click(); 
		jq(window).scrollTop();
		jq('.holdingbrowse h3:first').click();
		jq('.holdinglist #' + anchor).closest('ul').prev('h3').click(); 
		
		
	}


}




}); //end getting tab anchors to work!



   
   
  
   			       
   			       
   			       
   			     



			  



	           	
