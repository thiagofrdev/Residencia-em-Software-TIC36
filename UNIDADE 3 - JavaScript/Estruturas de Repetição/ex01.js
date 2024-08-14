//Crie um algoritmo que, dado um número informado pelo usuário, imprima a tabuada dele de 1 a 10. Use o formato de apresentação
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    document.getElementById('textarea').value = ""

    let num = parseInt(document.getElementById('numero').value)
    
    document.getElementById('numero').value = ""

    for(let i = 1; i<11; i++){
        document.getElementById('textarea').value += `${num} x ${i} = ${num*i}\n`
    }
})