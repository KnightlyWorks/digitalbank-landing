// ==========================================
// Imports
// ==========================================
import Alpine from "alpinejs";
import AOS from "aos";

// ==========================================
// Alpine Components
// ==========================================
document.addEventListener("alpine:init", () => {
  console.log("🏔️ Alpine initialized!");
});

// ==========================================
// Start Alpine
// ==========================================
window.Alpine = Alpine;
Alpine.start();

// ==========================================
// Initialize AOS
// ==========================================
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

console.log("✅ App running!");
