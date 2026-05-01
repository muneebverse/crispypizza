/* =========================================================
   Crispy Pizza Hub — Full menu data (PKR)
   Image paths use /site/assets/... so the user can drop in real photos.
   Each item: { id, name, desc, price | sizes:[{label,price}], img, cat }
   ========================================================= */
window.MENU = {
  pizzas: {
    title: "Pizzas",
    eyebrow: "🍕 Wood-Fired Pizzas",
    items: [
      // Highly Recommended
      { id: "p-crown-m", name: "Crown Crust", desc: "Cheese-filled crown crust pizza.", img: "assets/pizzas/crown-crust.jpg",
        sizes: [{label:"Medium", price:1400},{label:"Large", price:1890}] },
      { id: "p-crunchy", name: "Crunchy Pizza", desc: "Loaded crunchy supreme.", img: "assets/pizzas/crunchy.jpg",
        sizes: [{label:"Medium", price:1490},{label:"Large", price:1890}] },
      { id: "p-special", name: "Crispy Hub Special", desc: "Our signature loaded pizza.", img: "assets/pizzas/special.jpg",
        sizes: [{label:"Small", price:700},{label:"Medium", price:1300},{label:"Large", price:1700}] },
      { id: "p-stuff", name: "Stuff Crust", desc: "Cheese-stuffed crust, classic toppings.", img: "assets/pizzas/stuff-crust.jpg",
        sizes: [{label:"Small", price:760},{label:"Medium", price:1420},{label:"Large", price:1820}] },
      { id: "p-behari", name: "Behari Kabab Pizza", desc: "Spicy behari kabab on a cheesy base.", img: "assets/pizzas/behari-kabab.jpg",
        sizes: [{label:"Medium", price:1400},{label:"Large", price:1840}] },
      { id: "p-malai", name: "Malai Boti Pizza", desc: "Creamy malai boti chicken pizza.", img: "assets/pizzas/malai-boti.jpg",
        sizes: [{label:"Medium", price:1280},{label:"Large", price:1690}] },
      { id: "p-square", name: "Square Pizza", desc: "Crispy square-cut pizza.", img: "assets/pizzas/square.jpg",
        sizes: [{label:"Small", price:800},{label:"Medium", price:1490},{label:"Large", price:1800}] },
      { id: "p-extreme", name: "Extreme Pizza", desc: "Extreme toppings, extreme flavor.", img: "assets/pizzas/extreme.jpg",
        sizes: [{label:"Medium", price:1320},{label:"Large", price:1690}] },
      // Regular Flavour
      { id: "p-achari", name: "Achari Pizza", desc: "Tangy achari spice blend.", img: "assets/pizzas/achari.jpg",
        sizes: [{label:"Small", price:650},{label:"Medium", price:1250},{label:"Large", price:1550}] },
      { id: "p-supreme", name: "Supper Suprema", desc: "Classic supreme toppings.", img: "assets/pizzas/supreme.jpg",
        sizes: [{label:"Small", price:650},{label:"Medium", price:1250},{label:"Large", price:1550}] },
      { id: "p-creamy", name: "Creamy Pizza", desc: "Rich creamy white-sauce pizza.", img: "assets/pizzas/creamy.jpg",
        sizes: [{label:"Small", price:650},{label:"Medium", price:1250},{label:"Large", price:1550}] },
      { id: "p-friedchk", name: "Fried Chicken Pizza", desc: "Crispy fried chicken & cheese.", img: "assets/pizzas/fried-chicken.jpg",
        sizes: [{label:"Small", price:650},{label:"Medium", price:1250},{label:"Large", price:1550}] },
      { id: "p-firehose", name: "Fire Hose Pizza", desc: "New flavor — bring the heat.", img: "assets/pizzas/fire-hose.jpg",
        sizes: [{label:"Medium", price:1450},{label:"Large", price:1990}] },
      { id: "p-farmhouse", name: "Farm House Delight", desc: "Garden-fresh farmhouse loaded.", img: "assets/pizzas/farmhouse.jpg",
        sizes: [{label:"Medium", price:1450},{label:"Large", price:1990}] },
      // Crispy Traditional
      { id: "p-tikka", name: "Chicken Tikka Pizza", desc: "Tandoori chicken tikka chunks.", img: "assets/pizzas/tikka.jpg",
        sizes: [{label:"Small", price:590},{label:"Medium", price:1150},{label:"Large", price:1450}] },
      { id: "p-fajita", name: "Chicken Fajita Pizza", desc: "Smoky fajita chicken & peppers.", img: "assets/pizzas/fajita.jpg",
        sizes: [{label:"Small", price:590},{label:"Medium", price:1150},{label:"Large", price:1450}] },
      { id: "p-bbq", name: "B.B.Q Pizza", desc: "Classic BBQ chicken pizza.", img: "assets/pizzas/bbq.jpg",
        sizes: [{label:"Small", price:590},{label:"Medium", price:1150},{label:"Large", price:1450}] },
      { id: "p-cheeselover", name: "Cheese Lover Pizza", desc: "Triple cheese explosion.", img: "assets/pizzas/cheese-lover.jpg",
        sizes: [{label:"Small", price:590},{label:"Medium", price:1150},{label:"Large", price:1450}] },
      { id: "p-sicilian", name: "Hot Sicilian Pizza", desc: "Spicy Sicilian-style pizza.", img: "assets/pizzas/sicilian.jpg",
        sizes: [{label:"Small", price:590},{label:"Medium", price:1150},{label:"Large", price:1450}] },
      { id: "p-vegmax", name: "Veg Max Pizza", desc: "Maxed-out vegetable pizza.", img: "assets/pizzas/veg-max.jpg",
        sizes: [{label:"Small", price:590},{label:"Medium", price:1150},{label:"Large", price:1450}] },
    ],
  },

  burgers: {
    title: "Burgers",
    eyebrow: "🍔 Stacked & Juicy",
    items: [
      { id: "b-zinger", name: "Zinger Burger", price: 390, desc: "Crispy zinger fillet.", img: "assets/burgers/zinger.jpg" },
      { id: "b-chicken", name: "Chicken Burger", price: 320, desc: "Classic chicken patty.", img: "assets/burgers/chicken.jpg" },
      { id: "b-spice", name: "Spice Burger", price: 399, desc: "Bold & spicy patty.", img: "assets/burgers/spice.jpg" },
      { id: "b-chcheese", name: "Chicken Cheese Burger", price: 430, desc: "Cheesy chicken patty.", img: "assets/burgers/chicken-cheese.jpg" },
      { id: "b-cheese", name: "Cheese Burger", price: 430, desc: "Double cheese melt.", img: "assets/burgers/cheese.jpg" },
      { id: "b-grill", name: "Grill Burger", price: 450, desc: "Char-grilled goodness.", img: "assets/burgers/grill.jpg" },
      { id: "b-special", name: "Crispy Hub Special Burger", price: 650, desc: "House special stack.", img: "assets/burgers/special.jpg" },
    ],
  },

  rolls: {
    title: "Shawarma & Rolls",
    eyebrow: "🌯 Hand-Wrapped",
    items: [
      { id: "r-zsh", name: "Zinger Shawarma", price: 320, desc: "Crispy zinger wrap.", img: "assets/rolls/zinger-shawarma.jpg" },
      { id: "r-zchsh", name: "Zinger Cheese Shawarma", price: 370, desc: "Zinger + extra cheese.", img: "assets/rolls/zinger-cheese-shawarma.jpg" },
      { id: "r-zpr", name: "Zinger Paratha Roll", price: 350, desc: "Flaky paratha + zinger.", img: "assets/rolls/zinger-paratha.jpg" },
      { id: "r-zchpr", name: "Zinger Cheese Paratha Roll", price: 350, desc: "Paratha, zinger, cheese.", img: "assets/rolls/zinger-cheese-paratha.jpg" },
      { id: "r-seekhpr", name: "Seekh + Zinger Paratha Roll", price: 350, desc: "Seekh kabab combo wrap.", img: "assets/rolls/seekh-zinger.jpg" },
      { id: "r-seekh", name: "Seekh Roll Paratha", price: 350, desc: "Smoky seekh paratha roll.", img: "assets/rolls/seekh.jpg" },
      { id: "r-spinspl", name: "Crispy Special Spin Roll", price: 599, desc: "Loaded spin roll.", img: "assets/rolls/spin-special.jpg" },
      { id: "r-behari", name: "Behari Roll", price: 530, desc: "Spicy behari kabab roll.", img: "assets/rolls/behari.jpg" },
      { id: "r-mughlai", name: "Mughlai Roll", price: 650, desc: "Royal Mughlai-style roll.", img: "assets/rolls/mughlai.jpg" },
    ],
  },

  pasta: {
    title: "Pasta Lovers",
    eyebrow: "🍝 Saucy",
    items: [
      { id: "pa-spcl", name: "Crispy Hub Special Pasta", desc: "Our signature creamy pasta.", img: "assets/pasta/special.jpg",
        sizes: [{label:"Full", price:750}] },
      { id: "pa-crunch", name: "Crunchy Pasta", desc: "Crunchy topped pasta bake.", img: "assets/pasta/crunchy.jpg",
        sizes: [{label:"Half", price:430},{label:"Full", price:800}] },
    ],
  },

  appetizers: {
    title: "Appetizers & Sides",
    eyebrow: "🍗 Crispy & Loaded",
    items: [
      { id: "a-wings5", name: "Hot Wings (5 pcs)", price: 320, desc: "Spicy hot wings.", img: "assets/appetizers/wings5.jpg" },
      { id: "a-wings10", name: "Hot Wings (10 pcs)", price: 590, desc: "Spicy hot wings family.", img: "assets/appetizers/wings10.jpg" },
      { id: "a-fries-r", name: "French Fries Regular", price: 250, desc: "Crispy golden fries.", img: "assets/appetizers/fries-reg.jpg" },
      { id: "a-fries-l", name: "French Fries Large", price: 399, desc: "Large crispy fries.", img: "assets/appetizers/fries-large.jpg" },
      { id: "a-wings-bbq", name: "Wings — Oven Baked BBQ & Peri Peri (10 pcs)", price: 590, desc: "Oven-baked BBQ / Peri Peri.", img: "assets/appetizers/wings-bbq.jpg" },
      { id: "a-nuggets", name: "Chicken Nuggets (5 pcs)", price: 290, desc: "Crispy nuggets.", img: "assets/appetizers/nuggets.jpg" },
      { id: "a-hotshot", name: "Hot Shot (10 pcs)", price: 540, desc: "Spicy hot-shot bites.", img: "assets/appetizers/hotshot.jpg" },
      { id: "a-loaded", name: "Loaded Fries (20 pcs)", price: 580, desc: "Cheesy loaded fries.", img: "assets/appetizers/loaded.jpg" },
      { id: "a-kababstick", name: "Kabab Stick", price: 650, desc: "Grilled kabab stick.", img: "assets/appetizers/kabab-stick.jpg" },
      { id: "a-cheesestick", name: "Cheese Stick", price: 700, desc: "Crispy cheese sticks.", img: "assets/appetizers/cheese-stick.jpg" },
      { id: "a-platter", name: "Crispy Platter", price: 899, desc: "4 pcs Spin Roll + 5 pcs Oven Bake Wings + Dip Sauce + Fries.", img: "assets/appetizers/platter.jpg" },
      { id: "a-sandwich", name: "Crispy Sandwich", price: 650, desc: "House crispy sandwich.", img: "assets/appetizers/sandwich.jpg" },
    ],
  },

  drinks: {
    title: "Drinks & Shakes",
    eyebrow: "🥤 Cool & Crisp",
    items: [
      // Smoothies
      { id: "d-sm-rasp", name: "Raspberry Smoothie", price: 350, desc: "Fresh raspberry blend.", img: "assets/drinks/raspberry.jpg" },
      { id: "d-sm-orange", name: "Red Orange Smoothie", price: 350, desc: "Citrus burst.", img: "assets/drinks/red-orange.jpg" },
      { id: "d-sm-mango", name: "Mango Smoothie", price: 350, desc: "Alphonso mango.", img: "assets/drinks/mango-smoothie.jpg" },
      { id: "d-sm-apple", name: "Green Apple Smoothie", price: 350, desc: "Crisp green apple.", img: "assets/drinks/green-apple.jpg" },
      { id: "d-sm-blue", name: "Blue Curacao Smoothie", price: 350, desc: "Tropical blue curacao.", img: "assets/drinks/blue-curacao.jpg" },
      // Shakes
      { id: "d-mango", name: "Mango Shake", price: 250, desc: "Thick mango shake.", img: "assets/drinks/mango-shake.jpg" },
      { id: "d-banana", name: "Banana Shake", price: 200, desc: "Creamy banana shake.", img: "assets/drinks/banana.jpg" },
      { id: "d-apple-sh", name: "Apple Shake", price: 200, desc: "Fresh apple shake.", img: "assets/drinks/apple.jpg" },
      { id: "d-khajoor", name: "Khajoor Badam Shake", price: 400, desc: "Date & almond shake.", img: "assets/drinks/khajoor.jpg" },
      { id: "d-peach", name: "Peach Shake", price: 200, desc: "Sweet peach shake.", img: "assets/drinks/peach.jpg" },
      // Cocktails
      { id: "d-lime", name: "Fresh Lime", price: 150, desc: "Zesty lime cooler.", img: "assets/drinks/lime.jpg" },
      { id: "d-lemonade", name: "Lemonade", price: 200, desc: "House lemonade.", img: "assets/drinks/lemonade.jpg" },
      { id: "d-mint", name: "Mint Margarita", price: 250, desc: "Mint margarita mocktail.", img: "assets/drinks/mint.jpg" },
      { id: "d-electric", name: "Electric Lemonade", price: 320, desc: "Electric blue lemonade.", img: "assets/drinks/electric.jpg" },
      { id: "d-pinklady", name: "Pink Lady", price: 400, desc: "Pink mocktail blend.", img: "assets/drinks/pink-lady.jpg" },
      { id: "d-bluelagoon", name: "Blue Lagoon", price: 400, desc: "Tropical blue mocktail.", img: "assets/drinks/blue-lagoon.jpg" },
      { id: "d-pina", name: "Pina Colada", price: 400, desc: "Pineapple coconut bliss.", img: "assets/drinks/pina-colada.jpg" },
      { id: "d-strawcolada", name: "Strawberry Colada", price: 400, desc: "Strawberry colada.", img: "assets/drinks/strawberry-colada.jpg" },
    ],
  },

  icecream: {
    title: "Ice Cream Shakes & Scoops",
    eyebrow: "🍦 Cold Comfort",
    items: [
      { id: "ic-kulfa", name: "Kulfa Ice Cream Shake", price: 500, desc: "Traditional kulfa shake.", img: "assets/icecream/kulfa.jpg" },
      { id: "ic-mango", name: "Mango Ice Cream Shake", price: 500, desc: "Mango ice cream shake.", img: "assets/icecream/mango.jpg" },
      { id: "ic-vanilla", name: "Vanilla Ice Cream Shake", price: 500, desc: "Classic vanilla.", img: "assets/icecream/vanilla.jpg" },
      { id: "ic-choc", name: "Chocolate Ice Cream Shake", price: 500, desc: "Rich chocolate.", img: "assets/icecream/chocolate.jpg" },
      { id: "ic-oreo", name: "Oreo Shake", price: 500, desc: "Cookies & cream.", img: "assets/icecream/oreo.jpg" },
      { id: "ic-cold", name: "Cold Coffee Shake", price: 520, desc: "Iced coffee shake.", img: "assets/icecream/cold-coffee.jpg" },
      { id: "ic-scoop", name: "Ice Cream Scoops", desc: "Mango Pista / Kulfa / Caramel Crunch / Chocolate.", img: "assets/icecream/scoops.jpg",
        sizes: [{label:"Small (2 scoop)", price:220},{label:"Medium (3 scoop)", price:320},{label:"Large (4 scoop)", price:440}] },
    ],
  },

  // ===== COFFEE WORLD =====
  coffeeHot: {
    title: "Hot Coffees",
    eyebrow: "☕ Steamed & Pulled",
    items: [
      { id: "ch-cap", name: "Cappuccino", price: 450, desc: "Velvet milk foam, espresso heart.", img: "assets/coffee/cappuccino.jpg" },
      { id: "ch-latte", name: "Café Latte", price: 470, desc: "Smooth espresso & steamed milk.", img: "assets/coffee/latte.jpg" },
      { id: "ch-esp1", name: "Espresso — Single Shot", price: 300, desc: "Pure shot of energy.", img: "assets/coffee/espresso-single.jpg" },
      { id: "ch-esp2", name: "Espresso — Double Shot", price: 450, desc: "Double the kick.", img: "assets/coffee/espresso-double.jpg" },
      { id: "ch-caramel", name: "Caramel Coffee", price: 550, desc: "Buttery caramel latte.", img: "assets/coffee/caramel.jpg" },
      { id: "ch-amer", name: "Americano", price: 420, desc: "Espresso + hot water.", img: "assets/coffee/americano.jpg" },
      { id: "ch-cph", name: "CPH Special Coffee", price: 550, desc: "Our signature blend.", img: "assets/coffee/cph-special.jpg" },
      { id: "ch-nes", name: "Nescafe Coffee", price: 250, desc: "Classic Nescafé cup.", img: "assets/coffee/nescafe.jpg" },
    ],
  },

  coffeeCold: {
    title: "Cold Coffees",
    eyebrow: "🧊 Iced & Frosted",
    items: [
      { id: "cc-hazel", name: "Hazelnut Frappuccino", price: 500, desc: "Hazelnut iced blend.", img: "assets/coffee/hazelnut.jpg" },
      { id: "cc-caramel", name: "Caramel Frappuccino", price: 550, desc: "Caramel iced blend.", img: "assets/coffee/caramel-frap.jpg" },
      { id: "cc-irish", name: "Irish Frappuccino", price: 500, desc: "Irish-cream iced blend.", img: "assets/coffee/irish.jpg" },
      { id: "cc-french", name: "French Vanilla Frappuccino", price: 500, desc: "French vanilla iced.", img: "assets/coffee/french-vanilla.jpg" },
      { id: "cc-cold", name: "Cold Coffee", price: 450, desc: "Classic cold coffee.", img: "assets/coffee/cold-coffee.jpg" },
      { id: "cc-kitkat", name: "Kit Kat Special", price: 650, desc: "Kit Kat blended dream.", img: "assets/coffee/kitkat.jpg" },
      { id: "cc-butter", name: "Butter Scotch Frappuccino", price: 600, desc: "Butterscotch iced blend.", img: "assets/coffee/butterscotch.jpg" },
    ],
  },

  tea: {
    title: "Tea",
    eyebrow: "🍵 Brewed",
    items: [
      { id: "t-karak", name: "Karak Chai", price: 150, desc: "Strong cardamom karak.", img: "assets/coffee/karak.jpg" },
      { id: "t-card", name: "Cardamom Tea", price: 200, desc: "Aromatic cardamom tea.", img: "assets/coffee/cardamom.jpg" },
      { id: "t-choc", name: "Chocolate Tea", price: 230, desc: "Chocolate-infused tea.", img: "assets/coffee/chocolate-tea.jpg" },
      { id: "t-caramel", name: "Caramel Tea", price: 200, desc: "Sweet caramel tea.", img: "assets/coffee/caramel-tea.jpg" },
    ],
  },

  // ===== DEALS =====
  deals: [
    { id: "dl-1", name: "Deal 1 — 2 Small Pizza + 1 Zinger Burger + 1 Litre Drink", price: 1590, tag: "AFTERNOON", icon: "🍕" },
    { id: "dl-2", name: "Deal 2 — 2 Large Pizza + 1.5 Litre Drink", price: 3410, tag: "AFTERNOON", icon: "🍕" },
    { id: "dl-3", name: "Deal 3 — 1 Special Sandwich + Half Pasta + 5 Hot Wings + 1 Litre Drink", price: 1490, tag: "AFTERNOON", icon: "🥪" },
    { id: "dl-4", name: "Deal 4 — 5 Zinger Burger + 1.5 Litre Drink", price: 2090, tag: "AFTERNOON", icon: "🍔" },
    { id: "dl-5", name: "Deal 5 — 2 Zinger Burger + Half Litre Drink", price: 850, tag: "AFTERNOON", icon: "🍔" },
    { id: "dl-6", name: "Deal 6 — 5 Hot Wings + Half Litre Drink + 1 Zinger Burger", price: 750, tag: "MIDNIGHT", icon: "🌙" },
    { id: "dl-7", name: "Deal 7 — 1 Medium Pizza + 10 Wings + 1 Litre Drink", price: 1790, tag: "MIDNIGHT", icon: "🌙" },
    { id: "dl-8", name: "Deal 8 — 1 Large Pizza + 6 Hot Wings + 1.5 Litre Coke", price: 2030, tag: "MIDNIGHT", icon: "🌙" },
    { id: "dl-9", name: "Deal 9 — 5 Nuggets + 1 Chicken Burger + 5 Wings + 1 Litre Drink", price: 1490, tag: "MIDNIGHT", icon: "🌙" },
    { id: "dl-10", name: "Deal 10 — 2 Chicken Pizza + 10 Nuggets + Fries + 1 Litre Coke", price: 1450, tag: "MIDNIGHT", icon: "🌙" },
    { id: "dl-bogo", name: "Buy 1 Get 1 Free — Any Large Pizza", price: 1700, tag: "WEEKLY", icon: "🍕" },
    { id: "dl-family", name: "Family Feast — 2 Large + Sides + 2L Drink", price: 3499, tag: "BUNDLE", icon: "👨‍👩‍👧" },
  ],
};
