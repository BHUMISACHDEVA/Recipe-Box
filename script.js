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
                }
            ];
            localStorage.setItem('recipes', JSON.stringify(sampleRecipes));
        }
    }
}