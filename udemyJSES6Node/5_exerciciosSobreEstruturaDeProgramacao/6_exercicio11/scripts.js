let idade = 17;
let cnh = true;

if(idade >= 18 && cnh == true){
    console.log("Você pode dirigir")
}else if(idade >= 18 && cnh == false){
    console.log("Você tem idade mas não tem CNH!");
}else{
    console.log("Você não tem idade");
}