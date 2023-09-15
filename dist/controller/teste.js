"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa1 = new Pessoa_1.Pessoa(`Jacinto`, `111111111111`, new Date(2000, 9, 15), `000000000000`, `Rua Número 1`, 170, 70);
let pessoa2 = new Pessoa_1.Pessoa(`Glaybson`, `22222222222`, new Date(1952, 8, 23), `111111111111`, `Rua Número 2`, 180, 90);
let pessoa3 = new Pessoa_1.Pessoa(`Cleyverson`, `33333333333`, new Date(1987, 12, 14), `22222222222`, `Rua Número 3`, 150, 40);
pessoa1.falar();
pessoa1.falarFrase("VAI CURINTIA!!! BANDO DE OREIUDO");
console.log("\n");
pessoa2.andar();
pessoa2.andarQuilometros(25);
console.log("\n");
pessoa3.comer();
pessoa3.comerPrato("pizza");
console.log("\n");
pessoa1.mostraPessoa();
pessoa2.mostraPessoa();
pessoa3.mostraPessoa();
//# sourceMappingURL=teste.js.map