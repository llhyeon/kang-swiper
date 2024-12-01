import style from "/src/components/Swiper/Swiper.css?inline";
import { register } from "swiper/element/bundle";
import { LitElement, html } from "lit";
import "/src/components/SwiperText/SwiperText";
import movieData from "/src/data/swiper/swiperData";

register();

class Swiper extends LitElement {
  static properties = {
    movieData: {},
  };

  constructor() {
    super();
    this.movieData = movieData;
  }

  createRandomNum() {
    const randomNum = Math.floor(Math.random() * 450 + 100);
    return randomNum;
  }

  render() {
    const renderItem = this.movieData.map((item) => {
      const top = this.createRandomNum();
      const right = this.createRandomNum();
      return html`
        <swiper-slide class="swiper-slide">
          <swiper-text
            .title=${item.title}
            .openDate=${item.openDate}
            .studio=${item.studio}
            .top=${top}
            .right=${right}></swiper-text>
          <img src="${item.img}" alt=""
        /></swiper-slide>
      `;
    });

    return html`
      <style>
        ${style}
      </style>

      <swiper-container
        class="swiper-container"
        loop="true"
        autoplay-delay="3000"
        speed="3000"
        effect="fade">
        ${renderItem}
      </swiper-container>
    `;
  }
}

{
  /* <swiper-slide class="swiper-slide"><img src="${movie1}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie2}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie3}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie4}" alt="" /></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="${movie5}" alt="" /></swiper-slide> */
}

customElements.define("swiper-tag", Swiper);
