$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu-open').toggleClass('menu-open--active');
  });

  $('.questions__choice-btn').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice').addClass('questions__choice--disactive');
    $('.questions__choice--2').removeClass('questions__choice--disactive');
    $('.questions__choice--2').addClass('questions__choice--2--active');
  });

  $('.questions__choice-btn--2').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--2').addClass('questions__choice--disactive');
    $('.questions__choice--2').removeClass('questions__choice--2--active');
    $('.questions__choice--3').addClass('questions__choice--3--active');
    $('.questions__choice--3').removeClass('questions__choice--disactive');
  });

  $('.questions__choice-btn--3').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--3').addClass('questions__choice--disactive');
    $('.questions__choice--3').removeClass('questions__choice--3--active');
    $('.questions__choice--4').addClass('questions__choice--4--active');
    $('.questions__choice--4').removeClass('questions__choice--disactive');
  });

  $('.questions__choice-btn--4').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--4').addClass('questions__choice--disactive');
    $('.questions__choice--4').removeClass('questions__choice--4--active');
    $('.questions__choice--5').addClass('questions__choice--5--active');
    $('.questions__choice--5').removeClass('questions__choice--disactive');
  });

  $('.questions__choice-btn--5').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--5').addClass('questions__choice--disactive');
    $('.questions__choice--5').removeClass('questions__choice--5--active');
    $('.questions__choice--6').addClass('questions__choice--6--active');
    $('.questions__choice--6').removeClass('questions__choice--disactive');
    $('.questions__test').addClass('questions__test--disactive');
  });

  $('.questions__choice-btn--6').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--6').addClass('questions__choice--disactive');
    $('.questions__choice--6').removeClass('questions__choice--6--active');
    $('.questions__choice').addClass('questions__choice--active');
    $('.questions__choice').removeClass('questions__choice--disactive');
    $('.questions').addClass('questions--disactive');
    $('.find__inner').addClass('find__inner--mb150');
  });

  $('.questions__btn-back').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--2').addClass('questions__choice--disactive');
    $('.questions__choice--2').removeClass('questions__choice--2--active');
    $('.questions__choice').addClass('questions__choice--active');
    $('.questions__choice').removeClass('questions__choice--disactive');
  });

  $('.questions__btn-back-2').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--3').addClass('questions__choice--disactive');
    $('.questions__choice--3').removeClass('questions__choice--3--active');
    $('.questions__choice--2').addClass('questions__choice--active');
    $('.questions__choice--2').removeClass('questions__choice--disactive');
  });

  $('.questions__btn-back-3').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--4').addClass('questions__choice--disactive');
    $('.questions__choice--4').removeClass('questions__choice--4--active');
    $('.questions__choice--3').addClass('questions__choice--active');
    $('.questions__choice--3').removeClass('questions__choice--disactive');
  });

  $('.questions__btn-back-4').on('click', function (e) {
    e.preventDefault();
    $('.questions__choice--5').addClass('questions__choice--disactive');
    $('.questions__choice--5').removeClass('questions__choice--5--active');
    $('.questions__choice--4').addClass('questions__choice--active');
    $('.questions__choice--4').removeClass('questions__choice--disactive');
  });


  $('.dog-cat__btn').on('click', function () {
    $('.dog-cat__btn-box').removeClass('dog-cat__btn-box--disactive');
    $('.dog-cat__btn-box').addClass('dog-cat__btn-box--disactive');
    $('.dog-cat__btn-box-2').removeClass('dog-cat__btn-box--disactive');
    $('.dog-cat__dog').addClass('dog-cat--disactive');
    $('.dog-cat__cat').removeClass('dog-cat--disactive');
  });

  $('.dog-cat__btn-2').on('click', function () {
    $('.dog-cat__btn-box-2').removeClass('dog-cat__btn-box--disactive');
    $('.dog-cat__btn-box-2').addClass('dog-cat__btn-box--disactive');
    $('.dog-cat__btn-box').removeClass('dog-cat__btn-box--disactive');
    $('.dog-cat__cat').addClass('dog-cat--disactive');
    $('.dog-cat__dog').removeClass('dog-cat--disactive');
  });


  $('.dog-cat-dog__slick').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });

  $('.dog-cat-cat__slick').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });


  $('.spa__top-btn').on('click', function () {
    $('.spa').addClass('spa--disactive');
    $('.spa-cat').removeClass('spa--disactive');
  });

  $('.spa__top-btn-2').on('click', function () {
    $('.spa-cat').addClass('spa--disactive');
    $('.spa').removeClass('spa--disactive');
  });


  $('.masters__item-rateyo').rateYo({
    rating: 4,
    spacing: "5px",
    starWidth: '15px',
    normalFill: "#A0A0A0",
    ratedFill: "#FFD232",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"> <g id="surface1"> <path d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 "/></g></svg>'
  });


  $('.masters__slick').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });


  $('.before__inner-slick').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    speed: 500,
    fade: true,
  });

  $('.before__slick').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
  });


  $('.review__inner-item-top-star').rateYo({
    rating: 5,
    spacing: "5px",
    starWidth: '11px',
    normalFill: "#FFD232",
    ratedFill: "#FFD232",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"> <g id="surface1"> <path d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 "/></g></svg>'
  });

  $('.review__slick').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true,
  });


  $('.header__content-right-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next">1</button>',
    fade: true,
  });


  $('.btn-applic').on('click', function (e) {
    e.preventDefault();
    $('.application').removeClass('application--disactive');
  });
  $('.application__btn-close').on('click', function (e) {
    e.preventDefault();
    $('.application').addClass('application--disactive');
  });
  $('.btn-application').on('click', function (e) {
    e.preventDefault();
    $('.thanks').removeClass('thanks--disactive');
    $('.application').addClass('application--disactive');
    $('.btn-applic').addClass('btn-applic--disactive');
    $('.btn-applic').removeClass('btn-gold');
    $('.btn-applic--disactive').attr("disabled", "disabled");
  });
  $('.thanks__btn').on('click', function (e) {
    e.preventDefault();
    $('.thanks').addClass('thanks--disactive');
  });
  $('.thanks__btn-close').on('click', function (e) {
    e.preventDefault();
    $('.thanks').addClass('thanks--disactive');
  });


  $('.review__btn').on('click', function (e) {
    e.preventDefault();
    $('.review-popap').removeClass('review-popap--disactive');
  });
  $('.review-popap__btn-close').on('click', function (e) {
    e.preventDefault();
    $('.review-popap').addClass('review-popap--disactive');
  });
  $('.btn-review').on('click', function (e) {
    e.preventDefault();
    $('.thanks-review').removeClass('thanks-review--disactive');
    $('.review-popap').addClass('review-popap--disactive');
    $('.review__btn').addClass('review__btn--disactive');
    $('.review__btn').removeClass('btn-gold');
    $('.review__btn--disactive').attr("disabled", "disabled");
  });
  $('.thanks__btn').on('click', function (e) {
    e.preventDefault();
    $('.thanks-review').addClass('thanks-review--disactive');
  });
  $('.thanks__btn-close').on('click', function (e) {
    e.preventDefault();
    $('.thanks-review').addClass('thanks-review--disactive');
  });


  $('.review-popap__star').rateYo({
    rating: 4,
    spacing: "5px",
    starWidth: '11px',
    fullStar: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"> <g id="surface1"> <path d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 "/></g></svg>'
  });


  $('.price-questions__button-1').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-1').addClass('price-questions__item--disactive');
    $('.price-questions__item-2').removeClass('price-questions__item--disactive');
  });
  $('.price-questions__button-2').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-2').addClass('price-questions__item--disactive');
    $('.price-questions__item-3').removeClass('price-questions__item--disactive');
  });
  $('.price-questions__button-3').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-3').addClass('price-questions__item--disactive');
    $('.price-questions__item-4').removeClass('price-questions__item--disactive');
  });
  $('.price-questions__button-4').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-4').addClass('price-questions__item--disactive');
    $('.price-questions__item-5').removeClass('price-questions__item--disactive');
  });
  $('.price-questions__button-5').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-5').addClass('price-questions__item--disactive');
    $('.questions__choice--6').removeClass('price-questions__item--disactive');
  });
  $('.questions__choice-btn--6').on('click', function (e) {
    e.preventDefault();
    $('.price-questions').addClass('price-questions--disactive');
  });

  $('.price-questions__btn-back-1').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-1').removeClass('price-questions__item--disactive');
    $('.price-questions__item-2').addClass('price-questions__item--disactive');
  });
  $('.price-questions__btn-back-2').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-2').removeClass('price-questions__item--disactive');
    $('.price-questions__item-3').addClass('price-questions__item--disactive');
  });
  $('.price-questions__btn-back-3').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-3').removeClass('price-questions__item--disactive');
    $('.price-questions__item-4').addClass('price-questions__item--disactive');
  });
  $('.price-questions__btn-back-4').on('click', function (e) {
    e.preventDefault();
    $('.price-questions__item-4').removeClass('price-questions__item--disactive');
    $('.price-questions__item-5').addClass('price-questions__item--disactive');
  });



  $('.promotion__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

});




const reg = document.registration;
function change_Status() {
  reg.start.disabled = (reg.name.value && reg.tel.value && reg.check.checked) ? false : true;
}
change_Status();


const accordeon = document.querySelector('.specialist__inner-content');
const accordeonTitles = accordeon.querySelectorAll('.specialist__inner-content-item-btn');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {

    const currentText = accordeonTitle.parentElement.querySelector('.specialist__inner-content-item-text');

    accordeonTitle.classList.toggle('specialist__inner-content-item-btn--active');
    currentText.classList.toggle('specialist__inner-content-item-text--visible');

    if (currentText.classList.contains('specialist__inner-content-item-text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    }
    else {
      currentText.style.maxHeight = null
    }

  });
});