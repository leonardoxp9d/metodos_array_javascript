/* reduce() - 
1º param - recebe o elemento de indice 0 - acumulador
2º param - recebe o elemento de indice 1 - valorAtual
fazemos alguma coisa com esses parametros/elementos
e o resultado dessa função e acumulado e passado para a próxima 
com o elemento atual, fazendo a mesma coisa 
E assim vai percorrendo o array */

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
];

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, valorAtual){
    return acumulador + valorAtual;
}, 0)

console.log(resultado);






/* reduce() - função que transforma um array em um unico elemento
ou em outro array, ou em um número, ou string
vc define o critério
o fato e que temos um  parametro que vai 
sendo acumulado de chamada em chamada
o resultado de uma função reduce e sempre passado para
a próxima interação 
1º param - recebe o elemento de indice 0 - acumulador
2º param - recebe o elemento de indice 1 - valorAtual
fazemos alguma coisa com esses parametros/elementos
e o resultado dessa função, e passado para a próxima 
como o elemento atual, 
E assim vai percorrendo o array

reduce - tem a ideia de reduzir, de agregar os valores
em um só

, 0) - e o valor inicial, caso queria add um valor
inicial para ser somado, no não queremos
so colocou o 0 para dizer que é possível
*/
