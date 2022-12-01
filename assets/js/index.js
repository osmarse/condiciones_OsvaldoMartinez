function borde() {

    const image = document.querySelector('#paisaje')

    if (image.style.border == "") {
        image.style.border = "2px solid red"
    }
    else {
        image.style.border = ""
    }
}

function sumar() {
    const cantidad1 = document.querySelector('#cantidad1').value;
    const cantidad2 = document.querySelector('#cantidad2').value;
    const cantidad3 = document.querySelector('#cantidad3').value;

    const num1 = parseInt(cantidad1);
    const num2 = parseInt(cantidad2);
    const num3 = parseInt(cantidad3);
    const sumaFinal = (num1 + num2 + num3)

    if (sumaFinal < 11) {
        document.querySelector('#total_cantidad').innerHTML = sumaFinal;
    } else {
        document.querySelector('#total_cantidad').innerHTML = "demasiados";
    }
}

function clave() {
    const pass1 = document.getElementById("clave1").value;
    const pass2 = document.getElementById("clave2").value;
    const pass3 = document.getElementById("clave3").value;
    const passFinal = (pass1 + pass2 + pass3)

    if (passFinal == 911) {
        document.querySelector('#suma_digitos').innerHTML = "Password 1 es correcta.";
    }
    else if (passFinal == 714) {
        document.querySelector('#suma_digitos').innerHTML = "Password 2 es correcta.";
    }
    else {
        document.querySelector('#suma_digitos').innerHTML = "Password incorrecta.";
    }

}

