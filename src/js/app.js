/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import { SetVH } from './modules/SetVH.js';
import BaseHelpers from './helpers/BaseHelpers.js';
import initWOW from './modules/WOW.js';
import { WowCounter } from './modules/wowCounter';
import { SmoothScroll } from './modules/SmoothScroll.js';
import { TogglePassword } from './modules/TogglePassword.js';
import { CtaFormSteps } from './modules/CtaFormSteps.js';
import SliderInit from './modules/SliderInit.js';

// set vh
SetVH();

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // wow animation
  initWOW(190);
  WowCounter();
  // nav active anchor
  const smoothScroll = new SmoothScroll('.js-anchor', 650);
  // show/hide password input
  TogglePassword();
  // form
  CtaFormSteps();
  // slider init
  SliderInit('.js-slider-user-init', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    loopAdditionalSlides: 1,
    grabCursor: true,
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      1200: {
        spaceBetween: 40,
      },
    }
  });

  SliderInit('.js-slider-stream-init', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 1,
    grabCursor: true,
  });

  let benefitsSlider = null;

  function initBenefitsSlider() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const sliderSelector = '.js-benefits-slider-init';

    if (isMobile && !benefitsSlider) {
      benefitsSlider = SliderInit(sliderSelector, {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
      });
    } else if (!isMobile && benefitsSlider) {
      benefitsSlider.destroy(true, true);
      benefitsSlider = null;
    }
  }

  initBenefitsSlider();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initBenefitsSlider, 200);
  });
});