class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      .cta {
        width: 100%;
        background: #ffffff;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, var(--color-secondary-50) 100%);
        height: 100vh;
        overflow: hidden;
        padding-top: var(--navbar-height);
      }
      .cta-wrapper {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(clamp(10rem, 70vw, 25rem), 1fr)
        );
        align-items: center;
        justify-items: center;
      }
      .small-header {
        display: flex;
        gap: 0.25rem;
      }
      .small-header * {
        border: 1px solid var(--color-accent-800);
        padding: 0.25rem 0.5rem;
        color: var(--color-accent-800);
        border-radius: 0.25rem;
      }
      .hero-forms::part(card) {
        background: white;
        box-shadow: 0px 0px 250px 5px var(--color-secondary-100);
      }
      .hero-forms__input {
        width: 100%;
        position: relative;
      }
      .hero-forms__appointment,
      .hero-forms__patient-info {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .right-hero {
        padding-left: 0rem;
      }
      .left-hero {
        width: inherit;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
      }
      .group-btn {
        margin-top: 3rem;
        gap: 0.5rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .cta-image{
        transform: translateX(10%) translateY(5rem);
      }
      @media (min-width: 769px){
        .left-hero {
          text-align: left;
          align-items: start;
        }
        .cta-wrapper{
          justify-items: start;
        }
        .cta{
          padding-top: 0;
        }
      }
      @media (max-width: 425px){
        .cta{
          height: calc(100vh + 8rem);
        }
      }
    </style>
    <section class="cta">
      <div class="container cta-wrapper">
        <div class="left-hero">
          <small class="small-header">
            <div>FDA Approved</div>
            <div>MHRA Approved</div>
          </small>
          <h1 style="margin-top: 1rem">
            Modern clinic with a touch of technology
          </h1>
          <p style="margin-top: 1.8rem; color: var(--color-text-800)">
            Find the best healthcare services, doctor schedules, and the latest
            medical innovations all in one place.
          </p>
          <div class="group-btn">
            <a href="#contact" class="btn" variant="secondary">Contact Us</a>
            <a href="#home" class="btn">
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
        <div class="right-hero" style="height: 100vh">
          <img class="cta-image" style="object-fit: contain; width:clamp(25rem, 50vw, 50rem);" src="assets/doctor.png" alt="">
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("section-hero", HeroSection);
