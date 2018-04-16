jq(document).ready(function() {

    // Allow Page URL to activate a tab's ID
    var taburl = document.location.toString();
    if( taburl.match('#') ) {
	jq('.nav-tabs a[href="#'+taburl.split('#')[1]+'"]').tab('show');
    }

    // Allow internal links to activate a tab.
    jq('a[data-toggle="tab"]').click(function (e) {
	    e.preventDefault();
	    jq('a[href="' + $(this).attr('href') + '"]').tab('show');
	});

    // dropdown navigation
    jq('.dropdown').hover(function() {
	$(this).addClass('open');
    }, function() {
	$(this).removeClass('open');
    });
    
    // initialize popovers
    jq(function () {
	jq('body').popover({
	    selector: '[data-toggle="popover"]'
	});
	jq('#citation').attr("data-content", citation);
    });
    
    jq('a img').closest('a').addClass('noborder');

    //    jq('#main h2').append('<a href="#top" class="backtotop"><img src="/images/backtotop.png" alt="back to top" title="Back to Top"/></a>');

    jq('#main h2,#ft div.page,ul.ead_work h3,h3[id="earlyYears"],h3[id="middleYears"],h3[id="laterYears"],dl.glossary dt').prepend('<a href="#top" class="backtotop noborder" style="float:right;"><img src="/images/backtotop.png" alt="back to top" title="Back to Top"/></a>');

// jq('.panel').hide();
    jq('.tabs a.active').removeClass('active');
    jq('.tabs li:first a').addClass('active').blur();
    var panel =  jq('.tabs li:first a').attr('href');
		                     		                               
    //    if(jq('.panel').length) {             
    //                location.hash = panel;
    //                
    //                 return false;
    //                 
    //              }
    jq(panel).show();
      
    jq('.tabs a').click(function(e) {
	//     $this = jq(this);
	//     e.preventDefault();
	//     e.stopPropagation();
	
	//     jq('.panel').hide();
	//     jq('.tabs a.active').removeClass('active');
	//     $this.addClass('active').blur();
	//     var panel = $this.attr('href');
	//     jq(panel).fadeIn(250);
	
	//     $.scrollTo( 0 , 0, {duration:1} );  
	//     return false;
	
	
	// stops from submitting the form
	e.preventDefault();
	e.stopPropagation();
	return false;
	
	$this = jq(this);
	//				$this.click(function(e){
	//	e.preventDefault();
	//	return false;
	//   });
	
	jq('.panel').hide();
	jq('.tabs a.active').removeClass('active');
	$this.addClass('active').blur();
	var panel = $this.attr('href');
	jq(panel).fadeIn(250);
	
    }); // end click
    
    
    // Letters Form restrictions            
    
    jq('#author :input:first, #addressee :input:first, #dateletto :input:last, #dateletfrom :input:first').focus();
    jq('#dateletto').val('1771').attr('selected', true).blur();   
    jq('#author').change(function() {

	jq('#addressee').val( jq('#addressee').prop('defaultSelected') );
        if (jq(this).val()=='Gray, Thomas, 1716-1771') {
	    	    
	    jq('#addresseeGray').hide();
	    jq('.addresseeOther').show();
	    
	} else {
	    
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
	    
	} else if (jq(this).next('.briefbio').is(':visible')) {
	    
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
	    
	} else if (jq(this).next('.datelist').is(':visible')) {
			       	           	
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
	    
	} else if (jq(this).next('.placelist').is(':visible')){
	    
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
	    
	} else if (jq(this).next('.holdinglist').is(':visible')) {
	       	           	
	    jq(this).next('.holdinglist').fadeOut();
	    jq(this).removeClass('close');
	    return false;
	}

    }); //end click
    
    jq('.holdingbrowse h3:first').click();

    jq(function() {  // Letters anchors
	var anchor = window.location.href.split('#')[1];
	var page = window.location.href.split('#')[0];
	//console.log('anchor: %s', anchor);
	//console.log('page: %s', page);
	if (anchor != '') {
	    if (/\/texts\/letters\/people\.shtml/.test(page)) {
		
		jq('.authorname #' + anchor).click(); 
		return false;
		
	    } else if (/\/texts\/letters\/dates\.shtml/.test(page)) {
	
		jq('.datelist #' + anchor + ' a').click(); 
		jq(window).scrollTop();
		jq('.datelist #' + anchor).closest('ul').prev('h3').click();
		return false;

	    } else if (/\/texts\/letters\/places\.shtml/.test(page)) {
		
		jq('.placelist #' + anchor + ' a').click(); 
		jq(window).scrollTop();
		jq('.placelist #' + anchor).closest('ul').prev('h3').click();
		return false;
		
	    } else if (/\/texts\/letters\/holdings\.shtml/.test(page)) {		
		jq('.holdinglist #' + anchor + ' a').click(); 
		jq(window).scrollTop();
		jq('.holdinglist #' + anchor).closest('ul').prev('h3').click(); 
		
		return false;
		
	    } else if (anchor == 'record') {
		
		jq('a[href="#' + anchor + '"]').click(); 
		return false;
			
	    }
	}
    }); //end getting letter  anchors to work!


    var url = document.location.toString();
    if (url.match('#')) {
	jq('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    } 
    
    // Change hash for page-reload
    jq('.nav-tabs a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash; //Polyfill for old browsers
        window.scrollTo(0, 0);
    });

    jq("ul.tabs a").click(function(){
	var $this = jq(this);
        
        document.location.hash=$this.attr("href");
            
        return false;
    });
    

    
// poems filter

    
    
    function poemsLang_filter() {   
        
        var english, latin, greek;
		
               
               
         
	       	                     
	      if (jq('#latin').attr('checked')) {
	       	                     
	       	      	                      
	       	                     jq('.latin').show();
	       	                     latin = 1;
	       	                     
	       	                     
	       	                     
	       	                     }                 
	       	                     
	       	                      else {
				     	       	           
				     	       	           jq('.latin').hide();
				     	       	           latin = 0;
				     	       	           
	       	           };
	       	                     
	       	if (jq('#greek').attr('checked')) {
	       	                     
	       	      	                      
	       	                     jq('.greek').show();
	       	                     
	       	                     greek = 1;
	       	                     
	       	                     
	       	                     }  
	       	                     
	        else {
	       	       	           
	       	       	           jq('.greek').hide();
	       	       	           greek = 0;
	       	       	           
	       	           };
	       	           
	       	           
	       		if (jq('#english').attr('checked')) {
			       	                     
			       	      	                      
			       	                     jq('.english').show();
			       	                     
			       	                     english = 1;
			       	                     
			       	                     
			       	                     }  
			       	                     
			        else {
			       	       	           
			       	       	           jq('.english').hide();
			       	       	           english = 0;
			       	       	           
	       	           };
	       		
	       	           
	       	if (english == 0 && latin == 0 && greek ==0) {
	       	jq('.english').show();
	       	jq('.latin').show();
	       	jq('.greek').show();
	       	}
	       	
	       	

}	; // end function

function poemsGenre_filter() {   
         
         var lyric, satire, imitation, doubtful;
		
               
               
	     if (jq('#lyric').attr('checked')) {
	       	                   
	       	            jq('#english').attr('checked', true);
	       	            jq('#latin').attr('disabled', true);
	       	            jq('#greek').attr('disabled', true);
				  jq('.lyric').show();
				jq('.latin').hide();
				jq('.greek').hide();
	       	                  lyric = 1; 
	       	                  
	       	                     
	       	                     
	       	             } 
	       	                     
	       	           else {
	       	           
	       	           jq('.lyric').hide();
	       	           lyric= 0;
	       	           
	       	           
	       	           };
	       	           
	    if (jq('#satire').attr('checked')) {
	    	       	                   
	    	       	            jq('#english').attr('checked', true);
	    	       	            jq('#latin').attr('disabled', true);
	    	       	            jq('#greek').attr('disabled', true);
	    				  jq('.satire').show();
	    				  jq('.latin').hide();
				jq('.greek').hide();
	    	       	                     
	    	       	                  satire = 1; 
	    	       	                  
	    	       	                     
	    	       	                     
	    	       	             } 
	    	       	                     
	    	       	           else {
	    	       	           
	    	       	           jq('.satire').hide();
	    	       	           satire= 0;
	    	       	           
	    	       	           
	       	           };
	       	           
	     if (jq('#imitation').attr('checked')) {
	    	       	                   
	    	       	            jq('#english').attr('checked', true);
	    	       	            jq('#latin').attr('disabled', true);
	    	       	            jq('#greek').attr('disabled', true);
	    				  jq('.imitation').show();
	    	       	                     jq('.latin').hide();
				jq('.greek').hide();
	    	       	                  imitation = 1; 
	    	       	                  
	    	       	                     
	    	       	                     
	    	       	             } 
	    	       	                     
	    	       	           else {
	    	       	           
	    	       	           jq('.imitation').hide();
	    	       	           imitation= 0;
	    	       	           
	    	       	           
	       	           };
	       	                    
	       	                     
	    
	       	                     
	     if (jq('#doubtful').attr('checked')) {
	    	    	       	                   
	    	    	       	            jq('#english').attr('checked', true);
	    	    	       	            jq('#latin').attr('disabled', true);
	    	    	       	            jq('#greek').attr('disabled', true);
	    	    				  jq('.doubtful').show();
	    	    	       	                     jq('.latin').hide();
				jq('.greek').hide();
	    	    	       	                  doubtful = 1; 
	    	    	       	                  
	    	    	       	                     
	    	    	       	                     
	    	    	       	             } 
	    	    	       	                     
	    	    	       	           else {
	    	    	       	           
	    	    	       	           jq('.doubtful').hide();
	    	    	       	           doubtful= 0;
	    	    	       	           
	    	    	       	           
	    	       	           };
	       	             
	       		                     
	      	if (lyric == 0 && satire == 0 && imitation ==0 && doubtful == 0) {
	       	
	       	jq('#english').attr('checked', false);
	       	jq('#latin').attr('checked', false);
	       	jq('#greek').attr('checked', false);
	       	jq('#latin').attr('disabled', false);
	    	jq('#greek').attr('disabled', false);
	    	jq('.english').show();
			       	jq('.latin').show();
	       	jq('.greek').show();
	       	} 	                     
	    
  }	;  //end function


jq('#poemsfilter #english').change(function() {	       	
	       	
	       poemsLang_filter();	
               
               return false;
               
             }); //end change function  
             
jq('#poemsfilter #latin').change(function() {	       	
	       	
	       poemsLang_filter();	
               
               return false;
               
             }); //end change function  
             
jq('#poemsfilter #greek').change(function() {	       	
	       	
	       poemsLang_filter();	
               
               return false;
               
             }); //end change function  

jq('#poemsfilter #lyric').change(function() {	
	       poemsGenre_filter();	
               
               return false;
               
             }); //end change function  

jq('#poemsfilter #satire').change(function() {	
	       poemsGenre_filter();	
               
               return false;
               
             }); //end change function  

jq('#poemsfilter #imitation').change(function() {	
	       poemsGenre_filter();	
               
               return false;
               
             }); //end change function  

jq('#poemsfilter #doubtful').change(function() {	
	       poemsGenre_filter();	
               
               return false;
               
             }); //end change function  


 

jq('.queries').hide();
 jq('.fullquery').hide();
	           
	           
	           
	           
	          jq('.notessummary').click(function() {
	          	
	          	if (jq(this).closest('.line').next('.queries').is(':hidden')||jq(this).closest('.poemtitle').next('.queries').is(':hidden')) {
	          	
	          	document.location.hash=jq(this).attr("id");
//	          	jq('.notessummary').removeClass('close');
	          	jq('.notes').removeClass('close');
     	          	jq('.line').addClass('hover');
//      	           	jq('.queries').fadeOut();
			       	           	
			       	var openLine = jq(this).siblings('.number').text();
				//			      console.log('open line is %s ', openLine);
			       
//				document.contributePoems.fromline.selectedIndex = parseInt(openLine) + 1;
				
//				document.contributePoems.toline.selectedIndex = parseInt(openLine) + 1;
	          		jq(this).closest('.line').next('.queries').fadeIn();
	          		jq(this).closest('.poemtitle').next('.queries').fadeIn();
	          		jq(this).closest('.line').addClass('hover');
	          		jq(this).addClass('close');
	             	if (jq('#textual').attr('checked')) {
				       	       	                   
				       	       	            
				       				
				       				jq('.com_type_textual').hide();
				       	       	                
				       	       	                  
				       	       	                     
				       	       	                     
				       	             }
				       	             
				       else {
				       
				       jq('.com_type_textual').show();
				       
				       
	       };
	       
	       if (jq('#explanatory').attr('checked')) {
	       	       	       	                   
	       	       	       	            
	       	       				
	       	       				jq('.com_type_explanatory').hide();
	       	       	       	                
	       	       	       	                  
	       	       	       	                     
	       	       	       	                     
	       	       	             }
	       	       	             
	       	       else {
	       	       
	       	       jq('.com_type_explanatory').show();
	       	       
	       	       
	       };
	             	
	             	
	          	
	          	return false;
	          	
	          	}
	          	
	          	else if (jq(this).closest('.line').next('.queries').is(':visible')||jq(this).closest('.poemtitle').next('.queries').is(':visible')){
	          	
	          	
				   jq(this).closest('.line').next('.queries').fadeOut();
				   jq(this).closest('.poemtitle').next('.queries').fadeOut();
	          		jq(this).removeClass('close');
	          		jq(this).closest('.line').removeClass('hover');
	          	
	          	return false;
	          	}
	          	}); //end click
	


	          jq('.anassummary').click(function() {
	          	
	          	if (jq(this).closest('.line').next('.queries').is(':hidden')||jq(this).closest('.poemtitle').next('.queries').is(':hidden')) {
	          	
	          	document.location.hash=jq(this).attr("id");
//	          	jq('.anasssummary').removeClass('close');
	          	jq('.notes').removeClass('close');
     	          	jq('.line').addClass('hover');
//      	           	jq('.queries').fadeOut();
			       	           	
			       	var openLine = jq(this).siblings('.number').text();
				//			      console.log('open line is %s ', openLine);
			       
//				document.contributePoems.fromline.selectedIndex = parseInt(openLine) + 1;
				
//				document.contributePoems.toline.selectedIndex = parseInt(openLine) + 1;
	          		jq(this).closest('.line').next('.queries').fadeIn();
	          		jq(this).closest('.poemtitle').next('.queries').fadeIn();
	          		jq(this).closest('.line').addClass('hover');
	          		jq(this).addClass('close');
	             	if (jq('#textual').attr('checked')) {
				       	       	                   
				       	       	            
				       				
				       				jq('.com_type_textual').hide();
				       	       	                
				       	       	                  
				       	       	                     
				       	       	                     
				       	             }
				       	             
				       else {
				       
				       jq('.com_type_textual').show();
				       
				       
	       };
	       
	       if (jq('#explanatory').attr('checked')) {
	       	       	       	                   
	       	       	       	            
	       	       				
	       	       				jq('.com_type_explanatory').hide();
	       	       	       	                
	       	       	       	                  
	       	       	       	                     
	       	       	       	                     
	       	       	             }
	       	       	             
	       	       else {
	       	       
	       	       jq('.com_type_explanatory').show();
	       	       
	       	       
	       };
	             	
	             	
	          	
	          	return false;
	          	
	          	}
	          	
	          	else if (jq(this).closest('.line').next('.queries').is(':visible')||jq(this).closest('.poemtitle').next('.queries').is(':visible')){
	          	
	          	
				   jq(this).closest('.line').next('.queries').fadeOut();
				   jq(this).closest('.poemtitle').next('.queries').fadeOut();
	          		jq(this).removeClass('close');
	          		jq(this).closest('.line').removeClass('hover');
	          	
	          	return false;
	          	}
	          	}); //end click
	
	jq('.summary').toggle(function() {
		          	
		         
		          	
		          	
		          	
				       	           	
		          		jq(this).next('.fullquery').fadeIn();
		          		jq(this).addClass('close');
		             	
		          	
		          	return false;
		          	
		          	}
		          	,
		         
		          	function() {
		          	
					   jq(this).next('.fullquery').fadeOut();
		          		jq(this).removeClass('close');
		          	
		          	return false;
		          	}
	          	); //end toggle





// Prose filter

function prose_filter() {   
         
         
    var art, literature, philosophy, travel, history, geography, nature;
               
               
         
	       	                     
	      if (jq('#art').attr('checked')) {
	       	                     
	       	      	                      
	       	                     jq('.art').show();
	       	                     art = 1;
	       	                     
	       	                     
	       	                     
	       	                     }                 
	       	                     
	       	                      else {
				     	       	           
				     	       	           jq('.art').hide();
				     	       	           art = 0;
				     	       	           
	       	           };
	       	                     
	       	if (jq('#literature').attr('checked')) {
	       	                     
	       	      	                      
	       	                     jq('.literature').show();
	       	                     
	       	                     literature = 1;
	       	                     
	       	                     
	       	                     }  
	       	                     
	        else {
	       	       	           
	       	       	           jq('.literature').hide();
	       	       	          literature = 0;
	       	       	           
	       	           };
	       	           
	       	           
	       		if (jq('#philosophy').attr('checked')) {
			       	                     
			       	      	                      
			       	                     jq('.philosophy').show();
			       	                     
			       	                     philosophy = 1;
			       	                     
			       	                     
			       	                     }  
			       	                     
			        else {
			       	       	           
			       	       	           jq('.philosophy').hide();
			       	       	           philosophy = 0;
			       	       	           
	       	           };
	       		
	       	           
	       		if (jq('#travel').attr('checked')) {
			       	                     
			       	      	                      
			       	                     jq('.travel').show();
			       	                     
			       	                     travel = 1;
			       	                     
			       	                     
			       	                     }  
			       	                     
			        else {
			       	       	           
			       	       	           jq('.travel').hide();
			       	       	           travel = 0;
			       	       	           
	       	           };
	       		
	       	           
	       	           
	       		if (jq('#history').attr('checked')) {
			       	                     
			       	      	                      
			       	                     jq('.history').show();
			       	                     
			       	                     history = 1;
			       	                     
			       	                     
			       	                     }  
			       	                     
			        else {
			       	       	           
			       	       	           jq('.history').hide();
			       	       	           history = 0;
			       	       	           
	       	           };
	       		
	       	           
	       	           
	       		if (jq('#geography').attr('checked')) {
			       	                     
			       	      	                      
			       	                     jq('.geography').show();
			       	                     
			       	                     geography = 1;
			       	                     
			       	                     
			       	                     }  
			       	                     
			        else {
			       	       	           
			       	       	           jq('.geography').hide();
			       	       	           geography = 0;
			       	       	           
	       	           };
	       		
	       	           
	       	           
	       		if (jq('#nature').attr('checked')) {
			       	                     
			       	      	                      
			       	                     jq('.nature').show();
			       	                     
			       	                     nature = 1;
			       	                     
			       	                     
			       	                     }  
			       	                     
			        else {
			       	       	           
			       	       	           jq('.nature').hide();
			       	       	           nature = 0;
			       	       	           
	       	           };
	       		
	       	           
	       	if (art == 0 && literature == 0 && philosophy ==0 && travel==0 && history==0 && geography==0 && nature==0) {
	       	jq('.art').show();
	       	jq('.literature').show();
	       	jq('.philosophy').show();
	       	jq('.travel').show();
	       	jq('.history').show();
	       	jq('.geography').show();
	       	jq('.nature').show();
	       	}
	       	
	       	

}	; // end function

jq('#prosefilter #art').change(function() {	       	
	       	
	       prose_filter();	
               
               return false;
               
             }); //end change function  
             
jq('#prosefilter #literature').change(function() {	       	
	       	
	       prose_filter();	
	                      
               return false;
               
             }); //end change function  
             
jq('#prosefilter #philosophy').change(function() {	       	
	       	
	       prose_filter();	
	                      
               return false;
               
             }); //end change function  

jq('#prosefilter #travel').change(function() {	       	
	       	
	       prose_filter();	
	                      
               return false;
               
             }); //end change function  

jq('#prosefilter #history').change(function() {	       	
	       	
	       prose_filter();	
	                      
               return false;
               
             }); //end change function  

jq('#prosefilter #geography').change(function() {	       	
	       	
	       prose_filter();	
	                      
               return false;
               
             }); //end change function  

jq('#prosefilter #nature').change(function() {	       	
	       	
	       prose_filter();	
	                      
               return false;
               
             }); //end change function  

//End Prose filter


//Finding Aid

jq('.ead_work_summary').hide();

jq('.mss_list').hide();



jq('.ead_work h3').click(function() {
		          	
		          	if (jq(this).next('.ead_work_summary').is(':hidden')) {
		          	
		          	
		          	jq('.ead_work h3').removeClass('close');
				       	           	jq('.ead_work_summary').fadeOut();
		          		jq(this).next('.ead_work_summary').fadeIn();
		          		jq(this).addClass('close');
		             	
		          	
		          	return false;
		          	
		          	}
		          	
		          	else if (jq(this).next('.ead_work_summary').is(':visible')){
		          	
		          	
					   jq(this).next('.ead_work_summary').fadeOut();
		          		jq(this).removeClass('close');
		          	
		          	return false;
		          	}
	          	}); //end click



jq('.ead_mss h4').click(function() {
		          	
		          	if (jq(this).next('.mss_list').is(':hidden')) {
		          	
		          	
		          	jq('.ead_mss h4').removeClass('close');
				       	           	jq('.mss_list').fadeOut();
		          		jq(this).next('.mss_list').fadeIn();
		          		jq(this).addClass('close');
		             	
		          	
		          	return false;
		          	
		          	}
		          	
		          	else if (jq(this).next('.mss_list').is(':visible')){
		          	
		          	
					   jq(this).next('.mss_list').fadeOut();
		          		jq(this).removeClass('close');
		          	
		          	return false;
		          	}
	          	}); //end click


//Digital Library table of contents links

if (/view\.cgi/.test(self.location.href)) {

    var hash = location.hash;
    if (hash == '') {
	if (imageno && imageno != '') {
	    location.hash = imageno;
	}
    }
}


// annotation modal (available on ALL w/pc of the text, and on all tabs)
jq(document.body).on('click', '.linetext,.addnote', function (e) {

var my_modal = `
<div id="newNote" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="newModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="newModalLabel">Add a note or query</h4>
      </div>
      <div class="modal-body">
<form id="newNoteForm">
<h5 style="display: inline-block; padding-right:8px;"> Type </h5>
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-default btn-sm active">
    <input class="form-control" type="radio" name="sort" autocomplete="off" checked="checked" value="annotation"/> note
  </label>
  <label class="btn btn-default btn-sm">
    <input class="form-control" type="radio" name="sort" autocomplete="off" value="query"/> query
  </label>
</div>
<h5 style="display:inline-block; padding: 0 10px 0 20px;"> Context </h5>
Line&nbsp; 
<select name="fromline" class="form-control" style="width:100px; display:inline-block;">`;
var current_line = (jq(e.target).parent().attr("id")?jq(e.target).parent().attr("id"):jq(e.target).parent().parent().parent().prev().attr("id"));
if (jq.isNumeric(current_line) == false) {
    current_line = current_line.substring(1);
}
var i, j;
for (i = 0; i <= lines_in; i++) {
    if (i == 0) { j = "Title/Paratext"; }
    else { j = i; }
    if (current_line == i) {
	my_modal += '<option value="'+i+'" selected="selected">'+j+'</option>';
    } else {
	my_modal += '<option value="'+i+'">'+j+'</option>';
    }
}
my_modal += `</select> &nbsp;to&nbsp;  
<select name="toline" class="form-control" style="width:100px; display:inline-block;">`;
for (i = 0; i <= lines_in; i++) {
    if (i == 0) { j = "Title/Paratext"; }
    else { j = i; }
    if (current_line == i) {
	my_modal += '<option value="'+i+'" selected="selected">'+j+'</option>';
    } else {
	my_modal += '<option value="'+i+'">'+j+'</option>';
    }
}
my_modal += '</select>';

my_modal += '\
<h5>Your <span id="contribution-type">note</span>'+
'</span></h5>'+
'<textarea style="resize:vertical;" class="form-control" name="comment" id="newNoteText" rows="4" required="required"/>'+
'<h5 style="display: inline-block; padding-right:8px;"> Sort </h5>\
<div class="btn-group" data-toggle="buttons">\
  <label class="btn btn-default btn-sm active">\
    <input class="form-control" type="radio" name="type" autocomplete="off" checked="checked" value="textual"/> textual\
  </label>\
  <label class="btn btn-default btn-sm">\
    <input class="form-control" type="radio" name="type" autocomplete="off" value="explanatory"/> explanatory\
  </label>\
</div>\
<h5 style="display:inline-block; padding: 0 10px 0 20px;"> Level </h5>\
<div class="btn-group" data-toggle="buttons">\
  <label class="btn btn-default btn-sm active">\
    <input class="form-control" type="radio" name="level" autocomplete="off" checked="checked" value="reading aid"/> reading aid\
  </label>\
  <label class="btn btn-default btn-sm">\
    <input class="form-control" type="radio" name="level" autocomplete="off" value="interpretation"/> interpretation\
  </label>\
</div>\
'+add_user(1);

    jq( "body" ).prepend(my_modal);
    jq('#newNote').modal('show');

    });

jq(document.body).on('change', '[name=sort]' , function(e) {
    if ( jq('input[name=sort]:checked', '#newNoteForm').val()=="annotation" ) {
	jq("#contribution-type").text("note");
    } else {
	jq("#contribution-type").text("query");
    }
});

jq(document.body).on('shown.bs.modal', "#newNote", function () {
    jq('#newNoteText').focus();
});

// save annotation modal form
jq(document.body).on('click', 'button#newNoteSubmit' , function(e) {
    e.preventDefault();
    var str = jq("#newNoteForm").serialize();
    d = this;
    jq(d).html("Submitting...");
    jq.ajax({
        type: 'POST',
        url: '/cgi-bin/handleCS.cgi',
        data: { 'content': str, 'file': docname, 'source': source },
        dataType: 'text',
        success: function() {
	    jq(d).html("Thank You!");
	    setTimeout(function() { jq('#newNote').modal('hide'); }, 500);
        },
        error: function() {
            jq(d).html("Error - Please try again!");
        }
    });
});


// save annotation modal form
jq(document.body).on('click', 'button#newTransSubmit' , function(e) {
	e.preventDefault();

	// new JSON-ified form submission
	var serialized = jq("#newNoteForm").serializeArray(), obj = {};
	//	var serialized = JSON.parse(JSON.stringify(jq("#newNoteForm").serializeArray())), obj = {}; 
	// build key-values                                                           
	jq.each(serialized, function() {
		obj[this.name] = this.value;
	    });
       	obj['file'] = docname;
	//	obj['source'] = source;
	obj['results'] = results;
	obj['ref'] = ref;
	obj['time'] = Math.floor(Date.now() / 1000);
	
	d = this;
	jq(d).html("Submitting...");
	jq.ajax({
		type: 'POST',
		    url: '/cgi-bin/handleCS.cgi',
		    data: { "data": JSON.stringify(obj) },
		    dataType: 'text',
		    success: function() {
		    jq(d).html("Thank You!");
		    setTimeout(function() {
			    jq('#newNote').modal('hide');
			}, 1000);
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    jq(d).html("Error - Please try again!");
		    console.log('jqXHR:');
		    console.log(jqXHR);
		    console.log('textStatus:');
		    console.log(textStatus);
		    console.log('errorThrown:');
		    console.log(errorThrown);
		}
	    });
	});


// line/word reference
function reference (token) {
    if (token.hasClass("w")) {
        var id = document.getElementById(token.attr("id"));
        var words = l[token.closest(".line").attr("id")].content;
        words = jQuery.grep(words, function( n ) {
            return ( n != "c" && n != "cs" && o[n].class != "pc" );
        });
        return token.closest(".l").prev().text().trim()+"."+
            (1+words.indexOf(id.id))+" "+
            token.text()+"] ";
    } else {
        return token.closest(".l").prev().text().trim()+". "+
            token.text()+"] ";
    }
}


jq(document.body).on('hidden.bs.modal', '#newNote', function(e) { 
    $(this).remove();
});


// Elegy Translations project
var stn = []; // for rejected stanzas
// Eton MS l. 100 stanza
stn[0] = `
<div style="display:none;" id="tgaen-stn33" class="lg lgvspace" data-id="stn33" data-corresp="#stn33">
    <div class="line"><span class="ln"></span><span class="l">
        \'Him have we seen the Green-wood Side along,
    </span></div>
    <div class="line"><span class="ln"></span><span class="l">
        \'While o\'er the Heath we hied, our Labours done,
    </span></div>
    <div class="line"><span class="ln"></span><span class="l">
        \'Oft as the Woodlark piped her farewell Song
    </span></div>
    <div class="line"><span class="ln"></span><span class="l">
        \'With whistful Eyes pursue the setting Sun.
    </span></div>
</div>
`;
// Eton/Pembroke MSS l. 117 stanza
stn[1] = `
<div style="display:none;" id="tgaen-stn34" class="lg lgvspace" data-id="stn34" data-corresp="#stn34">
    <div class="line"><span class="ln"></span><span class="l">
        There scatter\'d oft, the earliest of the Year,
    </span></div>
    <div class="line"><span class="ln"></span><span class="l">
        By Hands unseen, are show\'rs of Violets found;
    </span></div>
    <div class="line"><span class="ln"></span><span class="l">
	The Red-breast loves to build and warble there,
    </span></div>
    <div class="line"><span class="ln"></span><span class="l">
	And little Footsteps lightly print the Ground.
    </span></div>
</div>
`;

// load text
jq(function(){
	jq('.trans_sel').on('change', function () {
		var d = this;
		var file = jq(d).val(); // get selected value
		if (file) { // require a text
		    jq(d).parent().parent().parent().find(".panel-body").load( file +" section.main", function() {
			    // make texts draggable for maximum vertical alignment flexibility
			    jq('.draggable').draggable({ containment:"parent",axis:"y",
					scroll:true,scrollSensitivity:200,scrollSpeed:100,
					cancel: ".w,.pc"
					});
			    setup_highlight();
			});
		    jq(d).parent().parent().parent().find(".panel-footer").load( file +" section.main div.tfooter" );
		    if ( jq(d).parent().parent().parent().hasClass("pno1") &&
			 jq( "input[name='view']:checked" ).val() == "detail"
			 ) { choiceison = true; 
			jq( ".pno4 .panel-body" ).html( "" );
		    }
		    var colno = jq(d).closest("*[data-col]").attr("data-col");
		    updateURL(file.slice(0, -6), parseInt(colno));
		}
	    });
    });

// unload text
jq(function(){
	jq('.col_rs button.close').on('click', function () {
	    jq(this).parent().parent().find(".panel-body").empty( );
	    jq(this).parent().parent().find(".panel-footer").empty( );
	    jq(this).parent().find(".trans_sel").val( "" );
	    setup_highlight();
	    var colno = jq(this).closest("*[data-col]").attr("data-col");
	    updateURL('', parseInt(colno));
	});
    });


// choose translations in detailed view
jq(function(){
	jq('.lang_sel').on('change', function () {
		var d = this;
		var lang = jq(d).val(); // get selected value
		if (lang == "all") {
		    jq( ".pno4 .panel-body div[class~='trans_stn']" ).show();
		} else {
		    jq( ".pno4 .panel-body div[class~='trans_stn']" ).hide();
		    jq( ".pno4 .panel-body div[class~='trans_stn'][data-lang='"+lang+"']" ).show();
		}
	    });
    });


// select stanza for detailed view and get equivalents
jq(document.body).on('mousedown', '*[data-id]', function () {
	var d = this;
	if (choiceison) {
	    choiceison = false;
	    jq( '.pno1 .text *[data-id],.pno1 .text h1,.pno1 .text .head-stanza,.pno1 .text .head-part,.pno1 .text .trailer,.pno1 .text .signed,.pno1 .text .epigraph' ).hide();
	    jq( '.pno1 .text *[data-id="'+jq(d).attr("data-id")+'"]' ).show();
	    jq( ".pno4 .panel-body" ).html( "" );

	    trans_all.sort(function(a, b) {
		    var alpha_order = jq( a ).attr( 'data-scit' ).split( '(' )[1].substring( 0, 3 ).localeCompare( jq( b ).attr( 'data-scit' ).split( '(' )[1].substring( 0, 3 ) ); 
		    var date_order = parseInt( jq( a ).attr( 'data-docname' ).substr(jq( a ).attr( 'data-docname' ).length - 4) ) - parseInt( jq( b ).attr( 'data-docname' ).substr(jq( b ).attr( 'data-docname' ).length - 4) );
		    return alpha_order || date_order;
		});
	    for (var i = 0; i < trans_all.length; i++) {
		if ( jq( trans_all[i] ).attr( "data-docname" ) == jq( d ).closest( "section" ).attr( "data-docname" ) ) { continue; }
		var matched = [], unique = [], equivalents = [];
		if ( jq( d ).attr( "data-corresp" ) ) {
		    equivalents = jq( d ).attr( "data-corresp" ).split( " " );
		}
		jq.each( equivalents, function( index, item ) {
			jq.each( jq( trans_all[i] ).find( "*[data-corresp]"), function( index2, item2 ) {
				if ( jq.inArray ( item, jq( item2 ).attr( "data-corresp" ).split( " " )) != -1 ) {
				    matched.push( jq( item2 ).attr( "id" ) );
				}
			    });
		    });
		jq( ".pno4 .panel-body" ).append( "<div class='trans_stn' data-id='"+jq( trans_all[i] ).attr( 'data-docname' )+"' data-lang='"+jq( trans_all[i] ).attr( 'data-lang' )+"'/>" ); 
		if (matched.length > 0) {
		    unique = matched.filter(function(itm, i, matched) { return i == matched.indexOf(itm); });
		    jq.each( unique, function( index, item ) {
			    jq( trans_all[i] ).find( " #"+item ).clone().appendTo( ".pno4 .panel-body div[data-id='"+jq( trans_all[i] ).attr( 'data-docname' )+"']" );
			});
		} else {
		    jq( ".pno4 .panel-body div[data-id='"+jq( trans_all[i] ).attr( 'data-docname' )+"']" ).append( "<div>[No equivalent found.]</div>" );
		}
		jq( ".pno4 .panel-body div[data-id='"+jq( trans_all[i] ).attr( 'data-docname' )+"']" ).append( "<div class='scit'>"+jq( trans_all[i] ).attr( "data-scit" )+"<br/><span>[Load text into <a class='pre_link' data-col='2' data-file='"+jq( trans_all[i] ).attr( 'data-docname' )+"'>middle</a> or <a class='pre_link' data-col='3' data-file='"+jq( trans_all[i] ).attr( 'data-docname' )+"'>right</a> column.]</span></div><hr/>" );
	    }
	    if ( jq(d).closest( "section" ).attr( "data-lang" ) == "eng" || jq( ".pno4 .panel-body div[class~='trans_stn'][data-lang='"+jq(d).closest( "section" ).attr( "data-lang" )+"']" ).length == 0) {
		jq("select.lang_sel").val( "all" );
	    } else {
		jq("select.lang_sel").val( jq(d).closest( "section" ).attr( "data-lang" ) );
		jq( ".pno4 .panel-body div[class~='trans_stn']" ).hide();
		jq( ".pno4 .panel-body div[class~='trans_stn'][data-lang='"+jq(d).closest( "section" ).attr( "data-lang" )+"']" ).show();
	    }
	}
    });


// select stanza for detailed view
jq(document.body).on('mouseenter', '*[data-id]', function () {
	var d = this;
	if (choiceison) {
	    jq( d ).addClass("stnSelected");
	}
    }).on('mouseleave', '*[data-id]', function () {
	var d = this;
	if (choiceison) {
	    jq( d ).removeClass("stnSelected");
	}
	});

// switch views
jq( "input[name='view']" ).change( function() {
	if ( jq( "input:checked" ).val() == "full") {
	    choiceison = false;
	    jq( '.pno1 div.lg,.pno1 p' ).removeClass("stnSelected");
	    jq( '.pno1 .text *[data-id],.pno1 .text h1,.pno1 .text .head-stanza,.pno1 .text .head-part,.pno1 .text .trailer,.pno1 .text .signed,.pno1 .text .epigraph' ).show();
	    jq( '.pno4' ).hide();
	    jq( ['.pno2','.pno3']).each( function(n,i) {
		    $(i).show();
		});
	    setup_highlight();
	} else {
	    jq( ['.pno2','.pno3']).each( function(n,i) {
		    $(i).hide();
		});
	    jq( '.pno4').show().css({display: 'flex',height: 'initial'});
	    //	    if ( jq( '.pno4 .panel-body').html() == '') {
		choiceison = true;
		//	    }
	}
	//	console.log(choiceison);
    });


// highlight equivalence on stanza-level (where marked up)
jq(document.body).on('mouseenter', '*[data-id]', function () {
	var d = this;
	if (jq(d).attr('data-corresp') && !choiceison) { // get equivalence
	    var ids = jq(d).attr('data-corresp').split(' '); // e.g. "#stn1 #stn2"
	    jq.each( ids , function( index, item ) {
		    var stnnum = item.replace( /^\D+/g, '');
		    if (stnnum > 32) {    // rejected stanzas, needs @prev for location
			jq("div[id^='tgaen'][data-corresp='"+jq(d).attr('data-prev')+"']").after( stn[stnnum-33] );
			jq("div[id='tgaen-stn"+stnnum+"']").fadeIn(1500);
		    }
		    jq( "*[data-corresp~='"+item+"']" ).addClass("idsSelected");
		});
	}
    }).on('mouseleave', '*[data-id]', function () {
	var d = this;
	if (jq(d).attr('data-corresp') && !choiceison) { // get equivalence
	    var ids = jq(d).attr('data-corresp').split(' '); // e.g. "#stn1 #stn2"
	    jq.each( ids , function( index, item ) {
		    var stnnum = item.replace( /^\D+/g, '');
		    if (stnnum > 32) {
			jq("div[id='tgaen-stn"+stnnum+"']").remove();
		    }
		    jq( "*[data-corresp~='"+item+"']" ).removeClass("idsSelected");
		});
	}
    });

// make texts sortable vertically
jq( ".panel-group" ).sortable({
	connectWith: ".panel-group",
	    handle: ".panel-heading",
	    placeholder: "panel-placeholder ui-corner-all"
	    });

// pre-load texts
var texts = getParameterByName('texts');
var preloaded = [];
if (!texts || texts == '') {
    // pre-load Gray's original in first slot
    preloaded[0]="tgaen-welcc";
} else {
    preloaded=texts.split(':'); // preloaded array
}
jq.each(preloaded,function(number){
    if (preloaded[number] != '') {
	jq(".panel-group .panel").eq(number).find(".panel-body").load( preloaded[number] +".shtml section.main", function() {
	    // make texts draggable for maximum vertical alignment flexibility
	    jq('.draggable').draggable({ containment:"parent",axis:"y",
					 scroll:true,scrollSensitivity:200,scrollSpeed:100,
					 cancel: ".w,.pc"
				       });
	    setup_highlight();
	});
	jq(".panel-group .panel").eq(number).find(".panel-footer").load( preloaded[number] +".shtml section.main div.tfooter" );
	jq("select.trans_sel").eq(number).val( preloaded[number]+".shtml" );
    }
});


// pre-load texts from detailed view
jq(document.body).on('mousedown', 'a.pre_link', function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    var d = this;
    var number = parseInt(jq(d).attr("data-col"))-1;
    jq(".panel-group .panel").eq(number).find(".panel-body").load( jq(d).attr("data-file") +".shtml section.main", function() {
	// make texts draggable for maximum vertical alignment flexibility
	jq('.draggable').draggable({ containment:"parent",axis:"y",
				     scroll:true,scrollSensitivity:200,scrollSpeed:100,
				     cancel: ".w,.pc"
				   });
    });
    jq(".panel-group .panel").eq(number).find(".panel-footer").load( jq(d).attr("data-file") +".shtml section.main div.tfooter" );
    jq("select.trans_sel").eq(number).val( jq(d).attr("data-file") +".shtml" );
    updateURL( jq(d).attr("data-file"), number+1);
    jq(d).parent().replaceWith("[Done.  Switch to full-text view at any time to resume analysis.]");
});

    
    init_translations();

}); // end ready

