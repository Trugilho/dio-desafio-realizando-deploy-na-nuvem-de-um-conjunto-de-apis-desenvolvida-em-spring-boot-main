let valorAny: any;//Aceita qualquer dado(string, number, boolean)
valorAny = 3;
valorAny = 'Ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'teste2';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('Olá ', ', como vai?');