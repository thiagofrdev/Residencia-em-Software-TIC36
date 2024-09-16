/*Faça um algoritmo que permita ao usuário informar a idade de quantas pessoas ele
desejar. Após isso o algoritmo deve informar a soma das pessoas maiores de idade e a
média de idade das pessoas maiores de idade informadas.*/
let num = 0;

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    while (num === 1) {
        num += parseInt(document.getElementById('idade').value)
    }
    
    document.getElementById('textarea').value = num
    document.getElementById('idade').value = ""
})