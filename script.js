// Update WhatsApp number in one place if needed.
const WHATSAPP_NUMBER = "917736757200";

document.addEventListener("DOMContentLoaded", () => {
  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header shadow on scroll
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";
  document.body.appendChild(backdrop);

  const closeMenu = () => {
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const openMenu = () => {
    menu.classList.add("open");
    backdrop.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });
  backdrop.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  // Scroll reveal
  const revealTargets = document.querySelectorAll(
    ".about-grid, .amenity-card, .gallery-item, .price-card, .location-content, .location-map, .testimonial, .faq-item, .contact-card, .section-head"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("in"));
  }

  // Enquiry form -> WhatsApp
  const form = document.getElementById("enquiryForm");
  const note = document.getElementById("formNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const sharing = form.sharing.value;

    if (!name || !/^[0-9]{10}$/.test(phone)) {
      note.textContent = "Please enter your name and a valid 10-digit phone number.";
      note.className = "form-note error";
      return;
    }

    const message =
      `Hi, I'm interested in Hive Gents PG.%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Preferred: ${encodeURIComponent(sharing)}%0A` +
      `Please share availability and rent details.`;

    note.textContent = "Opening WhatsApp…";
    note.className = "form-note success";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
    form.reset();
  });
});
