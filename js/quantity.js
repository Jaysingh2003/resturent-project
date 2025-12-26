
// Quantity Controls

document.querySelectorAll(".quantity-control").forEach((control) => {
  const minusBtn = control.querySelector(".minus")
  const plusBtn = control.querySelector(".plus")
  const qtyValue = control.querySelector(".qty-value")

  minusBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    const value = Number.parseInt(qtyValue.textContent)
    if (value > 1) {
      qtyValue.textContent = value - 1
    }
  })

  plusBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    const value = Number.parseInt(qtyValue.textContent)
    qtyValue.textContent = value + 1
  })
})
