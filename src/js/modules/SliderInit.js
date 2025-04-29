import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

Swiper.use([Autoplay]);

function SliderInit(sliderSelector, params) {
  const sliderElement = document.querySelector(sliderSelector);

  if (!sliderElement) return null;

  return new Swiper(sliderSelector, params);
}

export default SliderInit;