const checkboxBtn = document.getElementById("theme-switch-toggle")

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme

checkboxBtn.addEventListener('change', onChangeCheckbox)

let savedTheme = localStorage.getItem('theme')
if (!savedTheme) {
  savedTheme = LIGHT;
  localStorage.setItem('theme', savedTheme)
}

document.querySelector('body').classList.add(savedTheme);
checkboxBtn.checked = savedTheme === LIGHT ? false : true;


function onChangeCheckbox(e) {
  //<--1st solution-->
  if (e.target.checked === true) {
    localStorage.setItem('theme', DARK)
    changeClasses(LIGHT, DARK)
  } else {
    localStorage.setItem("theme", LIGHT)
    changeClasses( DARK, LIGHT)
  }

  // <--2nd solution-->
  // document.querySelector("body").classList.toggle(DARK)
  // document.querySelector("body").classList.toggle(LIGHT)
  // localStorage.setItem("theme", e.target.checked ? DARK: LIGHT)
}

function changeClasses( removeClass, addClass) {
  document.querySelector("body").classList.remove(removeClass)
  document.querySelector("body").classList.add(addClass)
}