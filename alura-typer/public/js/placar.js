$("#botao-placar").click(mostraPlacar);

function mostraPlacar(){
    $(".placar").stop().slideToggle();   //Esse toggle fara com que ele mostre (show) ou esconda(hide) um elemento.
}

//##############################################################################################
//Essa funcao serve para criar o placar.
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas";
    var numPalavras = $("#contador-palavras").text();
    var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>";

    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.append(linha);
    $(".placar").slideDown();
    scrollPlacar();
}

//##############################################################################################
// Essa funcao serve para quando se acabar uma rodada, o scroll vai automaticamente no placar.
function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top; //esse offset medira o tamanha do placar ate o topo da pagina
    $("body").animate(
        {
            scrollTop: posicaoPlacar+"px"

        },1000);
}



//##############################################################################################
// Essa funcao serve para criar uma nova linha no placar ao acabar uma roda.
function novaLinha(usuario,palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    // Icone dentro do <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

//##############################################################################################
//Essa funcao serve para remover uma linha. Ela sera usada apos o botao de lixeira ser apertado.
function removeLinha(event){
    event.preventDefault();
    
    var linha = $(this).parent().parent();
    linha.fadeOut(500, function (){
        linha.remove()
    });
}

//########################################################################




















