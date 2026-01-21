class SectionNews extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

    <style>
      .section-news__carousel {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
        width: 100%;
        gap: 0.75rem;
      }
      .section-news__carousel > *{
        min-height: clamp(15rem,44vw, 30rem);
      }
      .section-news__title {
        display: flex;
        justify-content: space-between;
        align-items: end;
        text-align: center;
      }
      .view-more-mobile{
        text-align: center;
        display: block;
      }
      .view-more-desktop{
        display: none;
      }
      .section-news__container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
      }
      
      .section-news__container *:not(a){
        width: 100%;
      }
      @media (min-width: 769px){
        .section-news__title{
          text-align: start;
        }
        .view-more-desktop{
          display: block;
          justify-self: end;
          white-space: nowrap;
        }
        .view-more-mobile{
            display: none;
        }
      }
    </style>
    <section class="section-news">
      <div class="container section-news__container">
        <div class="section-news__title">
          <div>
            <h2>Medical News & Updates</h2>
            <p style="margin-top: 1rem" class="muted">
              The latest healthcare information, clinic announcements, and
              medical insights.
            </p>
          </div>
          <a class="view-more-desktop" href="">View More</a>
        </div>
        <div class="section-news__carousel">
          <ui-card-news
            date="Jan 2, 2026"
            title="AI Helps Detect Early Signs of Heart Disease"
            img="news1.webp"
          >
          </ui-card-news>
          <ui-card-news
            date="Dec 28, 2025"
            title="New Minimally Invasive Surgery Reduces Recovery Time"
            img="news-surgery.webp"
          >
          </ui-card-news>
          <ui-card-news
            date="Dec 20, 2025"
            title="Updated Terms & Privacy Policy for Patient Data Protection"
            img="news-policy.webp"
          >
          </ui-card-news>
        </div>
          <a class="view-more-mobile" href="">View More</a>
      </div>
    </section>
`;
  }
}
customElements.define("section-news", SectionNews);
