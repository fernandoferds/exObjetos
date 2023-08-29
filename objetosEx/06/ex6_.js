const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [];

const adultos = [];
let indexJ = 0;
let indexA = 0;

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade < 18) {
        jovens[indexJ] = usuarios[i];
        indexJ = indexJ + 1;
    } else {
        adultos[indexA] = usuarios[i];
        indexA = indexA + 1;
    }
}

console.log(adultos);
console.log(jovens);