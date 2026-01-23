class ContactSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
    .maps::part(card){
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%), url("./assets/maps_placeholder.png");
      background-position: 52% 100%;
      background-size: auto 120%;
      border: 1px solid var(--color-text-300);
      padding: 1rem;
      display: flex;
      align-items: end;
    }
      .section-contact {
        background: #fff;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, var(--color-secondary-50) 100%);
        padding-block: 5rem;
      }
      .section-contact__title {
        text-align: center;
        margin-bottom: 5rem;
      }
      .section-contact__bento {
        background: transparent;
        display: grid;
        grid-template-rows: 1fr auto auto;
        grid-template-areas:
          "a"
          "b"
          "c";
        justify-items: stretch;
        align-items: stretch;
        gap: 0.75rem;
      }
      .section-contact__bento-wrapper{
      }
     .section-contact__bento > :nth-child(1) {
        min-height: 40rem;
      }
      /* .section-contact__bento > :nth-child(n + 2):nth-child(-n + 3) { */
      /*   min-width: 40rem; */
      /* } */
    @media (min-width: 1025px){
      .section-contact__bento {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr auto auto;
        grid-template-areas:
          "a b"
          "a b"
          "a c";
        justify-items: stretch;
        align-items: stretch;
        gap: 0.75rem;
      }
    }
      .doctors-profile{
        display: flex;
        flex-direction: column;
        gap: 1px;
        background: var(--color-text-300);
        border-top: 1px solid var(--color-text-300);
        border-bottom: 1px solid var(--color-text-300);
        margin-top: 2rem;
      }
      .doctors-profile li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        padding-block: 0.75rem;
      }
    </style>
    <section class="section-contact">
      <div class="container section-contact__container">
        <div class="section-contact__title">
          <h2 style="margin-bottom: 1rem">Reach Out Anytime!</h2>
          <p class="muted">Your health journey starts with a hello</p>
        </div>
        <div class="section-contact__bento-wrapper">
          <div class="section-contact__bento">
            <ui-card
              class="maps"
              background="white"
              style="grid-area: a"
            >
              <p class="muted">*This only for demonstration</p>
            </ui-card>
            <ui-card
              background="white"
              style="grid-area: b"
            >
              <h3>Doctor's Schedule</h3>
              <p class="muted" style="margin-top: 0.75rem;"> View each specialist's current practice schedule and choose a time that best suits your needs. </p>
              <ul class="doctors-profile">
                <li>
                  <h5>dr. Sarah Wijaya, Sp.PD </h5>
                  <p class="muted" style="text-align: right">
                    Monday - Friday: <br />
                    08.00 - 14.00
                  </p>
                </li>
                
                <li>
                  <h5>dr. Ahmad Santoso, Sp.JP</h5>
                  <p class="muted" style="text-align: right">
                    Monday - Friday: <br/> 15.00 - 20.00
                  </p>
                </li>
                
                <li>
                  <h5>dr. Linda Putri</h5>
                  <p class="muted" style="text-align: right">
                    Monday - Friday: <br/>
                    10.00 - 18.00 
                  </p>
                </li>
              </ul>
            </ui-card>
            <ui-card
              background="white"
              style="grid-area: c"
            >
              <h3 style="margin-bottom: 1rem;">Contact Us</h3>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                <li><b>Appoinment:</b> appointments@healthcare-plus.example</li>
                <li><b>Telephone:</b> +1 (555) 010-1000</li>
                <li><b>Bussiness:</b> bussiness@healthcare-plus.example</li>
              </ul>
            </ui-card>
          </div>
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("section-contact", ContactSection);
