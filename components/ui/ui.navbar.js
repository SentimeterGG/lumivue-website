import { globalCSS } from "../../global.js";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${globalCSS}
      .primary-desktop{
        display: none !important;
      }
      .logo {
        display: none;
      }
      .navbar {
        z-index: 1000;
        align-items: center;
        width: 100vw;
        position: fixed;
        bottom: 0;
        height: var(--navbar-height);
        border-top: 1px solid var(--color-text-200);
        display: flex;
        align-items: center;
        background: white;
        transition: background 0.3s ease-out;
      }
      .navbar ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        align-items: center;
      }
      .cta-button.btn {
        display: none;
      }

      .navbar ul li {
        display: flex;
        aspect-ratio: 1/1;
        width: min-content;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
      }
      .navbar a {
        --color-links: black !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        aspect-ratio: 1/1;
        justify-content: center;
      }
      .navbar .nav-text {
        font-size: clamp(
          0.6rem,
          2.5vw + 0.1rem,
          var(--font-size__body)
        ) !important;
      }
      .navbar img:not(.logo-image) {
        height: clamp(1.1rem, 2.5vw, 1.25rem);
        aspect-ratio: 1/1;
        filter: invert(100%);
      }
      .navbar .primary {
        padding: 0rem 0.5rem;
        border-radius: 0.5rem;
        background-color: var(--color-primary-100);
      }
      @media (min-width: 1024px) {
        .navbar {
          border-top: none;
          border-bottom: 1px solid var(--color-text-200);
          top: 0;
        }
        .navbar.hide{
          background: transparent;
          border: none;
        }
        .navbar img:not(.logo-image) {
          display: none;
        }
        .navbar .primary {
          display: none !important;
        }
        .navbar .primary-desktop{
          display: flex !important;
        }
        .navbar ul {
          display: flex;
          gap: 3rem;
          height: min-content;
        }
        .navbar ul li {
          display: block;
          white-space: nowrap;
          aspect-ratio: auto;
        }
        .navbar ul li a {
          display: block;
          aspect-ratio: auto;
        }
        .navbar__container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          height: inherit;
          align-items: center;
        }
        nav {
          display: flex;
          align-items: center;
        }
        .logo {
          height: inherit;
          display: block;
          padding: 0.8rem 0;
        }
        .logo img {
          height: 100%;
          display: block;
        }
        .cta-button.btn {
          justify-self: end;
          width: min-content;
          display: flex;
        }
      }
    </style>
    <header class="navbar">
      <div class="container navbar__container">
        <div class="logo">
          <img class="logo-image" src="assets/LogoLumivue2.webp" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home" data-nav="home">
                <img src="assets/icons/home.svg" alt="" />
                <span class="nav-text">Home</span>
              </a>
            </li>
            <li>
              <a href="#services" data-nav="services">
                <img src="assets/icons/stetoscope.svg" alt="" />
                <span class="nav-text">Services</span>
              </a>
            </li>
            <li class="primary">
              <a href="#home" data-nav="book">
                <img src="assets/icons/callendart.svg" alt="" />
                <span class="nav-text">Book</span>
              </a>
            </li>
            <li class="primary-desktop">
              <a href="#home" data-nav="book">
                <span class="nav-text">Schedule</span>
              </a>
            </li>
            <li>
              <a href="#faq" data-nav="faq">
                <img src="assets/icons/faq.svg" alt="" />
                <span class="nav-text">FAQs</span>
              </a>
            </li>
            <li>
              <a href="#contact" data-nav="contact">
                <img src="assets/icons/contact.svg" alt="" />
                <span class="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <button class="cta-button btn" type="">
          Book Appointment
          <svg
            style="height: 1rem; margin-left: 0.8rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="white"
          >
            <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
            />
          </svg>
        </button>
      </div>
    </header>
`;
  }
  connectedCallback() {
    const navbar = this.shadowRoot.querySelector(".navbar");
    const onScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.remove("hide");
      } else {
        navbar.classList.add("hide");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  }
}
customElements.define("ui-navbar", NavBar);
