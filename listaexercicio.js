// funcao: crie uma funcao que retorna a estacao de acordo com o mes
let estacoes = ["Outono", "Inverno", "Primavera", "Verao"]
let mes = 5
function estacaoMes(estacoes) {
  if(mes < 1 || mes > 12)
return 'mes invalido, selecione de 1 a 12'
  else if (mes <= 3) 
return estacoes[0]
  else if (mes <= 6)
return estacoes[1]
  else if (mes <= 9)
return estacoes[2]
  else if (mes <= 12)
return estacoes[3]
}
console.log(estacaoMes(estacoes))
  

 