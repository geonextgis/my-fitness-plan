# CLAUDE.md — Personal Fat Loss & Gym Plan Website

## Project overview

Build a personal fat loss + gym plan website for a 25-year-old Indian male (74kg, 170cm, lightly active, based in Müncheberg, Germany). The site is a **single `index.html` file** hostable on GitHub Pages — zero backend, zero dependencies, zero build steps.

The site has **two modes** toggled by a top-level switcher in the header:
- **Diet mode** — 7-day Indian cook-once meal plan
- **Gym mode** — 7-day beginner gym plan for TheosGym Müncheberg

Both modes live in the same file. Switching modes replaces the entire content area below the header. The active mode is remembered in `localStorage` so it persists on refresh.

---

## Site identity

- **Title:** My Fitness Plan
- **Tagline (diet mode):** 1,850 kcal · Cook once, eat twice · Fat loss + muscle · Indian-friendly
- **Tagline (gym mode):** TheosGym Müncheberg · Beginner split · 6 days/week
- **Color scheme:**
  - Diet mode accent: saffron orange `#F97316`
  - Gym mode accent: steel blue `#2563EB`
  - Shared: white background `#FFFFFF`, charcoal text `#1C1917`
- **Font:** `'Segoe UI', system-ui, -apple-system, sans-serif`
- **Mood:** Clean, minimal, personal — like a well-designed notes app

---

## Tech stack

- **Single file:** `index.html` — all CSS and JS inline
- **No frameworks**, no npm, no build tools
- **No external CDN** — fully self-contained, works offline
- **Hosting:** GitHub Pages

---

## Top-level mode switcher (header)

The header always shows:
```
My Fitness Plan
[  Diet Mode  ]  [  Gym Mode  ]   ← toggle buttons
```

- Two pill-shaped toggle buttons side by side
- Active mode button: filled with that mode's accent color, white text
- Inactive mode: outlined, muted text
- Clicking switches the entire content area below and updates the tagline
- Store active mode in `localStorage` key `"activeMode"` — default to `"diet"` if not set

When the mode switches:
1. Hide the inactive mode's entire section
2. Show the active mode's section
3. Update the accent CSS variable: `document.documentElement.style.setProperty('--accent', color)`
4. Update the tagline text in the header

---

## Diet mode

### Diet header stats
Four stat cards:
- Daily calories: **1,850 kcal**
- Protein: **155g**
- Carbs: **175g**
- Fats: **55g**

### Diet navigation tabs
`Mon · Tue · Wed · Thu · Fri · Sat · Sun · Grocery · Prep`

Default tab: Monday.

### Meal cards (per day)
Each day shows 4 cards:
- **Breakfast** (amber badge) — ~350 kcal, no cooking
- **Snack** (pink badge) — ~140–150 kcal
- **Lunch** (green badge) — ~500 kcal, always a leftover label
- **Dinner** (blue badge) — ~700 kcal, always has a green "Cook double" callout box

### Diet data (JS object)

