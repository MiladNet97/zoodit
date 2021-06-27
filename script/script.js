/*===== Preloader =====*/
$(window).on('load', function () {
  function hidePreloader() {
    let preloader = $('.preloader');
    setTimeout(function () {
      preloader.fadeOut();
      $('body').addClass('overflow__hidden');
    }, 200);
  }
  hidePreloader();
});


/*===== Typing Script =====*/
var typed = new Typed('.top__navbar-breaking-ticker', {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    ' رونمایی از مک مینی ۲۰۲۰ اپل',
    ' گوشی تاشو هواوی میت ایکس ۲ با شارژر ۶۶ واتی راهی بازار می‌شود',
    ' اسپیکر هوشمند گلکسی هوم سامسونگ همچنان در دست ساخت قرار دارد',
    ' رندرهای مطبوعاتی رسمی Moto E7 فاش شد'
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 60,

  /**
   * @property {number} startDelay time before typing starts in milliseconds
   */
  startDelay: 0,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 70,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: true,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: true,
  cursorChar: '_',
  autoInsertCss: true,

});


/*===== NavBar Script =====*/
$('.header__search-icon').click(function () {
  $('.header__search_row').toggleClass('header__search_row-is-active');
  $('.header__search-modal.modal').css('display', 'flex')
});

$('.header__account-icon').click(function () {
  $('.header__account-modal.modal').css('display', 'flex')
  $('body').css('overflow', 'hidden');
});

$('.modal__close').click(function (e) {
  e.preventDefault();
  $('.header__account-modal.modal').css('display', 'none')
  $('body').css('overflow', 'unset');
});

$('.header__search-form-close').click(function (e) {
  e.preventDefault();
  $('.header__search-modal.modal').css('display', 'none')
});

$('.newsletter__form-close').click(function (e) {
  e.preventDefault();
  $('.newsletter').css('display', 'none')
});


$(document).click(function (e) {
  if (!$(e.target).closest('.navbar__item-has-sub').length) {
    $('.navbar__subset').removeClass('navbar__subset-is-active');
  }
  if (!$(e.target).closest('.header__search , .header__search_row').length) {
    $('.header__search-modal.modal').css('display', 'none')
  }
  if (!$(e.target).closest('.header__account-icon , .modal__content').length) {
    $('.header__account-modal.modal').css('display', 'none')
    $('body').css('overflow', 'unset');
  }

  if (!$(e.target).closest('.navbar__items ,.header__menu').length) {
    $('.header__menu').removeClass('header__menu-icon-is-active');
    $('.header__menu').removeClass('change');
    $('.navbar__items').removeClass('navbar__items-is-active');
  }

});

/*===== Menu Mobile =====*/
$('.header__menu').click(function () {
  $(this).toggleClass('header__menu-icon-is-active');
  $(this).toggleClass('change');
  $('.navbar__items').toggleClass('navbar__items-is-active');
});

