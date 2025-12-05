
const menuItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        category: "veg",
        image: "/asset/1110.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
        popular: true,
        ingredients: [
            "Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", 
            "Basil leaves", "Extra virgin olive oil", "Sea salt"
        ],
        nutrition: {
            calories: 285,
            protein: "12g",
            carbs: "36g",
            fat: "10g"
        },
        allergens: ["Gluten", "Dairy"],
        cookingInfo: "Cooked in stone-fired oven at 450°F for 8-10 minutes. Vegetarian and can be made vegan upon request."
    },
    {
        id: 2,
        name: "Grilled Chicken",
        price: 16.99,
        category: "non-veg",
        image: "/asset/99.jpg",
        description: "Juicy grilled chicken breast with herbs and spices",
        popular: true,
        ingredients: [
            "Free-range chicken breast", "Olive oil", "Garlic", "Rosemary", 
            "Thyme", "Lemon juice", "Black pepper", "Sea salt"
        ],
        nutrition: {
            calories: 320,
            protein: "35g",
            carbs: "8g",
            fat: "18g"
        },
        allergens: [],
        cookingInfo: "Marinated for 24 hours, grilled over open flame. Served with seasonal roasted vegetables."
    },
    {
        id: 3,
        name: "Caesar Salad",
        price: 9.99,
        category: "veg",
         image: "/asset/44.jpg",
        description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan",
        popular: false,
        ingredients: [
            "Romaine lettuce", "Parmesan cheese", "Garlic croutons", 
            "Anchovy paste", "Dijon mustard", "Lemon juice", "Worcestershire sauce"
        ],
        nutrition: {
            calories: 180,
            protein: "8g",
            carbs: "12g",
            fat: "12g"
        },
        allergens: ["Dairy", "Fish", "Gluten"],
        cookingInfo: "Freshly prepared to order. Can be made without anchovies for vegetarian version."
    },
    {
        id: 4,
        name: "Beef Burger",
        price: 13.99,
        category: "non-veg",
         image: "/asset/44.jpg",
        description: "Juicy beef patty with lettuce, tomato, and special sauce",
        popular: true,
        ingredients: [
            "Angus beef patty", "Brioche bun", "Aged cheddar", "Lettuce",
            "Tomato", "Red onion", "Burger sauce", "Pickles"
        ],
        nutrition: {
            calories: 650,
            protein: "38g",
            carbs: "45g",
            fat: "35g"
        },
        allergens: ["Gluten", "Dairy"],
        cookingInfo: "Grilled to order (medium recommended). Served with house-cut fries or side salad."
    },
    {
        id: 5,
        name: "Fresh Orange Juice",
        price: 4.99,
        category: "drinks",
        image: "/asset/88.jpg",
        description: "Freshly squeezed orange juice",
        popular: false,
        ingredients: [
            "Fresh oranges", "Ice"
        ],
        nutrition: {
            calories: 110,
            protein: "2g",
            carbs: "26g",
            fat: "0g"
        },
        allergens: [],
        cookingInfo: "Freshly squeezed to order. Can be made with less pulp upon request."
    },
    {
        id: 6,
        name: "Chocolate Cake",
        price: 6.99,
        category: "dessert",
        image: "/asset/11.jpg",
        description: "Rich and moist chocolate cake with chocolate frosting",
        popular: true,
        ingredients: [
            "Dark chocolate", "Cocoa powder", "Flour", "Sugar", "Eggs",
            "Butter", "Heavy cream", "Vanilla extract", "Fresh berries"
        ],
        nutrition: {
            calories: 420,
            protein: "6g",
            carbs: "55g",
            fat: "22g"
        },
        allergens: ["Gluten", "Dairy", "Eggs"],
        cookingInfo: "Baked fresh daily. Served at room temperature with optional vanilla ice cream."
    },
    {
        id: 7,
        name: "Vegetable Pasta",
        price: 11.99,
        category: "veg",
         image: "/asset/77.jpg",
        description: "Pasta with fresh vegetables in a light tomato sauce",
        popular: false,
        ingredients: [
            "Penne pasta", "Bell peppers", "Zucchini", "Cherry tomatoes",
            "Spinach", "Garlic", "Basil", "Olive oil", "Parmesan cheese"
        ],
        nutrition: {
            calories: 320,
            protein: "14g",
            carbs: "48g",
            fat: "12g"
        },
        allergens: ["Gluten", "Dairy"],
        cookingInfo: "Pasta cooked al dente. Vegetables sautéed in olive oil. Can be made gluten-free with alternative pasta."
    },
    {
        id: 8,
        name: "Iced Coffee",
        price: 3.99,
        category: "drinks",
         image: "/asset/66.jpg",
        description: "Chilled coffee with ice and a hint of sweetness",
        popular: false,
        ingredients: [
            "Arabica coffee", "Milk", "Simple syrup", "Ice cubes", "Vanilla extract"
        ],
        nutrition: {
            calories: 80,
            protein: "4g",
            carbs: "15g",
            fat: "2g"
        },
        allergens: ["Dairy"],
        cookingInfo: "Brewed fresh daily. Can be made with almond or oat milk upon request. Sweetness level adjustable."
    },
    {
        id: 9,
        name: "Fish Tacos",
        price: 14.99,
        category: "non-veg",
         image: "/asset/55.jpg",
        description: "Crispy fish fillets in soft tortillas with fresh salsa",
        popular: true,
        ingredients: [
            "Cod fillets", "Corn tortillas", "Cabbage slaw", "Pico de gallo",
            "Avocado crema", "Lime", "Cilantro", "Spices"
        ],
        nutrition: {
            calories: 380,
            protein: "22g",
            carbs: "42g",
            fat: "16g"
        },
        allergens: ["Fish", "Gluten"],
        cookingInfo: "Fish beer-battered and fried until golden. Served with homemade salsa and fresh lime wedges."
    },
    {
        id: 10,
        name: "Fruit Salad",
        price: 7.99,
        category: "dessert",
        image: "/asset/33.jpg",
        description: "Fresh seasonal fruits with a honey-lime dressing",
        popular: true,
        ingredients: [
            "Seasonal fruits", "Honey", "Lime juice", "Mint leaves",
            "Greek yogurt", "Pomegranate seeds"
        ],
        nutrition: {
            calories: 150,
            protein: "3g",
            carbs: "35g",
            fat: "1g"
        },
        allergens: ["Dairy"],
        cookingInfo: "Chopped fresh daily. Fruits vary by season. Can be served without yogurt for vegan option."
    },
    {
        id: 11,
        name: "Mango Smoothie",
        price: 5.99,
        category: "drinks",
        image: "/asset/11.jpg",
        description: "Refreshing mango smoothie with yogurt",
        popular: true,
        ingredients: [
            "Fresh mango", "Greek yogurt", "Honey", "Ice",
            "Orange juice", "Chia seeds"
        ],
        nutrition: {
            calories: 210,
            protein: "8g",
            carbs: "42g",
            fat: "3g"
        },
        allergens: ["Dairy"],
        cookingInfo: "Blended fresh to order. Can be made dairy-free with coconut yogurt. Sweetness adjustable."
    },
    {
        id: 12,
        name: "Cheesecake",
        price: 8.99,
        category: "dessert",
        image: "/asset/22.jpg",
        description: "Creamy cheesecake with a graham cracker crust",
        popular: true,
        ingredients: [
            "Cream cheese", "Graham crackers", "Sugar", "Eggs",
            "Sour cream", "Vanilla extract", "Lemon juice", "Butter"
        ],
        nutrition: {
            calories: 450,
            protein: "8g",
            carbs: "38g",
            fat: "30g"
        },
        allergens: ["Gluten", "Dairy", "Eggs"],
        cookingInfo: "Baked in water bath for creamy texture. Chilled for minimum 4 hours. Served with berry compote."
    }
];

