//Tipo never e o comando throw(interrupção da execução do 
//script por ter encontrado um erro). O throw(interrompe a função) é um tipo 
//never(código que nunca foi finalizado, foi encerrado abruptamente)

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo:number) {
     throw (error: erro, code: codigo)
};

jogaErro('deu erro', 500);
