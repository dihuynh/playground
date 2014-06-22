var Stopwatch = function(elem, options) {

	var timer       = createTimer(),
	// startButton = createButton("start", start),
	// stopButton  = createButton("stop", stop),
	// resetButton = createButton("reset", reset),
  offset,
  clock,
  interval,
  count;
  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements     
  elem.appendChild(timer);

  // elem.appendChild(startButton);
  // elem.appendChild(stopButton);
  // elem.appendChild(resetButton);
  
  // initialize
  reset();
  
  // private functions
  function createTimer() {
  	return document.createElement("span");
  }
  
  // function createButton(action, handler) {
  // 	var a = document.createElement("a");
  // 	a.href = "#" + action;
  // 	a.innerHTML = action;
  // 	a.addEventListener("click", function(event) {
  // 		handler();
  // 		event.preventDefault();
  // 	});
  // 	return a;
  // }

  count = 0;
  document.addEventListener("keydown", function(event){
    if (event.keyCode == 32){ //spacebar is hit
      if (count%2==0) {
        countDown(3);
        
      }
      else if (count%2 ==1){
        stop();
      } 
      count++;
    }
  });

  function countDown(seconds){
    for (var k=0; k< seconds; k++){
      setTimeout (function(){showCountDown(seconds-k);console.log("Seconds: " + (seconds-k));}, 4000);
      console.log("in countdown loop "+ k );
    }
    start();

  }

  function showCountDown(secsLeft) {
    var countDownEle = document.getElementById("countDown");
    console.log("secsLeft "+ secsLeft);
    countDownEle.innerHTML = secsLeft;
  }
  
  function start() {
  	if (!interval) {
  		offset   = Date.now();
  		interval = setInterval(update, options.delay);
  	}
  }
  
  function stop() {
  	if (interval) {
  		clearInterval(interval);
  		interval = null;
  	}
  }
  
  function reset() {
  	clock = 0;
  	render(0);
  }
  
  function update() {
  	clock += delta();
  	render();
  }
  
  function render() {
  	var time = (clock/1000).toFixed(3);
  	if (time == 0){
  		timer.innerHTML = "0:00.000";
  		return;
  	}
  	var parts = time.toString().split(".");
  	var minute = Math.floor(parts[0]/60);
  	var second = parts[0] - minute*60;
  	if (!parts[1])
  		parts[1] = "0";
  	if (second <= 9)
  		timer.innerHTML = minute.toString()+ ":0" + second +"." + parts[1]; 
  	else 
  		timer.innerHTML = minute.toString()+ ":" + second +"." + parts[1]; 
  }
  
  function delta() {
  	var now = Date.now(),
  	d   = now - offset;

  	offset = now;
  	return d;
  }
  
  // public API
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};

var b = document.getElementById("b-timer");
bTimer = new Stopwatch(b, {delay: 50});

