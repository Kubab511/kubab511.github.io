const buttonIDs = ['skills', 'education', 'experience', 'languages'];
const divIDs = ['skills-div', 'education-div', 'experience-div', 'languages-div'];

aboutMeButton('skills', 'skills-div');

function langChange(lang) {
  localStorage.setItem("lang", lang);
  
  (lang === "en") ? window.location.href = "/" : window.location.href = `/${lang}`;
}

function aboutMeButton(id, divID) {
  buttonIDs.forEach((i) => {
    (i === id) ? document.getElementById(i).style.color = "white" : document.getElementById(i).style.color = "rgb(148 163 184)"
  })

  divIDs.forEach((i) => {
    (i === divID) ? document.getElementById(i).style.display = "block" : document.getElementById(i).style.display = "none"
  })
}

function toggleMenu(toggle) {
  (toggle === 'open') ? document.getElementById("hamburger").style.display = "none" : document.getElementById("hamburger").style.display = "flex";

  (toggle === 'open') ? document.getElementById("x-icon").style.display = "flex" : document.getElementById("x-icon").style.display = "none";

  (toggle === 'open') ? document.getElementById("mobile-menu").style.display = "flex" : document.getElementById("mobile-menu").style.display = "none";
}