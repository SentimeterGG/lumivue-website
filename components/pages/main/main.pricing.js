class SectionPricing extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      .section-pricing {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .section-pricing__title {
        text-align: center;
        margin-bottom: 5rem;
      }
      .section-pricing__grid {
        display: grid;
        gap: var(--gap-size);
        grid-template-columns: repeat(auto-fit, minmax(36rem,1fr));
      }
      .card-pricing::part(card) {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5rem;
      }
      .card-pricing__price {
        display: flex;
        gap: 0.5rem;
        align-items: end;
      }
      .card-pricing__small-header::part(card) {
        width: min-content;
        height: min-content;
      }
      .card-pricing__benefit {
        line-height: 270%;
      }
      .card-pricing__benefit li {
        list-style: none;
        color: var(--color-text-800);
        background-image: url("assets/check.svg");
        background-repeat: no-repeat;
        background-size: 1.25rem;
        background-position: 0 0.8rem;
        padding-left: 2.25rem;
        font-size: 1.25rem;
      }
    </style>
    <section class="section-pricing">
      <div class="container section-pricing__container">
        <div class="section-pricing__title">
          <h2 style="margin-bottom: 1rem">Clear Prices, Happy Faces</h2>
          <p class="muted" style="margin-left: 0.25rem;">
            We keep things simple, no hidden fees, just great care at fair
            prices.
          </p>
        </div>
        <div class="section-pricing__grid">
          <ui-card class="card-pricing" background="var(--color-accent-50)">
            <div>
              <ui-card
                class="card-pricing__small-header"
                variant="tertiary small"
                >FHA/MHA Approved</ui-card
              >
              <h3 style="margin-top: 1rem; font-weight: 600">
                Patient Visit Fees
              </h3>
              <p class="muted" style="margin-top: 0.6rem">
                Medical services aligned with clinical best practices
              </p>
            </div>
            <div>
              <div class="card-pricing__price">
                <h1 style="line-height: 80%; font-weight: 500">$1</h1>
                <p>per visit</p>
              </div>
              <p class="muted" style="margin-top: 1rem; line-height: 150%">
                Includes patient registration and <br />
                basic outpatient services
              </p>
            </div>
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
          </ui-card>
          <ui-card class="card-pricing" background="var(--color-secondary-50)">
            <ul class="card-pricing__benefit">
              <li>Fast and accurate diagnosis using advanced equipment</li>
              <li>Personalized treatment plans tailored to your needs</li>
              <li>Quick access to your digital medical records anytime</li>
              <li>Remote consultations available for convenience</li>
              <li>Minimally invasive procedures for faster recovery</li>
              <li>Continuous monitoring for safer care during visits</li>
              <li>Easy and efficient appointment scheduling</li>
              <li>High-tech safety measures for infection control</li>
              <li>Clear guidance around the hospital with smart navigation</li>
              <li>Modern rehabilitation tools to support your recovery</li>
            </ul>
          </ui-card>
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("section-pricing", SectionPricing);
