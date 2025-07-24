// // 1. Smooth Scroll for Navbar links
// document.querySelectorAll("nav ul li a").forEach(link => {
//   link.addEventListener("click", function(e) {
//     if (this.hash !== "") {
//       e.preventDefault();
//       const target = document.querySelector(this.hash);
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   });
// });

// // 2. Show alert on page load (can be replaced with a modal or toast)
// window.addEventListener("load", () => {
//   alert("Welcome! Explore the 7 Wonders of the World ✨");
// });

// // 3. Click effect on wonders
// document.querySelectorAll(".wonder").forEach(card => {
//   card.addEventListener("click", () => {
//     const wonderName = card.querySelector("h3").innerText;
//     alert("You clicked on: " + wonderName);
//   });
// });

// 1. Smooth Scroll
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// 2. Welcome Toast Message
window.addEventListener("load", () => {
  const toast = document.createElement("div");
  toast.innerText = "🌍 Welcome! Explore the 7 Wonders";
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#333";
  toast.style.color = "white";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "5px";
  toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  toast.style.zIndex = "1000";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
});

// 3. Highlight on Click
document.querySelectorAll(".wonder").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.add("highlight");
    setTimeout(() => {
      card.classList.remove("highlight");
    }, 1000);
  });
});

// 4. Back to Top Button
const topBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// 5. Scroll animation for any .animate-scroll elements
const animateEls = document.querySelectorAll(".animate-scroll");

const revealOnScroll = () => {
  animateEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// Show/hide Back to Top button
// (Already declared and used above, so no need to redeclare or re-add event listeners)
// 7 Wonders Map with Leaflet
const map = L.map('map').setView([20, 0], 2);

// Tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers
const wonders = [
  { name: "Great Wall of China", coords: [40.4319, 116.5704] },
  { name: "Taj Mahal", coords: [27.1751, 78.0421] },
  { name: "Colosseum", coords: [41.8902, 12.4922] },
  { name: "Christ the Redeemer", coords: [-22.9519, -43.2105] },
  { name: "Machu Picchu", coords: [-13.1631, -72.5450] },
  { name: "Chichen Itza", coords: [20.6843, -88.5678] },
  { name: "Petra", coords: [30.3285, 35.4444] },
];

wonders.forEach(wonder => {
  L.marker(wonder.coords)
    .addTo(map)
    .bindPopup(`<b>${wonder.name}</b>`);
});