// DOM elements
const menuContainer = document.getElementById('menu-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn'); 
const resultsInfo = document.getElementById('results-info');
const filterStats = document.getElementById('filter-stats');

// Current filter and sort states
let currentCategory = 'all';
let currentSort = 'default';
let currentSearchTerm = '';

// Initialize the menu
function initMenu() {
    displayMenuItems(menuItems);
    setupEventListeners();
    updateResultsInfo(menuItems.length);
    updateFilterStats();
}

// Display menu items
function displayMenuItems(items) {
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuContainer.innerHTML = '<div class="no-results">No menu items found matching your criteria.</div>';
        return;
    }
    
    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.dataset.id = item.id;

        const popularBadge = item.popular ? '<span class="popular-badge">🔥 Popular</span>' : '';
        
        menuItemElement.innerHTML = `
            <div style="position:relative;">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                ${popularBadge}
            </div>
            <div class="item-details">
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                </div>
                <span class="item-category ${item.category}">${getCategoryName(item.category)}</span>
                <p class="item-description">${item.description}</p>
            </div>
        `;
        
        // Add click event to redirect to detail page
        menuItemElement.addEventListener('click', () => {
           
            localStorage.setItem('selectedMenuItem', JSON.stringify(item));
            
            window.location.href = 'detali.html';
        });
        
        menuContainer.appendChild(menuItemElement);
    });
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

