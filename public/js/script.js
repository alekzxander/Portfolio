window.onscroll = () => { scrollControll() };
const tools = document.querySelector('.tools');
const packages = document.querySelector('.packages');
const mask = document.querySelector('.mask-circle');
const test = document.querySelector('.btn-primary');
const facebook = document.querySelector('.facebook');
const twitter = document.querySelector('.twitter');
const linkedin = document.querySelector('.linkedin');
const smug = document.querySelector('.smug');

function scrollControll() {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 2200) {
    facebook.classList.add('move-icon');
    twitter.classList.add('move-icon');
    linkedin.classList.add('move-icon');
    smug.classList.add('down');
  } else if (window.pageYOffset >= 600) {
    tools.classList.add('slide-left');
    packages.classList.add('slide-right');
    mask.classList.add('slide-bot');
  } else {
    tools.classList.remove('slide-left');
    packages.classList.remove('slide-right');
    mask.classList.remove('slide-bot');


  }
}
$(function () {

  setTimeout(function () {
    $('.text-animate').removeClass('hidden');
    $('.fadein-text').fadeIn(1500);


  }, 500)
  // Change this to the correct selector.

  $('nav#myNav-fixed').midnight();
  const scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // Active link switching
  $(window).scroll(function () {
    const scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      const sectionOffset = $(this.hash).offset()

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
});

$(".progress-bar").each(function () {
  each_bar_width = $(this).attr('aria-valuenow');
  $(this).width(each_bar_width + '%');
});


