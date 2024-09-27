//1
function dobrarNumero(num) {
    let dobro = num*2
    return dobro
}
//2
function elevarNumero(num, potencia) {
    let calculo = num**potencia
    return calculo
}
//3
function dezenaDeUmUnidadeDeOutro(n1, n2) {
    let dezena = parseInt(n1 / 10)
    let unidade = n2 % 10
    let resultado = dezena.toString() + unidade.toString()
    return resultado
}
//4
function mediaAritmetica(n1, n2, n3) {
    let sum = n1+n2+n3
    let div = sum/3
    return div
}
function mediaPonderada(n1, n2, n3) {
    let mult1 = n1*5
    let mult2 = n2*3
    let mult3 = n3*2
    let sum = mult1 + mult2 + mult3
    let div = sum/10
    return div
}
//5
function adicao(n1, n2) {
    let adic = n1 + n2
    return adic
}
function subtracao(n1, n2){
    let sub = n1 - n2
    return sub
}
function multiplicacao(n1, n2) {
    let mult = n1 * n2
    return mult
}
function divisao(n1, n2) {
    let div = n1/n2
    return div
}
//6
function tempoParaFerias(n1) {
    if (n1 > 30){
        alert('Ainda falta muito para o natal.')
    } else if (n1 < 30){
        alert('Oba, quase férias!')
    } else {
        alert('Sei lá')
    }
}
//7
function acabarExercicios() {
    alert('Ufa! Este foi o ultimo exercicio! Acabei =D')
}
//8
function fuiTrolado(){
    alert('Fui Trolado :(')
}
//9
function contarDigitosEmNumero(n1) {
    if (isNaN(n1)) {
        return 0
    }
    let str = n1.toString()
    let tamanho = str.length
    return tamanho
}
//10
function inverterNumero(num){
    let str = num.toString()
    let reverseStr = str.split('').reverse().join('');
    return reverseStr
}
//11
function girarDoisDadosDe6Lados() {
    let dado = Math.floor(Math.random() * (12 - 2 + 1)) + 2
    return dado
}
//12
function transformarModeloDeDataMesAno(data) {
    let str = data.toString();
    let partes = str.split('/');
    if (partes.length !== 3) {
        return null;
    } else {
        let dia = parseInt(partes[0], 10)
        let mes = parseInt(partes[1], 10)
        let ano = parseInt(partes[2], 10)
        if ((ano < 0) || (mes < 1) || (mes > 12) || (dia < 1) || (dia > 31)) {
            return null
        }
        if (mes === 2 && dia == 29 && (ano % 4 !== 0 || (ano % 100 == 0 && ano % 400 != 0))) {
            return null
        }
        if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) {
            return null
        }
        if (mes == 2 && dia > 29) {
            return null
        }
        let meses = ['janeiro','fevereiro','março','abril','maio', 'junho','julho','agosto','setembro','outubro','novembro','dezembro']
        let lista = []
        lista.push(dia)
        lista.push(meses[mes - 1])
        lista.push(ano)
        return lista
    }
}
//13
function embaralhaPalavra(str) {
    let letras = str.split('')
    let lista = []
    let tamanho = letras.length
    let indicesUsados = []
    while (lista.length < tamanho) {
        let randomIndex = Math.floor(Math.random() * tamanho)
        if (!indicesUsados.includes(randomIndex)) {
            indicesUsados.push(randomIndex)
            lista.push(letras[randomIndex])
        }
    }
    return lista.join('')
}
//14
function bhaskara(a, b, c) {
    if (a == 0) {
        return "O valor de 'a' não pode ser zero.";
    }
    let discriminante = b ** 2 - 4 * a * c;
    if (discriminante < 0) {
        return "Não existem raízes reais.";
    }
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a)
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a)
    return [raiz1, raiz2]
}
//15
function pitagoras(cateto1, cateto2) {
    cateto1 *= cateto1
    cateto2 *= cateto2
    let soma = cateto1 + cateto2
    result = Math.sqrt(soma)
    return result
}
//16
function alegriaEmpolgacao() {
    alert('Acabou.')
}