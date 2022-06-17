//Definição de callback(parametros) e podemos dizer o que ela irá retornar à partir de uma função, posso realizar um passo a mais.

function printaValoresNumericos(numero1: number, numero2: number): void {//Este void indica que esta função não retornará nada.)
    console.log(numero1 + numero2)
}

function somarValoresNumericosTratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo));

