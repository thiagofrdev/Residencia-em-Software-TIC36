/*Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um 
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se 
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.*/
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    let num = document.getElementById('numero').value

    if(num<0){
        num *= -1
        document.getElementById('textarea').value = num
    } else {
        document.getElementById('textarea').value = "Esse número não é negativo!"
    }


})