var choiceison = false, colsel = 0;

// update URL
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function updateURL (newtext, part) {
    var url = '/texts/poems/elegy/translations.shtml?texts=';
    var texts = getParameterByName('texts');
    var current = texts.split(':');
    current[part-1] = newtext;
    url += current[0]+":"+current[1]+":"+current[2];
    History.replaceState(null,null,url);
}

// IC user details
function add_user (type) {
var user_details =
'<h5 style="padding-top:5px;">Your details (if you wish to be acknowledged)</h5>'+
'<div class="input-group input-group-sm">\
<span class="input-group-addon" id="basic-addon1">Name</span>\
<input required="required" name="name" type="text" class="form-control" placeholder="real name" aria-describedby="basic-addon1">\
</div>\
<div class="input-group input-group-sm">\
<span class="input-group-addon" id="basic-addon2">E-mail</span>\
<input required="required" name="email" type="text" class="form-control" placeholder="valid e-mail address" aria-describedby="basic-addon2">\
</div>\
<div class="input-group input-group-sm">\
<span class="input-group-addon" id="basic-addon3">Affiliation</span>\
<input name="affiliation" type="text" class="form-control" placeholder="institution (optional)" aria-describedby="basic-addon3">\
</div>\
<div class="input-group input-group-sm">\
<span class="input-group-addon" id="basic-addon4">Website</span>\
<input name="url" type="text" class="form-control" placeholder="Web address (optional)" aria-describedby="basic-addon4">\
</div>\
</form></div>\
<div class="modal-footer">\
<p class="small"><em>Please note:</em> this contribution will be submitted to the editor in the first instance for review.  Once peer reviewed, the contribution will be made publicly available under a <a class="external" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons BY-NC-SA License</a>.</p>\
<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\
<button type="button" class="btn" style="color:#fff; background-color:#79211F;" id="'+
    ((type==1)?"newNoteSubmit":"newTransSubmit")+
'" >Submit</button> \
</div>\
</div>\
</div>\
</div>\
';
return user_details;
}