// Filter menu items by category
function filterByCategory(items, category) {
    if (category === 'all') return items;
    return items.filter(item => item.category === category);
}

// Search menu items
function searchItems(items, searchTerm) {
    if (!searchTerm) return items;
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return items.filter(item => 
        item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
}

// Sort menu items
function sortItems(items, sortType) {
    const sortedItems = [...items];
    switch(sortType) {
        case 'price-low':
            return sortedItems.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedItems.sort((a, b) => b.price - a.price);
        default:
            return sortedItems;
    }
}

// Update results information
function updateResultsInfo(count) {
    let categoryText = '';
    
    if (currentCategory !== 'all') {
        categoryText = ` in ${getCategoryName(currentCategory)}`;
    }
    
    if (currentSearchTerm) {
        resultsInfo.textContent = `Showing ${count} results for "${currentSearchTerm}"${categoryText}`;
    } else {
        resultsInfo.textContent = `Showing ${count} menu items${categoryText}`;
    }
}

// Update filter statistics
function updateFilterStats() {
    const stats = {
        'all': menuItems.length,
        'veg': menuItems.filter(item => item.category === 'veg').length,
        'non-veg': menuItems.filter(item => item.category === 'non-veg').length,
        'drinks': menuItems.filter(item => item.category === 'drinks').length,
        'dessert': menuItems.filter(item => item.category === 'dessert').length
    };
    
    filterStats.innerHTML = '';
    
    for (const category in stats) {
        const statElement = document.createElement('div');
        statElement.className = `stat-item ${category}`;
        statElement.textContent = `${getCategoryName(category)}: ${stats[category]}`;
        filterStats.appendChild(statElement);
    }
}

// Apply all filters and update display
function updateMenuDisplay() {
    let filteredItems = menuItems;
    
    // Apply category filter
    filteredItems = filterByCategory(filteredItems, currentCategory);
    
    // Apply search filter
    filteredItems = searchItems(filteredItems, currentSearchTerm);
    
    // Apply sorting
    filteredItems = sortItems(filteredItems, currentSort);
    
    // Display the filtered and sorted items
    displayMenuItems(filteredItems);
    
    updateResultsInfo(filteredItems.length);
}

// Set up event listeners
function setupEventListeners() {
    // Search input event
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        updateMenuDisplay();
    });
    
    // Filter button events
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            button.classList.add('active');
            
            // Update current category
            currentCategory = button.dataset.category;
            updateMenuDisplay();
        });
    });
    
    // Sort button events
    sortButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            sortButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current sort
            currentSort = button.dataset.sort;
            updateMenuDisplay();
        });
    });
}

// Initialize the menu when the page loads
document.addEventListener('DOMContentLoaded', initMenu);


