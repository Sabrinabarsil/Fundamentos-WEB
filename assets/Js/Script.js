
let nome = window.document.getElementById("nome")
let email = document.querySelector ("input.email")
let assunto = document.querySelector("#assunto")

nome.style.width = "25%"
email.style.width = "25%S"


function  validaNome () {
    let txt = document.querySelector("#txtNome")
    if (nome.Value.length <3) {
        txt.innerHTML = "Nome Invalido"
        txt.style.color = "red"

    } else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
    }


}

function validaEmail (){
       let textEmail =document.querySelector ("#Email")
    if(email.Value.indexof ("@") == -1 || email.Value.indexof(' . ')){
        textEmail.innerHTML = "E-mail inválido"
        textEmail.style.color - "red"
    } else {
        textEmail.innerHTML = "E-mail válido"
        textEmail.style.color - "green"
    }
}

function validaAssunto (){
    let textAssunto =document.querySelector ("#Assunto")
    if (assunto.value.length >= 100) {
     textAssunto.innerHTML = "<h1> </h1>"

    }

}