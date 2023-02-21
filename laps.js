window.onload = function () {
  const minutes = document.getElementById("minutes");
  const tens = document.getElementById("tens");
  const seconds = document.getElementById("seconds");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const resetBtn = document.getElementById("reset-btn");
  console.log(startBtn, stopBtn, resetBtn);
  console.log(minutes, tens, seconds);

  let minuteSet = 0;
  let secondsSet = 0;
  let tensSet = 0;

  let Interval;

  //Start Button
  startBtn.onclick = function () {
    // clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  //Stop Button
  
    stopBtn.onclick = function () {
      Interval = clearInterval(Interval);
      const lap = document.getElementById("laps");
      const li = document.createElement("li");
      li.innerHTML = `lap: <span> ${minutes.innerHTML}:${seconds.innerHTML}:${tens.innerHTML} </span>`;
      lap.appendChild(li);
    };
  

  //Reset Button
  resetBtn.onclick = function () {
    clearInterval(Interval);
    minuteSet = "00";
    secondsSet = "00";
    tensSet = "00";
    tens.innerHTML = tensSet;
    minutes.innerHTML = minuteSet;
    seconds.innerHTML = secondsSet;
    document.getElementById("laps").innerHTML = " ";
  };

  //Create Start timer function
  function startTimer() {
    tensSet++;

    if (tensSet < 9) tens.innerHTML = "0" + tensSet;
    if (tensSet > 9) tens.innerHTML = tensSet;
    if (tensSet > 99) {
      secondsSet++;
      seconds.innerHTML = "0" + secondsSet;
      tensSet = 0;
      tens.innerHTML = "0" + 0;
    }

    if (secondsSet > 9) seconds.innerHTML = secondsSet;

    if (secondsSet === 60) {
      minuteSet++;
      minutes.innerHTML = "0" + minuteSet;
      secondsSet = 0;
    }
    if (minuteSet > 9) minutes.innerHTML = minuteSet;
  }
};
