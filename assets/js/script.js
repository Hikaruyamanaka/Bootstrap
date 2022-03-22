/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome:getElementByName()
por Classe:getElementByClassName()
por Seletor:querySelector()
*/


let nome = window.document.getElementById('nome')
let sobrenome = window.document.getElementById('sobrenome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let contador = document.querySelector('#contador') 

let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
contador.innerHTML = '0 / 100'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        nome.style.border = "3px solid red"
       } else {
           txtNome.innerHTML = 'Nome Válido'
           txtNome.style.color = 'green'
           nomeOk = true
           nome.style.border = "3px solid green"
       }

}

function validaSobrenome() {
    let txtSobrenome = document.querySelector('#txtSobrenome')
    if (sobrenome.value.length < 3) {
        txtSobrenome.innerHTML = 'Sobrenome Inválido'
        txtSobrenome.style.color = 'red'
        sobrenome.style.border = "3px solid red"
       } else {
           txtSobrenome.innerHTML = 'Sobrenome Válido'
           txtSobrenome.style.color = 'green'
           sobrenomeOk = true
           sobrenome.style.border = "3px solid green"
       }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
        email.style.border = "3px solid red"
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
        email.style.border = "3px solid green"
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    contador.innerHTML = assunto.value.length + '/ 100'

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assunto.style.border = "3px solid red"

    } else {
         txtAssunto.style.display = 'none'
         assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '350px'
    mapa.style.height = '250px'
}