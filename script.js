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

