/* slice() - pega os elementos do Array a partir de um índice e retorna um novo Array
slice - tradução e pedaço, ou seja estou pegando um pedaço/parte do Array */

const alimentos = ['arroz', 'farinha', 'ovo', 'massa'];

const algunsAlimentos = alimentos.slice(2);
console.log(algunsAlimentos);
// [ 'ovo', 'massa' ]

/* Pegando elementos entre 2 índices
1º param - a partir de qual índice
2º param - até qual índice, obs: ñ pega o elemento desse índice indicado,
e sim os elementos anteriores a ele
no caso vai do índice 1 ate o 2 */
const algunsAlimentos2 = alimentos.slice(1, 3);
console.log(algunsAlimentos2);
// [ 'farinha', 'ovo' ]