let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let tel = document.querySelector('#tel')
let labelTel = document.querySelector('#labelTel')
let validTel = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

let form = document.querySelector('#form')
let emailV = document.querySelector('#email').value

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } 
  else if(nameValidation(nome.value) !== true){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Escreva um nome existente'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  }
  
  else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

email.addEventListener('keyup', () => {
  if(email.value.length <= 8){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *Insira no minimo 8 caracteres'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } 
  else if(emailValidation(email.value) !== true){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *O formato do email deve ser Ex: name@abc.com'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  }
  else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

cpf.addEventListener('keyup', () => {
  if(cpf.value.length <= 13){
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'CPF *Insira 11 caracteres'
    cpf.setAttribute('style', 'border-color: red')
    validCpf = false
  } else if(cpfValidation(cpf.value) !== true){
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'CPF *O formato do cpf deve ser correto'
    cpf.setAttribute('style', 'border-color: red')
    validCpf = false
  } 
  else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'CPF'
    cpf.setAttribute('style', 'border-color: green')
    validCpf = true
  }
})

tel.addEventListener('keyup', () => {
  if(tel.value.length <= 14){
    labelTel.setAttribute('style', 'color: red')
    labelTel.innerHTML = 'Telefone *Insira um número de telefone valido'
    tel.setAttribute('style', 'border-color: red')
    validTel = false
  } 
  else if(telValidation(tel.value) !== true){
    labelTel.setAttribute('style', 'color: red')
    labelTel.innerHTML = 'Telefone *O formato do número de telefone deve ser correto'
    tel.setAttribute('style', 'border-color: red')
    validTel = false
  }else {
    labelTel.setAttribute('style', 'color: green')
    labelTel.innerHTML = 'Telefone'
    tel.setAttribute('style', 'border-color: green')
    validTel = true
  }
})


senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } 
  else if(validatorPassword(senha.value) !== true){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira pelo menos um caractere especial (Ex: @!&$)'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  }
  else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function user(){
  window.location.href = '../assets/login.html'
}
function validatorPassword(senha) {
  let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(senha);
}
function emailValidation(email){
  let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}
function nameValidation(name){
  let namePattern = /^([a-zA-Zà-úÀ-Ú]+[ ]{0,1}){1,}$/u
  return namePattern.test(name);
}
function cpfValidation(cpf){
  let cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/u
  return cpfPattern.test(cpf);
}

function telValidation(tel){
  let telPattern = /^\(?\d{2}\)?[- ]?\d{4,5}[- ]?\d{4}$/u
  return telPattern.test(tel);
}






function cadastrar(){
  if(validNome && validEmail && validCpf && validTel && validSenha && validConfirmSenha){
    let listaEmail = JSON.parse(localStorage.getItem('listaEmail') || '[]')
    
    listaEmail.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      cpfCad: cpf.value,
      telCad: tel.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaEmail', JSON.stringify(listaEmail))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'login.html'
    }, 2000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})

const cpfV = document.querySelector('#cpf')

cpfV.addEventListener('keypress', () => {

  let cpfVlength = cpfV.value.length

  if(cpfVlength === 3 || cpfVlength === 7){
    cpfV.value += '.'
  }else if(cpfVlength === 11){
    cpfV.value += '-'
  }
})

const telV = document.querySelector('#tel')

telV.addEventListener('keypress', () => {

  let telVlength = telV.value.length

  if(telVlength === 0){
    telV.value += '('
  }else if(telVlength === 3){
    telV.value += ') '
  }
  else if(telVlength === 10){
    telV.value += '-'
  }
})
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


  
  
