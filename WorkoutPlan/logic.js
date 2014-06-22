$( document ).ready(function() {

	var today = Date().substring(0,3);
	var index = days.indexOf(today);
	var contents = "<ul>";
	var id = 0;
	//number of random drills to do 
	var numDrills = 3; 

	var plan = masterPlan[index];

	//filling in focus 1
	if (plan.focus){
		$("#focus1").html(plan.focus);
	}

	//filling in the weights exercises
	if (plan.weights.length == 0){
		contents = "<div class=\"rest\">JK YOU GET A BREAK YAY!!! </div>";
		contents += "<img class= \"cake\" src=\"cake.jpg\" >";
	}
	else{
		for (var k in masterPlan[index].weights){
			var exercise = masterPlan[index].weights[k];
			console.log("Exercise " + exercise);
			contents += "<input id=\""+id+"\" type=\"checkbox\">"+ exercise + "</input><br>"
			id++;
		}
		contents += "</ul>";
	}
	$('#content1').html(contents);
	

	//filling in focus 2
	console.log("extra " + plan.extra);
	var extraContent = "<ul>";
	if (plan.extra){
		$("#focus2").html(plan.extra);
		if (plan.extra == "Run")
			$("#focus2").append (" some miles dude");
		else {
			//filling in extra work outs
			$("#focus2").html("Basketball drills yo:");
			for (var x = 0; x < numDrills; x++){
				var y = Math.floor(Math.random()*plan.extra.length);
				extraContent += "<input id=\""+id+"\" type=\"checkbox\">"+ plan.extra[y] + "</input><br>"
				id++;
			}
			extraContent += "</ul>"
			$("#content2").html(extraContent);
		}
	}
});

