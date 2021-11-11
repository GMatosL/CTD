function microondas(pratoEscolhido, tempoEscolhido){
    let comida = pratoEscolhido.toLowerCase()
    let tempoPadrao = 0



switch (comida){
    case "pipoca":
     tempoPadrao = 10
    break
    case "macarrão":
     tempoPadrao = 8
    break
    case "carne":
     tempoPadrao = 15
    break
    case "feijão":
     tempoPadrao = 12
    break
    case "brigadeiro":
     tempoPadrao = 8
    break
    default:
        return "Prato inexistente"


}

if (tempoEscolhido >= 0 && tempoEscolhido < tempoPadrao) {
    return "Tempo Insuficiente!"
}else if (tempoEscolhido >= tempoPadrao && tempoEscolhido < (tempoPadrao*2)){
    return "Prato pronto, bom apetite!!"

}else if(tempoEscolhido >= (tempoPadrao*2) && tempoEscolhido < (tempoPadrao*3)){
    return "A comida queimou!"
}else if(tempoEscolhido >= (tempoPadrao*3)){
    return "Kabuumm!"
}
}
console.log(microondas("pipoca", 15))
