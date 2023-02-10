// dado uma colecao de valores [15,46,75,34,23] imprima na tela a soma destes valores
var soma = [15,46,75,34,23]
var n = 5
var total = 0
//console.log(soma[0] + soma[1] + soma[2] + soma[3] + soma[4]) 
for (let i = 0; i < n; i++) {
    total=total+soma[i]
}
console.log(total)