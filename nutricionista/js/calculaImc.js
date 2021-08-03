
var titulo = document.querySelector(".Titulo");
titulo.textContent = "JG nutricionista";
// preencher imc
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    //verifica se os dados estão certos
    if (!validaPeso(peso)) {
        pesoEhValido = false
        tdPeso.textContent = ("PESO INVALIDO");
        tdImc.textContent = ("--");
        paciente.classList.add("pacienteInvalido");


    }
    if (!validaAltura(altura)) {
        alturaEhValida = false
        tdAltura.textContent = ("ALTURA INVALIDO");
        tdImc.textContent = ("--");
        paciente.classList.add("pacienteInvalido");

    }
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
function validaPeso(peso) {
    if (peso >= 0 && peso<500){
        return true;
    }else{
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura<3.0){
        return true;
    }else{
        return false
    }

}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

