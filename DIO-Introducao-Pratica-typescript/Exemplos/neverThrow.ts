//any e unknown são bem parecidos, 
//A diferença entre unknown e any é que usando unknown, se vc tiver uma propriedade 
//unknown(não sabe o seu conteúdo no momento) vc é obrigado no momento que vc vai alocar 
//seu valor para outra propriedade a fazer uma validação para garantir que aquele valor 
//é do tipo esperado pela propriedade que irá recebe-lo, portanto torna o uso do unknown
//uma boa prática. Ocorre quando vc recebe um objeto cujo tipo vaia e vc não sabe o que vai 
//receber, portanto primeiro eu testo qual o seu tipo, antrs de alocar.

let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5; n

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
stringTest2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
