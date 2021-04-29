// Dark mode

const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 500)
}

jQuery(document).ready(function ($) {
   // To top
let topBtn = $('#toTop');
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 30) {
    topBtn.addClass('show');
  } else {
    topBtn.removeClass('show');

  }
});
    // Smooth scroll
$("[data-scroll]").on('click', function (event) {
  event.preventDefault();

  let elemID = $(this).data('scroll');
  let elemOffSet = $(elemID).offset().top;

  $('html, body').animate({
    scrollTop: elemOffSet - 88
  });

});
    
    
});