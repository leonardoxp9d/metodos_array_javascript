/* Desafio de pegar somente os preços dos produtos 
de um Array com elementos em JSON */

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Caneta", "preco": 2.50}',
    '{"nome": "Lapis de Cor", "preco": 10.15}',
];

const paraObjeto = json => JSON.parse(json);
const preco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(preco);

console.log(resultado);
// [ 3.45, 13.9, 2.5, 10.15 ]

/*
Primeiro transformamos um array JSON em objeto 
e depois pegamos somente o preço dos produtos
*/