// Edit this file to change your gym plan.

const gymPlan = {
  overview: {
    gym: 'TheosGym Müncheberg',
    address: 'Ernst-Thälmann-Strasse 87, 15374 Müncheberg',
    access: '24/7',
    trainerDays: 'Monday & Wednesday 14:30–17:30',
    trainerDayKeys: ['mon', 'wed'],
    split: [
      { day: 'Mon', dayKey: 'mon', focus: 'Push',          detail: 'Chest · Shoulders · Triceps' },
      { day: 'Tue', dayKey: 'tue', focus: 'Pull',          detail: 'Back · Biceps · Rear delts' },
      { day: 'Wed', dayKey: 'wed', focus: 'Legs',          detail: 'Quads · Hamstrings · Glutes · Calves' },
      { day: 'Thu', dayKey: 'thu', focus: 'Upper',         detail: 'Full upper body at 60% — technique day' },
      { day: 'Fri', dayKey: 'fri', focus: 'Full body',     detail: 'Compound focus — highest calorie burn' },
      { day: 'Sat', dayKey: 'sat', focus: 'Cardio + Core', detail: 'Zone 2 cardio + core circuit' },
      { day: 'Sun', dayKey: 'sun', focus: 'Rest',          detail: 'Complete rest — muscles grow during recovery' }
    ]
  },

  mon: {
    focus: 'Push day', muscles: 'Chest · Shoulders · Triceps', duration: '~50 min',
    warmup: '5 min treadmill at 6 km/h · 10 arm circles each direction · 10 shoulder rotations',
    exercises: [
      { name: 'Chest press machine', sets: '3 × 12 reps',
        desc: 'Sit upright, grip handles at chest height, push forward fully, return slowly (3 sec). Rest 60 sec between sets.',
        tip: 'Start light — use 60–70% of maximum. Form over weight always.' },
      { name: 'Incline dumbbell press', sets: '3 × 10 reps',
        desc: 'Set bench to ~45°. Hold dumbbells at shoulder level, press up and slightly inward. Lower slowly.',
        tip: 'For beginners: 6–10 kg dumbbells. Go up only when 12 reps feel easy.' },
      { name: 'Shoulder press machine', sets: '3 × 12 reps',
        desc: 'Adjust seat so handles are at shoulder height. Press up, stop before locking elbows, lower with control.',
        tip: 'Keep shoulders down and packed — do not shrug.' },
      { name: 'Lateral raises (dumbbells)', sets: '3 × 15 reps',
        desc: 'Stand, slight bend in elbows, raise arms out to shoulder level. Pause 1 sec. Lower slowly.',
        tip: 'Use light weight (4–6 kg). Isolation exercise — ego has no place here.' },
      { name: 'Tricep pushdown (cable)', sets: '3 × 15 reps',
        desc: 'Rope or bar at chest height. Push down until arms straight, return slowly.',
        tip: 'Keep elbows pinned to your sides throughout the movement.' }
    ],
    cooldown: 'Chest doorway stretch × 30 sec · Overhead tricep stretch × 30 sec each arm · Child pose × 60 sec'
  },

  tue: {
    focus: 'Pull day', muscles: 'Back · Biceps · Rear delts', duration: '~50 min',
    warmup: '5 min rowing machine at easy pace · 10 band pull-aparts · cat-cow stretches × 10',
    exercises: [
      { name: 'Lat pulldown machine', sets: '3 × 12 reps',
        desc: 'Grip slightly wider than shoulder width, pull to upper chest, lean back slightly, squeeze shoulder blades. Return slowly.',
        tip: 'Think "pull elbows to hips" — do not just pull with arms.' },
      { name: 'Seated cable row', sets: '3 × 12 reps',
        desc: 'Sit upright, pull handle to belly button, squeeze back at end. Keep torso nearly vertical.',
        tip: 'Pause 1 second at peak contraction every rep.' },
      { name: 'Single-arm dumbbell row', sets: '3 × 10 reps each',
        desc: 'Brace one knee and hand on bench. Row dumbbell to hip, elbow close to body. Lower with control.',
        tip: 'Keep spine flat — do not rotate the torso to lift more weight.' },
      { name: 'Face pulls (cable)', sets: '3 × 15 reps',
        desc: 'Rope at head height. Pull toward face, flare elbows out, squeeze rear delts. Light weight only.',
        tip: 'Best exercise for shoulder health. Do this every pull day, always.' },
      { name: 'Dumbbell bicep curl', sets: '3 × 12 reps',
        desc: 'Curl to shoulder, supinate at top. Lower fully — do not cut range short.',
        tip: 'No swinging. If you swing, the weight is too heavy.' }
    ],
    cooldown: 'Lat stretch (hang from bar) × 30 sec · Bicep wall stretch × 30 sec each · Child pose × 60 sec'
  },

  wed: {
    focus: 'Leg day', muscles: 'Quads · Hamstrings · Glutes · Calves', duration: '~55 min',
    warmup: '5 min bike at easy pace · 10 bodyweight squats · 10 walking lunges · hip circles × 10 each',
    exercises: [
      { name: 'Leg press machine', sets: '4 × 12 reps',
        desc: 'Feet shoulder-width on platform, push until nearly straight (not locked), lower until knees at 90°. Control the descent.',
        tip: 'The leg press is the beginner squat — master this before barbell squats.' },
      { name: 'Goblet squat (dumbbell)', sets: '3 × 12 reps',
        desc: 'Hold one dumbbell at chest. Squat deep, chest up, knees tracking toes. Drive through heels.',
        tip: 'Use 10–16 kg. This teaches the squat pattern safely.' },
      { name: 'Leg curl machine', sets: '3 × 12 reps',
        desc: 'Curl heels toward glutes, hold 1 sec, lower slowly. Hamstrings are often weak in beginners.',
        tip: 'Go lighter than you think — hamstring tears are real.' },
      { name: 'Walking lunges (bodyweight)', sets: '3 × 10 each leg',
        desc: 'Step forward, back knee nearly touches floor, push through to next step. No dumbbells yet.',
        tip: 'Keep torso upright — do not lean forward over the knee.' },
      { name: 'Calf raises (machine or step)', sets: '3 × 20 reps',
        desc: 'Push up onto toes fully, pause 1 sec at top, lower heels below step for full stretch.',
        tip: 'Calves need high reps — 20 minimum per set.' }
    ],
    cooldown: 'Quad stretch × 45 sec each · Hamstring stretch × 45 sec each · Hip flexor lunge × 45 sec each · Foam roll quads if available'
  },

  thu: {
    focus: 'Upper (light)', muscles: 'Full upper body at 60% effort', duration: '~45 min',
    warmup: '5 min treadmill · 10 arm circles · 10 band pull-aparts',
    exercises: [
      { name: 'Dumbbell bench press', sets: '3 × 15 reps (light)',
        desc: 'Flat bench, 70% of Monday weight. Focus on 3-second lowering phase. Full range of motion.',
        tip: 'This is not a heavy day. Goal is blood flow and technique practice.' },
      { name: 'Assisted pull-up machine', sets: '3 × 8 reps',
        desc: 'Set counterweight so movement is manageable. Pull chin over bar, lower slowly.',
        tip: '4-week goal: reduce counterweight by 5 kg each week.' },
      { name: 'Cable chest fly', sets: '3 × 15 reps',
        desc: 'Set cables at shoulder height, arc arms together in front of chest. Light weight, feel the stretch.',
        tip: 'The stretch at end of movement is where chest growth happens.' },
      { name: 'Hammer curl', sets: '3 × 12 reps',
        desc: 'Palms facing each other (neutral grip). Curl up, lower slowly. Hits brachialis and forearms.',
        tip: 'Alternate arms or do both together — either way is fine.' },
      { name: 'Plank', sets: '3 × 30–45 sec',
        desc: 'Forearms on floor, body straight. Do not let hips sag or rise. Breathe normally.',
        tip: '30 seconds perfect form beats 60 seconds of sagging hips.' }
    ],
    cooldown: 'Chest stretch · lat stretch · shoulder cross-body stretch × 30 sec each'
  },

  fri: {
    focus: 'Full body', muscles: 'Big movements · Highest calorie burn', duration: '~55 min',
    warmup: '5 min rowing machine · 10 bodyweight squats · 10 hip hinges · shoulder mobility drill',
    exercises: [
      { name: 'Romanian deadlift (dumbbells)', sets: '4 × 10 reps',
        desc: 'Hold dumbbells in front, hinge at hips keeping back flat, lower until hamstring stretch, drive hips forward to stand.',
        tip: 'Start with 2×12 kg. Keep dumbbells close to legs throughout.' },
      { name: 'Smith machine squat', sets: '3 × 10 reps',
        desc: 'Bar on upper traps, squat to parallel, drive through heels.',
        tip: 'Week 1–2: stick to goblet squat. Week 3–4: graduate to Smith machine.' },
      { name: 'Seated cable row (heavy)', sets: '4 × 10 reps',
        desc: 'Heavier than Tuesday. Same form — pull to belly button, squeeze. Rest 90 sec between sets.',
        tip: 'Progressive overload: add 2.5 kg every week if last 2 reps feel easy.' },
      { name: 'Dumbbell shoulder press', sets: '3 × 10 reps',
        desc: 'Seated or standing, press overhead, lower to jaw level. Full range.',
        tip: 'Brace core as if someone is about to punch your stomach.' },
      { name: 'Dips (machine-assisted)', sets: '3 × 10 reps',
        desc: 'Lower until upper arms are parallel to floor, push back up. Targets chest, shoulders, triceps.',
        tip: 'Lean forward slightly for chest focus, upright for tricep focus.' }
    ],
    cooldown: 'Full body stretch — hamstrings, hip flexors, chest, shoulders, lats × 30 sec each'
  },

  sat: {
    focus: 'Cardio + Core', muscles: 'Fat burning · Active recovery', duration: '~45 min',
    warmup: 'No separate warm-up — cardio IS the warm-up.',
    exercises: [
      { name: 'Treadmill — Zone 2 cardio', sets: '25 minutes',
        desc: 'Walk at 5.5–6.5 km/h with incline 5–8%. Slightly breathless but can hold a conversation.',
        tip: 'Heart rate target: 120–140 bpm. This is the fat-burning zone.' },
      { name: 'Core circuit (3 rounds)', sets: 'No rest between exercises',
        desc: 'Plank × 40 sec · Dead bug × 10 each side · Bicycle crunch × 20 · Leg raise × 12 · Hollow body hold × 20 sec. Rest 60 sec after each round.',
        tip: 'Core training is about stability. Dead bugs are more effective than sit-ups.' },
      { name: 'Rowing machine (optional)', sets: '10 min easy',
        desc: 'Full body, low impact. Target: 2:30–2:45 pace per 500 m.',
        tip: 'Saturday should not feel brutal. Save intensity for Mon/Wed/Fri.' }
    ],
    cooldown: 'Full body stretch — focus on hip flexors and lower back.'
  },

  sun: {
    focus: 'Complete rest',
    note: 'Muscle is built during rest, not during training. Walk 20–30 min outside (not a workout), eat your protein target, sleep 7–8 hours. No cardio, no extra training.'
  },

  progressionPlan: [
    { week: 'Week 1', focus: 'Learn the movements',
      desc: 'Light weights, focus on form. Ask the TheosGym trainer (Mon/Wed 14:30–17:30) to check your squat and row.' },
    { week: 'Week 2', focus: 'Add 2.5–5 kg',
      desc: 'Increase weights slightly where week 1 felt manageable. Try the Smith machine squat on Friday.' },
    { week: 'Week 3', focus: 'Increase volume',
      desc: 'Add a 4th set to main compound lifts. Reduce rest time from 90 sec to 75 sec.' },
    { week: 'Week 4', focus: 'Deload (lighter)',
      desc: 'Drop weights 20%, keep same movements. Active recovery week — body consolidates adaptations.' }
  ],

  milestones: [
    { exercise: 'Leg press',         target: '80–100 kg × 12' },
    { exercise: 'Lat pulldown',      target: '40–50 kg × 10' },
    { exercise: 'Dumbbell press',    target: '2×14 kg × 10' },
    { exercise: 'Romanian deadlift', target: '2×16 kg × 10' },
    { exercise: 'Plank',             target: '60 seconds' }
  ],

  gymTips: [
    { title: 'Pre-workout (30 min before)',
      desc: 'Eat your breakfast from the diet plan — overnight oats or a yogurt bowl. Do not train fasted.' },
    { title: 'Hydration',
      desc: '500 ml water before the gym. Bring a 750 ml bottle and sip throughout.' },
    { title: 'Post-workout (within 30–60 min)',
      desc: 'Your daily snack (boiled eggs or Greek yogurt) works as post-workout protein. No special shake needed.' },
    { title: 'Log your weights',
      desc: 'Use a notes app. Write: exercise · weight · reps. Review before each session. This is how progressive overload works.' },
    { title: 'Ask the trainer',
      desc: 'TheosGym trainer available Mon & Wed 14:30–17:30. Ask for a form check on squat and deadlift in week 1.' },
    { title: 'Gym etiquette',
      desc: 'Re-rack weights. Wipe machines after use. Step aside during rest periods so others can work in.' }
  ]
};