/*===== Login And Register Tab =====*/
function login(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

const spinner = document.querySelector('.spinner');
// every thing Related to the HTML
class HTMLUI {
  // print success message
  successLogin(className, message) {
    // creat div for show message
    const div = document.createElement('div');
    div.classList.add(className);
    div.innerText = message;

    const singIn = document.querySelector('#sing-in');

    this.loadSpinner()

    setTimeout(() => {
      spinner.style.display = 'none';
      if (!singIn.querySelector(`.${className}`)) {
        singIn.insertBefore(div, formLogin)
        setTimeout(() => {
          if (className) {
            document.querySelector(`.${className}`).remove()
          }
          document.querySelector('.header__account-modal').style.display = 'none';
          formLogin.reset()
        }, 3000);
      }
    }, 1000);


  }

  successRegister(className, message) {
    // creat div for show message
    const div = document.createElement('div');
    div.classList.add(className);
    div.innerText = message;

    const singUp = document.querySelector('#sing-up');

    this.loadSpinner()

    setTimeout(() => {
      spinner.style.display = 'none';
      if (!singUp.querySelector(`.${className}`)) {
        singUp.insertBefore(div, formRegister)
        setTimeout(() => {
          if (className) {
            document.querySelector(`.${className}`).remove()
          }
          document.querySelector('.header__account-modal').style.display = 'none';
          formRegister.reset()
        }, 30000);
      }
    }, 1000);


  }

  onError(id, message) {
    let parent = id.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.display = "block";
    messageEle.innerText = message;
    messageEle.classList.add("errorText");
    id.classList.add("errorBox");

  }

  onSuccess(id) {
    let parent = id.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.display = "none";
    messageEle.classList.remove("errorText");
    id.classList.remove("errorBox");

  }

  loadSpinner() {
    spinner.style.display = 'flex';
  }
}

const html = new HTMLUI(),
  formLogin = document.querySelector('#formLogin'),
  formRegister = document.querySelector('#formRegister'),
  usernameLogin = document.querySelector('#usernameLogin'),
  passwordLogin = document.querySelector('#passwordLogin'),
  usernameRegister = document.querySelector('#usernameRegister'),
  email = document.querySelector('#emailRegister'),
  passwordRegister = document.querySelector('#passwordRegister'),
  PasswordConfirm = document.querySelector('#PasswordConfirm');

validateLogin = () => {

  //check username is empty 
  if (usernameLogin.value.trim() === "") {
    html.onError(usernameLogin, "نام کاربری نمی تواند خالی باشد");
  } //check username is foreign characters  
  else if (!(usernameLogin.value.match(/^[A-Za-z0-9]+$/))) {
    html.onError(userName, "نام کاربری فقط می تواند شامل حروف و عدد لاتین باشد");
  } //check username length
  else if (usernameLogin.value.length < 4) {
    html.onError(usernameLogin, "نام کاربری باید حداقل شامل 4 کاراکتر باشد");
  } else {
    html.onSuccess(usernameLogin);
  }

  //check password is empty 
  if (passwordLogin.value === "") {
    html.onError(passwordLogin, "رمز عبور نمی تواند خالی باشد");
  } //check password length
  else if (passwordLogin.value.length < 4) {
    html.onError(passwordLogin, "رمز عبور باید حداقل شامل 4 کاراکتر باشد");
  } else {
    html.onSuccess(passwordLogin);
  }

  // check all input
  if (usernameLogin.value.trim() !== "" && (usernameLogin.value.match(/^[A-Za-z0-9]+$/)) && usernameLogin.value.length >= 4 && passwordLogin.value !== "" &&
    passwordLogin.value.length >= 4) {
    html.successLogin('success', 'شما با موفقیت وارد شدید')
  }

  // check input if keyup 
  formLogin.onkeyup = () => {
    //check username is empty 
    if (usernameLogin.value.trim() === "") {
      html.onError(usernameLogin, "نام کاربری نمی تواند خالی باشد");
    } //check username is foreign characters  
    else if (!(usernameLogin.value.match(/^[A-Za-z0-9]+$/))) {
      html.onError(usernameLogin, "نام کاربری فقط می تواند شامل حروف و عدد لاتین باشد");
    } //check username length
    else if (usernameLogin.value.length < 4) {
      html.onError(usernameLogin, "نام کاربری باید حداقل شامل 4 کاراکتر باشد");
    } else {
      html.onSuccess(usernameLogin);
    }

    //check password is empty 
    if (passwordLogin.value === "") {
      html.onError(passwordLogin, "رمز عبور نمی تواند خالی باشد");
    } //check password length
    else if (passwordLogin.value.length < 4) {
      html.onError(passwordLogin, "رمز عبور باید حداقل شامل 4 کاراکتر باشد");
    } else {
      html.onSuccess(passwordLogin);
    }
  }
}

validateRegister = () => {

  //check username is empty 
  if (usernameRegister.value.trim() === "") {
    html.onError(usernameRegister, "نام کاربری نمی تواند خالی باشد");
  } //check username is foreign characters  
  else if (!(usernameRegister.value.match(/^[A-Za-z0-9]+$/))) {
    html.onError(usernameRegister, "نام کاربری فقط می تواند شامل حروف و عدد لاتین باشد");
  } //check username length
  else if (usernameRegister.value.length < 4) {
    html.onError(usernameRegister, "نام کاربری باید حداقل شامل 4 کاراکتر باشد");
  } else {
    html.onSuccess(usernameRegister);
  }

  //check email is empty 
  if (email.value.trim() === "") {
    html.onError(email, "ایمیل نمی تواند خالی باشد");
  } else {
    if (!isValidEmail(email.value.trim())) {
      html.onError(email, "ایمیل اشتباه است");
    } else {
      html.onSuccess(email);
    }
  }

  //check password is empty 
  if (passwordRegister.value === "") {
    html.onError(passwordRegister, "رمز عبور نمی تواند خالی باشد");
  } //check password length
  else if (passwordRegister.value.length < 4) {
    html.onError(passwordRegister, "رمز عبور باید حداقل شامل 4 کاراکتر باشد");
  } else {
    html.onSuccess(passwordRegister);
  }

  //check confirm password is empty 
  if (PasswordConfirm.value === "") {
    html.onError(PasswordConfirm, "تکرار رمز عبور نمی تواند خالی باشد");
  } else {
    if (passwordRegister.value !== PasswordConfirm.value) {
      html.onError(PasswordConfirm, 'رمز عبور با تکرار رمز عبور یکسان نیست');
    } else
      html.onSuccess(PasswordConfirm);
  }
  // check all input
  if (usernameRegister.value.trim() !== "" && (usernameRegister.value.match(/^[A-Za-z0-9]+$/)) && usernameRegister.value.length >= 4 && email.value.trim() !== "" && isValidEmail(email.value.trim()) && passwordRegister.value !== "" &&
    passwordRegister.value.length >= 4 && PasswordConfirm.value !== "" && PasswordConfirm.value.length >= 4) {
    html.successRegister('success', `با سپاس از ثبت نام شما.
    یک نامه به آدرس ایمیل شما ارسال شد. شما باید این نامه را باز کرده و از طریق لینک داخل آن نام کاربریتان را فعال کنید. `)
  }

  // check input if keyup 
  formRegister.onkeyup = () => {
    //check username is empty 
    if (usernameRegister.value.trim() === "") {
      html.onError(usernameRegister, "نام کاربری نمی تواند خالی باشد");
    } //check username is foreign characters  
    else if (!(usernameRegister.value.match(/^[A-Za-z0-9]+$/))) {
      html.onError(usernameRegister, "نام کاربری فقط می تواند شامل حروف و عدد لاتین باشد");
    } //check username length
    else if (usernameRegister.value.length < 4) {
      html.onError(usernameRegister, "نام کاربری باید حداقل شامل 4 کاراکتر باشد");
    } else {
      html.onSuccess(usernameRegister);
    }

    //check email is empty 
    if (email.value.trim() === "") {
      html.onError(email, "ایمیل نمی تواند خالی باشد");
    } else {
      if (!isValidEmail(email.value.trim())) {
        html.onError(email, "ایمیل اشتباه است");
      } else {
        html.onSuccess(email);
      }
    }

    //check password is empty 
    if (passwordRegister.value === "") {
      html.onError(passwordRegister, "رمز عبور نمی تواند خالی باشد");
    } //check password length
    else if (passwordRegister.value.length < 4) {
      html.onError(passwordRegister, "رمز عبور باید حداقل شامل 4 کاراکتر باشد");
    } else {
      html.onSuccess(passwordRegister);
    }

    //check confirm password is empty 
    if (PasswordConfirm.value === "") {
      html.onError(PasswordConfirm, "تکرار رمز عبور نمی تواند خالی باشد");
    } else {
      if (passwordRegister.value !== PasswordConfirm.value) {
        html.onError(PasswordConfirm, 'رمز عبور با تکرار رمز عبور یکسان نیست');
      } else
        html.onSuccess(PasswordConfirm);
    }
  }
}

isValidEmail = (email) => {
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
}

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  // load spinner when submit
  html.loadSpinner()
  // remove spinner and run validate input after 1 second
  setTimeout(() => {
    spinner.style.display = 'none';
    validateLogin()
  }, 1000);

})

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();


  // load spinner when submit
  html.loadSpinner()
  // remove spinner and run validate input after 1 second
  setTimeout(() => {
    spinner.style.display = 'none';
    validateRegister()
  }, 1000);

})
/*===== Newsletter=====*/
document.addEventListener('DOMContentLoaded', function () {
  // Show Newsletter After 5 second
  setTimeout(() => {
    document.querySelector('.newsletter').classList.toggle('newsletter-active')
    $(document).click(function (e) {
      if (!$(e.target).closest('.newsletter__container').length) {
        $('.newsletter').css('display', 'none')
      }
    });
  }, 5000);

})


