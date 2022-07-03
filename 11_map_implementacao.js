/* Implementando o a função map
para entender melhor como funciona ele */

Array.prototype.map2 = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Caneta", "preco": 2.50}',
    '{"nome": "Lapis de Cor", "preco": 10.15}',
];

const paraObjeto = json => JSON.parse(json);
const preco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(preco);

console.log(resultado);

/*
Criamos dentro de prototype Array, a função map2
ela recebe uma função callback, que irá transformar elementos do array original
Como o map cria uma novo array, criamos a constante newArray (novo array)
que irá receber o resultado da função callback
e ae retornamos esse newArray
this - e o array que passamos pasa a função, acessamos a instância 
do array atraves da variavel this

*/