var selectedElements = [];

function init_translations() {
    var done = {};

    if (typeof trans !== 'undefined') {
    var trans_menu = `<div id="trans_menu"><div class="radio">
  <label>
    <input type="radio" name="transRadio" id="transRadio1" value="done">
    Highlight translated passages
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="transRadio" id="transRadio2" value="todo">
    Highlight passages yet to be translated
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="transRadio" id="transRadio3" value="bytrans">
	Select translations by this contributor:
  </label>
</div>
	<select class="form-control" id="bytrans" disabled>`;
    var bytrans = [];
    for (var i = 0; i < trans.length; i++) {
        if (done[trans[i]["e-mail"]] != 1) {
            done[trans[i]["e-mail"]] = 1;
            bytrans.push((trans[i].name+":"+trans[i]["e-mail"]));
        }
    }
    bytrans.sort(); // sort alphabetically by name                                                   
    trans_menu += '<option value="all">All</option>';
    for (var i = 0; i < bytrans.length; i++) {
        var split = bytrans[i].split(":");
        trans_menu += '<option value="'+split[0]+":"+split[1]+'">'+split[0]+'</option>';
    }
    trans_menu += '</select></div><div id="trans_body" />';
    jq("#trans_menu").append( trans_menu );
    trans_by("all");
    } else {
        jq("#trans_menu").html(`<br/><p>Be the <b>first</b> to translate a passage!</p>
	    <p>Just click on any word (and keep the button pressed) and highlight the passage you want to translate.  When you release the button, just fill in the form and submit it.</p>
            <p><b>Thank you</b> for your contribution!</p>`);
    }
}

