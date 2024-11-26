// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  effect: "coverflow",
  speed: 2000,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><span>${String(index + 1).padStart(2, '0')}</span> </span>`
    }
  }
});

