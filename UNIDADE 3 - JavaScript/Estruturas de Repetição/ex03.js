/*Construa um algoritmo que, dado o primeiro elemento e a razão de uma progressão
aritmética (PA), imprima todos os n primeiros elementos da PA, onde n também é
informado pelo usuário. Lembre-se que uma PA pode ser crescente ou decrescente.*/
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    document.getElementById('textarea').value = ''

    let inicio = parseInt(document.getElementById('inicio').value)
    let progressao = parseInt(document.getElementById('progressao').value)
    let qtdElementos = parseInt(document.getElementById('qtdElementos').value)
    let ordem = document.getElementById('select').value

    if(ordem == 'crescente'){
        for(let i = 0; i<qtdElementos; i++){
            document.getElementById('textarea').value += `${inicio} `
            inicio += progressao
        }
    } else if (ordem == 'decrescente'){
        for(let i = 0; i<qtdElementos; i++){
            document.getElementById('textarea').value += `${inicio} `
            inicio -= progressao
        }
    } else {
        document.getElementById('textarea').value = 'Insira valores e/ou ordem válida'
    }

})