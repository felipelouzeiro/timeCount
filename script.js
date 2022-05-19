function start() {
  const selectDate = document.querySelector("input").value;
  let finalDate = new Date(selectDate).getTime();
  let nowDate = new Date().getTime();
  let diff = (finalDate - nowDate);

  let second = 1000;
  let minute = 60 * second;
  let hour = 60 * minute;
  let day = 24 + hour;

  let countDay = Math.floor(diff / day);
  let countHour = Math.floor((diff % day) / hour) + 3;
  let countMinute = Math.floor((diff % hour) / minute);
  let countSecond = Math.floor((diff % minute) / second);

  console.log(nowDate, countDay, countHour, countMinute, countSecond);

  document.querySelector("h1").innerHTML = `${countDay}d ${countHour}h ${countMinute}m ${countSecond}s`
}

function restart() {
  let content = document.querySelector("input").value;
  console.log(content);
}