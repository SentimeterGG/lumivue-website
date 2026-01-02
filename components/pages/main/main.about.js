class SectionAbout extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      .section-about {
        overflow: hidden;
        max-height: 55rem;
      }
      .section-about__title {
        margin-bottom: 3rem;
      }
      .section-about__grid {
        display: grid;
        grid-template-columns: 1fr 0.8fr;
        align-items: start;
        gap: 0.75rem;
      }
      .section-about__grid-4 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
      }
      .section-about__grid-4 ui-card h1 {
        font-weight: 600;
        margin-bottom: 1.5rem;
      }

      .section-about__grid-4 ui-card::part(card) {
        background: transparent;
        padding-inline: 0;
        padding-bottom: 0;
      }
    </style>
    <section class="section-about">
      <div class="container">
        <div class="section-about__title">
          <h2>About Us</h2>
          <p class="muted">Compassionate Care You Can Trust</p>
        </div>
        <div class="section-about__grid">
          <div class="section-about__grid-4">
            <ui-card>
              <h1>1.</h1>
              <h4 style="margin-bottom: 0.75rem">Who We Are</h4>
              <p class="muted">
                We are a patient-centered medical care provider using advanced
                technology to deliver efficient, low-risk, and compassionate
                healthcare.
              </p>
            </ui-card>
            <ui-card>
              <h1>2.</h1>
              <h4 style="margin-bottom: 0.75rem">What We Do</h4>
              <p class="muted">
                We deliver comprehensive medical services using advanced
                technology to improve efficiency and reduce risk.
              </p>
            </ui-card>
            <ui-card>
              <h1>3.</h1>
              <h4 style="margin-bottom: 0.75rem">How We Care</h4>
              <p class="muted">
                Our approach combines modern medical tools with personalized
                care for every patient.
              </p>
            </ui-card>
            <ui-card>
              <h1>4.</h1>
              <h4 style="margin-bottom: 0.75rem">Our Commitment</h4>
              <p class="muted">
                We are committed to continuous improvement, patient safety, and
                trusted medical outcomes.
              </p>
            </ui-card>
          </div>
          <img
            style="
              width: 100%;
              background-size: cover;
              transform: translateX(8rem) translateY(-8rem);
            "
            src="assets/doctor.png"
            alt="Img With People here"
          />
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("section-about", SectionAbout);
