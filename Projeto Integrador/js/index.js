function user(){
    window.location.href = '/assets/login.html'
}
const modeSwitch = document.querySelector('#mode-switch');
const logo = document.querySelector('.logo');

modeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    logo.setAttribute('src', '../images/logo-dark-mode.png');
  } else {
    logo.setAttribute('src', '../images/logo-verdin-d.png');
  }
});
