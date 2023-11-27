const nom = document.getElementById("name")
const eg = document.getElementById("email")
const pass = document.getElementById("password")
const em = document.getElementById("com")
const parr = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parr.innerHTML = "" 

    let input = document.getElementById('name');
        input.addEventListener('input', function() {
    let regex = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g;
        input.value = input.value.replace(regex, '');
});
 

if (nom.value.length <6){    
    warnings += 'El nombre resulta ser invalido <br>'   
    entrar = true 
} 
    // console.log( regexEmail.test(eg.value))

if(!regexEmail.test(eg.value)){
    warnings += 'El Email resulta ser invalido <br>'
    entrar = true
}

if(pass.value.length <8){
    warnings += 'La contraseña resulta ser invalido <br>'
    entrar = true
}
if(entrar){
    parr.innerHTML = warnings
}
else{
    parr.innerHTML = "Enviado"

}
})
