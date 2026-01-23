import "./global.js";
import "./components/ui/ui.navbar.js";
import "./components/ui/ui.card.js";
import "./components/ui/ui.stars.js";
import "./components/ui/ui.testimonial.js";
import "./components/ui/ui.card.news.js";
import "./components/ui/ui.faq.js";
import "./components/pages/main/main.hero.js";
import "./components/pages/main/main.contact.js";
import "./components/pages/main/main.feature.js";
import "./components/pages/main/main.pricing.js";
import "./components/pages/main/main.testimonials.js";
import "./components/pages/main/main.news.js";
import "./components/pages/main/main.faq.js";
import "./components/pages/main/main.about.js";
import "./components/ui/ui.footer.js";
import "./components/ui/ui.card.doctor.js";

const loaderWrapper = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  setTimeout(() => {
    loaderWrapper.style.transition = "opacity 0.5s ease-out";
    loaderWrapper.style.opacity = 0;

    setTimeout(() => {
      loaderWrapper.style.display = "none";
    }, 500);
  }, 500);
});
