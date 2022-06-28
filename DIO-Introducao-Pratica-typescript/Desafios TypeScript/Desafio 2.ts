/* Como podemos melhorar o esse usando o código TS?

let  pessoa1  =  { } ;
pessoa1 . nome  =  "maria" ;
pessoa1 . idade  =  29 ;
pessoa1 . profissao  =  "atriz"

let  pessoa2  =  { }
pessoa2 . nome  =  "roberto" ;
pessoa2 . idade  =  19 ;
pessoa2 . profissao  =  "Padeiro" ;

let  pessoa3  =  {
    nome : "laura" ,
    idade : "32" ,
    profissao : "Atriz"
} ;

let  pessoa4  =  {
    nome =  "carlos" ,
    idade =  19 ,
    profissao =  "padeiro"
}
*/

type pessoa {
    nome: string,
    idade: number,
    profissao: Profissao 
}

enum Profissao { 
    Atriz,
    Padeiro,
    Motorista
}

const pessoa1: pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz 
}

const pessoa2: pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro 
}

const pessoa3: pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz 
}

const pessoa4: pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro 
}