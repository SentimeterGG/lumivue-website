class FeatureSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      .section-feature__title {
        margin-bottom: 5rem;
        text-align: center;
      }
      .section-feature__bento {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      /* TOP GRID */
      .bento-top {
        display: grid;
        width: inherit;
        gap: 0.75rem;
        grid-template-column: 1fr;
      }
      
      .bento-top ui-card img{
        width: 100%;
      }
      
      .bento-top ui-card div:nth-child(1){
        background: var(--color-accent-200);
        padding: clamp(1rem, 7vw, 2rem) !important;
        border-radius: 0.7rem 0.7rem 0rem 0rem;
      }
      
      .bento-top ui-card div:nth-child(2){
        padding: clamp(1rem, 70vw, 2rem);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .bento-top ui-card::part(card) {
        padding: 0 !important;
      }
      /* BOTTOM GRID */
      .bento-bottom {
        display: grid;
        gap: 0.75rem;
        grid-template-columns: 1fr;
      }
      .card-3-column::part(card){
        display: grid;
        grid-template-rows: 1fr auto;
        padding-top: 0rem;
      }
      
      .card-3-column div{
        display: flex;
        gap: 1rem;
        flex-direction: column
      }
      
      .card-3-column div a{
        margin-top: 1.5rem;
        padding-block: 1rem;
      }
      .card-3-column img{
        margin-bottom: 2rem;
        width: 100%;
      }
      
      @media (min-width: 426px){
        .bento-top{
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 769px){
        .bento-top{
          grid-template-columns: repeat(4, 1fr);
        }
        .bento-bottom{
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
    <section class="section-feature">
      <div class="container section-feature__container">
        <div class="section-feature__title">
          <h2>Caring for You, Every Step of the Way</h2>
          <p class="muted" style="margin-top: 1rem; margin-left: 0.25rem;">
            Where care meets comfort and your well-being comes first
          </p>
        </div>
        <div class="section-feature__bento">
          <div class="bento-top">
            <ui-card>
              <div>
                <img src="./assets/tooth.png" alt="image-here">
              </div>
              <div>
                <h4>Dental Care</h4>
                <p class="muted">Smile bright with gentle cleaning, check-ups, and expert dental treatments. </p>
              </div>
            </ui-card>
            
            <ui-card>
              <div>
                <img src="./assets/heart1.png" alt="image-here">
              </div>
              <div>
                <h4>Heart Care</h4>
                <p class="muted">Keep your heart strong with EKG, echo scans, and expert cardiology check-ups. </p>
              </div>
            </ui-card>
            <ui-card>
              <div>
                <img src="./assets/stetoscope.png" alt="image-here">
              </div>
              <div>
                <h4>Health Check-Up</h4>
                <p class="muted">Stay on top of your health with easy lab tests and friendly doctor consultations. </p>
              </div>
            </ui-card>
            <ui-card>
              <div>
                <img src="./assets/brain.png" alt="image-here">
              </div>
              <div>
                <h4>Mental Wellness</h4>
                <p class="muted">Talk, heal, and feel better with our caring counseling and therapy sessions.</p>
              </div>
            </ui-card>
          </div>
          <div class="bento-bottom">
            <ui-card class="card-3-column">
              <img src="./assets/Hospital.png" alt="image-here">
              <div>
                <div class="card-feature__3-column__title">
                  <h3>Accessible Care</h3>
                  <p>We make quality healthcare simple, friendly, and easy to reach for Smart tech, warm hearts, care that simply feels good. </p>
                </div>
                <a class="btn" href="#">Learn More
                <svg
                  style="height: 1.15rem; margin-left: 1rem"
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
            </ui-card>
            <ui-card class="card-3-column">
              <img src="./assets/person2.png" style="" alt="image-here">
              <div>
                <div class="card-feature__3-column__title">
                  <h3>Trusted Team</h3>
                  <p>Our friendly doctors and nurses treat you with skill and heart. </p>
                </div>
                <a class="btn" href="#">Learn More
                <svg
                  style="height: 1.15rem; margin-left: 1rem"
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
            </ui-card>
            <ui-card class="card-3-column">
              <img src="./assets/monitor2.png" alt="image-here">
              <div>
                <div class="card-feature__3-column__title">
                  <h3>Modern Comfort </h3>
                  <p>Smart tools, comfy rooms, care that feels just right. </p>
                </div>
                <a class="btn" href="#">Learn More
                <svg
                  style="height: 1.15rem; margin-left: 1rem"
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
            </ui-card>
          </div>
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("section-feature", FeatureSection);
