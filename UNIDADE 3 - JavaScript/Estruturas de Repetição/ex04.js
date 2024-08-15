/*Agora faça outro algoritmo semelhante ao anterior, só que agora considerando
progressões geométricas.*/
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    document.getElementById('textarea').value = ""

    let inicio = parseInt(document.getElementById('inicio').value)
    let progressao = parseInt(document.getElementById('progressao').value)
    let qtdElementos = parseInt(document.getElementById('qtdElementos').value)
    let ordem = document.getElementById('select').value

    if(ordem == 'crescente' && progressao > 0){
        for(let i = 0; i<qtdElementos; i++){
            document.getElementById('textarea').value += `${inicio} `
            inicio *= progressao
        }
    } else if (ordem == 'decrescente' && progressao > 0){
        for(let i = 0; i<qtdElementos; i++){
            document.getElementById('textarea').value += `${inicio} `
            inicio *= -progressao
        }
    } else if  (ordem == 'oscilante' && progressao < 0){
        for(let i = 0; i<qtdElementos; i++){
            document.getElementById('textarea').value += `${inicio} `
            inicio *= progressao
        }
    } else {
        document.getElementById('textarea').value = 'Insira valores e/ou ordem válida'
    }
})