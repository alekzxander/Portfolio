
$(function () {

    setTimeout(function () {
        $('.text-animate').removeClass('hidden');
        $('.fadein-text').fadeIn(500);
  
        
    }, 500)
    // Change this to the correct selector.
   
    $('nav#myNav-fixed').midnight();
    var scrollLink = $('.scroll');

    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset()
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
})

