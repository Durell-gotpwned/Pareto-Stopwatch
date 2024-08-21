// Write JavaScript code here
var changeStartStop = document.getElementById("startStop");
var count = 0

// Changes the start button to stop and vice versa
changeStartStop.addEventListener("click", function textChange() {
    if (changeStartStop.innerHTML == 'Start') {
        changeStartStop.innerHTML = 'Stop';
    } else {
        changeStartStop.innerHTML = 'Start'
    }
})

// Updates the stopwatch clock time
changeStartStop.addEventListener("click", function timerUpdate() {
    var count = document.getElementById("stopwatch");
    count.innerHTML += 1;
})
const interval = setInterval(timerUpdate, 1000);
clearInterval(interval)