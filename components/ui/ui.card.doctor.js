import { globalCSS } from "../../global.js";
class UICardDoctor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.doctorName = this.getAttribute("doctorName") || "Dr. Nabilla Sp. PD";
    this.doctorProf = this.getAttribute("doctorProf") || "Dentist";
    this.doctorStatus = this.getAttribute("status") || "away";
    this.doctorImg =
      this.getAttribute("doctorImg") ||
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80";
    this.shadowRoot.innerHTML = `
          <style>
                ${globalCSS}
                .book__card {
                  border: 1px solid var(--color-text-100);
                  overflow: hidden;
                  border-radius: 0.5rem;
                  position: relative;
                  height: 100%;
                  cursor: pointer;
                  transition: all 0.3s ease;
                }
                .book__card:hover {
                  transform: translateY(-8px);
                  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
                  border-color: var(--color-accent-300);
                }
                .book__card h5{
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  transition: color 0.3s ease;
                }
                .book__card:hover h5 {
                  color: var(--color-accent-600);
                }
                .book__card__img {
                  width: 100%;
                  object-fit: cover;
                  transition: transform 0.3s ease;
                }
                .book__card:hover .book__card__img {
                  transform: scale(1.05);
                }
                .book__card__info {
                  padding: 1rem;
                  background: white;
                  position: absolute;
                  width: 100%;
                  bottom: 0;
                  transition: background 0.3s ease;
                }
                .book__card:hover .book__card__info {
                  background: rgba(255, 255, 255, 0.98);
                }
                .book__card__status{
                  display: flex;
                  background: #dddddd;
                  width: min-content;
                  padding-right: 0.9rem;
                  padding-left: 0.3rem;
                  padding-block: 0rem;
                  border-radius: 4rem;
                  text-transform: capitalize;
                  font-size: var(--font-size__small);
                  margin-bottom: 0.5rem;
                  align-items: center;
                  transition: transform 0.2s ease;
                }
                .book__card:hover .book__card__status {
                  transform: scale(1.05);
                }
                
                .book__card__status.away{
                  background: var(--color-warning-50);
                  color: var(--color-warning-600);
                }
                
                .book__card__status.online{
                  background: var(--color-success-50);
                  color: var(--color-success-600);
                }
                .book__card__status.offline{
                  background: var(--color-error-50);
                  color: var(--color-error-600);
                }
                .book__card__status svg{
                  height: 2rem; 
                }
                .book__card__status.away svg{
                  fill: var(--color-warning-600);
                }
                
                .book__card__status.online svg{
                  fill: var(--color-success-600);
                }
                .book__card__status.offline svg{
                  fill: var(--color-error-600);
                }
          </style>
          <div class="book__card">
            <img
              class="book__card__img"
              src="${this.doctorImg}"
              alt=""
            />
            <div class="book__card__info">
              <div class="book__card__status ${this.doctorStatus}">
                <svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path></g></svg>
                ${this.doctorStatus}</div>
              <h5>${this.doctorName}</h5>
              <small>${this.doctorProf}</small>
            </div>
          </div>
`;
  }
}
customElements.define("ui-card-doctor", UICardDoctor);
