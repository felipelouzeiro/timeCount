// verifica ao carregar a página

let finalDate;
let intervalId;

window.onload = resumeStopwatch();

// verifica se existe um timer rodando e retoma a contagem
function resumeStopwatch() {
  if (localStorage.getItem("timer")) {
    finalDate = localStorage.getItem("timer");
    intervalId = setInterval(countdownTimer, 1000);
  }
}

function start() {
  clearInterval(intervalId);

  const selectDate = document.querySelector("input").value;
  finalDate = new Date(selectDate).getTime();

  localStorage.setItem("timer", finalDate);
  
  intervalId = setInterval(countdownTimer, 1000)
}

function countdownTimer() {
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  let nowDate = new Date().getTime();
  let diff = (finalDate - nowDate);

  let countDay = Math.floor(diff / day);
  let countHour = Math.floor((diff % day) / hour) + 3;
  let countMinute = Math.floor((diff % hour) / minute);
  let countSecond = Math.floor((diff % minute) / second);

  document.querySelector("h1").innerHTML = `${countDay}d ${countHour}h ${countMinute}m ${countSecond}s`
}

  function reset() {
    document.querySelector("h1").innerHTML = "⏱️";
    clearInterval(intervalId);

    localStorage.removeItem("timer")
  }