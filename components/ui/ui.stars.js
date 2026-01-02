class UIStars extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.count = this.getAttribute("stars") || 1;
    this.shadowRoot.innerHTML = `
    <style>
      .stars{
        display: flex;
        align-items: center;
      }
      .stars img{
        margin-top: -0.2rem;
        margin-right: -0.5rem;
      }
    </style>
    <div class="stars">
    </div>
`;
    let starsWrapper = this.shadowRoot.querySelector(".stars");
    for (let i = 0; i < this.count; i++) {
      let starsImg = document.createElement("img");
      starsImg.src = "./assets/star.svg";
      starsImg.style.height = "1.75rem";
      starsImg.part = "image";
      starsWrapper.appendChild(starsImg);
    }
  }
}
customElements.define("ui-stars", UIStars);
