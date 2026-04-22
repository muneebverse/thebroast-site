/**
 * The Broast - Complete Shared Menu Data
 * Single source of truth for all pages
 * Persistent cart using localStorage
 */

/**
 * COMPLETE MENU ITEMS - All categories
 */
const menuItems = [
  // ── DRINKS ──
  { id: 1, name: 'Pepsi', price: 120, category: 'drinks', desc: 'Tin (120) / 1.5ml (210)', image: 'https://images.unsplash.com/photo-1554866585-ffeadb5ef14d?w=300&h=300&fit=crop', badge: null },
  { id: 2, name: 'Coca Cola', price: 120, category: 'drinks', desc: 'Tin (120) / 1.5ml (210)', image: 'https://images.unsplash.com/photo-1600788149050-a7c8a3e0d8d9?w=300&h=300&fit=crop', badge: null },
  { id: 3, name: 'Sprite', price: 120, category: 'drinks', desc: 'Tin (120) / 1.5ml (210)', image: 'https://images.unsplash.com/photo-1590714267321-a09cc8eb90ba?w=300&h=300&fit=crop', badge: null },
  { id: 4, name: '7UP', price: 120, category: 'drinks', desc: 'Tin (120) / 1.5ml (210)', image: 'https://images.unsplash.com/photo-1605901031218-aacc0d9db7cf?w=300&h=300&fit=crop', badge: null },
  { id: 5, name: 'Mineral Water', price: 110, category: 'drinks', desc: 'Pure mineral water', image: 'https://images.unsplash.com/photo-1600027353146-87e79c28dcad?w=300&h=300&fit=crop', badge: null },
  { id: 6, name: 'Mint Margarita', price: 300, category: 'drinks', desc: 'Refreshing mint drink', image: 'https://images.unsplash.com/photo-1560512071-22c5e28d12d5?w=300&h=300&fit=crop', badge: null },
  { id: 7, name: 'Fresh Lime', price: 150, category: 'drinks', desc: 'Fresh lime juice', image: 'https://images.unsplash.com/photo-1590599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 8, name: 'Lemonade', price: 170, category: 'drinks', desc: 'Homemade lemonade', image: 'https://images.unsplash.com/photo-1585518419759-b9a67da61ee8?w=300&h=300&fit=crop', badge: null },
  { id: 9, name: 'Tea', price: 100, category: 'drinks', desc: 'Hot tea', image: 'https://images.unsplash.com/photo-1597318972898-387d01a7d8f7?w=300&h=300&fit=crop', badge: null },

  // ── SALADS ──
  { id: 10, name: 'Russian Salad', price: 800, category: 'salads', desc: 'Mixed vegetables with mayo', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop', badge: null },
  { id: 11, name: 'Kachumber Salad', price: 200, category: 'salads', desc: 'Fresh cucumber and tomato mix', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop', badge: null },
  { id: 12, name: 'Fresh Salad', price: 100, category: 'salads', desc: 'Garden fresh vegetables', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop', badge: null },
  { id: 13, name: 'Mint Raita', price: 100, category: 'salads', desc: 'Yogurt with mint', image: 'https://images.unsplash.com/photo-1585478333957-daffdb380d1f?w=300&h=300&fit=crop', badge: null },

  // ── CHOPSUEY & NOODLES ──
  { id: 14, name: 'American Chopsuey', price: 1200, category: 'chopsuey', desc: 'Full (1200) / Half (750)', image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=300&h=300&fit=crop', badge: null },
  { id: 15, name: 'Chicken Chopsuey', price: 1150, category: 'chopsuey', desc: 'Full (1150) / Half (700)', image: 'https://images.unsplash.com/photo-1606664515883-0c027cb8f32b?w=300&h=300&fit=crop', badge: null },
  { id: 16, name: 'Chef Special Chopsuey', price: 1300, category: 'chopsuey', desc: 'Full (1300) / Half (800)', image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=300&h=300&fit=crop', badge: 'Chef\'s Pick' },
  { id: 17, name: 'Chicken Chowmein', price: 1350, category: 'chopsuey', desc: 'Full (1350) / Half (850)', image: 'https://images.unsplash.com/photo-1582691802611-ec4a6bc6dc50?w=300&h=300&fit=crop', badge: null },
  { id: 18, name: 'Special Chowmein', price: 1400, category: 'chopsuey', desc: 'Full (1400) / Half (850)', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop', badge: null },
  { id: 19, name: 'Vegetable Chowmein', price: 1100, category: 'chopsuey', desc: 'Full (1100) / Half (700)', image: 'https://images.unsplash.com/photo-1612874742237-415221975275?w=300&h=300&fit=crop', badge: null },
  { id: 20, name: 'Prawn Chowmein', price: 1450, category: 'chopsuey', desc: 'Full (1450) / Half (900)', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop', badge: null },

  // ── SEA FOOD - FISH ──
  { id: 21, name: 'Fish Chilli Dry', price: 1800, category: 'seafood', desc: 'Crispy fried fish with dry chilies', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },
  { id: 22, name: 'Kung Pao Fish', price: 1600, category: 'seafood', desc: 'Full (1600) / Half (950)', image: 'https://images.unsplash.com/photo-1565299624946-b28974340d38?w=300&h=300&fit=crop', badge: null },
  { id: 23, name: 'Fish Garlic Sauce', price: 1580, category: 'seafood', desc: 'Full (1580) / Half (900)', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },
  { id: 24, name: 'Sweet and Sour Fish', price: 1500, category: 'seafood', desc: 'Full (1500) / Half (850)', image: 'https://images.unsplash.com/photo-1565299624946-b28974340d38?w=300&h=300&fit=crop', badge: null },
  { id: 25, name: 'Shanghai Fish', price: 1550, category: 'seafood', desc: 'Full (1550) / Half (900)', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },

  // ── SEA FOOD - PRAWN ──
  { id: 26, name: 'Prawn Chilli Dry', price: 2100, category: 'seafood', desc: 'Crispy prawns with chilies', image: 'https://images.unsplash.com/photo-1565299624946-b28974340d38?w=300&h=300&fit=crop', badge: null },
  { id: 27, name: 'Prawn Oyster Sauce', price: 1850, category: 'seafood', desc: 'Full (1850) / Half (1350)', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },
  { id: 28, name: 'Prawn Garlic Sauce', price: 1660, category: 'seafood', desc: 'Full (1660) / Half (1020)', image: 'https://images.unsplash.com/photo-1565299624946-b28974340d38?w=300&h=300&fit=crop', badge: null },
  { id: 29, name: 'Hot Chilli Prawn', price: 1850, category: 'seafood', desc: 'Full (1850) / Half (1350)', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },
  { id: 30, name: 'Kung Pao Prawn', price: 1750, category: 'seafood', desc: 'Full (1750) / Half (1050)', image: 'https://images.unsplash.com/photo-1565299624946-b28974340d38?w=300&h=300&fit=crop', badge: null },

  // ── SOUP ──
  { id: 31, name: 'The Broast Special Soup', price: 1300, category: 'soup', desc: 'Full (1300) / Half (800)', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop', badge: 'Signature' },
  { id: 32, name: 'Hot and Sour Soup', price: 1200, category: 'soup', desc: 'Full (1200) / Half (750)', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop', badge: null },
  { id: 33, name: 'Szechuan Almond Soup', price: 1300, category: 'soup', desc: 'Full (1300) / Half (600)', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop', badge: null },
  { id: 34, name: 'Thai Clear Soup', price: 1200, category: 'soup', desc: 'Full (1200) / Half (700)', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop', badge: null },
  { id: 35, name: 'Chicken Corn Soup', price: 1220, category: 'soup', desc: 'Full (1220) / Half (750)', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop', badge: null },
  { id: 36, name: 'Noodles Soup', price: 1100, category: 'soup', desc: 'Full (1100) / Half (700)', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop', badge: null },
  { id: 37, name: 'Chicken Vegetable Clear Soup', price: 1100, category: 'soup', desc: 'Full (1100) / Half (650)', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop', badge: null },
  { id: 38, name: 'Wonton Veg. Soup', price: 1200, category: 'soup', desc: 'Full (1200) / Half (750)', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop', badge: null },

  // ── STARTER ──
  { id: 39, name: 'Dynamite Shrimps', price: 1450, category: 'starter', desc: 'Coated in mayo & sriracha sauce', image: 'https://images.unsplash.com/photo-1565299624946-b28974340d38?w=300&h=300&fit=crop', badge: null },
  { id: 40, name: 'Dynamite Chicken', price: 1250, category: 'starter', desc: 'Crispy chicken in mayo & sriracha', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 41, name: 'Sweet and Spicy Honey Wings', price: 1350, category: 'starter', desc: '10 pcs - Full (1350) / Half (750)', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 42, name: 'Dumplings Steamed/Fried', price: 1050, category: 'starter', desc: '8 pcs - Soft or crispy', image: 'https://images.unsplash.com/photo-1558103980-c9af267e9e0d?w=300&h=300&fit=crop', badge: null },
  { id: 43, name: 'Honey Glazed Chicken Balls', price: 1250, category: 'starter', desc: '10 pcs - Full (1250) / Half (650)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 44, name: 'Prawn Tempura', price: 2000, category: 'starter', desc: '8 pcs - Full (2000) / Half (1100)', image: 'https://images.unsplash.com/photo-1565299624946-b28974340d38?w=300&h=300&fit=crop', badge: null },
  { id: 45, name: 'Chicken Drumstick', price: 1350, category: 'starter', desc: '8 pcs - Full (1350) / Half (850)', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 46, name: 'Dhaka Chicken', price: 1500, category: 'starter', desc: 'Spicy fried chicken - Full (1500) / Half (900)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 47, name: 'French Fries', price: 400, category: 'starter', desc: 'Golden seasoned fries', image: 'https://images.unsplash.com/photo-1584621694519-5195b3999560?w=300&h=300&fit=crop', badge: null },
  { id: 48, name: 'Fish Crackers', price: 400, category: 'starter', desc: 'Crispy fish crackers', image: 'https://images.unsplash.com/photo-1599599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 49, name: 'Fish Katsu', price: 1950, category: 'starter', desc: '6 pcs - Full (1950) / Half (1050)', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },
  { id: 50, name: 'Loaded Fries', price: 750, category: 'starter', desc: 'Fries with toppings', image: 'https://images.unsplash.com/photo-1584621694519-5195b3999560?w=300&h=300&fit=crop', badge: null },
  { id: 51, name: 'Thai Cheese Ball', price: 1750, category: 'starter', desc: '8 pcs - Full (1750) / Half (950)', image: 'https://images.unsplash.com/photo-1558103980-c9af267e9e0d?w=300&h=300&fit=crop', badge: null },

  // ── POULTRY ──
  { id: 52, name: 'Sesame Lemon Chicken Dry', price: 1400, category: 'poultry', desc: 'Crispy with sesame seeds', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 53, name: 'Cashewnut Chicken Thai Style', price: 1250, category: 'poultry', desc: 'Full (1250) / Half (820)', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 54, name: 'Hong Kong Chicken', price: 1250, category: 'poultry', desc: 'With mushrooms - Full (1250) / Half (800)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 55, name: 'Kung Pao Chicken', price: 1280, category: 'poultry', desc: 'Full (1280) / Half (820)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 56, name: 'Oyster Sauce Chicken', price: 1300, category: 'poultry', desc: 'Full (1300) / Half (820)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 57, name: 'Shanghai Chicken', price: 1220, category: 'poultry', desc: 'Full (1220) / Half (800)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 58, name: 'Szechuan Chicken', price: 1250, category: 'poultry', desc: 'Spicy - Full (1250) / Half (850)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 59, name: 'Chicken Chilli Dry', price: 1650, category: 'poultry', desc: 'Extra spicy crispy chicken', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 60, name: 'Sweet and Sour Chicken', price: 1220, category: 'poultry', desc: 'Full (1220) / Half (750)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 61, name: 'Sizzling Chicken', price: 1180, category: 'poultry', desc: 'Full (1180) / Half (780)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 62, name: 'Chicken Manchurian', price: 1250, category: 'poultry', desc: 'Full (1250) / Half (800)', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 63, name: 'Garlic Chicken', price: 1250, category: 'poultry', desc: 'Full (1250) / Half (720)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 64, name: 'Almond Chicken', price: 1400, category: 'poultry', desc: 'Full (1400) / Half (850)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 65, name: 'Chicken Shashlik', price: 1250, category: 'poultry', desc: 'Full (1250) / Half (850)', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 66, name: 'Tofu and Vegetables', price: 1050, category: 'poultry', desc: 'Vegetarian option', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop', badge: null },
  { id: 67, name: 'Mongolian Chicken', price: 1250, category: 'poultry', desc: 'Full (1250) / Half (820)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },

  // ── RICE ──
  { id: 68, name: 'Steam Rice', price: 700, category: 'rice', desc: 'Full (700) / Half (400)', image: 'https://images.unsplash.com/photo-1505521585163-fcb0617e5f84?w=300&h=300&fit=crop', badge: null },
  { id: 69, name: 'Vegetable Rice', price: 850, category: 'rice', desc: 'Full (850) / Half (600)', image: 'https://images.unsplash.com/photo-1609137253223-e7d40529ce6f?w=300&h=300&fit=crop', badge: null },
  { id: 70, name: 'Garlic Rice', price: 980, category: 'rice', desc: 'Full (980) / Half (620)', image: 'https://images.unsplash.com/photo-1609137253223-e7d40529ce6f?w=300&h=300&fit=crop', badge: null },
  { id: 71, name: 'Egg Fried Rice', price: 920, category: 'rice', desc: 'Full (920) / Half (620)', image: 'https://images.unsplash.com/photo-1609137253223-e7d40529ce6f?w=300&h=300&fit=crop', badge: null },
  { id: 72, name: 'Chicken Fried Rice', price: 980, category: 'rice', desc: 'Full (980) / Half (620)', image: 'https://images.unsplash.com/photo-1609137253223-e7d40529ce6f?w=300&h=300&fit=crop', badge: null },
  { id: 73, name: 'Singapore Rice', price: 920, category: 'rice', desc: 'Full (920) / Half (620)', image: 'https://images.unsplash.com/photo-1609137253223-e7d40529ce6f?w=300&h=300&fit=crop', badge: null },
  { id: 74, name: 'Chef Special Rice', price: 1050, category: 'rice', desc: 'Full (1050) / Half (650)', image: 'https://images.unsplash.com/photo-1609137253223-e7d40529ce6f?w=300&h=300&fit=crop', badge: 'Chef\'s Pick' },
  { id: 75, name: 'Special Biryani', price: 370, category: 'rice', desc: 'Traditional biryani', image: 'https://images.unsplash.com/photo-1505521585163-fcb0617e5f84?w=300&h=300&fit=crop', badge: null },

  // ── STEAK ──
  { id: 76, name: 'Mushrooms Steak', price: 1820, category: 'steak', desc: 'Beef with mushrooms', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 77, name: 'Pepper Steak', price: 1750, category: 'steak', desc: 'Grilled with peppers', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 78, name: 'Tarragon Steak', price: 1950, category: 'steak', desc: 'With tarragon sauce', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 79, name: 'Mexican Steak', price: 1980, category: 'steak', desc: 'Marinated in spices', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 80, name: 'Moroccan Chicken with Rice', price: 1850, category: 'steak', desc: 'Grilled chicken + rice', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 81, name: 'Stuffed Chicken with Cheese', price: 2100, category: 'steak', desc: 'Cheese-stuffed chicken breast', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 82, name: 'The Broast Special Steak', price: 2000, category: 'steak', desc: 'Chef\'s signature steak', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: 'Signature' },

  // ── BROAST ──
  { id: 83, name: 'Full Broast', price: 1600, category: 'broast', desc: 'Whole crispy chicken', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: 'Bestseller' },
  { id: 84, name: 'The Broast Special', price: 600, category: 'broast', desc: 'With sauce and fries', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 85, name: 'Chicken Broast Piece', price: 390, category: 'broast', desc: 'Single piece - Full (390) / Half (410)', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 86, name: 'Chicken Steam Roast', price: 430, category: 'broast', desc: 'Full (430) / Half (450)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 87, name: 'Batair Broast', price: 200, category: 'broast', desc: 'Small portion broast', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 88, name: 'Chicken Shami', price: 80, category: 'broast', desc: 'Spiced chicken patty', image: 'https://images.unsplash.com/photo-1585238341710-57b0e34e6100?w=300&h=300&fit=crop', badge: null },
  { id: 89, name: 'Finger Fish', price: 2600, category: 'broast', desc: 'Crispy fish fingers', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },
  { id: 90, name: 'Fried Fish Rohu', price: 1700, category: 'broast', desc: 'Whole rohu fish', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },

  // ── HANDI ──
  { id: 91, name: 'Chicken Handi', price: 1950, category: 'handi', desc: 'Full (1950) / Half (1300)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 92, name: 'Chicken Ginger', price: 1750, category: 'handi', desc: 'Full (1750) / Half (1250)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 93, name: 'Chicken Green Chilli with Lemon', price: 1700, category: 'handi', desc: 'Full (1700) / Half (1200)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 94, name: 'Chicken Jalfrezi', price: 1750, category: 'handi', desc: 'Full (1750) / Half (1250)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 95, name: 'Chicken Makhani Handi', price: 1800, category: 'handi', desc: 'Butter gravy - Full (1800) / Half (1300)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 96, name: 'Chicken Patiala Handi', price: 1800, category: 'handi', desc: 'Full (1800) / Half (1300)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 97, name: 'Chicken Achari Handi', price: 1800, category: 'handi', desc: 'Pickle spices - Full (1800) / Half (1300)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 98, name: 'Chicken Madrasi Handi', price: 1750, category: 'handi', desc: 'Full (1750) / Half (1250)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 99, name: 'Chicken White Handi', price: 1800, category: 'handi', desc: 'Cream-based - Full (1800) / Half (1300)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 100, name: 'Chicken Cheese Gotala', price: 2100, category: 'handi', desc: 'Full (2100) / Half (1450)', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 101, name: 'Bombay Chicken', price: 1950, category: 'handi', desc: 'Full (1950) / Half (1300)', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },

  // ── KARAHI ──
  { id: 102, name: 'Special Desi Murgh Karahi', price: 4000, category: 'karahi', desc: 'Premium chicken karahi', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: 'Chef\'s Pick' },
  { id: 103, name: 'Chicken Karahi', price: 2300, category: 'karahi', desc: 'Traditional chicken karahi', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 104, name: 'Chicken White Karahi', price: 2600, category: 'karahi', desc: 'Cream-based chicken', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 105, name: 'Chicken Achari Karahi', price: 2500, category: 'karahi', desc: 'With pickle spices', image: 'https://images.unsplash.com/photo-1598626283106-e64cdcd1cb60?w=300&h=300&fit=crop', badge: null },
  { id: 106, name: 'Special Mutton Karahi', price: 4000, category: 'karahi', desc: 'Premium mutton karahi', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 107, name: 'Mutton White Karahi', price: 4400, category: 'karahi', desc: 'Cream mutton karahi', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 108, name: 'Mutton Achari Karahi', price: 4200, category: 'karahi', desc: 'Mutton with spices', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 109, name: 'Special Beef Karahi', price: 2800, category: 'karahi', desc: 'Premium beef karahi', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },

  // ── BAR B.Q ──
  { id: 110, name: 'Chicken Malai Boti', price: 400, category: 'barbq', desc: 'Cream marinated - Full / Half', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 111, name: 'Chicken Kastoori Boti', price: 420, category: 'barbq', desc: 'Fragrant spices', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 112, name: 'Chicken Achari Boti', price: 220, category: 'barbq', desc: 'Pickle spice marinade', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 113, name: 'Chicken Tikka Boti', price: 200, category: 'barbq', desc: 'Classic tandoori', image: 'https://images.unsplash.com/photo-1585238341710-57b0e34e6100?w=300&h=300&fit=crop', badge: null },
  { id: 114, name: 'Chicken Kabab', price: 200, category: 'barbq', desc: 'Grilled chicken kabab', image: 'https://images.unsplash.com/photo-1585238341710-57b0e34e6100?w=300&h=300&fit=crop', badge: null },
  { id: 115, name: 'Chicken Reshmi Kabab', price: 270, category: 'barbq', desc: 'Silky smooth chicken', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cda687?w=300&h=300&fit=crop', badge: null },
  { id: 116, name: 'Chicken Lebnani Kabab', price: 220, category: 'barbq', desc: 'Lebanese spices', image: 'https://images.unsplash.com/photo-1585238341710-57b0e34e6100?w=300&h=300&fit=crop', badge: null },
  { id: 117, name: 'Chicken Cheese Kabab', price: 300, category: 'barbq', desc: 'With melted cheese', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 118, name: 'Chicken Gola Kabab', price: 240, category: 'barbq', desc: 'Round kabab', image: 'https://images.unsplash.com/photo-1585238341710-57b0e34e6100?w=300&h=300&fit=crop', badge: null },
  { id: 119, name: 'Beef Kabab', price: 220, category: 'barbq', desc: 'Grilled beef kabab', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop', badge: null },
  { id: 120, name: 'Fish Tikka', price: 1600, category: 'barbq', desc: 'Full (1600) / Half (800)', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },
  { id: 121, name: 'Chicken Piece Leg/Chest', price: 400, category: 'barbq', desc: 'Full (400) / Half (410)', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop', badge: null },
  { id: 122, name: 'Grilled Fish Rohu', price: 1800, category: 'barbq', desc: 'Whole grilled fish', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop', badge: null },

  // ── TANDOOR (BREADS) ──
  { id: 123, name: 'Roghni Naan', price: 70, category: 'tandoor', desc: 'Butter naan', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop', badge: null },
  { id: 124, name: 'Garlic Naan', price: 110, category: 'tandoor', desc: 'Garlic-infused naan', image: 'https://images.unsplash.com/photo-1599599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 125, name: 'Kalyauji Naan', price: 110, category: 'tandoor', desc: 'Traditional naan', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop', badge: null },
  { id: 126, name: 'Cheese Naan', price: 550, category: 'tandoor', desc: 'Melted cheese naan', image: 'https://images.unsplash.com/photo-1599599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 127, name: 'Chicken Cheese Naan', price: 650, category: 'tandoor', desc: 'Chicken & cheese', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop', badge: null },
  { id: 128, name: 'Dry Fruit Naan', price: 310, category: 'tandoor', desc: 'With dried fruits', image: 'https://images.unsplash.com/photo-1599599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 129, name: 'Sheermal Naan', price: 400, category: 'tandoor', desc: 'Saffron naan', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop', badge: null },
  { id: 130, name: 'Qandhari Naan', price: 150, category: 'tandoor', desc: 'Afghan style naan', image: 'https://images.unsplash.com/photo-1599599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 131, name: 'Spicy Naan', price: 150, category: 'tandoor', desc: 'Spiced naan', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop', badge: null },
  { id: 132, name: 'Achari Naan', price: 200, category: 'tandoor', desc: 'Pickle spice naan', image: 'https://images.unsplash.com/photo-1599599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 133, name: 'Tandoori Paratha', price: 140, category: 'tandoor', desc: 'Layered tandoori bread', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop', badge: null },
  { id: 134, name: 'Roti', price: 34, category: 'tandoor', desc: 'Plain wheat roti', image: 'https://images.unsplash.com/photo-1599599810694-46a6d1e67f19?w=300&h=300&fit=crop', badge: null },
  { id: 135, name: 'Coconut Naan', price: 430, category: 'tandoor', desc: 'Coconut-filled naan', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop', badge: null },

  // ── PASTA ──
  { id: 136, name: 'Special Pasta', price: 1250, category: 'pasta', desc: 'Chef\'s special recipe', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop', badge: 'Chef\'s Pick' },
  { id: 137, name: 'Alfredo Pasta', price: 1200, category: 'pasta', desc: 'Creamy alfredo sauce', image: 'https://images.unsplash.com/photo-1645112411341-6c4ee32510d8?w=300&h=300&fit=crop', badge: null },
  { id: 138, name: 'Mexican Pasta', price: 1200, category: 'pasta', desc: 'Spicy mexican flavor', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop', badge: null },
  { id: 139, name: 'White Creamy Pan Pasta', price: 1200, category: 'pasta', desc: 'Creamy white sauce pasta', image: 'https://images.unsplash.com/photo-1645112411341-6c4ee32510d8?w=300&h=300&fit=crop', badge: null },
];

let cart = JSON.parse(localStorage.getItem('broastCart')) || [];

/**
 * Update cart item quantity
 */
function updateCart(id, change, price) {
  let item = cart.find(c => c.id === id);
  
  if (!item) {
    const menuItem = menuItems.find(m => m.id === id);
    if (!menuItem) return;
    
    item = {
      id,
      name: menuItem.name,
      price,
      image: menuItem.image,
      quantity: 0
    };
    cart.push(item);
  }
  
  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  
  saveCart();
  renderCart();
  renderMenuIfExists();
}

/**
 * Remove item from cart
 */
function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
  renderMenuIfExists();
}

/**
 * Save cart to localStorage
 */
function saveCart() {
  localStorage.setItem('broastCart', JSON.stringify(cart));
  updateCartBadge();
}

/**
 * Update cart badge count
 */
function updateCartBadge() {
  const badge = document.getElementById('cartCount');
  if (badge) {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = total;
  }
}

/**
 * Render cart sidebar with images
 */
function renderCart() {
  const cartItems = document.getElementById('cartItems');
  if (!cartItems) return;
  
  if (!cart.length) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    document.getElementById('checkoutBtn').disabled = true;
    updateTotals();
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image || 'https://via.placeholder.com/60?text=' + item.name}" alt="${item.name}" loading="lazy" style="width:60px;height:60px;object-fit:cover;">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-qty">Qty: ${item.quantity}</div>
        <div class="cart-item-price">Rs. ${item.price * item.quantity}</div>
      </div>
      <button class="cart-item-remove" onclick="removeItem(${item.id})">✕</button>
    </div>
  `).join('');
  
  document.getElementById('checkoutBtn').disabled = false;
  updateTotals();
}

/**
 * Update cart totals
 */
function updateTotals() {
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
  cart = [];
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
  updateCartBadge();
  renderCart();
});

// Sync cart when window regains focus
window.addEventListener('focus', () => {
  const savedCart = JSON.parse(localStorage.getItem('broastCart')) || [];
  if (JSON.stringify(savedCart) !== JSON.stringify(cart)) {
    cart = savedCart;
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
