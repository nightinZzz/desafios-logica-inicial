var nomePersonagem = " Paladino Alado "
var qtdeXp = 19999  



switch (true) {
  case qtdeXp <= 1000:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Ferro")
    break
  case qtdeXp <= 2000:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Bronze")
    break
  case qtdeXp <= 5000:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Prata")
    break
  case qtdeXp <= 7000:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Ouro")
    break  
  case qtdeXp <= 8000:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Platina")
    break
  case qtdeXp <= 9000:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Ascendente")
    break
  case qtdeXp <= 10000:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Imortal")
    break  
  case qtdeXp >= 10001:
    console.log("O Herói de nome"+ nomePersonagem + "está no nível Radiante")
    break

}