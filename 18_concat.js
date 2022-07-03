/* concat() - e um método para concatenar(juntar)
vários arrays em um único array
ou vários elementos em um array */

const filhas = ['Andressa', 'Natalia'];
const filhos = ['Leo', 'Pedro'];
const todos = filhas.concat(filhos);

console.log(todos);
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));