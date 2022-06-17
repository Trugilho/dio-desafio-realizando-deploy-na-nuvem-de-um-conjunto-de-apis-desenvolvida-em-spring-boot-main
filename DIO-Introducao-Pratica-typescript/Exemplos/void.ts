//Definição de tipo void(não retorna nada) de uma função.

function somarValoresNumericos(numero1: number, numero2: number): number {//Este último number garante que o retorno da função será numérico
    return numero1 + numero2; //Com o number acima, se houver a tentativa de colocar numero2.toString(); não irá aceitar/compilar
}

console.log(somarValoresNumericos(1, 3));

function printaValoresNumericos(numero1: number, numero2: number): void {//Este void indica que esta função não retornará nada.)
    console.log(numero1 + numero2)
}