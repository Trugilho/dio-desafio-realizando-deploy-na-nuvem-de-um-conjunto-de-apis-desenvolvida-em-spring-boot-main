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
};

let empregado: empregado = {
    codigo: 10,
    nome: 'João'
};

//ou

let  funcionario2: (codigo: number, nome: string)  =  {
código: 10 ;
nome: "João"
 } ;