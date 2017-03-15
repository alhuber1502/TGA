jq(document).ready(function() {

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

    jq('#main h2,#panel_ft div.page,ul.ead_work h3,h3[id="earlyYears"],h3[id="middleYears"],h3[id="laterYears"],dl.glossary dt').prepend('<a href="#top" class="backtotop noborder" style="float:right;"><img src="/images/backtotop.png" alt="back to top" title="Back to Top"/></a>');

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
		
	    } else if (anchor == 'panel_record') {
		
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
			      console.log('open line is %s ', openLine);
			       
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
			      console.log('open line is %s ', openLine);
			       
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

//    if (e.target.nodeName == "SUP") { e.preventDefault(); return true; } // prevent modal on footnotes
//    if (e.target.parentNode.href) { return true; } // prevent modal on clicking on internal links a.link_ref
//    var isWord = false, ref = '';
//    if ( $(this).hasClass("w") || $(this).hasClass("pc") ) { isWord = true; }
//    if (isWord) {
//	ref = o[ $(e.target).attr("id") ].tok;
//	if ($(e.target).closest(".line").attr("id")) {
//	    ref = reference( $(e.target) );
//	    ref += ' ('+currentline( $(e.target).closest(".line").attr("id") )+')';
//	} else {
//	    ref += ' (paratext)] ';
//	}
//    } else {
//	if ($(e.target).closest(".line").attr("id")) {
//	    ref += currentline( $(e.target).closest(".line").attr("id") );
//	} else {
//	    ref += 'this paratext';
//	}
//    }

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

//<div class="btn-group" data-toggle="buttons">\
//  <label class="btn btn-default btn-sm">\
//    <input type="radio" name="obj" autocomplete="off" class="form-control" value="word: '+jq(e.target).attr("id")+'"/> word\
//  </label>\
//  <label class="btn btn-default btn-sm active">\
//    <input type="radio" name="obj" autocomplete="off" class="form-control" checked="checked" value="'+(jq(e.target).parent().attr("id")?jq(e.target).parent().attr("id"):'line: '+jq(e.target).attr("id"))+'"> line(s) \
//  </label>\
//  <label class="btn btn-default btn-sm">\
//    <input class="form-control" type="radio" name="obj" autocomplete="off" value="stanza: '+jq(e.target).parent().attr("id")+'"> stanza/paragraph\
//  </label>\
//  <label class="btn btn-default btn-sm">\
//    <input class="form-control" type="radio" name="obj" autocomplete="off" value="whole text: '+jq(e.target).parent().attr("id")+'"/> whole text\
//  </label>\
//</div>\

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
'+add_user();

    jq( "body" ).prepend(my_modal);
    jq('#newNote').modal('show');

//    if ( isWord ) { // prevent double firing of modal
//	e.stopPropagation();
//    }

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


// IC user details
function add_user () {
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
<button type="button" class="btn btn-primary" id="newNoteSubmit" >Submit</button>\
</div>\
</div>\
</div>\
</div>\
';
return user_details;
}

jq(document.body).on('hidden.bs.modal', '#newNote', function(e) { 
    $(this).remove();
});


}); // end ready