```js
const dietPlan = {
  mon: {
    kcal: 1845, protein: 152, carbs: 177, fats: 54,
    meals: [
      { type: 'breakfast', name: 'Masala oat bowl', kcal: 350,
        items: '60g rolled oats · 200ml milk · 150g Greek yogurt · 1 banana · 1 tsp honey · cardamom & cinnamon' },
      { type: 'snack', name: 'Boiled eggs', kcal: 140,
        items: '2 hard-boiled eggs · chaat masala · black salt' },
      { type: 'lunch', name: 'Dal & rice (Sunday leftover)', kcal: 500,
        items: 'Leftover moong dal + jeera rice from Sunday dinner. Reheat and eat.' },
      { type: 'dinner', name: 'Egg bhurji with quinoa & salad', kcal: 700,
        items: '5 eggs · 1 onion · 2 tomatoes · green chilli · 1 tsp oil · cumin, turmeric, coriander · 80g quinoa · cucumber + tomato salad',
        cookDouble: 'Extra bhurji + quinoa packed = Tuesday lunch.' }
    ]
  },
  tue: {
    kcal: 1850, protein: 155, carbs: 174, fats: 55,
    meals: [
      { type: 'breakfast', name: 'Greek yogurt & berry bowl', kcal: 350,
        items: '200g Greek yogurt · 100g mixed berries · 50g rolled oats · 10g pumpkin seeds · 1 tsp honey · cardamom' },
      { type: 'snack', name: 'Mixed nuts & apple', kcal: 150,
        items: '20g mixed nuts (almonds + walnuts) · 1 medium apple' },
      { type: 'lunch', name: 'Egg bhurji & quinoa (Monday leftover)', kcal: 500,
        items: 'Leftover from Monday dinner. Reheat bhurji, add fresh coriander and lemon squeeze.' },
      { type: 'dinner', name: 'Masoor dal with jeera rice & raita', kcal: 700,
        items: '150g red lentils · 80g basmati rice · 1 onion · 1 tomato · 1 tsp ghee · cumin, turmeric, hing · raita: 150g yogurt + cucumber + jeera',
        cookDouble: 'Double dal + rice. Half in fridge = Wednesday lunch.' }
    ]
  },
  wed: {
    kcal: 1840, protein: 153, carbs: 176, fats: 54,
    meals: [
      { type: 'breakfast', name: 'Overnight oats (Indian style)', kcal: 350,
        items: '60g oats · 200ml skimmed milk · 100g Magerquark · 1 tbsp almond butter · banana — prepped Tuesday night' },
      { type: 'snack', name: 'Boiled eggs with chaat masala', kcal: 140,
        items: '2 hard-boiled eggs · chaat masala · lemon squeeze' },
      { type: 'lunch', name: 'Masoor dal & jeera rice (Tuesday leftover)', kcal: 500,
        items: 'Leftover from Tuesday dinner. Reheat.' },
      { type: 'dinner', name: 'Egg bhurji with roti & salad', kcal: 700,
        items: '6 eggs · 1 onion · 2 tomatoes · green chilli · 1 tsp oil · cumin, turmeric, coriander · 2 whole wheat rotis · cucumber + tomato salad',
        cookDouble: 'Extra bhurji + 1 roti packed = Thursday lunch wrap.' }
    ]
  },
  thu: {
    kcal: 1855, protein: 157, carbs: 173, fats: 56,
    meals: [
      { type: 'breakfast', name: 'Greek yogurt mango bowl', kcal: 350,
        items: '200g Greek yogurt · 50g oats · 100g mango (fresh or frozen) · 10g pumpkin seeds · cardamom' },
      { type: 'snack', name: 'Sprouts salad', kcal: 150,
        items: '80g mixed sprouts (moong/chickpea) · 1 small tomato · cucumber · lemon juice · chaat masala · fresh coriander' },
      { type: 'lunch', name: 'Egg bhurji roti wrap (Wednesday leftover)', kcal: 500,
        items: 'Leftover egg bhurji in the extra roti. Add fresh onion + coriander.' },
      { type: 'dinner', name: 'Chana masala with brown rice', kcal: 705,
        items: '2 cans chickpeas (480g drained) · 1 can crushed tomatoes · 1 onion · garlic-ginger paste · 1 tsp oil · chana masala powder · coriander, cumin, amchur · 80g brown rice',
        cookDouble: 'Double chana + rice. Half in fridge = Friday lunch.' }
    ]
  },
  fri: {
    kcal: 1850, protein: 154, carbs: 175, fats: 55,
    meals: [
      { type: 'breakfast', name: 'Mango lassi oat bowl', kcal: 350,
        items: '200g low-fat yogurt · 60g oats · 100g mango · 1 tsp honey · cardamom — stir together or blend' },
      { type: 'snack', name: 'Boiled eggs', kcal: 140,
        items: '2 boiled eggs · black salt & chaat masala' },
      { type: 'lunch', name: 'Chana masala & brown rice (Thursday leftover)', kcal: 500,
        items: 'Leftover from Thursday. Reheat.' },
      { type: 'dinner', name: 'Salmon tikka with quinoa & mint raita', kcal: 710,
        items: '2x150g salmon fillet · marinate: yogurt + turmeric + tandoori masala + lemon · bake 200C 18 min · 70g quinoa · raita: 150g yogurt + mint + cucumber',
        cookDouble: 'Bake 2 extra salmon portions. Pack with quinoa = Saturday lunch.' }
    ]
  },
  sat: {
    kcal: 1870, protein: 158, carbs: 171, fats: 57,
    meals: [
      { type: 'breakfast', name: 'Masala omelette', kcal: 380,
        items: '3 whole eggs · 1 onion · 1 tomato · green chilli · fresh coriander · 1 tsp oil · 1 slice Vollkornbrot' },
      { type: 'snack', name: 'Magerquark & orange', kcal: 150,
        items: '150g Magerquark · 1 orange (segmented) · 1 tsp honey' },
      { type: 'lunch', name: 'Salmon tikka & quinoa bowl (Friday leftover)', kcal: 500,
        items: 'Leftover salmon tikka + quinoa. Add fresh lettuce and lemon.' },
      { type: 'dinner', name: 'Chicken curry with brown rice', kcal: 690,
        items: '300g chicken breast · 80g brown rice · 1 onion · crushed tomatoes · yogurt · garlic-ginger paste · 1 tsp oil · cumin, coriander, turmeric, garam masala',
        cookDouble: 'Refrigerate half the curry + rice = Sunday lunch.' }
    ]
  },
  sun: {
    kcal: 1855, protein: 154, carbs: 176, fats: 55,
    meals: [
      { type: 'breakfast', name: 'Masala oat bowl with banana', kcal: 370,
        items: '70g rolled oats · 200ml skimmed milk · 100g Magerquark · 1 banana · 1 tsp almond butter · cardamom & cinnamon — prepped Saturday night' },
      { type: 'snack', name: 'Boiled eggs & apple', kcal: 145,
        items: '2 hard-boiled eggs · 1 medium apple · black salt & chaat masala' },
      { type: 'lunch', name: 'Chicken curry & brown rice (Saturday leftover)', kcal: 500,
        items: 'Leftover chicken curry + rice from Saturday. Reheat. Add fresh coriander and lemon.' },
      { type: 'dinner', name: 'Moong dal with jeera rice', kcal: 690,
        items: '150g split moong dal · 80g basmati rice · 1 onion · 2 tomatoes · 1 tsp ghee · cumin seeds, turmeric, hing, garam masala · fresh coriander',
        cookDouble: 'Double dal + rice = Monday lunch. Week restarts cleanly.' }
    ]
  }
};
```