jq(document.body).on('change', 'input[name="transRadio"]', function () {
	jq(selectedElements).removeClass("trans_done");
	jq(selectedElements).removeClass("trans_todo");
	var transValue = jq("input[name='transRadio']:checked").val();
	if (transValue == "bytrans") {
	    jq("select[id='bytrans']").removeAttr("disabled");
	    trans_by(jq("select[id='bytrans']").val());
	} else {
	    if (!(jq("select[id='bytrans']").attr("disabled"))) {
		jq("select[id='bytrans']").attr("disabled","disabled");
	    }
	    if (transValue == "done") { trans_done("all"); }
	    else if (transValue == "todo") { trans_todo(); }
	    trans_by("all");
	}
    });

jq(document.body).on('change', 'select[id="bytrans"]', function () {
	jq(selectedElements).removeClass("trans_done");
	jq(selectedElements).removeClass("trans_todo");
	trans_by( jq("select[id='bytrans']" ).val());
    });

function trans_by (translator) {
    var translations, results = [];
    var split = translator.split(":");
    if (translator == "all") {
	//      trans_done("all");       
        translations = "<h1>All available translations</h1>";
        for (var i = 0; i < trans.length; i++) {
            results.push(trans[i]);
        }
    } else {
	//      trans_done(split[1]);                                                                 
        translations = "<h1>All translations by "+split[0]+"</h1>";
        for (var i = 0; i < trans.length; i++) {
            if (trans[i]["e-mail"] == split[1]) {
                results.push(trans[i]);
            }
        }
    }
    results.sort(function(a, b) { // sort results by first ocurrence of id in the text      
	    return compareStrings(a.results[0], b.results[0]);
	});
    translations += trans_display(results);
    jq("#trans_body").html( translations );
}

