//Definição de tipos de retorno de uma função (personalizado).

function somarValoresNumericos(numero1: number, numero2: number): number {//Este último number garante que o retorno da função será numérico
    return numero1 + numero2; //Com o number acima, se houver a tentativa de colocar numero2.toString(); não irá aceitar/compilar
}

console.log(somarValoresNumericos(1, 3));
