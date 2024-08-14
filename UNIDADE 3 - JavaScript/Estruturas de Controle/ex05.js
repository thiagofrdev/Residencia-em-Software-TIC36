/*Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de 
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o 
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.*/
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)

    if(a != 0){
        let delta = Math.sqrt(b**2 - 4*a*c)
        let res1 = (-b+delta)/(2*a)
        let res2 = (-b-delta)/(2*a)
        document.getElementById('textarea').value = `Delta = ${delta}\nX1 = ${res1.toFixed(1)}\nX2 = ${res2.toFixed(1)}`
    } else {
        document.getElementById('textarea').value = `A icógnita A não pode ser 0`
    }
})