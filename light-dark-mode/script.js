const  dqs = document
const toggleSwitch = dqs.querySelector('input[type="checkbox"]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');


const [image1, image2, image3] = ['image1', 'image2', 'image3'].map(id => document.getElementById(id));
const textBox = document.getElementById('text-box');


//Change Image 
function imageMood(color) {
  const images = ['coder_', 'proud_','idea_'];
  const img=[image1,image2,image3];
  for (let i = 0; i < images.length; i++) {
    img[i].src= `img/${images[i]}${color}.svg`;
    
  }
}

function lightMode() {
  nav.style.backgroundColor = 'rgba(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';

  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMood('light');
   
}
//Dark Mode funtion
function darkMode() {
  nav.style.backgroundColor = 'rgba(0 0 0  / 50%)'
  textBox.style.backgroundColor = 'rgba(255 255 255 / 50%)'
  toggleIcon.children[0].textContent = 'Dark Mode';


  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMood('dark');

}

//Switch Theme Dynamically
function switchTheme(params) {
  if (params.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();

  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');

    lightMode();

  }


}
//Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}

