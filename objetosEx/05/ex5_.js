const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}
const listaDeAulas = [
    {
        identificador: 1,
        nomeDaAula: "Introdução a programação"

    },
    {
        identificador: 2,
        nomeDaAula: "Variáveis"
    },
    {
        identificador: 3,
        nomeDaAula: "Condicionais"
    },
    {
        identificador: 4,
        nomeDaAula: "Arrays"
    }
];
for (let i = 0; i < listaDeAulas.length; i++) {
    curso.aulas[i] = listaDeAulas[i];
}

console.log(curso.aulas);

