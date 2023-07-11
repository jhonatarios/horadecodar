function verificarDado(dado){
    if(typeof dado === 'boolean'){
        console.log("É boolean");
    }else if(typeof dado === 'string'){
        console.log("É string");
    }else if(typeof dado === 'number'){
        console.log("É number");
    }
}

verificarDado(false);
verificarDado('Batatinhas');
verificarDado(2);