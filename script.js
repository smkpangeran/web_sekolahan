document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");

  // Hover effect message for service boxes
  const services = document.querySelectorAll('.service-box');
  services.forEach(service => {
    service.addEventListener('mouseenter', () => {
      service.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
    });
    service.addEventListener('mouseleave', () => {
      service.style.boxShadow = '';
    });
  });
});
