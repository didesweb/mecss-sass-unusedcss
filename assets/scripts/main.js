(function($) {




  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.navbar').toggleClass('open');
  });
  $('#btn-call-form-sem').click(function(){
    $("html, body").animate({ scrollTop: 0 }, "fast");
    setTimeout(function () {
     $("._x71953552 input").focus();
    }, 500);
  });


    $(document).on("click", '.icon-search-form', function () {
      console.log('clic');
      $('#searchsubmit').trigger( "click" );
    });




    // End header nav scripts


  
})(jQuery);