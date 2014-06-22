
var dribblingDrills = ["Figure 8", "Around The World", "Between the legs",
											 "Behind the Back","Crossover", "Left hand dribbles",
											 "V dribbles sideway", "V dribbles front", "Kills"];
var shootingDrills = ["Fake and shoot", "Around the hoop", "Mid range", "Three pointers",
											"Fake and layup", "Quick Release", "Dribble and shoot", 
											"Tear drops"];
//indices here match with the masterplan
var days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

var masterPlan = [
	{
		focus: "Chest/triceps",
		weights: [ "Incline Dumbbell press - 2x10", 
							 "Tricep Dips - 2x12",
							 "Tricep Pushdowns - 2x10",
							 "Burpee Push-ups - 2x10"
		],
		extra: "Run",
	}, 
	{
		focus: "Legs/abs",
		weights: [ "Squats - 3x12,10,8",
							"Dumbbell Lunge - 3x2",
							"Bounding - 3x10",
							"Depth Jumps - 2x12",
							"Jump Rope - 5x30-45 secs",
							"Plank - 2x60 seconds",
							"Crunches - 2x30"
		],
		extra: dribblingDrills,
	},
	{
		focus: "",
		weights: [],
		extra: null,
	},
	{
		focus: "Biceps/Backs/Shoulders",
		weights: ["Pull-Ups - 3x8",
							"Dumbbell Shoulder Press - 3x12",
							"Dumbbell Front Shoulder Raise - 2x10",
							"Dumbbell Lateral Shoulder Raise - 2x10",
							"Bicep Curls - 3x10",
							"Hammer Curls - 3x10"
		],
		extra: "Run",
	},
	{	
		focus: "Legs/Abs",
		weights: [ "Knee Tucks - 2x20",
							 "Lunge Jumps - 3x12",
							 "Box Jumps - 3x8"
		],
		extra: shootingDrills,
	},
	{
		weights: [],
		extra: null,
	},
	{
		weights: [],
		extra: null,
	},];


