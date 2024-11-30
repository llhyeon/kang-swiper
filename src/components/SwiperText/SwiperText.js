import { LitElement, html } from "lit";
import style from "/src/components/SwiperText/SwiperText.css?inline";

class SwiperText extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <div class="text-container">
        <h1>제목</h1>
        <p>
          <span class="desc">description</span>
          <span class="open-date">open date</span>
          <span class="director">director</span>
        </p>
      </div>
    `;
  }
}

customElements.define("swiper-text", SwiperText);
