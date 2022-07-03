// Desafios reduce()

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

/* Desafio 1 - Verificar se todos os alunos são bolsistas */
const bolsistas = aluno => aluno.bolsista;
const todosBolsistas = (acumulador, valorAtual) => acumulador && valorAtual;

console.log('Todos os alunos são bolsistas ?');
console.log(alunos.map(bolsistas).reduce(todosBolsistas));

/* Desafio 2 - Vericar se algum aluno é bolsista */
const algumBolsista = (acumulador, valorAtual) => acumulador || valorAtual;

console.log('\nAlgum aluno é bolsista ?');
console.log(alunos.map(bolsistas).reduce(algumBolsista));
