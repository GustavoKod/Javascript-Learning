//Escreva um programa que, ao iniciar gera um valor aleatorio de 1 a 10 e permite que o usuario chjute um numero ate que o valor ->
// aleatorio gerado no inicio do programa seja chutado corretamente. o programa deve informar caso o chute tenha sido acima, abaixo ou igual ao valor gerado no inicio.

var min = 1
var max = 10
var user = 5
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} var resultado = getRandomInt(min, max) 
    
    if (user > 10 || user < 0){
    console.log (`numero invalido selecione apenas de 1 a 10`)
    }
    console.log(resultado)

    if (resultado == user) {
    console.log (`acertou!!`)
}
    else if (resultado > user) {
    console.log (`O nomuero que vc chutou esta abaixo`)
}
    else if(resultado < user) {
    console.log (`O nomuero que vc chutou esta acima`)
}
    
