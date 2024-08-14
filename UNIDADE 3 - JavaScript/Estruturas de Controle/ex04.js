/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da 
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. 
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi 
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta 
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.*/
document.getElementById('form-notas').addEventListener('submit', function(event){
    event.preventDefault()

    let nome = document.getElementById('nome').value
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let nota4 = parseFloat(document.getElementById('nota4').value)

    let media = (nota1+nota2+nota3+nota4)/4
    let situacao

    if(media>=7){
        situacao = "Aprovado"
        document.getElementById('textarea').value =`Aluno: ${nome}\nSituação: ${situacao}\nMédia Final: ${media.toFixed(2)}`
        document.getElementById('form-notas').reset()
    } else {
        document.getElementById('textarea').value = `Aluno inicialmente Reprovado com média ${media.toFixed(2)}.\n\nAguardando nota da Prova Final.`

        document.getElementById('div-final').classList.remove('hidden') //Acessa todo o HTML e procura alguém com o ID 'div-final', vai na lista de classes dele e remove a classe 'hidden'

        let notaFinal = parseFloat(document.getElementById('nota-final').value)

        if(!isNaN(notaFinal)){
            media = (nota1+nota2+nota3+nota4+notaFinal)/5
            if(media>=5){
                situacao = "Aprovado"
            } else {
                situacao = "Reprovado"
            }
            document.getElementById('textarea').value = `Aluno: ${nome}\nSituação: ${situacao}\nMédia Final: ${media.toFixed(2)}`
            document.getElementById('form-notas').reset()
            document.getElementById('form-final').reset()
        }
    }
})