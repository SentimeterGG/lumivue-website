class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      .cta {
        width: 100%;
        background: var(--color-secondary-50);
        height: 100vh;
        overflow: hidden;
      }
      .cta-wrapper {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(36rem,1fr));
        align-items: center;
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
      .left-hero{
        padding-left: 5rem;
        padding-top: 3.5rem;
      } 
      .right-hero{
        display: flex; flex-direction: column;
      }
      @media (max-width: 1216px){
        .cta{
          padding-top: 8rem;
          margin-bottom: 20rem;
          overflow-y: auto;
        }
        .right-hero{
        align-items: center;
          text-align: center;
        }
        .cta-wrapper{
          gap: 3rem;
        }
        .cell-image{
          display: none;
        }
        .left-hero{
          padding-left: 0rem;
          padding-top: 0rem;
        } 
      }
    </style>
    <section class="cta">
      <div class="container cta-wrapper">
        <div class="right-hero" style="position: relative;">
              <img style="position: absolute; top: 50%; left: 0; transform: translateX(-130%) translateY(-50%) rotate(-45deg) scale(150%); filter: drop-shadow(0 0 200px rgba(0, 0, 0, 0.5));
" src="./assets/3pils.png">
          <small class="small-header">
            <div>FDA Approved</div>
            <div>MHRA Approved</div>
          </small>
          <h1 style="margin-top: 1rem">
            Modern clinic with a touch of technology
          </h1>
          <p style="margin-top: 1.8rem">
            Find the best healthcare services, doctor schedules, and the latest
            medical innovations all in one place.
          </p>
          <div style="display: flex; gap: 0.5rem; margin-top: 3rem">
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
        <div
          class="left-hero"
          style="height: min-content;"
        >
          <ui-card class="hero-forms">
            <h3>Book Appointment</h3>
            <p class="muted" style="margin-top: 0.25rem">
              Get the care you need, when you need it
            </p>
            <form action="#" method="post" style="margin-top: 1.75rem; position: relative">
              <img class="cell-image" style="position: absolute; bottom: 0; left: 0; transform: translateX(-60%) translateY(60%); filter: drop-shadow(0 0 200px rgba(0,0,0,0.5);
" src="./assets/3cell.png">
                
              <img style="position: absolute; top: 0; right: 0; transform: translateX(60%) translateY(-100%) rotate(-45deg) scale(70%); filter: drop-shadow(0 0 200px rgba(0,0,0,0.5);
" src="./assets/3bottle.png">
                <div
                style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 1rem;
                "
              >
                <div class="hero-forms__patient-info">
                  <legend>Patient Information</legend>
                  <div class="hero-forms__input">
                    <label for="full-name">Full Name</label>
                    <input
                      type="text"
                      id="full-name"
                      name="full_name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div class="hero-forms__input">
                    <label for="dob">Date of Birth</label>
                    <input type="date" id="dob" name="date_of_birth" required />
                  </div>
                  <div class="hero-forms__input">
                    <label for="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div class="hero-forms__input">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div class="hero-forms__appointment">
                  <legend>Appointment Details</legend>

                  <div class="hero-forms__input">
                    <label for="visit-type">Type of Visit</label>
                    <select id="visit-type" name="visit_type" required>
                      <option value="" style="color: var(--color-text-200)">
                        Select a visit type
                      </option>
                      <option value="general">General Consultation</option>
                      <option value="specialist">Specialist Visit</option>
                      <option value="follow-up">Follow-up</option>
                      <option value="telemedicine">Telemedicine</option>
                    </select>
                  </div>
                  <div class="hero-forms__input">
                    <label for="doctor">Preferred Doctor (optional)</label>
                    <input
                      type="text"
                      id="doctor"
                      name="preferred_doctor"
                      placeholder="Preferred Doctor (optional)"
                    />
                  </div>
                  <div class="hero-forms__input">
                    <label for="date">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="appointment_date"
                      required
                    />
                  </div>
                  <div class="hero-forms__input">
                    <label for="time">Preferred Time</label>
                    <input
                      type="time"
                      id="time"
                      name="appointment_time"
                      required
                    />
                  </div>
                </div>
              </div>
              <legend style="margin-block: 1rem">Reason for Visit</legend>
              <div class="hero-forms__input">
                <label for="reason">Brief Description (optional)</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="4"
                  placeholder="Describe your symptoms or reason for visit"
                ></textarea>
              </div>
              <div
                style="
                  display: grid;
                  grid-template-columns: auto 1fr;
                  gap: 0.5rem;
                  margin-top: 1rem;
                "
              >
                <input type="checkbox" name="privacy_consent" required />
                <small class="muted"
                  >I agree to the privacy policy and consent to be contacted
                  regarding my appointment.</small
                >
              </div>
              <button
                type="submit"
                style="margin-top: 2rem; padding-block: 1rem; width: 100%"
              >
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
              </button>
            </form>
          </ui-card>
        </div>
      </div>
    </section>
`;
  }
}
customElements.define("section-hero", HeroSection);
