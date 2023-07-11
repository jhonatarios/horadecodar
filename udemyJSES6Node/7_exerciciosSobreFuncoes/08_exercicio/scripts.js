function verificarTexto(texto){
    if(texto.length > 10){
        console.log("Texto muito longo");
    }else{
        console.log("Texto dentro do limite");
    }
}

verificarTexto("Batatinha");
verificarTexto("Junglezinho meu gatão");