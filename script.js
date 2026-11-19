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


const scientisRef = document.querySelector(".list__scientis")
const buttonRef = document.querySelectorAll(".btn__scientis")


const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12
  }
];

function renderScientists(array) {
  const item = array.map(({ name, surname, born, dead, id }) => {
    return `<li class="item__scientis">
    <h2 class="title__scientis">${name} ${surname}</h2>
    <p class="title__scientis">${born}-${dead}</p>
</li>`
  }).join("")
  scientisRef.innerHTML = item

}

renderScientists(scientists)



buttonRef.forEach((button) => {
  button.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    switch (action) {
      case "weak":
        const res = scientists.filter((item) => item.born >= 1800 && item.born <= 1899)
        renderScientists(res)
        break;
      case "year_albert":
        const res1 = scientists.filter((item) => item.name === "Albert")
        renderScientists(res1)
        break;
      case "sort_al":
        const res2 = [...scientists].sort((a, b) => a.name.localeCompare(b.name))
        renderScientists(res2)
        break;
      case "last_name_C":
        const res3 = scientists.filter((item) => item.surname.startsWith("C"))
        renderScientists(res3)
        break;
      case "sort_years":
       const res4 = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born))
       renderScientists(res4)
        break;
      case "del_A":
        const res5 = scientists.filter((item) => !item.name.startsWith("A"))
        renderScientists(res5)
        break;
      case "search_last":
        const res6 = [...scientists].sort((a, b) => b.born - a.born)[0]
        renderScientists([res6])
        break;
      case "search_soyear":
        const res7 = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born))
        renderScientists([res7[0], res7[res7.length - 1]])
        break;
      case "search_coincides":
        const res8 = scientists.filter((item) => item.name[0] === item.surname[0] )
        renderScientists(res8)
        break;
      default:
        return
    }

  })
})


// photo — посилання або шлях до фото (якщо порожньо — сірий квадрат)
const team = [
  { name: "Мурчик", text: "Тімлід. Лежить на дивані й пильно стежить, щоб усі працювали", photo: "https://placecats.com/neo/300/300" },
  { name: "Пушинка", text: "Тестувальниця. Своїми зеленими очима помічає кожен баг", photo: "https://placecats.com/millie/300/300" },
  { name: "Сірко і Смужка", text: "Парне програмування: один пише код, а інший спить поруч", photo: "https://placecats.com/millie_neo/300/300" },
  { name: "Бананчик", text: "Відповідає за безпеку — гризе все підозріле, особливо банани", photo: "https://placecats.com/neo_banana/300/300" },
  { name: "Белла", text: "Дизайнерка. Сидить рівненько і стежить, щоб відступи були як у Figma", photo: "https://placecats.com/bella/300/300" },
  { name: "Ожинка", text: "Нічна розробниця. Пухнаста, темна і кодить після опівночі", photo: "https://placecats.com/poppy/300/300" },
  { name: "Рижик", text: "Відповідає за ігри на сайті — ловить мишку з першої спроби", photo: "https://placecats.com/louie/300/300" }
];

const teamListRef = document.querySelector(".team__list");
const teamDotsRef = document.querySelector(".team__dots");
const teamPrevRef = document.querySelector(".team__prev");
const teamNextRef = document.querySelector(".team__next");

let currentSlide = 0;

teamListRef.innerHTML = team.map(({ name, text, photo }) => {
  const img = photo ? `<img src="${photo}" alt="${name}">` : "";
  return `<li class="team__item">
    <div class="team__photo">${img}</div>
    <h4 class="team__name">${name}</h4>
    <p class="team__text">${text}</p>
  </li>`;
}).join("");

teamDotsRef.innerHTML = team.map((_, index) => {
  return `<li><button type="button" class="team__dot" data-index="${index}"></button></li>`;
}).join("");

const teamDotRefs = document.querySelectorAll(".team__dot");

function showSlide(index) {
  currentSlide = (index + team.length) % team.length;
  teamListRef.style.transform = `translateX(-${currentSlide * 100}%)`;

  teamDotRefs.forEach((dot, i) => {
    dot.classList.toggle("team__dot--active", i === currentSlide);
  });
}

teamPrevRef.addEventListener("click", () => showSlide(currentSlide - 1));
teamNextRef.addEventListener("click", () => showSlide(currentSlide + 1));

teamDotRefs.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    showSlide(Number(event.currentTarget.dataset.index));
  });
});

showSlide(0);