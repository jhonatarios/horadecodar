function decrementaLoop(x){
    for(let i = x; i >= 0; i--){
        if(i % 2 == 0){
            console.log(`O numero é: ${i}`);
        }
    }
}

decrementaLoop(4);