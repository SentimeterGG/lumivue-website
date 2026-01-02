import { globalCSS } from "../../global.js";
class UICardNews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      ${globalCSS}
      .news-item::part(card) {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        background:
          linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%),
          url("./assets/news/${this.getAttribute("img")}");
        background-size: cover;
        background-repeat: no-repeat;
        color: white;
      }
      .overlay{
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        border-radius: 0.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition:opacity 0.3s ease-out;
      }
      .news-item:hover .overlay{
        opacity: 1;
      }
      </style>
      <ui-card class="news-item">
        <div class="overlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        </div>
        <p class="news-item__date">${this.getAttribute("date")}</p>
        <h5>
          ${this.getAttribute("title")}
        </h5>
      </ui-card>
`;
  }
}
customElements.define("ui-card-news", UICardNews);
