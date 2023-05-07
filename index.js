import refs from "./refs.js";

const NEW_YEAR = new Date("01.01.2024 00:00");

const handleTime = () => {
  const now = new Date();
  //   console.log(now);

  const timeDifference = NEW_YEAR - now;
  //   console.log(timeDifference);

  const daysLeft = Math.floor(timeDifference / 86400000); //86 400 000 мілісекунд в 1 дні
  const hoursLeft = Math.floor((timeDifference % 86400000) / 3600000); //3 600 000 мілісекунд в 1 годині
  //від загальної суми часу спочатку відняли дні,
  //і тоді залишок вже ділимо на мілісекунди в годині, щоб взнати скільки годин
  const minutesLeft = Math.floor((timeDifference % 3600000) / 60000); //60 000 мілісекунд в 1 хвилині
  const secondsLeft = Math.floor((timeDifference % 60000) / 1000); //1000 мілісекунд в 1 секунді

  attachToElement(refs.functionalTimerEl, {
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
  });
};

const attachToElement = (
  functionalTimerEl,
  { daysLeft, hoursLeft, minutesLeft, secondsLeft }
) => {
  const timeLeftValue = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  refs.functionalTimerEl.textContent = timeLeftValue;
};

let timer = setInterval(handleTime, 1000);

refs.stopTimerEl.addEventListener("click", () => {
  clearInterval(timer);
});

refs.startTimerEl.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(handleTime, 1000);
  console.log(timer);
});

//!КЛАСОВА РЕАЛІЗАЦІЯ

// class Timer {
//     constructor( )
// }
