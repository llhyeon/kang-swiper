import { LitElement, html, css } from "lit";
import style from "/src/components/SwiperText/SwiperText.css?inline";

class SwiperText extends LitElement {
  static properties = {
    title: { type: String },
    openDate: { type: Number },
    studio: { type: String },
    top: { type: String },
    right: { type: String },
    coordinate: { type: String },
  };

  constructor(title, openDate, studio, top, right) {
    super();
    this.title = title;
    this.openDate = openDate;
    this.studio = studio;
    this.top = `${top}px`;
    this.right = `${right}px`;
  }

  render() {
    const coordinate = `
    .text-container {
      top: ${this.top}px;
      right: ${this.right}px;
    }
    `;

    return html`
      <style>
        ${style + coordinate}
      </style>
      <div class="text-container">
        <h1>${this.title}</h1>
        <p>
          <span class="desc">${this.desc}</span>
          <span class="open-date">Release Date ${this.openDate}</span>
          <span class="studio">${this.studio}</span>
        </p>
      </div>
    `;
  }
}

customElements.define("swiper-text", SwiperText);
