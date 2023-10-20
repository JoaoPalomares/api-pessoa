import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa (`Jacinto`, `111111111111`, new Date(2000, 9, 15), `000000000000`, `Rua Número 1`, 170, 70);
pessoa.cadastroPessoa(pessoa);