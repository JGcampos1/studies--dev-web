var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);

    atualizaPlacar();
})

function atualizaTamanhoFrase() {

    var frase = $(".frase").text();
    var numPalavra = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavra);


}

function atualizaTempo(tempo) {
    tempoInicial = tempo
    $("#tempo-digitacao").text(tempo);

}



function inicializaContadores() {

    campo.on("input", function () {
        var ContCaracter = $("#contador-caracteres");
        ContCaracter.text(campo.val().length);

        var ContPlavras = $("#contador-palavras");
        ContPlavras.text(campo.val().split(/\S+/).length - 1);

    });
}

function inicializaMarcadores() {
    campo.on("input", function() {
        var frase = $(".frase").text();
        

        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("borda-verde")
            campo.removeClass("borda-vermelha")
        } else {
            campo.addClass("borda-vermelha")
            campo.removeClass("borda-verde")
        }
    });
}

function inicializaCronometro() {
    campo.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroId = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroId);
                finalizaJogo();
            }

        }, 1000);
    })
}
function finalizaJogo() {
    campo.attr("disabled", true)
    campo.addClass("campo-desativado");
    inserePlacar();
}


function reiniciaJogo() {

    campo.attr("disabled", false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial)
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
    inicializaCronometro();
    $(".nome-iput").focus();
    $(".nome-iput").val("");
}









