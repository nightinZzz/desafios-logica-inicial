let saldoPositivo = calculrRck(150, 50)

function calculrRck(vitorias, derrotas) {
    let saldoPartidas = vitorias - derrotas
    return saldoPartidas
}

function rankeamento() {
switch (true) {
  case saldoPositivo <= 10:
    console.log("O Herói tem de saldo de "+ saldoPositivo + " partidas e está no nível Ferro")
    break
  case saldoPositivo <= 20:
    console.log("O Herói tem de saldo de "+ saldoPositivo + " partidas e está no nível Bronze")
    break
  case saldoPositivo <= 50:
    console.log("O Herói tem de saldo de "+ saldoPositivo + "partidas e está no nível Prata")
    break
  case saldoPositivo <= 80:
    console.log("O Herói tem de saldo de "+ saldoPositivo + " partidas e está no nível Ouro")
    break  
  case saldoPositivo <= 90:
    console.log("O Herói tem de saldo de "+ saldoPositivo + " partidas e está no nível Diamante")
    break
  case saldoPositivo <= 100:
    console.log("O Herói tem de saldo de "+ saldoPositivo + " partidas e está no nível Lendário")
    break  
  case saldoPositivo >= 101:
    console.log("O Herói tem de saldo de "+ saldoPositivo + " partidas e está no nível Imortal")
    break
}
}
rankeamento()