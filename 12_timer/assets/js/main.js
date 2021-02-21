const clock = document.querySelector('.relogio');
const start = document.querySelector('.iniciar');
const pause = document.querySelector('.pausar');
const reset = document.querySelector('.zerar');

let hours = 0, minutes = 0, seconds = 0;
let temp;
let initiated = false;

start.addEventListener('click', function(e) {
  if (!initiated) startClock();
});

pause.addEventListener('click', function(e) {
  stopClock();
});

reset.addEventListener('click', function(e) {
  stopClock();
  resetClock();
});


function startClock() {
  temp = setInterval(timer, 1000);
}

function timer() {
  clock.classList.remove('pause');
  seconds += 1;

  if(seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }
  if(minutes >= 60) {
    minutes = 0;
    hours += 1;
  }

  clock.innerHTML = formatHour(hours, minutes, seconds);
  initiated = true;
}

function stopClock() {
  clearInterval(temp);
  clock.classList.add('pause');
  initiated = false;
}

function resetClock() {
  hours = 0, minutes = 0, seconds = 0;
  clock.innerHTML = formatHour(hours, minutes, seconds);
  clock.classList.remove('pause');
  initiated = false;
}

function formatHour(hours, minutes, seconds) {
  hours = hours < 10 ? `0${hours}`: hours;
  minutes = minutes < 10 ? `0${minutes}`: minutes;
  seconds = seconds < 10 ? `0${seconds}`: seconds;

  return `${hours}:${minutes}:${seconds}`;
}