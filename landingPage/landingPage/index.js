// function validarEmail() {
//   var email = document.querySelector('#validationDefault02')
//   var error = document.querySelector('#error-email')

//   if (!email.checkValidity(error)) {
//     error.innerHTML = 'Email Invalido'
//   }
// }

// function redefiningMsg() {
//   var error = document.querySelector('#error-email')
//   if (error.innerHTML == 'Email Invalido') {
//     error.innerHTML = ''
//   }
// }

function validarNome() {
    var name = document.getElementById('validationServer01').value;
    var nameLimit = 'Lara'
   

 if(name.length > nameLimit.length){
        document.getElementById('validationServer01').setAttribute('class','form-control is-valid');
    } else {
        document.getElementById('validationServer01').setAttribute('class','form-control is-invalid');
    }
}

function validarEmail() {
    var email = document.getElementById('validationDefault02').value;
    var emailValid = '@'
    var emailMin = '@adp.com'
   
 if(email.includes(emailValid) && email.length > emailMin.length){
        document.getElementById('validationDefault02').setAttribute('class','form-control is-valid');
    } else {
        console.log('not yet')
        document.getElementById('validationDefault02').setAttribute('class','form-control is-invalid');
    }
}





// if(nome !== ''){
//     document.getElementById('nome-errado').removeAttribute('hidden');
// } else {
//     document.getElementById('erro-nome').innerHTML = "Heeeeeey"
// }
