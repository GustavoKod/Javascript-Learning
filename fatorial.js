var num = 10
var resultado = num
if (num < 0){
    console.log(`Selecione um numero positivo`)
    
}
for (var i = 1; i < num; i++) {
    resultado = resultado * i;
   
}
console.log(resultado);