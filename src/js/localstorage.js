const checkboxBtn = document.getElementById("theme-switch-toggle")

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme

checkboxBtn.addEventListener('change', onChangeCheckbox)
let saveTheme = localStorage.getItem('theme')


function onChangeCheckbox(e) {
  console.log(checkboxBtn.checked);
  
  // if (e.target.checked === true) {
  //   localStorage.setItem('theme', DARK)
  //   changeClasses(LIGHT, DARK)
  // } else {
  //   localStorage.setItem("theme", LIGHT)
  //   changeClasses( DARK, LIGHT)
  // }
  document.querySelector("body").classList.toggle(DARK)
  document.querySelector("body").classList.toggle(LIGHT)
  localStorage.setItem("theme", e.target.checked ? DARK: LIGHT)
}

// function changeClasses( removeClass, addClass) {
//   document.querySelector("body").classList.remove(removeClass)
//   document.querySelector("body").classList.add(addClass)
// }

if (!saveTheme) {
  saveTheme = LIGHT;
  localStorage.setItem('theme', saveTheme)
}
console.log(saveTheme);

document.querySelector('body').classList.add(saveTheme);
checkboxBtn.checked = saveTheme === LIGHT ? false : true;