//Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    let num1 = document.getElementById('numero1').value
    let num2 = document.getElementById('numero2').value
    
    if(num1<num2){
        document.getElementById('textarea').value = (num2/num1)
    } else {
        document.getElementById('textarea').value = (num1/num2)
    }
})