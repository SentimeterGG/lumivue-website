import { globalCSS } from "../../global.js";
class UITestimonial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.flipped = this.getAttribute("flipped") || false;
    this.shadowRoot.innerHTML = `
    <style>
    ${globalCSS}
      .section-testimonials__testimonial {
        display: flex;
        gap: 0.75rem;
        flex-direction: column;
        width: 20rem;
        height: 100%;
      }
      .testimonial__card-img::part(card) {
        padding: 0;
        height: 25rem;
        background:
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0) 80%
          ),
          url("./assets/testimonial-profile/${this.getAttribute("user-profile") || "Testimonial1.jpg"}");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .testimonial__card-text::part(card) {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .section-testimonials__testimonial.flipped{
        flex-direction: column-reverse;
      }
      .testimonial__card-text__stars::part(image){
        filter: brightness(0) saturate(100%) invert(96%) sepia(29%) saturate(5000%) hue-rotate(337deg) brightness(90%) contrast(107%);
      }
    </style>
    <div class="section-testimonials__testimonial">
      <ui-card class="testimonial__card-img"> </ui-card>
      <ui-card class="testimonial__card-text">
        <p>
          "${this.getAttribute("text")}"
        </p>
        <div
          style="
            display: flex;
            justify-content: end;
            margin-top: 1.25rem;
            align-items: center;
            gap: 0.25rem;
          "
        >
          <small class="muted">${this.getAttribute("person")} -</small>
          <ui-stars class="testimonial__card-text__stars" stars="${this.getAttribute("stars") || 3}"></ui-stars>
        </div>
      </ui-card>
    </div>
`;
    let wrapper = this.shadowRoot.querySelector(
      ".section-testimonials__testimonial",
    );
    if (this.flipped) {
      wrapper.classList.add("flipped");
    }
  }
}
customElements.define("ui-testimonial", UITestimonial);
