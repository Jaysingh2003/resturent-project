// =====================
// Modal Functionality
// =====================
const modalOverlay = document.getElementById("modalOverlay")
const openModalBtn = document.getElementById("openModalBtn")
const closeModalBtn = document.getElementById("closeModalBtn")
const cancelModalBtn = document.getElementById("cancelModalBtn")
const requestForm = document.getElementById("requestForm")

function openModal() {
  modalOverlay.classList.add("active")
  document.body.classList.add("modal-open")
}

function closeModal() {
  modalOverlay.classList.remove("active")
  document.body.classList.remove("modal-open")
  requestForm.reset()
}

// Open modal
openModalBtn.addEventListener("click", openModal)

// Close modal with close button
closeModalBtn.addEventListener("click", closeModal)

// Close modal with cancel button
cancelModalBtn.addEventListener("click", closeModal)

// Close modal when clicking outside
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal()
  }
})

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal()
  }
})

// Handle form submission
requestForm.addEventListener("submit", (e) => {
  e.preventDefault()
  // Form data is not stored as per requirements
  closeModal()
  alert("Your dish request has been submitted!")
})
