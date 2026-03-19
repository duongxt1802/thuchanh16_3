export const CATEGORIES = [
  { id: 1, name: "All",    icon: require("./assets/a1.png") },
  { id: 2, name: "Burger", icon: require("./assets/burger.png") },
  { id: 3, name: "Pizza",  icon: require("./assets/pizza.png") },
  { id: 4, name: "Drink",  icon: require("./assets/drink.png") },
  { id: 5, name: "Rice",   icon: require("./assets/rice.png") },
];

export const PRODUCTS = [
  { id: 1,  name: "Crispy Beef Burger",   category: "Burger", price: 28, oldPrice: 35, rating: 4.9, reviews: "3k+", time: "20-30", description: "A juicy beef patty with crispy lettuce, fresh tomatoes, melted cheese and our special house sauce, served in a toasted brioche bun.", tag: "Best Seller", img: require("./assets/b8.png") },
  { id: 2,  name: "BBQ Smash Burger",     category: "Burger", price: 32, oldPrice: 40, rating: 4.8, reviews: "2k+", time: "25-35", description: "Double smashed patty with smoky BBQ sauce, caramelized onions, pickles and aged cheddar on a sesame bun.", tag: "Hot", img: require("./assets/b1.png") },
  { id: 3,  name: "Spicy Chicken Burger", category: "Burger", price: 24, oldPrice: 30, rating: 4.7, reviews: "1.5k+", time: "20-30", description: "Crispy fried chicken thigh with spicy sriracha mayo, coleslaw and jalapeños in a milk bun.", tag: "Spicy", img: require("./assets/b2.png") },
  { id: 4,  name: "Classic Burger",       category: "Burger", price: 20, oldPrice: 26, rating: 4.5, reviews: "1k+", time: "15-25", description: "Simple and delicious classic beef burger with ketchup, mustard, pickles and onions.", tag: "Classic", img: require("./assets/b3.png") },
  { id: 5,  name: "Margherita Pizza",     category: "Pizza",  price: 22, oldPrice: 28, rating: 4.8, reviews: "2.5k+", time: "25-35", description: "Classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella and basil on a thin crispy crust.", tag: "Classic", img: require("./assets/p2.png") },
  { id: 6,  name: "Pepperoni Pizza",      category: "Pizza",  price: 26, oldPrice: 32, rating: 4.9, reviews: "4k+", time: "25-35", description: "Loaded with premium pepperoni, mozzarella and house tomato sauce on a hand-tossed crust.", tag: "Popular", img: require("./assets/p1.png") },
  { id: 7,  name: "Fresh Lemonade",       category: "Drink",  price: 8,  oldPrice: 10, rating: 4.6, reviews: "800+", time: "5-10", description: "Freshly squeezed lemon juice with mint, sugar syrup and sparkling water. Refreshing and zesty.", tag: "Fresh", img: require("./assets/d1.png") },
  { id: 8,  name: "Mango Smoothie",       category: "Drink",  price: 10, oldPrice: 13, rating: 4.7, reviews: "600+", time: "5-10", description: "Blended Alphonso mango with yogurt, honey and a pinch of cardamom. Thick and tropical.", tag: "New", img: require("./assets/d2.png") },
  { id: 9,  name: "Chicken Fried Rice",   category: "Rice",   price: 18, oldPrice: 22, rating: 4.5, reviews: "1k+", time: "15-25", description: "Wok-tossed jasmine rice with tender chicken, eggs, vegetables and savory soy sauce.", tag: "Filling", img: require("./assets/r1.png") },
  { id: 10, name: "Seafood Fried Rice",   category: "Rice",   price: 22, oldPrice: 28, rating: 4.6, reviews: "900+", time: "15-25", description: "Premium fried rice with shrimp, squid, crab meat and aromatic garlic butter.", tag: "Premium", img: require("./assets/r2.png") },
  
];

export const BANNERS = [
  { id: 1, title: "BURGER", subtitle: "Today's Hot Offer", discount: "10%\nOFF", img: require("./assets/b3.png") },
  { id: 2, title: "PIZZA",  subtitle: "Weekend Special",   discount: "15%\nOFF", img: require("./assets/p2.png") },
  { id: 3, title: "COMBO",  subtitle: "Burger + Drink",    discount: "20%\nOFF", img: require("./assets/b7.webp") },
];