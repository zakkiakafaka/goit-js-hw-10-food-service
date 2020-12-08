import menuTemplate from './templates/menu.hbs';
import menuData from './menu.json';
import './styles.css';

const markup = menuTemplate(menuData);
const menu = document.querySelector('.js-menu');
menu.innerHTML = markup;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcher = document.querySelector('.theme-switch__toggle');

localStorage.getItem('checkbox') === Theme.DARK ? switcher.checked = true : switcher.checked = false
switcher.checked ? document.body.classList.add(Theme.DARK) : document.body.classList.add(Theme.LIGHT);

const changeTheme = function (event) {
  localStorage.setItem('checkbox', event.target.checked ? Theme.DARK : Theme.LIGHT)
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
}

switcher.addEventListener('change', changeTheme)