### Grocery list tab (diet mode)
Split into **two market trips per week**. Each trip has a "Copy list" clipboard button.

**Trip 1 — Monday (start of week)**
- Proteins: chicken breast 600g, eggs 20 pcs, chickpeas canned 3 cans, red lentils 400g, moong dal 300g
- Dairy: Greek yogurt 1kg, Magerquark 500g, skimmed milk 1.5L, ghee small jar
- Grains: rolled oats 800g, brown rice 500g, basmati rice 500g, quinoa 300g, whole wheat roti 1 pack, Vollkornbrot 1 loaf
- Vegetables: spinach 300g, onions 5 pcs, tomatoes 5 pcs, cucumber 2 pcs, green chillies 1 pack, fresh coriander 1 bunch
- Fruits: bananas 5, apples 3, mixed berries 200g
- Pantry top-up: garlic-ginger paste, canned crushed tomatoes 2 cans, rapeseed oil 500ml

**Trip 2 — Thursday (mid-week)**
- Proteins: salmon fillet 600g, eggs 6 pcs (top-up), chickpeas canned 1 can (if needed)
- Dairy: Greek yogurt 500g (top-up), skimmed milk 1L
- Vegetables: spinach 300g, onions 3 pcs, tomatoes 3 pcs, cucumber 1 pc, mixed sprouts 200g (moong/chickpea)
- Fruits: apples 2, oranges 3, mango fresh or frozen 200g
- Nuts & seeds: almonds 100g, walnuts 100g, pumpkin seeds 100g, almond butter 1 jar, honey small jar
- Indian pantry: garam masala, cumin, turmeric, coriander powder, chaat masala, amchur, tandoori masala, chana masala powder, hing, black salt, cardamom, cinnamon


