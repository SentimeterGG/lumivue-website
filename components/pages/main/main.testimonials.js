class SectionTestimonial extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        .section-testimonials__scroll {
          display: flex;
          gap: 0.75rem;
          overflow: hidden;
        }

        .scroll-track {
          display: flex;
          gap: 0.75rem;
          width: max-content;
          animation: scroll 100s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      </style>

      <section class="section-testimonials">
        <div class="container" style="text-align: center; margin-bottom: 5rem;">
          <h2>Hear It from Our Patients!</h2>
          <p class="muted" style="margin-top: 1rem">
            Heartfelt stories and honest experiences from those we’ve cared for.
          </p>
        </div>

        <div class="section-testimonials__scroll">
          <div class="scroll-track">
            ${this.testimonials()}
            ${this.testimonials()} <!-- duplicate -->
          </div>
        </div>
      </section>
    `;
  }

  testimonials() {
    return `
      <ui-testimonial
        text="Modern facilities and friendly doctors. Everything felt clean, organized, and reassuring."
        stars="5"
        person="Diego Morales"
        user-profile="Testimonial1.webp"
      ></ui-testimonial>

      <ui-testimonial
        flipped="true"
        text="The staff were very professional and attentive. I felt comfortable throughout the visit."
        stars="5"
        person="Sophia Turner"
        user-profile="Testimonial5.webp"
      ></ui-testimonial>

      <ui-testimonial
        text="Quick service, clear explanations, and a very welcoming environment."
        stars="4"
        person="Liam Anderson"
        user-profile="Testimonial3.webp"
      ></ui-testimonial>

      <ui-testimonial
        flipped="true"
        text="Excellent experience from start to finish. Highly recommended."
        stars="5"
        person="Olivia Martinez"
        user-profile="Testimonial7.webp"
      ></ui-testimonial>

      <ui-testimonial
        text="Clean facilities and friendly staff made the visit stress-free."
        stars="4"
        person="Noah Wilson"
        user-profile="Testimonial2.webp"
      ></ui-testimonial>

      <ui-testimonial
        flipped="true"
        text="Doctors were patient and explained everything clearly."
        stars="5"
        person="Emma Johnson"
        user-profile="Testimonial9.webp"
      ></ui-testimonial>

      <ui-testimonial
        text="A smooth and professional experience overall."
        stars="4"
        person="James Lee"
        user-profile="Testimonial4.webp"
      ></ui-testimonial>

      <ui-testimonial
        flipped="true"
        text="The atmosphere was calm, modern, and very reassuring."
        stars="5"
        person="Ava Brown"
        user-profile="Testimonial8.webp"
      ></ui-testimonial>

      <ui-testimonial
        text="Friendly service and great attention to detail."
        stars="4"
        person="Ethan Clark"
        user-profile="Testimonial6.webp"
      ></ui-testimonial>

      <ui-testimonial
        flipped="true"
        text="One of the best healthcare experiences I’ve had."
        stars="5"
        person="Mia Rodriguez"
        user-profile="Testimonial10.webp"
      ></ui-testimonial>
    `;
  }
}

customElements.define("section-testimonials", SectionTestimonial);
