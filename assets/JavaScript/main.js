const menu = document.querySelector(".nav-links");
const icon = document.querySelector(".mobile-menu-icon");
const links = document.querySelectorAll(".nav-links a");

// 1. Hamburger menüye tıklayınca aç/kapa
icon.addEventListener("click", (e) => {
  e.stopPropagation(); // Tıklama body'e gitmesin
  menu.classList.toggle("open");
});

// 2. Menüdeki linke tıklayınca kapan
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

// 3. Ekranın herhangi yerine tıklanınca kapan
document.addEventListener("click", (e) => {
  // Eğer menü açıksa ve tıklanan yer menü değilse & ikon değilse
  if (menu.classList.contains("open") &&
      !menu.contains(e.target) &&
      !icon.contains(e.target)) {
    menu.classList.remove("open");
  }
});



// ======================= HARİTA

  function startRoute() {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=40.212123371090826,29.090507415934205",
      "_blank"
    );
  }

