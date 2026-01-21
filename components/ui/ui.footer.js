class UIFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<style>
.footer {
  background: var(--color-accent-100);
  padding-bottom: var(--navbar-height);
}

.footer__top {
  padding: 4rem 0rem;
  display: grid;
  /* grid-template-columns: 2fr 1fr 1fr; */
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  gap: 3rem;
}
.footer__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.footer__brand img {
  height: 6rem;
}

.footer__nav {
  text-align: center;
}
@media (min-width: 768px) {
  .footer{
    padding-bottom: 0;
  }
  .footer__top {
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr 1fr;
  }
  .footer__brand {
    align-items: start;
    text-align: start;
  }
  .footer__nav {
    text-align: left;
  }
}
.footer__nav h5 {
  margin-bottom: 1rem;
}

.footer__nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__nav li {
  margin-bottom: 0.5rem;
}

.footer__nav a {
  --color-links: var(--color-primary-900) !important;
  text-decoration: none;
  opacity: 0.8;
}

.footer__nav a:hover {
  opacity: 1;
}

.footer__bottom {
  background: var(--color-accent-800);
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}
.footer__links a {
  --color-links: white !important;
  text-decoration: none;
  margin-left: 1.5rem;
  opacity: 0.9;
}

.footer__links a::before {
  background: white;
}

.footer__links a:hover {
  opacity: 1;
}
</style>
    <footer class="footer">
      <div class="container footer__top">
        <!-- Left: logo / description -->
        <div class="footer__brand">
          <img
            src="./assets/LogoLumivue2.png"
            alt="Lumivue Medical Care logo"
          />
          <p class="muted">
            Compassionate, modern healthcare focused on clarity, comfort, and
            patient trust.
          </p>
        </div>

        <!-- Middle column -->
        <nav class="footer__nav">
          <h5>Services</h5>
          <ul>
            <li><a href="#">General Checkups</a></li>
            <li><a href="#">Specialist Care</a></li>
            <li><a href="#">Diagnostics</a></li>
            <li><a href="#">Emergency</a></li>
          </ul>
        </nav>

        <!-- Right column -->
        <nav class="footer__nav">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Doctors</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <!-- Bottom bar -->
      <div class="footer__bottom">
        <span>© 2026 Lumivue Medical Care. All rights reserved.</span>
        <div class="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>

`;
  }
}
customElements.define("ui-footer", UIFooter);
