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




