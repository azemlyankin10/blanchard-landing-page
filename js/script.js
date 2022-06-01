// swiper
const swiper = new Swiper('.hero__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  effect: "fade",
  allowTouchMove: false,
});

let gallerySlider = new Swiper(".galeryCarusel", {
  pagination: {
    el: ".galeryCarusel__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".galeryCarusel__btn--next",
    prevEl: ".galeryCarusel__btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: 'column',
      spaceBetween: 1
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

})



// menu
document.querySelectorAll(".subEl__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".subEl__dropdown");

    document.querySelectorAll(".subEl__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("subEl__btn--active");
      }
    });

    document.querySelectorAll(".subEl__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("subEl--active");
      }
    })
    dropdown.classList.toggle("subEl--active");
    btn.classList.toggle("subEl__btn--active")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".subNav__list")) {
    document.querySelectorAll(".subEl__dropdown").forEach(el => {
        el.classList.remove("subEl--active");
    })
     document.querySelectorAll(".subEl__btn").forEach(el => {
        el.classList.remove("subEl__btn--active");
    });
  }
})

// search
const mobileHeader = document.querySelector('.header__topWrap')
const burger = document.querySelector('#burger')
const closeIcon = document.querySelector('#close-icon')
burger.addEventListener('click', () => {
  mobileHeader.classList.add('nav--active')
})
closeIcon.addEventListener('click', () => {
  mobileHeader.classList.remove('nav--active')
})


const search = document.querySelector('#search')
const searchButton = document.querySelector('#search-button')
const icon = document.querySelector('#icon')
const input = document.querySelector('.search__input')

document.addEventListener('click', e => {
  if(e.target === searchButton) {
    search.classList.toggle('mobileSearch--active')
  }
  if(e.target != icon && e.target != input && e.target != searchButton) {
    search.classList.remove('mobileSearch--active')
  }
})



// filter
const filterSelect = document.querySelector('#filter__select')
const choices = new Choices(filterSelect, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: ''
})


// accordion
const button = document.querySelectorAll('.catalogAccordion__button')
button.forEach(item => {
  item.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    }else{
      button.forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
    }
  })
})


// tab

document.querySelectorAll('.catalogList__element').forEach(function(elem){
  elem.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.tab
    document.querySelectorAll('.catalogList__element').forEach(function(elem){
      elem.classList.remove('active')
    })
    document.querySelectorAll('.catalogBoard__left--show').forEach(function(elem){
    elem.classList.remove('catalogBoard__left--show')
    })
    document.querySelector(`[data-point="${path}"]`).classList.add('catalogBoard__left--show')
    e.target.parentElement.classList.add('active')

    if (window.innerWidth <= 767) {
      const scrollTarget = document.querySelector(`[data-point="${path}"]`)
      const topOffset = 100;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  })
})


// countryTab
document.querySelectorAll('.countryList__button').forEach(item => {
  item.addEventListener('click', (e) => {
      const path = e.currentTarget.dataset.tab
      const pathFirstContent = e.currentTarget.dataset.content
      document.querySelectorAll('.catalogBoard__left--show').forEach(function(elem){
        elem.classList.remove('catalogBoard__left--show')
      })
      document.querySelector(`[data-point="${pathFirstContent}"]`).classList.add('catalogBoard__left--show')
      document.querySelectorAll('.countryList__button').forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
      document.querySelectorAll('.catalog__block--show').forEach(function(elem){
        elem.classList.remove('catalog__block--show')
      })
      document.querySelector(`[data-point="${path}"]`).classList.add('catalog__block--show')
  })
})

// event
let btn = document.querySelector(".event__btn");
const slider = document.querySelector('.event__swiper');
let allitems = document.querySelectorAll(".event__card");
btn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "flex";
  })

  this.style.display = "none";

})


let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'event__card',
			pagination: {
				el: '.event-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

// editor

if (window.matchMedia("(max-width: 767px)").matches) {
  let button = ".edition__clickTitle";
  let labels = ".editionCheckbox__label";
  let labelsList = ".editionCheckbox";
  let labelsListActive = "checklist-active";
  let labelActive = "editionCheckbox__label--active";
  let animationClass = "animation-test";
  let inputCheckbox = ".editionCheckbox__checkbox";

  function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
    let btn = document.querySelector(a);
    let labels = document.querySelectorAll(b);
    let listLabels = document.querySelector(c);



    btn.addEventListener("click", () => {
      btn.classList.toggle('active')
      toggleSpoiler()
    });
      btn.addEventListener("keyup", function(e) {
        console.log(e.key);
        if (e.code === "Enter") {
          toggleSpoiler();
        }
      })
    function toggleSpoiler() {
        if (!listLabels.classList.contains(labelsListActive)) {
        listLabels.classList.add(labelsListActive);
        labels.forEach(item => {
          animationItem(item, labelActive, animationClass, "add");
        })
      } else {
        listLabels.classList.remove(labelsListActive);
        labels.forEach(item => {
          if (item.querySelector(inputCheckbox).checked) {
          animationItem(item, labelActive, animationClass, "add");
          } else {
            animationItem(item, labelActive, animationClass, "remove");
          }
          });
      }
      labels.forEach(item => {
        item.addEventListener("click", function() {
          if (!listLabels.classList.contains(labelsListActive)) {
            animationItem(this, labelActive, animationClass, "remove");
          }
        });
      })
    }
    function animationItem(item, class1, class2, f) {
    if (f === "add") {
        item.classList.add(class1);
      setTimeout(function() {
        item.classList.add(class2)
      }, 100);

    } else {
        item.classList.remove(class2);
      setTimeout(function() {
        item.classList.remove(class1)
      }, 300);
      }

    }
  }

  checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);

}

// ____________

const editorslider = document.querySelector('.editionSwiper');
let allitemsEditor = document.querySelectorAll(".editionSwiper__item");

let editorSwiper;

function initSlide() {
		editorSwiper = new Swiper(editorslider, {
			slidesPerView: 3,
			spaceBetween: 50,
			slideClass: 'editionSwiper__item',
      pagination: {
        el: ".editionSwiper__pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".editionSwiper__btn--next",
        prevEl: ".editionSwiper__btn--prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 34
        },
        1020: {
          slidesPerView: 2,
          spaceBetween: 50
        },

        1285: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      },
		});
}

initSlide()
editorSwiper.on('resize', function (e) {
  console.log();
  if (window.matchMedia("(max-width: 767px)").matches) {
    this.destroy();
    editorSwiper = underfined;
  }

});


// progect

tippy('.progect__tooltip', {
  animation: 'fade',
  theme: 'perpul',
  maxWidth: 264,
});

const progectSswiper = new Swiper('.progect__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: '.progect__btn-next',
    prevEl: '.progect__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    900: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

});


// map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 16,
    controls: ['geolocationControl', 'zoomControl']
  })


  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
})

  myMap.geoObjects.add(myPlacemark);

}


// form
const selector = document.querySelector('input[type="tel"]')
const im = new Inputmask("+7 (999) 999-99-99")
im.mask(selector)


new JustValidate('.contact__form', {
  rules: {
    name: {
      required: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Введите имя',
    tel: 'Недопустимый формат'
  },
  submitHandler: function(form) {

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          createSuccessModal()
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    form.reset();

  }
})

function createSuccessModal() {
  const body = document.querySelector('body')
  let div = document.createElement('div')
  div.setAttribute('class', "modalSuccess")
  div.innerText = 'Обратный звонок заказан'
  body.insertAdjacentElement('afterbegin', div)

  setTimeout(() => {
    div.remove()
  }, 2000)
}

