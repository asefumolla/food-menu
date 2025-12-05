// DOM elements
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalIngredients = document.getElementById('modal-ingredients');
const modalNutrition = document.getElementById('modal-nutrition');
const modalAllergens = document.getElementById('modal-allergens');
const modalCookingInfo = document.getElementById('modal-cooking-info');
const closeModal = document.getElementById('close-modal');
const backButton = document.getElementById('back-button');

// Get item data from localStorage
function getItemData() {
    const itemData = localStorage.getItem('selectedMenuItem');
    if (itemData) {
        return JSON.parse(itemData);
    }
    return null;
}

// Get category display name
function getCategoryName(category) {
    const categoryMap = {
        'all': 'All Items',
        'veg': 'Vegetarian',
        'non-veg': 'Non-Vegetarian',
        'drinks': 'Drinks',
        'dessert': 'Dessert'
    };
    return categoryMap[category] || category;
}

// Display item details
function displayItemDetails(item) {
    if (!item) {
        showError();
        return;
    }
    
    // Set basic info
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalName.textContent = item.name;
    modalPrice.textContent = `$${item.price.toFixed(2)}`;
    modalCategory.textContent = getCategoryName(item.category);
    modalCategory.className = `modal-category ${item.category}`;
    modalDescription.textContent = item.description;
    modalCookingInfo.textContent = item.cookingInfo;
    
    // Set page title
    document.title = `${item.name} - Delicious Bites Restaurant`;
    
    // Set ingredients
    modalIngredients.innerHTML = '';
    if (item.ingredients && item.ingredients.length > 0) {
        item.ingredients.forEach(ingredient => {
            const ingredientElement = document.createElement('div');
            ingredientElement.className = 'ingredient';
            ingredientElement.innerHTML = `<span>•</span> ${ingredient}`;
            modalIngredients.appendChild(ingredientElement);
        });
    }
    
    // Set nutrition
    modalNutrition.innerHTML = '';
    if (item.nutrition) {
        for (const [key, value] of Object.entries(item.nutrition)) {
            const nutritionElement = document.createElement('div');
            nutritionElement.className = 'nutrition-item';
            nutritionElement.innerHTML = `
                <div class="nutrition-value">${value}</div>
                <div class="nutrition-label">${key}</div>
            `;
            modalNutrition.appendChild(nutritionElement);
        }
    }
    
    // Set allergens
    modalAllergens.innerHTML = '';
    if (item.allergens && item.allergens.length > 0) {
        item.allergens.forEach(allergen => {
            const allergenElement = document.createElement('div');
            allergenElement.className = 'allergen';
            allergenElement.textContent = allergen;
            modalAllergens.appendChild(allergenElement);
        });
    } else {
        modalAllergens.innerHTML = '<p>No common allergens</p>';
    }
}


// Go back to main menu
function goBackToMenu() {
    localStorage.removeItem('selectedMenuItem');
    window.location.href = 'food.html';
}

// Setup event listeners
function setupEventListeners() {
    closeModal.addEventListener('click', goBackToMenu);
    backButton.addEventListener('click', goBackToMenu);
    
    // Close modal when clicking outside
    document.querySelector('.item-modal').addEventListener('click', (e) => {
        if (e.target === document.querySelector('.item-modal')) {
            goBackToMenu();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            goBackToMenu();
        }
    });
}

// Initialize detail page
function initDetailPage() {
    const item = getItemData();
    displayItemDetails(item);
    setupEventListeners();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initDetailPage);