$(document).ready(function () {
  $(".findingAid").click(function () {
    $this = $(this);

    $(".panel").hide();
    $(".tabs a.active").removeClass("active");
    $('a[href="#overview"]').addClass("active").blur();

    $("#overview").fadeIn(250);

    location.hash = $this.attr("href");

    //    $.scrollTo( $($this.attr('href')), {duration:5000} );
    return false;
  }); //end click
}); // end ready