### Prep guide tab (diet mode)
- The cook-once rule: every dinner = next day's lunch, cook double every night
- Sunday 30-min prep: boil 10-12 eggs, soak oats for Monday overnight batch, pre-portion nuts into daily bags
- Every-night 5-min rule: pack leftover immediately after cooking into a labelled container
- Hydration: jeera water in morning, 2.5-3L water daily
- Supplements: whey protein (optional), creatine 3-5g/day, Vitamin D3 1500 IU
- Fat loss note: prioritise protein at every meal (155g/day target) and keep dinner under 700 kcal — this combination preserves muscle while cutting belly fat

---

## Gym mode

### Gym header stats
Four stat cards:
- Session length: **45-55 min**
- Days/week: **6 active**
- Rest day: **Sunday**
- Level: **Beginner**

### Gym navigation tabs
`Overview · Mon · Tue · Wed · Thu · Fri · Sat · Sun · 4-Week Plan · Gym Tips`

Default tab: Overview.

### Gym data (JS object)

```js
const gymPlan = {
  overview: {
    gym: 'TheosGym Müncheberg',
    address: 'Ernst-Thälmann-Strasse 87, 15374 Müncheberg',
    access: '24/7',
    trainerDays: 'Monday & Wednesday 14:30-17:30',
    split: [
      { day: 'Mon', focus: 'Push', detail: 'Chest · Shoulders · Triceps' },
      { day: 'Tue', focus: 'Pull', detail: 'Back · Biceps · Rear delts' },
      { day: 'Wed', focus: 'Legs', detail: 'Quads · Hamstrings · Glutes · Calves' },
      { day: 'Thu', focus: 'Upper (light)', detail: 'Full upper body at 60% — technique day' },
      { day: 'Fri', focus: 'Full body', detail: 'Compound focus — highest calorie burn' },
      { day: 'Sat', focus: 'Cardio + Core', detail: 'Zone 2 cardio + core circuit' },
      { day: 'Sun', focus: 'Rest', detail: 'Complete rest — muscles grow during recovery' }
    ]
  },
  mon: {
    focus: 'Push day', muscles: 'Chest · Shoulders · Triceps', duration: '~50 min',
    warmup: '5 min treadmill at 6 km/h + 10 arm circles each direction + 10 shoulder rotations',
    exercises: [
      { name: 'Chest press machine', sets: '3 sets x 12 reps',
        desc: 'Sit upright, grip handles at chest height, push forward fully, return slowly (3 sec). Rest 60 sec between sets.',
        tip: 'Start light — use 60-70% of maximum. Form over weight always.' },
      { name: 'Incline dumbbell press', sets: '3 sets x 10 reps',
        desc: 'Set bench to ~45 degrees. Hold dumbbells at shoulder level, press up and slightly inward. Lower slowly.',
        tip: 'For beginners: 6-10kg dumbbells. Go up only when 12 reps feel easy.' },
      { name: 'Shoulder press machine', sets: '3 sets x 12 reps',
        desc: 'Adjust seat so handles are at shoulder height. Press up, stop before locking elbows, lower with control.',
        tip: 'Keep shoulders down and packed — do not shrug.' },
      { name: 'Lateral raises (dumbbells)', sets: '3 sets x 15 reps',
        desc: 'Stand, slight bend in elbows, raise arms out to shoulder level. Pause 1 sec. Lower slowly.',
        tip: 'Use light weight (4-6kg). Isolation exercise — ego has no place here.' },
      { name: 'Tricep pushdown (cable)', sets: '3 sets x 15 reps',
        desc: 'Rope or bar at chest height. Push down until arms straight, return slowly.',
        tip: 'Keep elbows pinned to your sides throughout the movement.' }
    ],
    cooldown: 'Chest doorway stretch x 30 sec · Overhead tricep stretch x 30 sec each arm · Child pose x 60 sec'
  },
  tue: {
    focus: 'Pull day', muscles: 'Back · Biceps · Rear delts', duration: '~50 min',
    warmup: '5 min rowing machine at easy pace + 10 band pull-aparts + cat-cow stretches x 10',
    exercises: [
      { name: 'Lat pulldown machine', sets: '3 sets x 12 reps',
        desc: 'Grip slightly wider than shoulder width, pull to upper chest, lean back slightly, squeeze shoulder blades. Return slowly.',
        tip: 'Think "pull elbows to hips" — do not just pull with arms.' },
      { name: 'Seated cable row', sets: '3 sets x 12 reps',
        desc: 'Sit upright, pull handle to belly button, squeeze back at end. Keep torso nearly vertical.',
        tip: 'Pause 1 second at peak contraction every rep.' },
      { name: 'Single-arm dumbbell row', sets: '3 sets x 10 reps each',
        desc: 'Brace one knee and hand on bench. Row dumbbell to hip, elbow close to body. Lower with control.',
        tip: 'Keep spine flat — do not rotate the torso to lift more weight.' },
      { name: 'Face pulls (cable)', sets: '3 sets x 15 reps',
        desc: 'Rope at head height. Pull toward face, flare elbows out, squeeze rear delts. Light weight only.',
        tip: 'Best exercise for shoulder health. Do this every pull day, always.' },
      { name: 'Dumbbell bicep curl', sets: '3 sets x 12 reps',
        desc: 'Curl to shoulder, supinate at top. Lower fully — do not cut range short.',
        tip: 'No swinging. If you swing, the weight is too heavy.' }
    ],
    cooldown: 'Lat stretch (hang from bar) x 30 sec · Bicep wall stretch x 30 sec each · Child pose x 60 sec'
  },
  wed: {
    focus: 'Leg day', muscles: 'Quads · Hamstrings · Glutes · Calves', duration: '~55 min',
    warmup: '5 min bike at easy pace + 10 bodyweight squats + 10 walking lunges + hip circles x 10 each',
    exercises: [
      { name: 'Leg press machine', sets: '4 sets x 12 reps',
        desc: 'Feet shoulder-width on platform, push until nearly straight (not locked), lower until knees at 90 degrees. Control the descent.',
        tip: 'The leg press is the beginner squat — master this before barbell squats.' },
      { name: 'Goblet squat (dumbbell)', sets: '3 sets x 12 reps',
        desc: 'Hold one dumbbell at chest. Squat deep, chest up, knees tracking toes. Drive through heels.',
        tip: 'Use 10-16kg. This teaches the squat pattern safely.' },
      { name: 'Leg curl machine', sets: '3 sets x 12 reps',
        desc: 'Curl heels toward glutes, hold 1 sec, lower slowly. Hamstrings are often weak in beginners.',
        tip: 'Go lighter than you think — hamstring tears are real.' },
      { name: 'Walking lunges (bodyweight)', sets: '3 sets x 10 each leg',
        desc: 'Step forward, back knee nearly touches floor, push through to next step. No dumbbells yet.',
        tip: 'Keep torso upright — do not lean forward over the knee.' },
      { name: 'Calf raises (machine or step)', sets: '3 sets x 20 reps',
        desc: 'Push up onto toes fully, pause 1 sec at top, lower heels below step for full stretch.',
        tip: 'Calves need high reps — 20 minimum per set.' }
    ],
    cooldown: 'Quad stretch x 45 sec each · Hamstring stretch x 45 sec each · Hip flexor lunge x 45 sec each · Foam roll quads if available'
  },
  thu: {
    focus: 'Upper body (light)', muscles: 'Full upper body at 60% effort', duration: '~45 min',
    warmup: '5 min treadmill + 10 arm circles + 10 band pull-aparts',
    exercises: [
      { name: 'Dumbbell bench press', sets: '3 sets x 15 reps (lighter)',
        desc: 'Flat bench, 70% of Monday weight. Focus on 3-second lowering phase. Full range of motion.',
        tip: 'This is not a heavy day. Goal is blood flow and technique practice.' },
      { name: 'Assisted pull-up machine', sets: '3 sets x 8 reps',
        desc: 'Set counterweight so movement is manageable. Pull chin over bar, lower slowly.',
        tip: '4-week goal: reduce counterweight by 5kg each week.' },
      { name: 'Cable chest fly', sets: '3 sets x 15 reps',
        desc: 'Set cables at shoulder height, arc arms together in front of chest. Light weight, feel the stretch.',
        tip: 'The stretch at end of movement is where chest growth happens.' },
      { name: 'Hammer curl', sets: '3 sets x 12 reps',
        desc: 'Palms facing each other (neutral grip). Curl up, lower slowly. Hits brachialis and forearms.',
        tip: 'Alternate arms or do both together — either way is fine.' },
      { name: 'Plank', sets: '3 sets x 30-45 sec',
        desc: 'Forearms on floor, body straight. Do not let hips sag or rise. Breathe normally.',
        tip: '30 seconds perfect form beats 60 seconds of sagging hips.' }
    ],
    cooldown: 'Chest stretch + lat stretch + shoulder cross-body stretch x 30 sec each'
  },
  fri: {
    focus: 'Full body compound', muscles: 'Big movements · Highest calorie burn', duration: '~55 min',
    warmup: '5 min rowing machine + 10 bodyweight squats + 10 hip hinges + shoulder mobility',
    exercises: [
      { name: 'Romanian deadlift (dumbbells)', sets: '4 sets x 10 reps',
        desc: 'Hold dumbbells in front, hinge at hips keeping back flat, lower until hamstring stretch, drive hips forward to stand.',
        tip: 'Start with 2x12kg. Keep dumbbells close to legs throughout.' },
      { name: 'Smith machine squat', sets: '3 sets x 10 reps',
        desc: 'Bar on upper traps, squat to parallel, drive through heels.',
        tip: 'Week 1-2: stick to goblet squat. Week 3-4: graduate to Smith machine.' },
      { name: 'Seated cable row (heavy)', sets: '4 sets x 10 reps',
        desc: 'Heavier than Tuesday. Same form — pull to belly button, squeeze. Rest 90 sec between sets.',
        tip: 'Progressive overload: add 2.5kg every week if last 2 reps feel easy.' },
      { name: 'Dumbbell shoulder press', sets: '3 sets x 10 reps',
        desc: 'Seated or standing, press overhead, lower to jaw level. Full range.',
        tip: 'Brace core as if someone is about to punch your stomach.' },
      { name: 'Dips (machine-assisted)', sets: '3 sets x 10 reps',
        desc: 'Lower until upper arms are parallel to floor, push back up. Targets chest, shoulders, triceps.',
        tip: 'Lean forward slightly for chest focus, upright for tricep focus.' }
    ],
    cooldown: 'Full body stretch — hamstrings, hip flexors, chest, shoulders, lats x 30 sec each'
  },
  sat: {
    focus: 'Cardio + Core', muscles: 'Fat burning · Active recovery', duration: '~45 min',
    warmup: 'No separate warm-up — cardio IS the warm-up.',
    exercises: [
      { name: 'Treadmill — Zone 2 cardio', sets: '25 minutes',
        desc: 'Walk at 5.5-6.5 km/h with incline 5-8%. Slightly breathless but can hold a conversation.',
        tip: 'Heart rate target: 120-140 bpm. This is the fat-burning zone.' },
      { name: 'Core circuit (3 rounds)', sets: 'No rest between exercises',
        desc: 'Plank x 40 sec · Dead bug x 10 each side · Bicycle crunch x 20 · Leg raise x 12 · Hollow body hold x 20 sec. Rest 60 sec after each round.',
        tip: 'Core training is about stability. Dead bugs are more effective than sit-ups.' },
      { name: 'Rowing machine (optional)', sets: '10 min easy',
        desc: 'Full body, low impact. Target: 2:30-2:45 pace per 500m.',
        tip: 'Saturday should not feel brutal. Save intensity for Mon/Wed/Fri.' }
    ],
    cooldown: 'Full body stretch — focus on hip flexors and lower back.'
  },
  sun: {
    focus: 'Complete rest',
    note: 'Muscle is built during rest, not during training. Walk 20-30 min outside (not a workout), eat your protein target, sleep 7-8 hours. No cardio, no extra training.'
  },
  progressionPlan: [
    { week: 'Week 1', focus: 'Learn the movements', desc: 'Light weights, focus on form. Ask the TheosGym trainer (Mon/Wed 14:30-17:30) to check your squat and row.' },
    { week: 'Week 2', focus: 'Add 2.5-5kg', desc: 'Increase weights slightly where week 1 felt manageable. Try the Smith machine squat on Friday.' },
    { week: 'Week 3', focus: 'Increase volume', desc: 'Add a 4th set to main compound lifts. Reduce rest time from 90 sec to 75 sec.' },
    { week: 'Week 4', focus: 'Deload (lighter)', desc: 'Drop weights 20%, keep same movements. Active recovery week — body consolidates adaptations.' }
  ],
  milestones: [
    { exercise: 'Leg press', target: '80-100kg x 12' },
    { exercise: 'Lat pulldown', target: '40-50kg x 10' },
    { exercise: 'Dumbbell press', target: '2x14kg x 10' },
    { exercise: 'Romanian deadlift', target: '2x16kg x 10' },
    { exercise: 'Plank', target: '60 seconds' }
  ],
  gymTips: [
    { title: 'Pre-workout (30 min before)', desc: 'Eat your breakfast from the diet plan — overnight oats or a yogurt bowl. Do not train fasted.' },
    { title: 'Hydration', desc: '500ml water before the gym. Bring 750ml bottle and sip throughout.' },
    { title: 'Post-workout (within 30-60 min)', desc: 'Your daily snack (boiled eggs or Greek yogurt) works as post-workout protein. No special shake needed.' },
    { title: 'Log your weights', desc: 'Use a notes app. Write: exercise · weight · reps. Review before each session. This is how progressive overload works.' },
    { title: 'Ask the trainer', desc: 'TheosGym Müncheberg trainer: Mon & Wed 14:30-17:30. Ask for a form check on squat and deadlift in week 1.' },
    { title: 'Gym etiquette', desc: 'Re-rack weights. Wipe machines after use. Step aside during rest periods.' }
  ]
};
```

