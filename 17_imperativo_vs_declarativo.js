// Nessa aula vamos ver a diferença entre um código imperativo de um declarativo

const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
];

/* Código Imperativo */
let total = 0;
for(let i = 0; i < alunos.length ; i++) {
    total += alunos[i].nota;  
}
console.log(total / alunos.length);

/* Código Declarativo */
const getNota = aluno => aluno.nota;
const soma = (acumulador, valorAtual) => acumulador + valorAtual;

const total2 = alunos.map(getNota).reduce(soma);
const media = total2 / alunos.length;
console.log(media);



/* Código Imperativo 
o código descreve como deve ser feito cada passo 
descrevendo "como" e não "o que deve ser feito "

Código Declarativo 
Essa abordagem, se importa mais com "o que" deve ser feito
do que com o "como deve ser feito"

A gente não se importa se o map e o reduce, tenham método "for" dentro
não interessa os detalhes internos, 
e esses métodos getNota, e soma, podem ser usado em outras
soluções, aproveitando assim mais o código, já que está mais separado */
