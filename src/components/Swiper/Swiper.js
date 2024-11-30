import style from "/src/components/Swiper/Swiper.css?inline";
import { register } from "swiper/element/bundle";
import { LitElement, html } from "lit";
import movie1 from "/src/assets/swiper/movie1.jpg";
import movie2 from "/src/assets/swiper/movie2.jpg";
import movie3 from "/src/assets/swiper/movie3.jpg";
import movie4 from "/src/assets/swiper/movie4.jpg";
import movie5 from "/src/assets/swiper/movie5.jpg";
import "/src/components/SwiperText/SwiperText";

register();

class Swiper extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <swiper-text></swiper-text>
      <swiper-container
        class="swiper-container"
        loop="true"
        autoplay-delay="3000"
        speed="3000"
        effect="fade">
        <swiper-slide class="swiper-slide"><img src="${movie1}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie2}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie3}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie4}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie5}" alt="" /></swiper-slide>
      </swiper-container>
    `;
  }
}

customElements.define("swiper-tag", Swiper);