---

## UI behavior

### Mode switcher
- Two toggle buttons in the header: "Diet Mode" and "Gym Mode"
- Clicking switches the full content area below
- Active mode's accent color updates the CSS `--accent` variable globally
- Persist selection in `localStorage`

### Diet mode behavior
- Default tab: Monday
- Macro bar updates when switching day tabs
- Dinner cards show a green "Cook double" callout
- Grocery tab: categorized list + "Copy list" clipboard button
- Mobile: macro cards 2x2, meals full width

### Gym mode behavior
- Default tab: Overview
- Overview shows the weekly split as a table or card grid (all 7 days with focus + detail)
- Mon-Sat each show: warmup box (amber), exercise cards, cooldown box (green)
- Each exercise card shows: name, sets/reps badge, description, blue tip line
- Sunday shows a special rest card (no exercise list)
- 4-Week Plan tab shows 4 progression cards side by side
- Gym Tips tab shows static tip cards

---

## Color tokens (CSS variables)

```css
:root {
  --accent: #F97316;        /* switches per mode */
  --accent-light: #FFF7ED;  /* tint — also switches */
  --text: #1C1917;
  --text-muted: #78716C;
  --bg: #FFFFFF;
  --surface: #F5F5F4;
  --border: rgba(0,0,0,0.08);
  --radius: 12px;
  --radius-sm: 8px;

  /* diet badges */
  --badge-breakfast-bg: #FFF7ED; --badge-breakfast-text: #9A3412;
  --badge-snack-bg: #FDF2F8;     --badge-snack-text: #86198F;
  --badge-lunch-bg: #F0FDF4;     --badge-lunch-text: #166534;
  --badge-dinner-bg: #EFF6FF;    --badge-dinner-text: #1E40AF;
  --badge-cook-bg: #ECFDF5;      --badge-cook-text: #065F46;

  /* gym badges */
  --badge-push-bg: #FFF7ED;    --badge-push-text: #9A3412;
  --badge-pull-bg: #EFF6FF;    --badge-pull-text: #1E40AF;
  --badge-legs-bg: #F0FDF4;    --badge-legs-text: #166534;
  --badge-upper-bg: #FDF2F8;   --badge-upper-text: #86198F;
  --badge-full-bg: #ECFDF5;    --badge-full-text: #065F46;
  --badge-cardio-bg: #FEFCE8;  --badge-cardio-text: #854D0E;
  --badge-rest-bg: #F5F5F4;    --badge-rest-text: #57534E;
}
```

