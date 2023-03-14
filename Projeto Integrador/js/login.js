let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function user(){
  window.location.href = '../assets/login.html'
}

function entrar(){
  let email = document.querySelector('#email')
  let emailLabel = document.querySelector('#emailLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaEmail = []
  
  let emailValid = {
    nome: '',
    email: '',
    senha: ''
  }
  
  listaEmail = JSON.parse(localStorage.getItem('listaEmail'))
  
  listaEmail.forEach((item) => {
    if(email.value == item.emailCad && senha.value == item.senhaCad){
       
      emailValid = {
         nome: item.nomeCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(email.value == emailValid.email && senha.value == emailValid.senha){
    window.location.href = '../index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(emailValid))
  } else {
    emailLabel.setAttribute('style', 'color: red')
    email.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Email ou senha incorretos'
    email.focus()
  }
  
}

function pesquisar() {
  let input = document.getElementById('buscar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('produtos');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

const modeSwitch = document.querySelector('#mode-switch');
const logo = document.querySelector('.logo');
const hr = document.querySelector('#hr');

modeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    logo.setAttribute('src', '../images/logo-dark-mode.png');
    hr.setAttribute('color', '#00ffff');
  } else {
    logo.setAttribute('src', '../images/logo-verdin-d.png');
    hr.setAttribute('color', '#1e8d90');
  }
});