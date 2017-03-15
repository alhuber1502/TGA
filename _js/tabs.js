$(document).ready(function() {

$(function() {
			$( "#tabbedPanels" ).tabs({
				cookie: {
					// store cookie for a day, without, it would be a session cookie
					expires: 1
				}
			});
		});


    $(function() {



       var anchor = window.location.href.split('#')[1];
       console.log('anchor: %s', anchor);

	   	    if (anchor != '') {

	   	          var tabToSelect = $('#tabbedPanels').find('[id="' + anchor + '"]').closest('.tab').attr('id');


	   	    console.log('tab to select: %s', tabToSelect);



	   	          $('#tabbedPanels').tabs('select',tabToSelect);
	   	          
	   	          


					
	       }
	  });
	  
	  
$("ul.tabs a").click(function(){
 var $this = $(this);
            
                        document.location.hash=$this.attr("href");
            
            return false;
    });

});
