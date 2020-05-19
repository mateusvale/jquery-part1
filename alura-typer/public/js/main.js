var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


//##############################################################################
$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
    inicializaMarcadores();
    atualizaPlacar();
    $('#usuarios').selectize({
        create: true,
        sortField: 'text'
    });
    $(".tooltip").tooltipster({
        trigger: "custom"
    });
})


//##############################################################################

function atualizaTempoInicial (tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}


//##############################################################################

function atualizaTamanhoFrase(){

    var frase = $(".frase").text();
    var tamanhoFrase = $("#tamanho-frase");

    //essas 2 linhas farão com que mude a informação de numero de palavras automaticamente, sem precisar mudar no HTML:
    var numPalavras = frase.split(" ").length;
    tamanhoFrase.text(numPalavras);
}

//##############################################################################

function inicializaContadores(){
    campo.on("input", function(){

        var conteudo = campo.val();
    
        //var qtdPalavras = conteudo.split(" ").length;
        var qtdPalavras = conteudo.split(/\S+/).length - 1; // esse /\S+/ ira contar um espaco vazio como um, mesmo se tiver 2 espacos.
        $("#contador-palavras").text(qtdPalavras);
    
        //Retirando os espaço da String 
        var conteudoSemEspaco = conteudo.replace(/\s+/g,'');
    
        var qtdCaracteres = conteudoSemEspaco.length;
        $('#contador-caracteres').text(qtdCaracteres);
        
    })
}

//##############################################################################

function inicializaCronometro(){

    campo.one("focus", function(){
        var tempoRestante = $("#tempo-digitacao").text();
        $("#botao-reiniciar").attr("disabled",true);
        var cronometroID = setInterval(function(){ //irei pegar o id do setInterval para depois parar ele quando chegar a 0

            tempoRestante --;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1){
                clearInterval(cronometroID); //isso para o cronometro
                finalizaJogo();
                
            }

        },1000); //1000ms
    })
}
//##############################################################################

function finalizaJogo(){
    campo.attr("disabled", true); //essa funcao adiciona o atributo disabled, o qual faz com que o campo fique indigitavel
    $("#botao-reiniciar").attr("disabled", false);
    campo.toggleClass("campo-desativado"); 
    inserePlacar();           
}

//##############################################################################

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}

//##############################################################################

function inicializaMarcadores(){
    
    campo.on("input", function(){
    var frase = $(".frase").text();

    var digitado = campo.val()
    var comparavel = frase.substr(0, digitado.length);  //comparavel recebera um 
    //subtexto, comecando a primeira letra ate o tamanho digitado pela variavel digitado.  
    if (digitado == comparavel){
        campo.addClass("borda-verde");
        campo.removeClass("borda-vermelha");
    }else{
        campo.addClass("borda-vermelha");
        campo.removeClass("borda-verde");
    }
})
}

//##############################################################################



//##############################################################################




