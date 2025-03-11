const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 7.2 },
    { nome: "Carlos", nota: 9.0 },
    { nome: "Daniela", nota: 6.8 },
    { nome: "Eduardo", nota: 7.9 },
    { nome: "Fernanda", nota: 5.5 },
    { nome: "Gabriel", nota: 4.0 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);

console.log(aprovados);