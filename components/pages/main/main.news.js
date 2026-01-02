class SectionNews extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

    <style>
      .section-news__carousel {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
        gap: 0.75rem;
        margin-bottom: 3rem;
      }
      .section-news__carousel > *{
        min-height: clamp(15rem,44vw, 30rem);
      }
      .section-news__title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;
        align-items: end;
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
          <a href="">View More</a>
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
      </div>
    </section>
`;
  }
}
customElements.define("section-news", SectionNews);
