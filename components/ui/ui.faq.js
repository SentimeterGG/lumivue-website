import { globalCSS } from "../../global.js";

class UIFaq extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${globalCSS}
      .faq-item__question {
        width: 100%;
        display: grid;
        justify-content: space-between;
        text-align: left;
        color: black;
        grid-template-columns: 1fr 0.2fr;
        padding: clamp(1rem, 1vw, 1.5rem) 0;
        border-radius: 0;
        position: relative;
        cursor: pointer;
        align-items: center;
      }
      .faq-item__question h5 {
        font-weight: 500;
        margin-bottom: -3px;
      }
      .faq-item__answer {
        position: relative;
        overflow: hidden;
        transition: height 0.3s ease-out;
        height: 3px;
      }
      .faq-item__answer p {
        margin-bottom: calc(1rem + 3px);
        line-height: 150%;
      }
      .faq-item__answer::before {
        content: " ";
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        bottom: 0;
        transition: height 0.2s ease-out;
      }
      .faq-item__question:hover ~ .faq-item__answer::before {
        height: 3px;
      }
      
      .faq-item svg {
        justify-self: end;
        aspect-ratio: 1/1;
        height: clamp(1rem, 3vw , 1.25rem);
        transition: transform 0.3s ease-out;
      }
      .faq-item.active svg {
        transform: rotate(45deg);
      }
    </style>
    <div class="faq-item">
      <div class="faq-item__question">
        <h5>
          ${this.getAttribute("question")}
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <div class="faq-item__answer">
        <p>
          ${this.getAttribute("answer")}
        </p>
      </div>
    </div>
`;
    this.shadowRoot
      .querySelectorAll(".faq-item__question")
      .forEach((question) => {
        question.addEventListener("click", () => {
          const faqItem = question.parentElement;
          const answer = faqItem.querySelector(".faq-item__answer");
          if (answer.classList.contains("active")) {
            answer.style.height = "3px";
            answer.classList.remove("active");
          } else {
            answer.style.height = answer.scrollHeight + "px";
            answer.classList.add("active");
          }
          faqItem.classList.toggle("active");
        });
      });
  }
}
customElements.define("ui-faq", UIFaq);
