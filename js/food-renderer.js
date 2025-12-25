// Function to create a food card HTML
function createFoodCard(food) {
    const discountBadge = food.discount ? `<span class="discount-badge">${food.discount}%</span>` : '';
    
    return `
        <article class="food-card">
            <div class="food-image">
                <img src="${food.image}" alt="${food.name}">
                ${discountBadge}
            </div>
            <div class="food-info">
                <div class="food-header">
                    <h3 class="food-name">${food.name}</h3>
                    <span class="food-price">₹${food.price}</span>
                </div>
                <div class="food-meta">
                    <div class="food-rating">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#F3BA00">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>${food.rating}</span>
                    </div>
                    <span class="food-time"> ${food.time}</span>
                    <button class="add-btn" aria-label="Add to cart">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Function to create a popular card HTML
function createPopularCard(item) {
    const discountBadge = item.discount ? `<span class="discount-badge">${item.discount}%</span>` : '';
    const quantityControl = item.quantity ? 
        `<div class="quantity-control">
            <button class="qty-btn minus">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn plus">+</button>
        </div>` : 
        `<button class="add-btn" aria-label="Add to cart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </button>`;
    
    return `
        <div class="swiper-slide">
            <article class="popular-card">
                <div class="popular-image">
                    <img src="${item.image}" alt="${item.name}">
                    ${discountBadge}
                </div>
                <div class="popular-info">
                    <div class="popular-header">
                        <h3 class="popular-name">${item.name}</h3>
                        <span class="popular-price">₹${item.price}</span>
                    </div>
                    <div class="popular-meta">
                        <div class="popular-rating">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#F3BA00">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>${item.rating}</span>
                        </div>
                        <span class="popular-time"> ${item.time}</span>
                        ${quantityControl}
                    </div>
                </div>
            </article>
        </div>
    `;
}

// Function to render all food cards
function renderFoodCards() {
    const foodGrid = document.querySelector('.food-grid');
    if (foodGrid && typeof foodData !== 'undefined') {
        foodGrid.innerHTML = foodData.map(food => createFoodCard(food)).join('');
    }
}

// Function to render popular items
function renderPopularItems() {
    const swiperWrapper = document.querySelector('.popular-swiper .swiper-wrapper');
    if (swiperWrapper && typeof popularData !== 'undefined') {
        swiperWrapper.innerHTML = popularData.map(item => createPopularCard(item)).join('');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderFoodCards();
    renderPopularItems();
});