const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho[0] = tv;
jose.carrinho[1] = caboUsb;
jose.carrinho[1].quantidade = 2;
jose.carrinho[2] = webcam;

console.log(jose.carrinho);

carlos.carrinho[0] = notebook;
carlos.carrinho[0].quantidade = 2;

console.log(carlos.carrinho);

patricia.carrinho[0] = teclado;
patricia.carrinho[1] = caboUsb;
patricia.carrinho[1].quantidade = 2;
patricia.carrinho[2] = carregador;
patricia.carrinho[3] = mouse;
patricia.carrinho[4] = monitor;

console.log(patricia.carrinho);

renato.carrinho[0] = webcam;
renato.carrinho[0].quantidade = 5;

console.log(renato.carrinho);

roberto.carrinho[0] = webcam;
roberto.carrinho[1] = caboUsb;
roberto.carrinho[1].quantidade = 2;
roberto.carrinho[2] = monitor;

console.log(roberto.carrinho);