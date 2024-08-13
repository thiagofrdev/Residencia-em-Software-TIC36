/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não 
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o 
valor da média do aluno para qualquer condição. */

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    let nome = document.getElementById('nome').value
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let nota4 = parseFloat(document.getElementById('nota4').value)

    let situacao
    let mediaFinal = (nota1+nota2+nota3+nota4)/4

    if (mediaFinal>=5){
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }

    let texto = `Aluno: ${nome}\nSituação: ${situacao}\nMédia Final: ${mediaFinal.toFixed(1)}
    `

    document.getElementById('textarea').value = texto
})