Switch to gym mode via JS:
```js
document.documentElement.style.setProperty('--accent', '#2563EB');
document.documentElement.style.setProperty('--accent-light', '#EFF6FF');
```

Switch back to diet mode:
```js
document.documentElement.style.setProperty('--accent', '#F97316');
document.documentElement.style.setProperty('--accent-light', '#FFF7ED');
```

---

## File output

Single file: `index.html`

```
index.html
  <head> — meta, title, inline <style>
  <body>
    <header>
      site title ("My Fitness Plan")
      mode toggle: [Diet Mode] [Gym Mode]
      tagline (updates per mode)
    <section id="diet-mode">
      macro stat bar (4 cards)
      day tabs nav: Mon Tue Wed Thu Fri Sat Sun Grocery Prep
      day panels rendered by JS from dietPlan data
    <section id="gym-mode" hidden>
      gym stat bar (4 cards)
      tabs nav: Overview Mon Tue Wed Thu Fri Sat Sun 4-Week Plan Gym Tips
      panels rendered by JS from gymPlan data
    <script>
      dietPlan data object
      gymPlan data object
      renderDietDay(day) — builds meal cards HTML
      renderGymDay(day) — builds exercise cards HTML
      switchMode(mode) — toggles sections + accent color + tagline
      init() — reads localStorage, renders default day, sets active mode
```

No external fonts, no CDN, no images. Must work by simply opening `index.html` in a browser.

---

## GitHub Pages deployment (comment at top of index.html)

```html
<!--
  HOW TO HOST ON GITHUB PAGES:
  1. Create a new GitHub repo (e.g. "my-fitness-plan")
  2. Upload this index.html to the repo root
  3. Go to Settings > Pages > Source: Deploy from branch > main / root
  4. Wait 1-2 minutes. Live at: https://YOUR-USERNAME.github.io/my-fitness-plan/
-->
```

---

## What NOT to include

- No login, no backend, no database
- No calorie tracking form
- No images or icons (text-only, lightweight)
- No dark mode toggle
- No animation beyond tab and mode switching
- No external dependencies of any kind