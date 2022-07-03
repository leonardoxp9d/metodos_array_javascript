/* 
forEach - percorrer um Array assim como o laço for,
nele e passado uma função callback, que e chamada para cada novo elemento
que for percorrido no array e chamado a callback  
Ela recebe 3 parâmetros, 1º-elemento, 2º-índice é o 3º- o próprio array
se não quiser usar o índice pode simplesmente não colocar.
para ter acesso ao índice e obrigatorio colocar o 1º parâmetro
A mesma coisa vale para o 3º parâmetro o Array
*/

const aprovados = ['Leonardo', 'Leandro', 'Otavio', 'Rodrigo', 'Raquel', 'Maria', 'Silvia'];

aprovados.forEach(function (elemento, indice){
    console.log(`${indice + 1}) ${elemento}`);
})

/* passando através de uma arrow function sem indicar o índice */
console.log('\n');
aprovados.forEach(elemento => console.log(elemento));

/* armazenando função em uma constante/variavel e passando por parâmetro para o forEach */
console.log('\n');
const exibirAprovados = elemento => console.log(elemento);
aprovados.forEach(exibirAprovados);


// USANDO LAÇO FOR
console.log('\n');
console.log('\nUsando o laço for')
for(let i=0; i<aprovados.length; i++) {
    console.log(`${ i + 1 }) ${aprovados[i]}`)
}