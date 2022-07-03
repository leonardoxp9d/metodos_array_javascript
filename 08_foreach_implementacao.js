// Nessa aula vamos impletar o nosso próprio forEach

/*
criamos dentro de prototype Array, essa função ela não existe
em Array, então vamos definir que ela irá existir, ela recebe uma função callback
this - e o array que passamos para a função, acessamos a instância 
do array atraves da variavel this
*/
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const aprovados = ['Leonardo', 'Leandro', 'Otavio', 'Rodrigo', 'Raquel', 'Maria', 'Silvia'];

aprovados.forEach2(function (nome, indice){
    console.log(`${indice + 1}) ${nome}`);
})
