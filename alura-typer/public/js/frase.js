$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


function fraseAleatoria (){
    $("#spinner").toggle(); //esse codigo fara com que apareca o GIF quando se apertar o botao
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){
        $("#spinner").toggle(); //essa funcao fara com que se apague o spinner sempre.
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.round(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial (data[numeroAleatorio].tempo);
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    console.log("ID da minha frase:" + fraseId);
    var dados = { id: fraseId};
    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail( function() {
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){
        $("#spinner").toggle(); //essa funcao fara com que se apague o spinner sempre.
    });
        
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial (data.tempo);
}