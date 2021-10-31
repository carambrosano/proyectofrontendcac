window.onload = iniciar;


function iniciar() {
    document.getElementById('send').addEventListener('click', validate,false);
}

function valida_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value ==''){
        alert('El campo nombre no puede quedar vacío');
        return false 
    }
    return true;
}

function valida_nombre() {
    var elemento = document.getElementById('apellido');
    if (elemento.value ==''){
        alert('El campo nombre no puede quedar vacío');
        return false 
    }
    return true;
}


function valida_telefono() {
    var elemento = document.getElementById('tel');
    if (isNaN(elemento.value)){
        alert('El campo teléfono debe ser un número');
        return false   }
    return true;
}

function valida_correo() {
    var elemento = document.getElementById('correo');
    if (elemento.validity.typeMismatch) {
        alert ('¡Se espera una dirección de correo electrónico!');
    return false
    } 
    return true;
}

//validación global
function validate(e){
    if(valida_nombre() && valida_telefono() && valida_check() && confirm('Desea enviar?')){
        return true;
    } else {
    e.preventDefault();
    return false;
    }   
}

