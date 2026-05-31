// Edit this file to update your weekly grocery list.
// The list is split into two market trips. Each trip has a title and
// a set of categories; each category maps to an array of item strings.

const groceryTrips = [
  {
    title: 'Trip 1 — Monday (start of week)',
    categories: {
      'Proteins': [
        'Chicken breast (600g)',
        'Eggs (20 pcs)',
        'Canned chickpeas (3 cans)',
        'Red lentils (400g)',
        'Moong dal (300g)'
      ],
      'Dairy': [
        'Greek yogurt (1kg)',
        'Magerquark (500g)',
        'Skimmed milk (1.5L)',
        'Ghee (small jar)'
      ],
      'Grains': [
        'Rolled oats (800g)',
        'Brown rice (500g)',
        'Basmati rice (500g)',
        'Quinoa (300g)',
        'Whole wheat roti (1 pack)',
        'Vollkornbrot (1 loaf)'
      ],
      'Vegetables': [
        'Spinach (300g)',
        'Onions (5 pcs)',
        'Tomatoes (5 pcs)',
        'Cucumber (2 pcs)',
        'Green chillies (1 pack)',
        'Fresh coriander (1 bunch)'
      ],
      'Fruits': [
        'Bananas (5)',
        'Apples (3)',
        'Mixed berries (200g)'
      ],
      'Pantry top-up': [
        'Garlic-ginger paste',
        'Canned crushed tomatoes (2 cans)',
        'Rapeseed oil (500ml)'
      ]
    }
  },
  {
    title: 'Trip 2 — Thursday (mid-week)',
    categories: {
      'Proteins': [
        'Salmon fillet (600g)',
        'Eggs (6 pcs, top-up)',
        'Canned chickpeas (1 can, if needed)'
      ],
      'Dairy': [
        'Greek yogurt (500g, top-up)',
        'Skimmed milk (1L)'
      ],
      'Vegetables': [
        'Spinach (300g)',
        'Onions (3 pcs)',
        'Tomatoes (3 pcs)',
        'Cucumber (1 pc)',
        'Mixed sprouts (200g, moong/chickpea)'
      ],
      'Fruits': [
        'Apples (2)',
        'Oranges (3)',
        'Mango (fresh or frozen, 200g)'
      ],
      'Nuts & Seeds': [
        'Almonds (100g)',
        'Walnuts (100g)',
        'Pumpkin seeds (100g)',
        'Almond butter (1 jar)',
        'Honey (small jar)'
      ],
      'Indian Pantry': [
        'Garam masala',
        'Cumin',
        'Turmeric',
        'Coriander powder',
        'Chaat masala',
        'Amchur',
        'Tandoori masala',
        'Chana masala powder',
        'Hing',
        'Black salt',
        'Cardamom',
        'Cinnamon'
      ]
    }
  }
];
