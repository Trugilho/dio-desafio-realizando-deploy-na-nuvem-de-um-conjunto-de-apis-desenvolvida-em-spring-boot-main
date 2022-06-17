/* Como podemos rodar isso em um arquivo .ts sem causar erros?

let  empregado  =  { } ;
empregado . código  =  10 ;
empregado . nome  =  "João" ;
*/

interface empregado {
    codigo: number,
    nome: string,
    idade?: number,
    profissao?: string 
}

const empregado: empregado = {
    codigo: 10,
    nome: 'João'
}
