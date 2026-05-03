// Edit this file to change your weekly meal plan.
// Each day has: kcal, protein (g), carbs (g), fats (g), and an array of meals.
// meal types: 'breakfast' | 'snack' | 'lunch' | 'dinner'
// Only dinner meals should have a cookDouble field.

const dietPlan = {
  mon: {
    kcal: 1845, protein: 152, carbs: 177, fats: 54,
    meals: [
      {
        type: 'breakfast',
        name: 'Masala oat bowl',
        kcal: 350,
        items: '60g rolled oats · 200ml milk · 150g Greek yogurt · 1 banana · 1 tsp honey · cardamom & cinnamon'
      },
      {
        type: 'snack',
        name: 'Boiled eggs',
        kcal: 140,
        items: '2 hard-boiled eggs · chaat masala · black salt'
      },
      {
        type: 'lunch',
        name: 'Dal & rice (Sunday leftover)',
        kcal: 500,
        items: 'Leftover moong dal + jeera rice from Sunday dinner. Reheat and eat.'
      },
      {
        type: 'dinner',
        name: 'Chicken curry with brown rice',
        kcal: 700,
        items: '300g chicken breast · 80g brown rice · 1 onion · crushed tomatoes · yogurt · garlic-ginger paste · 1 tsp oil · cumin, coriander, turmeric, garam masala',
        cookDouble: 'Refrigerate half the curry + rice = Tuesday lunch.'
      }
    ]
  },

  tue: {
    kcal: 1850, protein: 155, carbs: 174, fats: 55,
    meals: [
      {
        type: 'breakfast',
        name: 'Skyr with fruit & chia',
        kcal: 350,
        items: '200g plain Skyr · 100g mixed berries · 1 tbsp chia seeds · 1 tsp honey · cardamom'
      },
      {
        type: 'snack',
        name: 'Mixed nuts & apple',
        kcal: 150,
        items: '20g mixed nuts (almonds + walnuts) · 1 medium apple'
      },
      {
        type: 'lunch',
        name: 'Chicken curry & brown rice (Monday leftover)',
        kcal: 500,
        items: 'Leftover from Monday dinner. Reheat.'
      },
      {
        type: 'dinner',
        name: 'Masoor dal with jeera rice & raita',
        kcal: 700,
        items: '150g red lentils · 80g basmati rice · 1 onion · 1 tomato · 1 tsp ghee · cumin, turmeric, hing · raita: 150g yogurt + cucumber + jeera',
        cookDouble: 'Double dal + rice. Half in fridge = Wednesday lunch.'
      }
    ]
  },

  wed: {
    kcal: 1840, protein: 153, carbs: 176, fats: 54,
    meals: [
      {
        type: 'breakfast',
        name: 'Overnight oats (Indian style)',
        kcal: 350,
        items: '60g oats · 200ml skimmed milk · 100g Magerquark · 1 tbsp almond butter · banana — prepped Tuesday night'
      },
      {
        type: 'snack',
        name: 'Boiled eggs with chaat masala',
        kcal: 140,
        items: '2 hard-boiled eggs · chaat masala · lemon squeeze'
      },
      {
        type: 'lunch',
        name: 'Masoor dal & jeera rice (Tuesday leftover)',
        kcal: 500,
        items: 'Leftover from Tuesday dinner. Reheat.'
      },
      {
        type: 'dinner',
        name: 'Egg bhurji with roti & salad',
        kcal: 700,
        items: '6 eggs · 1 onion · 2 tomatoes · green chilli · 1 tsp oil · cumin, turmeric, coriander · 2 whole wheat rotis · cucumber + tomato salad',
        cookDouble: 'Extra bhurji + 1 roti packed = Thursday lunch wrap.'
      }
    ]
  },

  thu: {
    kcal: 1855, protein: 157, carbs: 173, fats: 56,
    meals: [
      {
        type: 'breakfast',
        name: 'Greek yogurt mango bowl',
        kcal: 350,
        items: '200g Greek yogurt · 50g oats · 100g mango (fresh or frozen) · 10g pumpkin seeds · cardamom'
      },
      {
        type: 'snack',
        name: 'Roasted makhana',
        kcal: 150,
        items: '30g roasted makhana (fox nuts) — available at Indian grocery store'
      },
      {
        type: 'lunch',
        name: 'Egg bhurji roti wrap (Wednesday leftover)',
        kcal: 500,
        items: 'Leftover egg bhurji in the extra roti. Add fresh onion + coriander.'
      },
      {
        type: 'dinner',
        name: 'Chana masala with brown rice',
        kcal: 705,
        items: '2 cans chickpeas (480g drained) · 1 can crushed tomatoes · 1 onion · garlic-ginger paste · 1 tsp oil · chana masala powder · coriander, cumin, amchur · 80g brown rice',
        cookDouble: 'Double chana + rice. Half in fridge = Friday lunch.'
      }
    ]
  },

  fri: {
    kcal: 1850, protein: 154, carbs: 175, fats: 55,
    meals: [
      {
        type: 'breakfast',
        name: 'Mango lassi oat bowl',
        kcal: 350,
        items: '200g low-fat yogurt · 60g oats · 100g mango · 1 tsp honey · cardamom — stir together or blend'
      },
      {
        type: 'snack',
        name: 'Boiled eggs',
        kcal: 140,
        items: '2 boiled eggs · black salt & chaat masala'
      },
      {
        type: 'lunch',
        name: 'Chana masala & brown rice (Thursday leftover)',
        kcal: 500,
        items: 'Leftover from Thursday. Reheat.'
      },
      {
        type: 'dinner',
        name: 'Salmon tikka with quinoa & mint raita',
        kcal: 710,
        items: '2×150g salmon fillet · marinate: yogurt + turmeric + tandoori masala + lemon · bake 200°C 18 min · 70g quinoa · raita: 150g yogurt + mint + cucumber',
        cookDouble: 'Bake 2 extra salmon portions. Pack with quinoa = Saturday lunch.'
      }
    ]
  },

  sat: {
    kcal: 1870, protein: 158, carbs: 171, fats: 57,
    meals: [
      {
        type: 'breakfast',
        name: 'Masala omelette',
        kcal: 380,
        items: '3 whole eggs · 1 onion · 1 tomato · green chilli · fresh coriander · 1 tsp oil · 1 slice Vollkornbrot'
      },
      {
        type: 'snack',
        name: 'Magerquark & orange',
        kcal: 150,
        items: '150g Magerquark · 1 orange (segmented) · 1 tsp honey'
      },
      {
        type: 'lunch',
        name: 'Salmon tikka & quinoa bowl (Friday leftover)',
        kcal: 500,
        items: 'Leftover salmon tikka + quinoa. Add fresh lettuce and lemon.'
      },
      {
        type: 'dinner',
        name: 'Palak paneer (light) with roti',
        kcal: 690,
        items: '200g low-fat paneer · 300g spinach · 1 onion · garlic-ginger paste · 1 tsp oil · 1 tsp ghee · garam masala, cumin · 2 whole wheat rotis per person',
        cookDouble: 'Double palak paneer + 1 extra roti = Sunday lunch.'
      }
    ]
  },

  sun: {
    kcal: 1855, protein: 154, carbs: 176, fats: 55,
    meals: [
      {
        type: 'breakfast',
        name: 'Bircher oats with mango',
        kcal: 370,
        items: '70g oats · 200ml skimmed milk · 100g Skyr · 1 grated apple · 100g mango · cardamom — prepped Saturday night'
      },
      {
        type: 'snack',
        name: 'Makhana + boiled egg',
        kcal: 145,
        items: '20g roasted makhana · 1 boiled egg'
      },
      {
        type: 'lunch',
        name: 'Palak paneer & roti (Saturday leftover)',
        kcal: 500,
        items: 'Leftover from Saturday. Reheat. Add fresh onion salad.'
      },
      {
        type: 'dinner',
        name: 'Moong dal with jeera rice',
        kcal: 690,
        items: '150g split moong dal · 80g basmati rice · 1 onion · 2 tomatoes · 1 tsp ghee · cumin seeds, turmeric, hing, garam masala · fresh coriander',
        cookDouble: 'Double dal + rice = Monday lunch. Week restarts cleanly.'
      }
    ]
  }
};
