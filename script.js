const english = document.querySelectorAll(".en");
const polish = document.querySelectorAll(".pl");

function toggleLang(language) {
  localStorage.setItem("language", language);

  if(language === "Polish") {
    english.forEach((element) => {
      element.style.display = "none";
    });
    polish.forEach((element) => {
      element.style.display = "";
    });
  } else {
    english.forEach((element) => {
      element.style.display = "";
    });
    polish.forEach((element) => {
      element.style.display = "none";
    });
  }
}


let language = localStorage.getItem("language");

toggleLang(language);




function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

const arrowUp = document.getElementById("arrow-up");

window.onscroll = function() {scrollFunc()};

function scrollFunc() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}