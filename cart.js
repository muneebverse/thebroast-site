/**
 * The Broast - Complete Cart Management System
 * Single source of truth for menu data and cart operations
 * Persistent cart using localStorage
 */

// ─── CART STATE ───
let cart =[];
let currentFilter = 'all';

// ─── LOAD CART ON INIT ───
function loadCart() {
  const saved = localStorage.getItem('broastCart');
  cart = saved ? JSON.parse(saved) :[];
}

/**
 * COMPLETE MENU ITEMS - Extracted from Menu Images
 */
const menuItems =[
  // ── DRINKS ──
  { id: 1, name: 'PEPSI (Tin)', price: 120, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 2, name: 'PEPSI (1.5 L)', price: 210, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 3, name: 'COCA COLA (Tin)', price: 120, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 4, name: 'COCA COLA (1.5 L)', price: 210, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 5, name: 'SPRITE (Tin)', price: 120, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 6, name: 'SPRITE (1.5 L)', price: 210, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 7, name: '7UP (Tin)', price: 120, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 8, name: '7UP (1.5 L)', price: 210, category: 'drinks', desc: 'Chilled beverage', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 9, name: 'MINERAL WATER', price: 110, category: 'drinks', desc: 'Fresh water', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 10, name: 'MINT MARGARITA', price: 300, category: 'drinks', desc: 'Refreshing mint drink', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 11, name: 'FRESHLIME', price: 150, category: 'drinks', desc: 'Fresh lime drink', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 12, name: 'LEMONADE', price: 170, category: 'drinks', desc: 'Classic lemonade', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },
  { id: 13, name: 'TEA', price: 100, category: 'drinks', desc: 'Hot tea', image: 'https://images.unsplash.com/photo-1527003373465-3a8b4e889f59?w=600&q=80&fit=crop', badge: null },

  // ── SALADS ──
  { id: 14, name: 'RUSSIAN SALID', price: 800, category: 'salads', desc: 'Fresh mix with cream', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop', badge: null },
  { id: 15, name: 'KACHUMBER SALID', price: 200, category: 'salads', desc: 'Chopped fresh vegetables', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop', badge: null },
  { id: 16, name: 'FRESH SALID', price: 100, category: 'salads', desc: 'Seasonal fresh salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop', badge: null },
  { id: 17, name: 'MINT RAITA', price: 100, category: 'salads', desc: 'Yogurt with mint', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop', badge: null },

  // ── NOODLES & CHOPSUEY ──
  { id: 18, name: 'AMERICAN CHOPSUEY (Full)', price: 1200, category: 'noodles', desc: 'Crispy noodles with sweet sauce', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 19, name: 'AMERICAN CHOPSUEY (Half)', price: 750, category: 'noodles', desc: 'Crispy noodles with sweet sauce', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 20, name: 'CHICKEN CHOPSUEY (Full)', price: 1150, category: 'noodles', desc: 'Classic chicken chopsuey', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 21, name: 'CHICKEN CHOPSUEY (Half)', price: 700, category: 'noodles', desc: 'Classic chicken chopsuey', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 22, name: 'CHEF SPECIAL CHOPSUEY (Full)', price: 1300, category: 'noodles', desc: 'Signature special chopsuey', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: "Chef's Pick" },
  { id: 23, name: 'CHEF SPECIAL CHOPSUEY (Half)', price: 800, category: 'noodles', desc: 'Signature special chopsuey', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 24, name: 'CHICKEN CHOWMEIN (Full)', price: 1350, category: 'noodles', desc: 'Stir fried noodles with chicken', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 25, name: 'CHICKEN CHOWMEIN (Half)', price: 850, category: 'noodles', desc: 'Stir fried noodles with chicken', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 26, name: 'SPECIAL CHOWMEIN (Full)', price: 1400, category: 'noodles', desc: 'Special mixed chowmein', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 27, name: 'SPECIAL CHOWMEIN (Half)', price: 850, category: 'noodles', desc: 'Special mixed chowmein', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 28, name: 'VEGETABLE CHOWMEIN (Full)', price: 1100, category: 'noodles', desc: 'Stir fried noodles with veggies', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 29, name: 'VEGETABLE CHOWMEIN (Half)', price: 700, category: 'noodles', desc: 'Stir fried noodles with veggies', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 30, name: 'PRAWN CHOWMEIN (Full)', price: 1450, category: 'noodles', desc: 'Stir fried noodles with prawns', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },
  { id: 31, name: 'PRAWN CHOWMEIN (Half)', price: 900, category: 'noodles', desc: 'Stir fried noodles with prawns', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop', badge: null },

  // ── SEA FOOD ──
  { id: 32, name: 'FISH CHILLI DRY', price: 1800, category: 'seafood', desc: 'Spicy dry fish', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 33, name: 'KUNG PAO FISH (Full)', price: 1600, category: 'seafood', desc: 'Spicy fish with peanuts', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 34, name: 'KUNG PAO FISH (Half)', price: 950, category: 'seafood', desc: 'Spicy fish with peanuts', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 35, name: 'FISH GARLIC SAUCE (Full)', price: 1580, category: 'seafood', desc: 'Fish in savory garlic sauce', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 36, name: 'FISH GARLIC SAUCE (Half)', price: 900, category: 'seafood', desc: 'Fish in savory garlic sauce', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 37, name: 'SWEET AND SOUR FISH (Full)', price: 1500, category: 'seafood', desc: 'Perfectly balanced sweet and sour fish', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 38, name: 'SWEET AND SOUR FISH (Half)', price: 850, category: 'seafood', desc: 'Perfectly balanced sweet and sour fish', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 39, name: 'SHANGHAI FISH (Full)', price: 1550, category: 'seafood', desc: 'Authentic Shanghai style fish', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 40, name: 'SHANGHAI FISH (Half)', price: 900, category: 'seafood', desc: 'Authentic Shanghai style fish', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 41, name: 'PRAWN CHILLI DRY', price: 2100, category: 'seafood', desc: 'Spicy dry prawns', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 42, name: 'PRAWN OYSTER SAUCE (Full)', price: 1850, category: 'seafood', desc: 'Prawns cooked in oyster sauce', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 43, name: 'PRAWN OYSTER SAUCE (Half)', price: 1350, category: 'seafood', desc: 'Prawns cooked in oyster sauce', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 44, name: 'PRAWN GARLIC SAUCE (Full)', price: 1680, category: 'seafood', desc: 'Prawns in savory garlic sauce', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 45, name: 'PRAWN GARLIC SAUCE (Half)', price: 1020, category: 'seafood', desc: 'Prawns in savory garlic sauce', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 46, name: 'HOT CHILLI PRAWN (Full)', price: 1850, category: 'seafood', desc: 'Extra spicy hot chilli prawns', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 47, name: 'HOT CHILLI PRAWN (Half)', price: 1350, category: 'seafood', desc: 'Extra spicy hot chilli prawns', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 48, name: 'KUNG PAO PRAWN (Full)', price: 1750, category: 'seafood', desc: 'Spicy prawns with peanuts', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },
  { id: 49, name: 'KUNG PAO PRAWN (Half)', price: 1050, category: 'seafood', desc: 'Spicy prawns with peanuts', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698b00?w=600&q=80&fit=crop', badge: null },

  // ── SOUP ──
  { id: 50, name: 'THE BROAST SPECIAL SOUP (Full)', price: 1300, category: 'soup', desc: 'Our signature special soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: 'Bestseller' },
  { id: 51, name: 'THE BROAST SPECIAL SOUP (Half)', price: 800, category: 'soup', desc: 'Our signature special soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 52, name: 'HOT AND SOUR SOUP (Full)', price: 1200, category: 'soup', desc: 'Classic hot and sour flavor', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 53, name: 'HOT AND SOUR SOUP (Half)', price: 750, category: 'soup', desc: 'Classic hot and sour flavor', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 54, name: 'SZECHUAN ALMOND SOUP (Full)', price: 1300, category: 'soup', desc: 'Spicy soup with almonds', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 55, name: 'SZECHUAN ALMOND SOUP (Half)', price: 600, category: 'soup', desc: 'Spicy soup with almonds', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 56, name: 'THAI CLEAR SOUP (Full)', price: 1200, category: 'soup', desc: 'Light Thai style clear soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 57, name: 'THAI CLEAR SOUP (Half)', price: 700, category: 'soup', desc: 'Light Thai style clear soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 58, name: 'CHICKEN CORN SOUP (Full)', price: 1220, category: 'soup', desc: 'Thick and comforting', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 59, name: 'CHICKEN CORN SOUP (Half)', price: 750, category: 'soup', desc: 'Thick and comforting', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 60, name: 'NOODLES SOUP (Full)', price: 1100, category: 'soup', desc: 'Hearty noodles soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 61, name: 'NOODLES SOUP (Half)', price: 700, category: 'soup', desc: 'Hearty noodles soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 62, name: 'CHICKEN VEGETABLE CLEAR SOUP (Full)', price: 1100, category: 'soup', desc: 'Healthy clear soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 63, name: 'CHICKEN VEGETABLE CLEAR SOUP (Half)', price: 650, category: 'soup', desc: 'Healthy clear soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 64, name: 'WONTON VEG. SOUP (Full)', price: 1200, category: 'soup', desc: 'Delicious wonton soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },
  { id: 65, name: 'WONTON VEG. SOUP (Half)', price: 750, category: 'soup', desc: 'Delicious wonton soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop', badge: null },

  // ── STARTER ──
  { id: 66, name: 'DYNAMITE SHRIMPS', price: 1450, category: 'starter', desc: 'Coated in a mixture of mayonnaise and sriracha sauce', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: 'Popular' },
  { id: 67, name: 'DYNAMITE CHICKEN', price: 1250, category: 'starter', desc: 'Crispy chicken bites coated in a mixture of mayonnaise and sriracha sauce', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 68, name: 'SWEET AND SPICY HONEY WINGS (Full)', price: 1350, category: 'starter', desc: 'If you are craving some sticky sweet and spicy you will love these hot honey wings', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 69, name: 'SWEET AND SPICY HONEY WINGS (Half)', price: 750, category: 'starter', desc: 'If you are craving some sticky sweet and spicy you will love these hot honey wings', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 70, name: 'DUMPLINGS STEAMED/FRIED (8 PCS)', price: 1050, category: 'starter', desc: 'Steamed dumplings have a soft and delicated texture fried dumplings are crispy on the other side', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 71, name: 'HONEY GLAZED CHICKEN BALLS (Full)', price: 1250, category: 'starter', desc: 'The meat balls are fragrant and sweated with honey glaze', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 72, name: 'HONEY GLAZED CHICKEN BALLS (Half)', price: 650, category: 'starter', desc: 'The meat balls are fragrant and sweated with honey glaze', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 73, name: 'PRAWN TEMPURA (Full)', price: 2000, category: 'starter', desc: 'Light and crispy butter fried prawns', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 74, name: 'PRAWN TEMPURA (Half)', price: 1100, category: 'starter', desc: 'Light and crispy butter fried prawns', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 75, name: 'CHICKEN DRUMSTICK (Full)', price: 1350, category: 'starter', desc: 'Spicy mixed chicken drumsticks seasoned with chinese spices', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 76, name: 'CHICKEN DRUMSTICK (Half)', price: 850, category: 'starter', desc: 'Spicy mixed chicken drumsticks seasoned with chinese spices', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 77, name: 'DHAKA CHICKEN (Full)', price: 1500, category: 'starter', desc: 'Spicy cubes fried chicken with red chilli and tasty lemon for bold flavour and top with sesame seeds', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 78, name: 'DHAKA CHICKEN (Half)', price: 900, category: 'starter', desc: 'Spicy cubes fried chicken with red chilli and tasty lemon for bold flavour and top with sesame seeds', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 79, name: 'FRENCH FRIES', price: 400, category: 'starter', desc: 'Golden and crispy', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 80, name: 'FISH CRACKERS', price: 400, category: 'starter', desc: 'Crispy fish crackers', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 81, name: 'FISH KATSU (Full)', price: 1950, category: 'starter', desc: 'Breaded and fried fish', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 82, name: 'FISH KATSU (Half)', price: 1050, category: 'starter', desc: 'Breaded and fried fish', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 83, name: 'LOADED FRIES', price: 750, category: 'starter', desc: 'Fries with cheese and chicken', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 84, name: 'THAI CHEESE BALL (Full)', price: 1750, category: 'starter', desc: 'Cheesy centers with crispy shell', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },
  { id: 85, name: 'THAI CHEESE BALL (Half)', price: 950, category: 'starter', desc: 'Cheesy centers with crispy shell', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&fit=crop', badge: null },

  // ── POULTRY ──
  { id: 86, name: 'SESAME LEMON CHICKEN DRY', price: 1400, category: 'poultry', desc: 'Crispy fried chicken glazed in our special sauce and top with sesame seeds', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 87, name: 'CASHEWNUT CHICKEN THAI STYLE (Full)', price: 1250, category: 'poultry', desc: 'Stir fried chicken cubes topped with roasted cashewnuts and szechuan sauces', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 88, name: 'CASHEWNUT CHICKEN THAI STYLE (Half)', price: 820, category: 'poultry', desc: 'Stir fried chicken cubes topped with roasted cashewnuts and szechuan sauces', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 89, name: 'HONG KONG CHICKEN (Full)', price: 1250, category: 'poultry', desc: 'Stir fried chicken cubes cooked with baby corn/mushroom and special brown sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 90, name: 'HONG KONG CHICKEN (Half)', price: 800, category: 'poultry', desc: 'Stir fried chicken cubes cooked with baby corn/mushroom and special brown sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 91, name: 'KUNG PAO CHICKEN (Full)', price: 1280, category: 'poultry', desc: 'Stir fried chicken dry chillies roasted peanuts and chilli oil in spicy sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 92, name: 'KUNG PAO CHICKEN (Half)', price: 820, category: 'poultry', desc: 'Stir fried chicken dry chillies roasted peanuts and chilli oil in spicy sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 93, name: 'OYSTER SAUCE CHICKEN (Full)', price: 1300, category: 'poultry', desc: 'Oyster chicken is made with chicken thighs in a salty and sticky mixture of oyster sauce and garlic', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 94, name: 'OYSTER SAUCE CHICKEN (Half)', price: 820, category: 'poultry', desc: 'Oyster chicken is made with chicken thighs in a salty and sticky mixture of oyster sauce and garlic', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 95, name: 'SHANGHAI CHICKEN (Full)', price: 1220, category: 'poultry', desc: 'Fried chicken dish it involves coated fried chicken with an array of spices', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 96, name: 'SHANGHAI CHICKEN (Half)', price: 800, category: 'poultry', desc: 'Fried chicken dish it involves coated fried chicken with an array of spices', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 97, name: 'SZECHUAN CHICKEN (Full)', price: 1250, category: 'poultry', desc: 'Stir fried chicken with dry red chillies capsicum onions green chillies glaze in a spicy schezwan sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 98, name: 'SZECHUAN CHICKEN (Half)', price: 850, category: 'poultry', desc: 'Stir fried chicken with dry red chillies capsicum onions green chillies glaze in a spicy schezwan sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 99, name: 'CHICKEN CHILLI DRY', price: 1650, category: 'poultry', desc: 'Stir fried sliced chicken with green chillies garlic and onion sauted in chinese sources', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 100, name: 'SWEET AND SOUR CHICKEN (Full)', price: 1220, category: 'poultry', desc: 'Chicken chunks tangy sweet and sour peppers perfectly balanced flavours', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 101, name: 'SWEET AND SOUR CHICKEN (Half)', price: 750, category: 'poultry', desc: 'Chicken chunks tangy sweet and sour peppers perfectly balanced flavours', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 102, name: 'SIZZLING CHICKEN (Full)', price: 1180, category: 'poultry', desc: 'Juicy chicken combined with slightly crunchy vegetables colorful and full of flavours', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 103, name: 'SIZZLING CHICKEN (Half)', price: 780, category: 'poultry', desc: 'Juicy chicken combined with slightly crunchy vegetables colorful and full of flavours', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 104, name: 'CHICKEN MANCHURIAN (Full)', price: 1250, category: 'poultry', desc: 'All time favourite stir fried chicken with ginger and garlic in spicy tomato sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 105, name: 'CHICKEN MANCHURIAN (Half)', price: 800, category: 'poultry', desc: 'All time favourite stir fried chicken with ginger and garlic in spicy tomato sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 106, name: 'GARLIC CHICKEN (Full)', price: 1250, category: 'poultry', desc: 'Stir fried chicken with onions and garlic flavoured with special sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 107, name: 'GARLIC CHICKEN (Half)', price: 720, category: 'poultry', desc: 'Stir fried chicken with onions and garlic flavoured with special sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 108, name: 'ALMOND CHICKEN (Full)', price: 1400, category: 'poultry', desc: 'Stir fried thigh chicken pieces assorted vegetables and crunchy almonds all top in a sour sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 109, name: 'ALMOND CHICKEN (Half)', price: 850, category: 'poultry', desc: 'Stir fried thigh chicken pieces assorted vegetables and crunchy almonds all top in a sour sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 110, name: 'CHICKEN SHASHLIK (Full)', price: 1250, category: 'poultry', desc: 'Chicken shashlik delicacy into chinese food made with chicken bell pepper onion tomatoes mixed in a beautiful spicy tangy tomato sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 111, name: 'CHICKEN SHASHLIK (Half)', price: 850, category: 'poultry', desc: 'Chicken shashlik delicacy into chinese food made with chicken bell pepper onion tomatoes mixed in a beautiful spicy tangy tomato sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 112, name: 'TOFU AND VEGETABLES', price: 1050, category: 'poultry', desc: 'Classic tofu dish', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 113, name: 'MANGOLIAN CHICKEN (Full)', price: 1250, category: 'poultry', desc: 'Authentic Mangolian taste', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },
  { id: 114, name: 'MANGOLIAN CHICKEN (Half)', price: 820, category: 'poultry', desc: 'Authentic Mangolian taste', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&fit=crop', badge: null },

  // ── RICE ──
  { id: 115, name: 'STEAM RICE (Full)', price: 700, category: 'rice', desc: 'Plain steamed rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 116, name: 'STEAM RICE (Half)', price: 400, category: 'rice', desc: 'Plain steamed rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 117, name: 'VEGETABLE RICE (Full)', price: 850, category: 'rice', desc: 'Steamed rice mixed with veggies', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 118, name: 'VEGETABLE RICE (Half)', price: 600, category: 'rice', desc: 'Steamed rice mixed with veggies', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 119, name: 'GARLIC RICE (Full)', price: 980, category: 'rice', desc: 'Garlic infused rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 120, name: 'GARLIC RICE (Half)', price: 620, category: 'rice', desc: 'Garlic infused rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 121, name: 'EGG FRIED RICE (Full)', price: 920, category: 'rice', desc: 'Classic egg fried rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 122, name: 'EGG FRIED RICE (Half)', price: 620, category: 'rice', desc: 'Classic egg fried rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 123, name: 'CHICKEN FRIED RICE (Full)', price: 980, category: 'rice', desc: 'Fried rice with chicken', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 124, name: 'CHICKEN FRIED RICE (Half)', price: 620, category: 'rice', desc: 'Fried rice with chicken', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 125, name: 'SINGAPORE RICE (Full)', price: 920, category: 'rice', desc: 'Special Singapore style rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 126, name: 'SINGAPORE RICE (Half)', price: 620, category: 'rice', desc: 'Special Singapore style rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 127, name: 'CHEF SPECIAL RICE (Full)', price: 1050, category: 'rice', desc: 'Signature special rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 128, name: 'CHEF SPECIAL RICE (Half)', price: 650, category: 'rice', desc: 'Signature special rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: null },
  { id: 129, name: 'SPECIAL BIRYANI', price: 370, category: 'rice', desc: 'Authentic biryani', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop', badge: 'Bestseller' },

  // ── STEAK ──
  { id: 130, name: 'MUSHROOMS STEAK', price: 1820, category: 'steak', desc: 'A juicy steak crowded with a blanket of severy sorted mushroom tops with creamy sauce, perfect for meat lovers', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop', badge: null },
  { id: 131, name: 'PEPPER STEAK', price: 1750, category: 'steak', desc: 'Grilled chicken served with soothed vegetables and black pepper sauce', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop', badge: null },
  { id: 132, name: 'TARRAGON STEAK', price: 1950, category: 'steak', desc: 'Grilled joshi chicken served with soothed vegetables and creamy teragon sauce', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop', badge: null },
  { id: 133, name: 'MEXICAN STEAK', price: 1980, category: 'steak', desc: 'State marinated in tasty lime and chillies, grilled to perfect and served with onion tomatoes olive and red special sauce', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop', badge: null },
  { id: 134, name: 'MOROCCAN CHICKEN WITH RICE', price: 1850, category: 'steak', desc: 'Two chicken breast grilled to perfection topped with spicy moroccan sauce served with rice', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop', badge: null },
  { id: 135, name: 'STUFFED CHICKEN WITH CHEESE', price: 2100, category: 'steak', desc: 'Golden fried chicken breast stuffed with mushrooms and mozzarella cheese topped with creamy sauce', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop', badge: null },
  { id: 136, name: 'THE BROAST SPECIAL STEAK', price: 2000, category: 'steak', desc: 'Chef\'s own recipe', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop', badge: "Chef's Pick" },

  // ── PASTA ──
  { id: 137, name: 'SPECIAL PASTA', price: 1250, category: 'pasta', desc: 'Chef special pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&fit=crop', badge: null },
  { id: 138, name: 'ALFREDO PASTA', price: 1200, category: 'pasta', desc: 'Creamy alfredo pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&fit=crop', badge: null },
  { id: 139, name: 'MEXICAN PASTA', price: 1200, category: 'pasta', desc: 'Spicy mexican pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&fit=crop', badge: null },
  { id: 140, name: 'WHITE CREAMY PAN PASTA', price: 1200, category: 'pasta', desc: 'Rich and creamy', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&fit=crop', badge: null },

  // ── BROAST ──
  { id: 141, name: 'FULL BROAST', price: 1600, category: 'broast', desc: 'Crispy fried chicken, perfectly spiced', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: 'Bestseller' },
  { id: 142, name: 'THE BROAST SPECIAL', price: 600, category: 'broast', desc: 'With sauce and fries', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 143, name: 'CHICKEN BROAST PIECE (LEG)', price: 390, category: 'broast', desc: 'Crispy broast leg piece', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 144, name: 'CHICKEN BROAST PIECE (CHEST)', price: 410, category: 'broast', desc: 'Crispy broast chest piece', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 145, name: 'CHICKEN STEAM ROAST (LEG)', price: 430, category: 'broast', desc: 'Steamed roasted leg piece', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 146, name: 'CHICKEN STEAM ROAST (CHEST)', price: 450, category: 'broast', desc: 'Steamed roasted chest piece', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 147, name: 'BATAIR BROAST', price: 200, category: 'broast', desc: 'Crispy quail broast', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 148, name: 'CHICKEN SHAMI', price: 80, category: 'broast', desc: 'Chicken shami kabab', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 149, name: 'FINGER FISH', price: 2600, category: 'broast', desc: 'Fried finger fish', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 150, name: 'FRIED FISH ROHU', price: 1700, category: 'broast', desc: 'Fried rohu fish', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: null },
  { id: 209, name: 'SPECIAL BROAST PLATTER', price: 550, category: 'broast', desc: 'Chef recommendation broast platter', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80&fit=crop', badge: "Chef's Pick" },

  // ── HANDI ──
  { id: 151, name: 'CHICKEN HANDI (Full)', price: 1950, category: 'handi', desc: 'Traditional creamy chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 152, name: 'CHICKEN HANDI (Half)', price: 1300, category: 'handi', desc: 'Traditional creamy chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 153, name: 'CHICKEN GINGER (Full)', price: 1750, category: 'handi', desc: 'Chicken with strong ginger flavor', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 154, name: 'CHICKEN GINGER (Half)', price: 1250, category: 'handi', desc: 'Chicken with strong ginger flavor', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 155, name: 'CHICKEN GREEN CHILLI WITH LEMON (Full)', price: 1700, category: 'handi', desc: 'Spicy chicken with green chilli and lemon', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 156, name: 'CHICKEN GREEN CHILLI WITH LEMON (Half)', price: 1200, category: 'handi', desc: 'Spicy chicken with green chilli and lemon', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 157, name: 'CHICKEN JALFREZI (Full)', price: 1750, category: 'handi', desc: 'Spicy stir fried chicken curry', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 158, name: 'CHICKEN JALFREZI (Half)', price: 1250, category: 'handi', desc: 'Spicy stir fried chicken curry', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 159, name: 'CHICKEN MAKHANI HANDI (Full)', price: 1800, category: 'handi', desc: 'Butter chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 160, name: 'CHICKEN MAKHANI HANDI (Half)', price: 1300, category: 'handi', desc: 'Butter chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 161, name: 'CHICKEN PATIALA HANDI (Full)', price: 1800, category: 'handi', desc: 'Rich patiala style chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 162, name: 'CHICKEN PATIALA HANDI (Half)', price: 1300, category: 'handi', desc: 'Rich patiala style chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 163, name: 'CHICKEN ACHARI HANDI (Full)', price: 1800, category: 'handi', desc: 'Pickle flavored chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 164, name: 'CHICKEN ACHARI HANDI (Half)', price: 1300, category: 'handi', desc: 'Pickle flavored chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 165, name: 'CHICKEN MADRASI HANDI (Full)', price: 1750, category: 'handi', desc: 'Spicy madrasi style chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 166, name: 'CHICKEN MADRASI HANDI (Half)', price: 1250, category: 'handi', desc: 'Spicy madrasi style chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 167, name: 'CHICKEN WHITE HANDI (Full)', price: 1800, category: 'handi', desc: 'Creamy white chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 168, name: 'CHICKEN WHITE HANDI (Half)', price: 1300, category: 'handi', desc: 'Creamy white chicken handi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 169, name: 'CHICKEN CHEESE GOTALA (Full)', price: 2100, category: 'handi', desc: 'Special cheese gotala', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 170, name: 'CHICKEN CHEESE GOTALA (Half)', price: 1450, category: 'handi', desc: 'Special cheese gotala', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 171, name: 'BOMBAY CHICKEN (Full)', price: 1950, category: 'handi', desc: 'Bombay style chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },
  { id: 172, name: 'BOMBAY CHICKEN (Half)', price: 1300, category: 'handi', desc: 'Bombay style chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop', badge: null },

  // ── KARAHI ──
  { id: 173, name: 'SPECIAL DESI MURGH KARAHI', price: 4000, category: 'karahi', desc: 'Authentic desi chicken karahi', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: 'Special' },
  { id: 174, name: 'CHICKEN KARAHI', price: 2300, category: 'karahi', desc: 'Classic chicken karahi', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: null },
  { id: 175, name: 'CHICKEN WHITE KARAHI', price: 2600, category: 'karahi', desc: 'Creamy white karahi', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: null },
  { id: 176, name: 'CHICKEN ACHARI KARAHI', price: 2500, category: 'karahi', desc: 'Pickle flavored karahi', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: null },
  { id: 177, name: 'SPECIAL MUTTON KARAHI', price: 4000, category: 'karahi', desc: 'Tender mutton in rich gravy', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: null },
  { id: 178, name: 'MUTTON WHITE KARAHI', price: 4400, category: 'karahi', desc: 'Creamy mutton karahi', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: null },
  { id: 179, name: 'MUTTON ACHARI KARAHI', price: 4200, category: 'karahi', desc: 'Pickle flavored mutton', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: null },
  { id: 180, name: 'SPECIAL BEEF KARAHI', price: 2800, category: 'karahi', desc: 'Spicy beef karahi', image: 'https://images.unsplash.com/photo-1597288212624-ceac8dba23f1?w=600&q=80&fit=crop', badge: null },

  // ── BAR B.Q ──
  { id: 181, name: 'CHICKEN MALAI BOTI', price: 400, category: 'bbq', desc: 'Creamy charcoal grilled boti', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 182, name: 'CHICKEN KASTOORI BOTI', price: 420, category: 'bbq', desc: 'Special kastoori boti', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 183, name: 'CHICKEN ACHARI BOTI', price: 220, category: 'bbq', desc: 'Pickle flavored boti', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 184, name: 'CHICKEN TIKKA BOTI', price: 200, category: 'bbq', desc: 'Spicy tikka boti', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 185, name: 'CHICKEN KABAB', price: 200, category: 'bbq', desc: 'Grilled chicken kabab', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 186, name: 'CHICKEN RESHMI KABAB', price: 270, category: 'bbq', desc: 'Soft and silky kabab', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 187, name: 'CHICKEN LEBNANI KABAB', price: 220, category: 'bbq', desc: 'Lebanese style kabab', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 188, name: 'CHICKEN CHEESE KABAB', price: 300, category: 'bbq', desc: 'Cheese filled kabab', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 189, name: 'CHICKEN GOLA KABAB', price: 240, category: 'bbq', desc: 'Round juicy kababs', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 190, name: 'BEEF KABAB', price: 220, category: 'bbq', desc: 'Spicy beef kabab', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 191, name: 'FISH TIKKA (Full)', price: 1600, category: 'bbq', desc: 'Charcoal grilled fish', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 192, name: 'FISH TIKKA (Half)', price: 800, category: 'bbq', desc: 'Charcoal grilled fish', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 193, name: 'CHICKEN PIECE (LEG)', price: 400, category: 'bbq', desc: 'Grilled chicken leg', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 194, name: 'CHICKEN PIECE (CHEST)', price: 410, category: 'bbq', desc: 'Grilled chicken chest', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },
  { id: 195, name: 'GRILLED FISH ROHU', price: 1800, category: 'bbq', desc: 'Perfectly grilled rohu', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop', badge: null },

  // ── TANDOOR ──
  { id: 196, name: 'ROGHNI NAAN', price: 70, category: 'tandoor', desc: 'Soft and fluffy naan', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 197, name: 'GARLIC NAAN', price: 110, category: 'tandoor', desc: 'Naan topped with garlic', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 198, name: 'KALVANJI NAAN', price: 110, category: 'tandoor', desc: 'Naan topped with kalonji', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 199, name: 'CHEESE NAAN', price: 550, category: 'tandoor', desc: 'Naan stuffed with cheese', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 200, name: 'CHICKEN CHEESE NAAN', price: 650, category: 'tandoor', desc: 'Naan stuffed with chicken and cheese', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 201, name: 'DRY FRUIT NAAN', price: 310, category: 'tandoor', desc: 'Sweet naan with dry fruits', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 202, name: 'SHEERMAL NAAN', price: 400, category: 'tandoor', desc: 'Rich sweet bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 203, name: 'QANDHARI NAAN', price: 150, category: 'tandoor', desc: 'Traditional qandhari naan', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 204, name: 'SPICY NAAN', price: 150, category: 'tandoor', desc: 'Naan with spicy topping', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 205, name: 'ACHARI NAAN', price: 200, category: 'tandoor', desc: 'Pickle flavored naan', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 206, name: 'TANDOORI PARATHA', price: 140, category: 'tandoor', desc: 'Crispy tandoor baked paratha', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 207, name: 'ROTI', price: 14, category: 'tandoor', desc: 'Fresh tandoori roti', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
  { id: 208, name: 'COCONUT NAAN', price: 430, category: 'tandoor', desc: 'Sweet coconut stuffed naan', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop', badge: null },
];

/**
 * Save cart to localStorage
 */
function saveCart() {
  localStorage.setItem('broastCart', JSON.stringify(cart));
}

/**
 * Update cart — add or remove items
 */
function updateCart(itemId, quantity, price) {
  const existingItem = cart.find(c => c.id === itemId);

  if (existingItem) {
    existingItem.quantity += quantity;
    if (existingItem.quantity <= 0) {
      cart = cart.filter(c => c.id !== itemId);
    }
  } else if (quantity > 0) {
    const item = menuItems.find(m => m.id === itemId);
    if (item) {
      cart.push({
        id: itemId,
        name: item.name,
        price: price,
        quantity: quantity
      });
    }
  }

  saveCart();
  updateCartBadge();
  renderCart();
  renderMenuIfExists();
}

/**
 * Update cart badge count
 */
function updateCartBadge() {
  const badge = document.getElementById('cartCount');
  if (badge) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = count;
  }
}

/**
 * Render cart items in sidebar
 */
function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    if (checkoutBtn) checkoutBtn.disabled = true;
    updateCartSummary();
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Rs. ${item.price}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCart(${item.id}, -1, ${item.price})">−</button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCart(${item.id}, 1, ${item.price})">+</button>
        </div>
        <div class="cart-item-total">
          Rs. ${item.price * item.quantity}
        </div>
        <button class="cart-item-remove" onclick="updateCart(${item.id}, -${item.quantity}, ${item.price})">✕</button>
      </div>
    `;
  }).join('');

  if (checkoutBtn) checkoutBtn.disabled = false;
  updateCartSummary();
}

/**
 * Update cart summary (subtotal, delivery, total)
 */
function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 100 : 0;
  const total = subtotal + delivery;

  const subtotalEl = document.getElementById('subtotal');
  const deliveryEl = document.getElementById('delivery');
  const totalEl = document.getElementById('total');

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal}`;
  if (deliveryEl) deliveryEl.textContent = `Rs. ${delivery}`;
  if (totalEl) totalEl.textContent = `Rs. ${total}`;
}

/**
 * Toggle cart sidebar
 */
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');

  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('open');
}

/**
 * Checkout via WhatsApp with formatted message
 */
function checkoutWhatsApp() {
  if (!cart.length) return;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 100;
  const total = subtotal + delivery;

  let message = '*🍗 THE BROAST - ORDER*\n\n';

  cart.forEach(item => {
    message += `${item.name} × ${item.quantity} = Rs. ${item.price * item.quantity}\n`;
  });

  message += `\n*────────────────*\n`;
  message += `*Subtotal:* Rs. ${subtotal}\n`;
  message += `*Delivery:* Rs. ${delivery}\n`;
  message += `*TOTAL:* Rs. ${total}\n`;
  message += `*────────────────*\n\n`;
  message += `📍 Noor Park, Sahiwal\n`;
  message += `⏰ Open Daily - 10 AM to 1 AM`;

  const whatsappURL = `https://wa.me/923214466766?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');

  // Clear cart after checkout
  cart =[];
  saveCart();
  renderCart();
  renderMenuIfExists();
  toggleCart();
}

/**
 * Get all menu items
 */
function getAllMenuItems() {
  return menuItems;
}

/**
 * Re-render menu if it exists
 */
function renderMenuIfExists() {
  if (typeof renderMenu === 'function') {
    renderMenu(currentFilter || 'all');
  }
  if (typeof renderFeatured === 'function') {
    renderFeatured();
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartBadge();
  renderCart();
});

// Sync cart when window regains focus
window.addEventListener('focus', () => {
  const savedCart = JSON.parse(localStorage.getItem('broastCart')) ||[];
  if (JSON.stringify(savedCart) !== JSON.stringify(cart)) {
    cart = savedCart;
    updateCartBadge();
    renderCart();
    renderMenuIfExists();
  }
});

// Close cart on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('cartSidebar')?.classList.contains('open')) {
    toggleCart();
  }
});
