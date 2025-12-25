// =====================
// Contact Form
// =====================
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Thank you for your message! We will contact you within 48 hours.")
  contactForm.reset()
})
