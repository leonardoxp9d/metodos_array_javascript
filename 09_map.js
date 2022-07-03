/* map - serve para fazer para transformar um array em outro
a ideia e mapear um array para outro array do mesmo tamanho 
só que com os dados transformados 
regra - se o array original tem 6 elementos, o resultado do map irá
gerar novo array de 6 elementos também, só que com os dados transformados
obs - ele e um for com propósito */

const numeros = [1, 2, 3, 4, 5];

const soma10 = elemento => elemento + 10;
const triplo = elemento => elemento * 3;
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`;

const resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);








/*
parseFloat - e uma função que transforma uma string/tipo em uma número de ponto flutuante
Se o primeiro carácter não puder ser convertido para um número, parseFloat retorna NaN.
Não e necessário usar essa função aqui nesse caso, pois já estamos trabalhando
com números, mas foi mais por questão de segurança, já que dinheiro se trata de um decimal
*/

/* Outra forma de converter para dinheiro
const paraReal = (e) =>
    e.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

 */