function compareStrings(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function trans_display (json) {
    var result = "";
    result += "<ul>";
    for (var i = 0; i < json.length; i++) {
        var refs = "", refa = [];
        result += "<li>";
        if (json[i].results.length > 2) {
            refa = json[i].ref.split(" ");
            refs = refa[0]+" ... "+refa[refa.length - 1];
        } else {
            refs = json[i].ref;
        }
        result += '<a class="visualize_ids" data-ids="'+json[i]["results"]+'" href="#'+json[i]["results"][0]+'">'+refs+"</a>]<br />";
        result += '"'+json[i]["comment"]+'" ('+json[i]["note"]+')<br/>';
        result += "Contributed on "+timeConverter(json[i]['time'])+" by <a href='mailto:"+json[i]['e-mail']+
            "'>"+json[i]['name']+"</a> ("+json[i]['affiliation']+").";// ["+json[i]['website']+"].";
        result += "</li>";
    }
    result += "</ul>";
    return result;
}

function jqid( myid ) {
    return "#" + myid.replace( /(:|\.|\[|\]|,|=)/g, "\\$1" );
}

function trans_done (translator) {
    var highlighted = [];
    for (var i = 0; i < trans.length; i++) {
        if (translator == trans[i]["e-mail"] || translator == "all") {
            highlighted = highlighted.concat( trans[i].results );
        }
    }
    for (var i = 0; i < highlighted.length; i++) {
        jq( jqid( highlighted[i] ) ).addClass("trans_done");
    }
}

function trans_todo () {
    var highlighted = [];
    for (var i = 0; i < trans.length; i++) {
        highlighted = highlighted.concat( trans[i].results );
    }
    highlighted = ids.filter( function ( el ) {
	    return highlighted.indexOf( el ) < 0;
	});
    for (var i = 0; i < highlighted.length; i++) {
        jq( jqid( highlighted[i] ) ).addClass("trans_todo");
    }
}


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

jq(document.body).on('shown.bs.modal', "#newNote,#newIC", function () {
	jq('#newNoteText').focus();
    });

var results = [], ref = "", docname = "";
(typeof exports !== "undefined" && exports !== null ? exports : this).setup_highlight = function() {
    var all_colors, all_facets, color, colormap, current_facet_num, currently_marking, facet, facet_num, get_word_number, i, j, len, len1, mark, storage, marking_start, marking_end;
    ids = [];
    jq(document.body).find('div[data-col] .w:not(.note .w,.fw .w),div[data-col] .pc:not(.note .pc,.fw .pc)').each(function(n,i){
	    selectedElements.push($(i));
	});
    for (var i = 0; i < selectedElements.length; i++) {
	ids.push ( jq(selectedElements[i]).attr("id") );
    }

    // This code tracks the marking.  Initially not in marking mode.                           
    currently_marking = false;

    highlight = function(elt_start, elt_end) {
       	var index = ids.indexOf(elt_start);
       	var index2 = ids.indexOf(elt_end);
	if (index <= index2) {
	    jq( "span.sstart,span.send" ).remove();
	    jq( "<span class='glyphicon glyphicon-chevron-right sstart'></span>" ).insertBefore( "#"+ elt_start );
	    jq( "<span class='glyphicon glyphicon-chevron-left send'></span>" ).insertAfter( "#"+ elt_end );
	}
    };

    //    highlight = function(elt_start, elt_end) {
    //	var index = ids.indexOf(elt_start);
    //	var index2 = ids.indexOf(elt_end);
    //	jq(selectedElements).removeClass("idsSelected");
    //	if (index > index2) {
    //	    for (var i = index2; i <= index; i++) {
    //		jq(selectedElements[i]).addClass("idsSelected");
    //	    }
    //	} else {
    //	    for (var i = index; i <= index2; i++) {
    //		jq(selectedElements[i]).addClass("idsSelected");
    //	    }
    //	}
    //    };

    // CSS selector for spans class=word. When mouse is clicked, start marking mode in the current color          
    jq(document.body).on('mousedown', '.w:not(.note .w,.fw .w),.pc:not(.note .pc, .fw .pc)', function (event) {
	    if ( !choiceison && !(jq(this).closest("div[class~='trans_stn']").length > 0) ) {
		event.stopImmediatePropagation();
		event.preventDefault();
		currently_marking = true;
		marking_start = jq(this).attr("id");
		marking_end = jq(this).attr("id");
		highlight (marking_start,marking_end);
		docname = jq(this).closest("section").attr("data-docname");
		colsel = parseInt( jq(this).closest("*[data-col]").attr("data-col") );
	    }
	});

    // Only marks text when the mouse is down                                     
    jq(document.body).on('mouseover', '.w:not(.note .w,.fw .w),.pc:not(.note .pc, .fw .pc)', function (e) {
	    //	    e.preventDefault();
	    if (currently_marking && parseInt( jq(this).closest("*[data-col]").attr("data-col") ) == colsel ) {
		var index = ids.indexOf(marking_start);
		var index2 = ids.indexOf( jq(this).attr("id") );
		if (index <= index2) {
		    marking_end = jq(this).attr("id");
		    highlight (marking_start,marking_end);
		}
	    }
	});

    // Stop marking when mouse is released
    jq(document.body).on('mouseup', function (e) {
	    if (currently_marking) {
		results = [];
		ref="";
		currently_marking = false;
		var index = ids.indexOf(marking_start);
		var index2 = ids.indexOf(marking_end);
		//		if (index > index2) {
		//		    for (var i = index2; i <= index; i++) {
		//			results.push (jq(selectedElements[i]).attr("id"));
		//		    }
		//		}
		if (index <= index2) {
		    for (var i = index; i <= index2; i++) {
			results.push (jq(selectedElements[i]).attr("id"));
		    }
		}
		for (var i = 0; i < results.length; i++) {
		    ref += jq('div[data-col] [id="'+results[i]+'"]').text()+" ";
		}
		ref = ref.slice(0,-1);

		jq( "body" ).prepend('\
<div id="newNote" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="newModalLabel">\
  <div class="modal-dialog" role="document">\
    <div class="modal-content">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
        <h4 class="modal-title" id="newModalLabel">Add a translation</h4>\
      </div>\
      <div class="modal-body">\
<form id="newNoteForm">\
<h5>Your translation of <span id="contribution-context">"'+ref+
'"</span></h5><textarea style="resize:vertical;" class="form-control" name="comment" id="newNoteText" rows="4" required="required"/><h5>Note on the translation (optional)</h5>\
<textarea style="resize:vertical;" class="form-control" name="note" id="newNoteNote" rows="2"/>'+add_user(2)
);
		jq('#newNote').modal('show');

		jq( "span.sstart,span.send" ).remove();
		//		jq(selectedElements).removeClass("idsSelected");
	    }
	});

};

jq('.note_link').on('click', function(e) {e.preventDefault(); return true;});

