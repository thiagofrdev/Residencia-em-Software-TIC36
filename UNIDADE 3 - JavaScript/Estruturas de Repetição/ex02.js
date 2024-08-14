/*Modifique o algoritmo anterior, de maneira que o usuário também informe o início e o
fim da tabuada. Por exemplo: usuário solicitando a tabuada do número 6, com início
em 5 e fim em 8.*/
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    document.getElementById('textarea').value = ""

    let num = parseInt(document.getElementById('numero').value)
    let start = parseInt(document.getElementById('inicio').value)
    let end = parseInt(document.getElementById('fim').value)
    
    document.getElementById('numero').value = ""

    for(start; start<=end; start++){
        document.getElementById('textarea').value += `${num} x ${start} = ${start*end}\n`
    }
})