class SectionFAQ extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      .section-faq {
        background: #fff;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, var(--color-secondary-50) 100%);
        padding-block: 5rem;
      }
      .section-faq__container{
        padding-inline: 6.66vw;
      }
    </style>
    <section class="section-faq">
      <div class="container section-faq__container">
        <h2 style="text-align: center; margin-bottom: 5rem">
          Frequently asked<br />questions
        </h2>
        <div class="section-faq__list">
          <ui-faq
            question="What medical services does Lumivue Medical Care provide?"
            answer="Lumivue Medical Care offers comprehensive healthcare services, including general consultations, specialist care, diagnostic imaging, laboratory tests, and preventive health programs."
          ></ui-faq>

          <ui-faq
            question="Do I need an appointment before visiting the hospital?"
            answer="Appointments are recommended to reduce waiting time, but walk-in patients are also welcome for general consultations and emergency care."
          ></ui-faq>

          <ui-faq
            question="Does Lumivue Medical Care accept insurance?"
            answer="Yes, we work with a wide range of insurance providers. Please contact our front desk or insurance support team to confirm your coverage."
          ></ui-faq>

          <ui-faq
            question="What safety and hygiene standards does the hospital follow?"
            answer="We follow strict medical safety and hygiene protocols, including regular sanitization, infection control procedures, and continuous staff training to ensure patient safety."
          ></ui-faq>

          <ui-faq
            question="Are your doctors certified and experienced?"
            answer="Yes, all of our doctors and medical professionals are fully licensed, certified, and experienced in their respective specialties."
          ></ui-faq>

          <ui-faq
            question="Do you offer emergency medical services?"
            answer="Yes, we provide emergency medical care during our operating hours. For life-threatening emergencies, please contact local emergency services immediately."
          ></ui-faq>

          <ui-faq
            question="Can I book an appointment online?"
            answer="Yes, you can easily book appointments online through our website for faster and more convenient access to care."
          ></ui-faq>

          <ui-faq
            question="What medical technology do you use?"
            answer="We use advanced medical technology and modern diagnostic equipment to improve accuracy, efficiency, and patient safety."
          ></ui-faq>

          <ui-faq
            question="How do you protect patient privacy?"
            answer="We strictly protect patient data and medical records by following healthcare privacy regulations and secure data management practices."
          ></ui-faq>

          <ui-faq
            question="Do you provide preventive and wellness care?"
            answer="Yes, we offer preventive health services such as routine check-ups, health screenings, and wellness programs to help maintain long-term health."
          ></ui-faq>
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("section-faq", SectionFAQ);