/*===== Initialize Pagination =====*/
$(".last__posts").paginga({
  // how many items per page
  itemsPerPage: 6,
  // auto hide if there is only one page.
  autoHidePager: true,
  scrollToTop: false,
  // item container selector
  itemsContainer: ".article__container",
  // item selector
  item: "> article",
  // If set to an integer the maximum of visible pages in the .pageNumbers element is equal to this setting.
  maxPageNumbers: 3,
});


/*===== Scroll To Top =====*/
let offset = 100;
$(window).scroll(function () {
  let y = $(this).scrollTop();
  if (y >= offset) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }

})

$('.scrollToTop').on('click', function () {
  $('html,body').animate({
    scrollTop: 0
  }, 800);
})

/*===== Sticky Navbar =====*/
window.addEventListener('scroll', fixedNav)
let nav = document.querySelector('.navbar');
let topDistance = nav.offsetTop;

function fixedNav() {
  let width = window.innerWidth;
  if (window.pageYOffset >= topDistance && width >= 992) {
    document.querySelector('.top__navbar').style.transform = 'translateY(-100%)'
    nav.classList.add('navbar__sticky')
    document.body.style.marginTop = nav.offsetHeight + 'px';
  } else {
    document.querySelector('.top__navbar').style.transform = 'translateY(0)'
    nav.classList.remove('navbar__sticky')
    document.body.style.marginTop = 0;
  }

}

