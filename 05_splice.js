/* splice() - pode add ou remover elementos de uma determinada posição do Array atual*/

const alimentos = ['arroz', 'farinha', 'ovo', 'massa'];

/* ADD ELEMENTOS
1º param - onde será inserido os elementos, no caso será no indice 2
2º param - quantos elementos será removido, no caso será 0
3º param - elementos que serão adicionados */
alimentos.splice(2, 0, 'macarrão', 'carne');
console.log(alimentos);
// [ 'arroz', 'farinha', 'macarrão', 'carne', 'ovo', 'massa' ]

/* REMOVENDO ELEMENTO 
1º param - o indice do elemento que será removido
2º param - quantos elementos a partir dele serão removidos */
alimentos.splice(3,1);
console.log(alimentos)
// [ 'arroz', 'farinha', 'macarrão', 'ovo', 'massa' ]