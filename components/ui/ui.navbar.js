import { globalCSS } from "../../global.js";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ${globalCSS}
      .navbar {
        max-height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 10;
        background: white;
        transition: background 0.15s ease-out;
      }
      .navbar.hide{
        background: transparent;
      }
      .navbar .navbar__container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
      }
      .navbar .navbar__container div {
        justify-self: end;
      }
      .navbar nav {
        justify-self: center;
      }
      .navbar nav ul {
        display: flex;
        gap: 2rem;
      }
      .navbar nav ul li {
        list-style: none;
        white-space: nowrap;
      }
      
      .navbar nav ul li a{
        color: black !important;
        white-space: nowrap;
      }
      
      .navbar nav ul li a::before{
        background: black !important;
      }
      .logo {
        height: 5rem;
        padding-block: 1rem;
      }
    </style>
    <header class="navbar">
      <div class="container navbar__container">
        <a href="#home" class="link-image">
          <img class="logo" src="../../assets/LogoLumivue2.png" alt="logo" />
        </a>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <div style="display: flex; gap: 0.5rem;">
          <a class="btn" href="#home">
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
          </a>
        </div>
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
