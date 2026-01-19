const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu li a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // İkonu değiştir (Hamburger <-> Çarpı)
  const icon = hamburger.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Linke tıklayınca menüyü kapat
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.querySelector("i").classList.remove("fa-times");
    hamburger.querySelector("i").classList.add("fa-bars");
  });
});

// Scroll Efekti (Navbar Arkaplanı)
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".glass-nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(20, 20, 20, 0.95)";
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.05)";
    nav.style.boxShadow = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, div[id]"); // ID'si olan bölümleri seçer
  const navLinks = document.querySelectorAll(".cat-link");

  const options = {
    root: null,
    rootMargin: "-40% 0px -50% 0px", // Ekranın ortasına gelince tetiklenmesi için
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Mevcut aktif sınıfını temizle
        navLinks.forEach((link) => link.classList.remove("active"));

        // Ekrana giren bölümün ID'sine sahip linki bul ve aktif yap
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.cat-link[href="#${id}"]`);

        if (activeLink) {
          activeLink.classList.add("active");

          // Mobilde aktif butonu menü içinde otomatik görünür alana kaydırır
          activeLink.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
