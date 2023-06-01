const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');
const sunIcon = document.querySelector('.toggle .sun');
const moonIcon = document.querySelector('.toggle .moon');

toggle.addEventListener('change', () => {
    
    body.classList.toggle('dark');
    sunIcon.className = sunIcon.className == 'fa fa-sun sun' ? 'fa fa-sun sun' : 'fa fa-sun sun';
    moonIcon.className = moonIcon.className == 'fa fa-moon moon' ? 'fa fa-moon moon' : 'fa fa-moon moon';

});