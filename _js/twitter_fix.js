$(document).ready(function() {
    twitterCheck = setInterval(function() {
        var twitterFrame = $("#twitter-widget-0"); 
        var twitterTimelineHeader = twitterFrame.contents().find(".timeline-Header-title");
        var twitterTimelineHead = twitterFrame.contents().find(".timeline-Header");
        var twitterTimelineFoot = twitterFrame.contents().find(".timeline-Footer a");
        var twitterTimelineAuthor = twitterFrame.contents().find(".TweetAuthor-name");
        var twitterTimelineText = twitterFrame.contents().find(".timeline-Tweet-text");
        var twitterTimelineTextLinks = twitterFrame.contents().find(".timeline-Tweet-text a");
	if( twitterFrame.length && twitterTimelineHeader.length) {
	    twitterFrame.attr("style","width:100%;");
            twitterTimelineHead.attr("style","display:none;");
<!--            twitterTimelineHead.attr("style","padding:5px 0;"); -->
            twitterTimelineFoot.attr("style","color: #8C001A;");
            twitterTimelineTextLinks.attr("style","color: #8C001A !important;");
            twitterTimelineAuthor.attr("style","font-weight:normal;");
            twitterTimelineText.attr("style","font-size: 14px; line-height: 20px; font-family: Lato,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;");
            clearInterval(twitterCheck);
        }
    }, 100);
});
