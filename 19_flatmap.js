/* flatmap() - ele vai pegar uma matriz e transformar em um array 
Ele e o map() associado com o concat() */

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Leonardo',
        nota: 8.1
    },
    {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },
    {
        nome: 'Roberto',
        nota: 7.3
    }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

// SEM FLATMAP
const notas_sem_flatmap = escola.map(getNotasDaTurma);
console.log(notas_sem_flatmap);

// USANDO FLATMAP()
const notas_flatmap = escola.flatMap(getNotasDaTurma);
console.log(notas_flatmap);

// IMPLEMENTANDO FlatMap()
Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas_flatmap_implementato = escola.flatMap2(getNotasDaTurma)
console.log(notas_flatmap_implementato);


/* No caso o map esta pegando as notas  
E o concat junta os arrays em 1
E o flatMap realiza essa essas 2 funções ao mesmo tempo */