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
}