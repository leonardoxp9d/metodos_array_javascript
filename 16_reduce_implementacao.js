// Implementando reduce()

Array.prototype.reduce2 = function(callback, valorIncial){
    const indiceInicial = valorIncial ? 0 : 1;
    let acumulador = valorIncial || this[0];

    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    
    return acumulador;
}


const numeros = [1, 2, 3, 4, 5, 6];
const soma = (total, valor) => total + valor;

console.log(numeros.reduce2(soma, 21));


/*
const indiceInicial = valorIncial ? 0 : 1;
caso se tiver setado o valorInicial, então indiceIncial e 0
se não então fica 1

let acumulador = valorIncial || this[0];
o acumulador pode ser valorIncial, caso esteja com o valor setado nele,
caso contrário então o acumulador é o primeiro elemento do array (this[0])
 */