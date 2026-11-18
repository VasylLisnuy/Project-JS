// const slideRef = document.querySelector(".header__slider")

// const imageRef = document.querySelector(".header__img")

// slideRef.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("header__active")
//     // if (event.currentTarget.classList.contains("header__active")) {
//     //     imageRef.src = "./images/moon.webp"
//     // }
//     if (event.currentTarget.classList.contains("header__active")) {
//     imageRef.src = moon;
//   }
// })


const slideRef = document.querySelector(".header__slider");
const imageRef = document.querySelector(".header__img");
const checkRef = document.querySelector(".header__check")
const mainRef = document.querySelector("main")

slideRef.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("header__active");

  if (event.currentTarget.classList.contains("header__active")) {
    imageRef.src = "./images/moon.webp";
    checkRef.style.backgroundColor = "black"
    mainRef.style.backgroundColor = "#4F4F4F"
  } else {
    imageRef.src = "./images/sun.webp";
    checkRef.style.backgroundColor = "white"
     mainRef.style.backgroundColor = "white"
  }
});


const formRef = document.querySelector(".main__year");
const textRef = document.querySelector(".main__textyear");


formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number(event.currentTarget.elements.year.value);

  if (!Number.isInteger(year) || year <= 0) {
    textRef.textContent = "Введіть коректний рік!";
  } else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    textRef.textContent = `Ви народилися у високосний рік ${year}`;
    textRef.style.color = "green"
  } else {
    textRef.textContent = `Ви народилися у не високосний рік ${year}`;
    textRef.style.color = "red"
  }

  event.currentTarget.reset()
});


const numFormRef = document.querySelector(".number__form");
const numTextRef = document.querySelector(".number__text");

numFormRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const userNum = Number(event.currentTarget.elements.num.value);
  const compNum = Math.floor(Math.random() * 10) + 1;


  

  if (isNaN(userNum) || userNum < 1 || userNum > 10) {
    numTextRef.textContent = "Введіть число від 1 до 10!";
    numTextRef.style.color = "red";
  } else if (userNum === compNum) {
    numTextRef.textContent = `Вітаю ви вгадали число ${compNum}`;
    numTextRef.style.color = "green";
  } else {
    numTextRef.textContent = `Ви не вгадали число ${compNum}`;
    numTextRef.style.color = "red";
  }

  event.currentTarget.reset();
});


const rpsBtnRefs = document.querySelectorAll(".rps__btn");
const rpsTextRef = document.querySelector(".rps__text");
const rpsCompRef = document.querySelector(".rps__comp");
const rpsUserRef = document.querySelector(".rps__user");
const rpsCompBtnRef = document.querySelector(".rps__compbtn");

const choices = ["stone", "scissors", "paper"];
let compScore = 0;
let userScore = 0;
let compChoice = "";

rpsBtnRefs.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const userChoice = event.currentTarget.dataset.choice;
    compChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === compChoice) {
      rpsTextRef.textContent = "Нічия!";
      rpsTextRef.style.color = "black";
    } else if (
      (userChoice === "stone" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "stone")
    ) {
      userScore += 1;
      rpsTextRef.textContent = "Ви виграли раунд!";
      rpsTextRef.style.color = "green";
    } else {
      compScore += 1;
      rpsTextRef.textContent = "Комп’ютер виграв раунд!";
      rpsTextRef.style.color = "red";
    }

    rpsUserRef.textContent = userScore;
    rpsCompRef.textContent = compScore;
  });
});

rpsCompBtnRef.addEventListener("click", () => {
  if (compChoice === "") {
    rpsTextRef.textContent = "Спочатку зробіть свій вибір!";
    rpsTextRef.style.color = "red";
  } else if (compChoice === "stone") {
    rpsTextRef.textContent = "Комп’ютер обрав камінь";
    rpsTextRef.style.color = "black";
  } else if (compChoice === "scissors") {
    rpsTextRef.textContent = "Комп’ютер обрав ножиці";
    rpsTextRef.style.color = "black";
  } else {
    rpsTextRef.textContent = "Комп’ютер обрав папір";
    rpsTextRef.style.color = "black";
  }
});


const calcFirstRef = document.querySelector(".calc__first");
const calcSecondRef = document.querySelector(".calc__second");
const calcBtnRefs = document.querySelectorAll(".calc__btn");
const calcEqualRef = document.querySelector(".calc__equal");
const calcResultRef = document.querySelector(".calc__result");

let operation = "";

calcBtnRefs.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    calcBtnRefs.forEach((item) => {
      item.classList.remove("calc__active");
    });

    event.currentTarget.classList.add("calc__active");
    operation = event.currentTarget.dataset.op;
  });
});

calcEqualRef.addEventListener("click", () => {
  const first = Number(calcFirstRef.value);
  const second = Number(calcSecondRef.value);

  if (calcFirstRef.value === "" || calcSecondRef.value === "" || isNaN(first) || isNaN(second)) {
    calcResultRef.textContent = "Помилка";
    calcResultRef.style.color = "red";
  } else if (operation === "") {
    calcResultRef.textContent = "Оберіть дію";
    calcResultRef.style.color = "red";
  } else if (operation === "/" && second === 0) {
    calcResultRef.textContent = "На 0 не можна";
    calcResultRef.style.color = "red";
  } else {
    let result = 0;

    if (operation === "+") {
      result = first + second;
    } else if (operation === "-") {
      result = first - second;
    } else if (operation === "*") {
      result = first * second;
    } else {
      result = first / second;
    }

    calcResultRef.textContent = Math.round(result * 100) / 100;
    calcResultRef.style.color = "black";
  }
});


const timeFormRef = document.querySelector(".time__form");
const timeTextRef = document.querySelector(".time__text");

timeFormRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const sec = Number(event.currentTarget.elements.sec.value);

  if (!Number.isInteger(sec) || sec < 0) {
    timeTextRef.textContent = "Введіть кількість секунд!";
    timeTextRef.style.color = "red";
  } else {
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    timeTextRef.textContent = `${days} дн. ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timeTextRef.style.color = "black";
  }

  event.currentTarget.reset();
});