/*===== Dark Theme =====*/
if (localStorage.getItem('darkTheme')) {
  document.body.classList.add(localStorage.getItem('darkTheme'))
}

let darkBtn = document.querySelector('.dark__mode');
darkBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark')
    localStorage.removeItem('darkTheme', 'dark')
  } else {
    document.body.classList.add('dark')
    localStorage.setItem('darkTheme', 'dark')
  }
})

/*===== Rating =====*/
$('.rating__rate').hover(function () {
  $('.rating__frate').addClass('rating__frate-is-active')

}, function () {
  $('.rating__frate').removeClass('rating__frate-is-active')
});

$('.rating__rate').click(function () {
  let data_width = $(this).data('width');
  $(this).parents('.rating').find('.rating__fstar').css('width', data_width)
});

/*===== Button Favorite =====*/
$('.btn__fav').on('click', function () {
  $(this).toggleClass('btn__fav-active');
});


/*===== Study Mode =====*/
let asideBox = document.querySelector('.aside__sidebar');

$('.study__mode-btn').click(function () {
  $('.study__mode-icon').toggleClass('study__mode-icon-active');
  $('.main__content').toggleClass('main__content-fullwidth')

  if (asideBox.classList.contains('hidden')) {
    setTimeout(function () {
      asideBox.classList.remove('hidden');
      asideBox.classList.remove('aside__sidebar-hidden');
    }, 300);
  } else {
    asideBox.classList.add('aside__sidebar-hidden');
    asideBox.addEventListener('transitionend', function (e) {
      asideBox.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });

  }
});