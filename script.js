var n1 = Number(prompt("Digite o primeiro valor:"))
var n2 = Number(prompt("Digite o segundo valor:"))
var oP = prompt("Digite a operação desejada (+, -, x, :):")

function soma(a,b){
    return a + b
}

function subt(a,b){
    return a - b
}

function mult(a,b){
    return a * b
}

function divs(a,b){
    return a / b
}

function verificaOp(a,b,operacao){
    if(operacao == "+"){
        return soma(a,b)
    }else if(operacao == "-"){
        return subt(a,b)
    }else if(operacao == "x"){
        return mult(a,b)
    }else if(operacao == ":"){
        return divs(a,b)
    }else{
        exibir("Operador inválido! Digite um operador válido.")
    }
}

function exibir(a){
    document.writeln(a)
}

function calcular(){
    exibir(verificaOp(n1, n2, oP))
}

