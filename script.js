// Data Storage Manager
class DataManager {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        // Initialize users if not exists
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }

        // Initialize recipes with sample data if not exists
        if (!localStorage.getItem('recipes')) {
            const sampleRecipes = [
                {
                    id: Date.now() + 1,
                    title: "Classic Pancakes",
                    category: "Breakfast",
                    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
                    calories: 350,
                    energy: 1465,
                    servings: 4,
                    ingredients: [
                        { name: "All-purpose flour", quantity: "2 cups" },
                        { name: "Eggs", quantity: "2" },
                        { name: "Milk", quantity: "1.5 cups" },
                        { name: "Sugar", quantity: "2 tbsp" },
                        { name: "Baking powder", quantity: "2 tsp" }
                    ],
                    steps: [
                        "Mix dry ingredients (flour, sugar, baking powder) in a large bowl.",
                        "In another bowl, whisk eggs and milk together.",
                        "Pour wet ingredients into dry ingredients and mix until combined.",
                        "Heat a non-stick pan over medium heat.",
                        "Pour 1/4 cup batter for each pancake and cook until bubbles form.",
                        "Flip and cook until golden brown on both sides.",
                        "Serve hot with maple syrup and butter."
                    ],
                    favorite: false,
                    userId: null,
                    createdBy: "Admin"
                },
                {
                    id: Date.now() + 2,
                    title: "Spaghetti Carbonara",
                    category: "Dinner",
                    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500",
                    calories: 580,
                    energy: 2427,
                    servings: 4,
                    ingredients: [
                        { name: "Spaghetti", quantity: "400g" },
                        { name: "Bacon", quantity: "200g" },
                        { name: "Eggs", quantity: "4" },
                        { name: "Parmesan cheese", quantity: "1 cup" },
                        { name: "Black pepper", quantity: "to taste" }
                    ],
                    steps: [
                        "Boil water and cook spaghetti according to package directions.",
                        "While pasta cooks, fry bacon until crispy, then chop into pieces.",
                        "In a bowl, whisk eggs with grated parmesan cheese.",
                        "Drain pasta, reserving 1 cup of pasta water.",
                        "Add hot pasta to the bacon pan off heat.",
                        "Quickly stir in egg mixture, adding pasta water to create creamy sauce.",
                        "Season with black pepper and serve immediately."
                    ],
                    favorite: false,
                    userId: null,
                    createdBy: "Admin"
                },
                {
                    id: Date.now() + 3,
                    title: "Chocolate Chip Cookies",
                    category: "Dessert",
                    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500",
                    calories: 220,
                    energy: 920,
                    servings: 12,
                    ingredients: [
                        { name: "Butter", quantity: "1 cup" },
                        { name: "Brown sugar", quantity: "1 cup" },
                        { name: "Eggs", quantity: "2" },
                        { name: "Vanilla extract", quantity: "2 tsp" },
                        { name: "All-purpose flour", quantity: "2.5 cups" },
                        { name: "Chocolate chips", quantity: "2 cups" }
                    ],
                    steps: [
                        "Preheat oven to 375°F (190°C).",
                        "Cream together butter and brown sugar until fluffy.",
                        "Beat in eggs and vanilla extract.",
                        "Gradually mix in flour until well combined.",
                        "Fold in chocolate chips.",
                        "Drop rounded tablespoons of dough onto baking sheets.",
                        "Bake for 10-12 minutes until edges are golden.",
                        "Cool on baking sheet for 5 minutes before transferring."
                    ],
                    favorite: false,
                    userId: null,
                    createdBy: "Admin"
                },
                {
                    id: Date.now() + 4,
                    title: "Grilled Chicken Sandwich",
                    category: "Lunch",
                    image: "https://images.unsplash.com/photo-1553909489-cd47e0907910?w=500",
                    calories: 450,
                    energy: 1883,
                    servings: 2,
                    ingredients: [
                        { name: "Chicken breast", quantity: "2" },
                        { name: "Sourdough bread", quantity: "4 slices" },
                        { name: "Lettuce", quantity: "2 leaves" },
                        { name: "Tomato", quantity: "4 slices" },
                        { name: "Mayonnaise", quantity: "2 tbsp" }
                    ],
                    steps: [
                        "Season and grill chicken breast until cooked through.",
                        "Toast the sourdough bread slices lightly.",
                        "Slice the cooked chicken.",
                        "Spread mayonnaise on the bread.",
                        "Assemble the sandwich with chicken, lettuce, and tomato.",
                        "Serve immediately with a side of chips or salad."
                    ],
                    favorite: false,
                    userId: null,
                    createdBy: "Admin"
                },
                {
                    id: Date.now() + 5,
                    title: "Classic Guacamole",
                    category: "Snacks",
                    image: "https://images.unsplash.com/photo-1599921841793-9426e2a2b057?w=500",
                    calories: 150,
                    energy: 628,
                    servings: 4,
                    ingredients: [
                        { name: "Ripe avocados", quantity: "3" },
                        { name: "Lime", quantity: "1" },
                        { name: "Red onion, diced", quantity: "1/4 cup" },
                        { name: "Cilantro, chopped", quantity: "2 tbsp" },
                        { name: "Salt", quantity: "1/2 tsp" }
                    ],
                    steps: [
                        "Halve the avocados, remove the pit, and scoop the flesh into a bowl.",
                        "Mash the avocado with a fork to your desired consistency.",
                        "Squeeze the lime juice over the avocado to prevent browning.",
                        "Stir in the diced red onion and chopped cilantro.",
                        "Season with salt and mix well.",
                        "Serve immediately with tortilla chips."
                    ],
                    favorite: false,
                    userId: null,
                    createdBy: "Admin"
                },
                {
                    id: Date.now() + 6,
                    title: "Refreshing Mango Lassi",
                    category: "Beverages",
                    image: "https://images.unsplash.com/photo-1626803364121-00a54e97561d?w=500",
                    calories: 250,
                    energy: 1046,
                    servings: 2,
                    ingredients: [
                        { name: "Ripe mango, chopped", quantity: "1 cup" },
                        { name: "Plain yogurt", quantity: "1 cup" },
                        { name: "Milk", quantity: "1/2 cup" },
                        { name: "Sugar", quantity: "2 tbsp" },
                        { name: "Cardamom powder", quantity: "a pinch" }
                    ],
                    steps: [
                        "Combine the chopped mango, yogurt, milk, and sugar in a blender.",
                        "Blend until the mixture is smooth and creamy.",
                        "Add a pinch of cardamom powder and blend for another 5 seconds.",
                        "Pour into glasses and serve chilled.",
                        "Garnish with a mint leaf or a sprinkle of cardamom if desired."
                    ],
                    favorite: false,
                    userId: null,
                    createdBy: "Admin"
                }
            ];
            localStorage.setItem('recipes', JSON.stringify(sampleRecipes));
        }
    }
    // User methods
    getUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    saveUser(user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    findUser(email, password) {
        const users = this.getUsers();
        return users.find(u => u.email === email && u.password === password);
    }

    // Recipe methods
    getRecipes() {
        return JSON.parse(localStorage.getItem('recipes') || '[]');
    }

    saveRecipes(recipes) {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    addRecipe(recipe) {
        const recipes = this.getRecipes();
        recipes.push(recipe);
        this.saveRecipes(recipes);
    }

    updateRecipe(id, updatedRecipe) {
        const recipes = this.getRecipes();
        const index = recipes.findIndex(r => r.id === id);
        if (index !== -1) {
            recipes[index] = { ...recipes[index], ...updatedRecipe };
            this.saveRecipes(recipes);
        }
    }

    deleteRecipe(id) {
        let recipes = this.getRecipes();
        recipes = recipes.filter(r => r.id !== id);
        this.saveRecipes(recipes);
    }

    getRecipeById(id) {
        const recipes = this.getRecipes();
        return recipes.find(r => r.id === id);
    }

    // Session methods
    setCurrentUser(user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    }

    logout() {
        sessionStorage.removeItem('currentUser');
    }
}

// App Controller
class RecipeApp {
    constructor() {
        this.dataManager = new DataManager();
        this.currentRecipeId = null;
        this.currentStep = 0;
        this.editingRecipeId = null;
        this.currentCategory = 'All';
        this.init();
    }

    init() {
        this.checkAuth();
        this.attachEventListeners();
        this.attachValidationListeners();
    }

    checkAuth() {
        const user = this.dataManager.getCurrentUser();
        if (user) {
            this.showMainApp(user);
        } else {
            this.showLogin();
        }
    }

    showLogin() {
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('signupPage').classList.add('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }

    showSignup() {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('signupPage').classList.remove('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }

    showMainApp(user) {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('signupPage').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        document.getElementById('userName').textContent = `Hi, ${user.name}!`;
        this.renderCategories();
        this.renderRecipes();
    }

    attachEventListeners() {
        // Auth
        document.getElementById('goToSignup').addEventListener('click', (e) => {
            e.preventDefault();
            this.showSignup();
        });

        document.getElementById('goToLogin').addEventListener('click', (e) => {
            e.preventDefault();
            this.showLogin();
        });

        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignup();
        });

        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.handleLogout();
        });

        // Recipe actions
        document.getElementById('addRecipeBtn').addEventListener('click', () => {
            this.openRecipeModal();
        });

        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeRecipeModal();
        });

        document.getElementById('recipeModal').addEventListener('click', (e) => {
            if (e.target.id === 'recipeModal') {
                this.closeRecipeModal();
            }
        });

        document.getElementById('recipeForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSaveRecipe();
        });

        document.getElementById('addIngredient').addEventListener('click', () => {
            this.addIngredientInput();
        });

        document.getElementById('addStep').addEventListener('click', () => {
            this.addStepInput();
        });

        document.getElementById('backToHome').addEventListener('click', () => {
            this.showHomePage();
        });

        document.getElementById('exitCookingMode').addEventListener('click', () => {
            this.exitCookingMode();
        });

        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
    }

    attachValidationListeners() {
        // Real-time validation for signup form
        const signupName = document.getElementById('signupName');
        const signupEmail = document.getElementById('signupEmail');
        const signupPassword = document.getElementById('signupPassword');
        const signupConfirmPassword = document.getElementById('signupConfirmPassword');

        // Name validation
        signupName.addEventListener('blur', () => {
            this.validateName(signupName.value);
        });

        signupName.addEventListener('input', () => {
            if (signupName.value.length > 0) {
                this.validateName(signupName.value);
            }
        });

        // Email validation
        signupEmail.addEventListener('blur', () => {
            this.validateEmail(signupEmail.value, 'signup');
        });

        signupEmail.addEventListener('input', () => {
            if (signupEmail.value.length > 0) {
                this.validateEmail(signupEmail.value, 'signup');
            }
        });

        // Password validation with strength meter
        signupPassword.addEventListener('input', () => {
            this.validatePassword(signupPassword.value);
            this.updatePasswordStrength(signupPassword.value);
            if (signupConfirmPassword.value) {
                this.validateConfirmPassword(signupPassword.value, signupConfirmPassword.value);
            }
        });

        // Confirm password validation
        signupConfirmPassword.addEventListener('input', () => {
            this.validateConfirmPassword(signupPassword.value, signupConfirmPassword.value);
        });

        // Login email validation
        const loginEmail = document.getElementById('loginEmail');
        loginEmail.addEventListener('blur', () => {
            this.validateEmail(loginEmail.value, 'login');
        });
    }

    validateName(name) {
        const errorElement = document.getElementById('signupNameError');
        const nameRegex = /^[a-zA-Z\s]{3,50}$/;

        if (!name) {
            errorElement.textContent = 'Name is required';
            errorElement.classList.add('show');
            return false;
        }

        if (name.length < 3) {
            errorElement.textContent = 'Name must be at least 3 characters';
            errorElement.classList.add('show');
            return false;
        }

        if (name.length > 50) {
            errorElement.textContent = 'Name must be less than 50 characters';
            errorElement.classList.add('show');
            return false;
        }

        if (!nameRegex.test(name)) {
            errorElement.textContent = 'Name should only contain letters and spaces';
            errorElement.classList.add('show');
            return false;
        }

        errorElement.classList.remove('show');
        return true;
    }

    validateEmail(email, type) {
        const errorElement = document.getElementById(`${type}EmailError`);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            errorElement.textContent = 'Email is required';
            errorElement.classList.add('show');
            return false;
        }

        if (!emailRegex.test(email)) {
            errorElement.textContent = 'Please enter a valid email address';
            errorElement.classList.add('show');
            return false;
        }

        errorElement.classList.remove('show');
        return true;
    }

    validatePassword(password) {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[@$!%*?&]/.test(password)
        };

        // Update requirement indicators
        document.getElementById('req-length').classList.toggle('valid', requirements.length);
        document.getElementById('req-length').classList.toggle('invalid', !requirements.length);
        document.getElementById('req-length').querySelector('span').textContent = requirements.length ? '✓' : '○';

        document.getElementById('req-uppercase').classList.toggle('valid', requirements.uppercase);
        document.getElementById('req-uppercase').classList.toggle('invalid', !requirements.uppercase);
        document.getElementById('req-uppercase').querySelector('span').textContent = requirements.uppercase ? '✓' : '○';

        document.getElementById('req-lowercase').classList.toggle('valid', requirements.lowercase);
        document.getElementById('req-lowercase').classList.toggle('invalid', !requirements.lowercase);
        document.getElementById('req-lowercase').querySelector('span').textContent = requirements.lowercase ? '✓' : '○';

        document.getElementById('req-number').classList.toggle('valid', requirements.number);
        document.getElementById('req-number').classList.toggle('invalid', !requirements.number);
        document.getElementById('req-number').querySelector('span').textContent = requirements.number ? '✓' : '○';

        document.getElementById('req-special').classList.toggle('valid', requirements.special);
        document.getElementById('req-special').classList.toggle('invalid', !requirements.special);
        document.getElementById('req-special').querySelector('span').textContent = requirements.special ? '✓' : '○';

        const allValid = Object.values(requirements).every(r => r);
        return allValid;
    }

    updatePasswordStrength(password) {
        const strengthBar = document.getElementById('passwordStrengthBar');
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[@$!%*?&]/.test(password)) strength++;

        strengthBar.className = 'password-strength-bar';

        if (strength <= 2) {
            strengthBar.classList.add('weak');
        } else if (strength <= 4) {
            strengthBar.classList.add('medium');
        } else {
            strengthBar.classList.add('strong');
        }
    }

    validateConfirmPassword(password, confirmPassword) {
        const errorElement = document.getElementById('signupConfirmPasswordError');

        if (!confirmPassword) {
            errorElement.textContent = 'Please confirm your password';
            errorElement.classList.add('show');
            return false;
        }

        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match';
            errorElement.classList.add('show');
            return false;
        }

        errorElement.classList.remove('show');
        return true;
    }

    handleLogin() {
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        // Validate email
        if (!this.validateEmail(email, 'login')) {
            return;
        }

        // Check if password is empty
        if (!password) {
            const errorElement = document.getElementById('loginPasswordError');
            errorElement.textContent = 'Password is required';
            errorElement.classList.add('show');
            return;
        }

        const user = this.dataManager.findUser(email, password);
        if (user) {
            this.dataManager.setCurrentUser(user);
            this.showMainApp(user);
            // Clear any error messages
            document.getElementById('loginEmailError').classList.remove('show');
            document.getElementById('loginPasswordError').classList.remove('show');
        } else {
            const errorElement = document.getElementById('loginPasswordError');
            errorElement.textContent = 'Invalid email or password';
            errorElement.classList.add('show');
        }
    }

    handleSignup() {
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        // Validate all fields
        const isNameValid = this.validateName(name);
        const isEmailValid = this.validateEmail(email, 'signup');
        const isPasswordValid = this.validatePassword(password);
        const isConfirmPasswordValid = this.validateConfirmPassword(password, confirmPassword);

        // If any validation fails, stop
        if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            return;
        }

        // Check if email already exists
        const users = this.dataManager.getUsers();
        if (users.find(u => u.email === email)) {
            const errorElement = document.getElementById('signupEmailError');
            errorElement.textContent = 'Email already registered! Please login.';
            errorElement.classList.add('show');
            return;
        }

        const user = {
            id: Date.now(),
            name,
            email,
            password
        };

        this.dataManager.saveUser(user);
        alert('Account created successfully! Please login with your credentials.');
        document.getElementById('signupForm').reset();

        // Clear all error messages and reset password strength
        document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.requirement').forEach(el => {
            el.classList.remove('valid');
            el.classList.add('invalid');
            el.querySelector('span').textContent = '○';
        });
        document.getElementById('passwordStrengthBar').className = 'password-strength-bar';

        this.showLogin();
    }

    handleLogout() {
        this.dataManager.logout();
        this.showLogin();
    }

    renderCategories() {
        const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks', 'Beverages'];
        const container = document.getElementById('categoriesContainer');

        container.innerHTML = categories.map(cat => `
                    <button class="category-btn ${cat === this.currentCategory ? 'active' : ''}" 
                            data-category="${cat}">${cat}</button>
                `).join('');

        container.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.currentCategory = e.target.dataset.category;
                this.renderCategories();
                this.renderRecipes();
            });
        });
    }

    renderRecipes(searchTerm = '') {
        let recipes = this.dataManager.getRecipes();
        const currentUser = this.dataManager.getCurrentUser();

        // Filter by category
        if (this.currentCategory !== 'All') {
            recipes = recipes.filter(r => r.category === this.currentCategory);
        }

        // Filter by search
        if (searchTerm) {
            recipes = recipes.filter(r =>
                r.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        const grid = document.getElementById('recipeGrid');

        if (recipes.length === 0) {
            grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2em; color: var(--text-light);">No recipes found. Add your first recipe!</p>';
            return;
        }

        grid.innerHTML = recipes.map(recipe => {
            const isOwner = recipe.userId === currentUser.id;
            const isSampleRecipe = recipe.userId === null; // Sample recipes have null userId
            return `
                    <div class="recipe-card">
                        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" 
                             onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500'">
                        <div class="recipe-content">
                            <div class="recipe-category">${recipe.category}</div>
                            <h3 class="recipe-title">${recipe.title}</h3>
                            <p style="color: var(--text-light); font-size: 0.9em;">
                                ${recipe.ingredients.length} ingredients • ${recipe.steps.length} steps<br>
                                🔥 ${recipe.calories} cal • ⚡ ${recipe.energy} kJ • 🍽️ ${recipe.servings} servings
                            </p>
                            <p style="color: var(--text-light); font-size: 0.85em; margin-top: 5px;">
                                👨‍🍳 By: ${recipe.createdBy || 'Unknown'}
                            </p>
                            <div class="recipe-actions">
                                <button class="btn-small btn-view" data-id="${recipe.id}">View</button>
                                ${(isOwner && !isSampleRecipe) ? `<button class="btn-small btn-edit" data-id="${recipe.id}">Edit</button>` : ''}
                                ${(isOwner && !isSampleRecipe) ? `<button class="btn-small btn-delete" data-id="${recipe.id}">Delete</button>` : ''}
                            </div>
                        </div>
                    </div>
                `}).join('');

        // Attach event listeners
        grid.querySelectorAll('.btn-view').forEach(btn => {
            btn.addEventListener('click', () => this.viewRecipe(parseInt(btn.dataset.id)));
        });

        grid.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', () => this.editRecipe(parseInt(btn.dataset.id)));
        });

        grid.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', () => this.deleteRecipe(parseInt(btn.dataset.id)));
        });
    }

    handleSearch(searchTerm) {
        this.renderRecipes(searchTerm);
    }

    viewRecipe(id) {
        this.currentRecipeId = id;
        const recipe = this.dataManager.getRecipeById(id);

        if (!recipe) return;

        const detailContent = document.getElementById('recipeDetailContent');
        detailContent.innerHTML = `
                    <div class="detail-header">
                        <img src="${recipe.image}" alt="${recipe.title}" class="detail-image"
                             onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500'">
                        <h1 class="detail-title">${recipe.title}</h1>
                        <div class="recipe-category">${recipe.category}</div>
                        <div style="display: flex; gap: 20px; justify-content: center; margin-top: 15px; flex-wrap: wrap;">
                            <div style="background: var(--bg-light); padding: 12px 20px; border-radius: 10px;">
                                <strong style="color: var(--primary);">🔥 ${recipe.calories}</strong> calories
                            </div>
                            <div style="background: var(--bg-light); padding: 12px 20px; border-radius: 10px;">
                                <strong style="color: var(--secondary);">⚡ ${recipe.energy}</strong> kJ
                            </div>
                            <div style="background: var(--bg-light); padding: 12px 20px; border-radius: 10px;">
                                <strong style="color: var(--accent);">🍽️ ${recipe.servings}</strong> servings
                            </div>
                        </div>
                        <p style="margin-top: 15px; color: var(--text-light);">👨‍🍳 Created by: <strong>${recipe.createdBy || 'Unknown'}</strong></p>
                    </div>

                    <div class="ingredients-section">
                        <h2 class="section-title">🥘 Ingredients</h2>
                        ${recipe.ingredients.map(ing => `
                            <div class="ingredient-item">
                                <span>${ing.name}</span>
                                <strong>${ing.quantity}</strong>
                            </div>
                        `).join('')}
                    </div>

                    <div class="steps-section">
                        <h2 class="section-title">👨‍🍳 Cooking Steps</h2>
                        ${recipe.steps.map((step, idx) => `
                            <div class="step-item">
                                <div class="step-number">${idx + 1}</div>
                                <p>${step}</p>
                            </div>
                        `).join('')}
                    </div>

                    <button class="btn" id="startCookingBtn" style="margin-top: 30px;">
                        Start Cooking Mode 🍳
                    </button>
                `;

        document.getElementById('startCookingBtn').addEventListener('click', () => {
            this.startCookingMode(recipe);
        });

        document.getElementById('homePage').classList.add('hidden');
        document.getElementById('detailPage').classList.remove('hidden');
    }

    startCookingMode(recipe) {
        this.currentStep = 0;
        document.getElementById('detailPage').classList.add('hidden');
        document.getElementById('cookingPage').classList.remove('hidden');
        this.renderCookingStep(recipe);
    }

    renderCookingStep(recipe) {
        const stepContent = document.getElementById('cookingStepContent');
        const controls = document.getElementById('cookingControls');

        if (this.currentStep < recipe.steps.length) {
            stepContent.innerHTML = `
                        <div class="cooking-step-number">Step ${this.currentStep + 1} of ${recipe.steps.length}</div>
                        <div class="cooking-step-text">${recipe.steps[this.currentStep]}</div>
                    `;

            controls.innerHTML = `
                        ${this.currentStep > 0 ? '<button class="btn-nav btn-prev" id="prevStep">← Previous</button>' : ''}
                        ${this.currentStep < recipe.steps.length - 1 ?
                    '<button class="btn-nav btn-next" id="nextStep">Next →</button>' :
                    '<button class="btn-nav btn-finish" id="finishCooking">Finish! 🎉</button>'}
                    `;

            if (this.currentStep > 0) {
                document.getElementById('prevStep').addEventListener('click', () => {
                    this.currentStep--;
                    this.renderCookingStep(recipe);
                });
            }

            if (this.currentStep < recipe.steps.length - 1) {
                document.getElementById('nextStep').addEventListener('click', () => {
                    this.currentStep++;
                    this.renderCookingStep(recipe);
                });
            } else {
                document.getElementById('finishCooking').addEventListener('click', () => {
                    alert('Congratulations! You completed the recipe! 🎉');
                    this.exitCookingMode();
                });
            }
        }
    }

    exitCookingMode() {
        document.getElementById('cookingPage').classList.add('hidden');
        document.getElementById('detailPage').classList.remove('hidden');
    }

    showHomePage() {
        document.getElementById('detailPage').classList.add('hidden');
        document.getElementById('homePage').classList.remove('hidden');
        this.renderRecipes();
    }

    openRecipeModal(recipe = null) {
        this.editingRecipeId = recipe ? recipe.id : null;
        document.getElementById('modalTitle').textContent = recipe ? 'Edit Recipe' : 'Add Recipe';
        document.getElementById('recipeModal').classList.remove('hidden');

        if (recipe) {
            document.getElementById('recipeTitle').value = recipe.title;
            document.getElementById('recipeCategory').value = recipe.category;
            document.getElementById('recipeImage').value = recipe.image;
            document.getElementById('recipeCalories').value = recipe.calories || 0;
            document.getElementById('recipeEnergy').value = recipe.energy || 0;
            document.getElementById('recipeServings').value = recipe.servings || 1;

            // Load ingredients
            const ingredientsContainer = document.getElementById('ingredientsContainer');
            ingredientsContainer.innerHTML = '';
            recipe.ingredients.forEach(ing => {
                this.addIngredientInput(ing.name, ing.quantity);
            });

            // Load steps
            const stepsContainer = document.getElementById('stepsContainer');
            stepsContainer.innerHTML = '';
            recipe.steps.forEach(step => {
                this.addStepInput(step);
            });
        } else {
            document.getElementById('recipeForm').reset();
            document.getElementById('ingredientsContainer').innerHTML = '';
            document.getElementById('stepsContainer').innerHTML = '';
            this.addIngredientInput();
            this.addStepInput();
        }
    }

    closeRecipeModal() {
        document.getElementById('recipeModal').classList.add('hidden');
    }

    addIngredientInput(name = '', quantity = '') {
        const container = document.getElementById('ingredientsContainer');
        const div = document.createElement('div');
        div.className = 'ingredient-input-group';
        div.innerHTML = `
                    <input type="text" placeholder="Ingredient name" value="${name}" required>
                    <input type="text" placeholder="Quantity" value="${quantity}" required>
                    <button type="button" class="btn-remove">×</button>
                `;

        div.querySelector('.btn-remove').addEventListener('click', () => {
            div.remove();
        });

        container.appendChild(div);
    }

    addStepInput(stepText = '') {
        const container = document.getElementById('stepsContainer');
        const div = document.createElement('div');
        div.className = 'ingredient-input-group';
        div.innerHTML = `
                    <textarea placeholder="Describe this cooking step..." required>${stepText}</textarea>
                    <button type="button" class="btn-remove">×</button>
                `;

        div.querySelector('.btn-remove').addEventListener('click', () => {
            div.remove();
        });

        container.appendChild(div);
    }

    handleSaveRecipe() {
        const title = document.getElementById('recipeTitle').value;
        const category = document.getElementById('recipeCategory').value;
        const image = document.getElementById('recipeImage').value;
        const calories = parseInt(document.getElementById('recipeCalories').value);
        const energy = parseInt(document.getElementById('recipeEnergy').value);
        const servings = parseInt(document.getElementById('recipeServings').value);

        // Gather ingredients
        const ingredients = [];
        document.querySelectorAll('#ingredientsContainer .ingredient-input-group').forEach(group => {
            const inputs = group.querySelectorAll('input');
            ingredients.push({
                name: inputs[0].value,
                quantity: inputs[1].value
            });
        });

        // Gather steps
        const steps = [];
        document.querySelectorAll('#stepsContainer textarea').forEach(textarea => {
            steps.push(textarea.value);
        });

        const currentUser = this.dataManager.getCurrentUser();
        const recipeData = {
            title,
            category,
            image,
            calories,
            energy,
            servings,
            ingredients,
            steps,
            favorite: false,
            userId: currentUser.id,
            createdBy: currentUser.name
        };

        if (this.editingRecipeId) {
            // Check if user owns this recipe
            const existingRecipe = this.dataManager.getRecipeById(this.editingRecipeId);

            // Prevent editing sample recipes
            if (existingRecipe.userId === null) {
                alert('Sample recipes cannot be edited!');
                return;
            }

            if (existingRecipe.userId !== currentUser.id) {
                alert('You can only edit recipes you created!');
                return;
            }
            this.dataManager.updateRecipe(this.editingRecipeId, recipeData);
        } else {
            recipeData.id = Date.now();
            this.dataManager.addRecipe(recipeData);
        }

        this.closeRecipeModal();
        this.renderRecipes();
        alert(this.editingRecipeId ? 'Recipe updated!' : 'Recipe added successfully!');
    }

    editRecipe(id) {
        const recipe = this.dataManager.getRecipeById(id);
        const currentUser = this.dataManager.getCurrentUser();

        if (!recipe) return;

        // Check if it's a sample recipe (userId is null)
        if (recipe.userId === null) {
            alert('Sample recipes cannot be edited!');
            return;
        }

        // Check if user owns this recipe
        if (recipe.userId !== currentUser.id) {
            alert('You can only edit recipes you created!');
            return;
        }

        this.openRecipeModal(recipe);
    }

    deleteRecipe(id) {
        const recipe = this.dataManager.getRecipeById(id);
        const currentUser = this.dataManager.getCurrentUser();

        if (!recipe) return;

        // Check if it's a sample recipe (userId is null)
        if (recipe.userId === null) {
            alert('Sample recipes cannot be deleted!');
            return;
        }

        // Check if user owns this recipe
        if (recipe.userId !== currentUser.id) {
            alert('You can only delete recipes you created!');
            return;
        }

        if (confirm('Are you sure you want to delete this recipe?')) {
            this.dataManager.deleteRecipe(id);
            this.renderRecipes();
        }
    }
}

// Initialize app
const app = new RecipeApp();
