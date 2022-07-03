/* filter - serve para filtrar um array
filtra um array a partir de um determinado critério */

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

const resultado = produtos.filter(caro).filter(fragil);

console.log(resultado);



/*
filter ele e uma função callback que retornar verdadeiro ou falso,
ele recebe o item atual, indice atual, e o array percorrido, 
e no final retorna verdadeiro ou falso
se a condição que for imposta for verdadeiro 
então o elemento vai para o novo array
caso contrário não irá 

produto.fragil - aqui não precisar fazer a verificação se é === true
porque ele ja tem armazenado o valor booleano, true ou false
então ele já vai retonar o que tem dentro dele
*/