"use strict";
class Smartphone {
    constructor() {
        this.saldo = 0;
        this.numero_chiamate = 0;
    }
    ricarica(importo) {
        this.saldo += importo;
        console.log(`Ricarica di ${importo}€ effettuata.`);
    }
    chiamata(minuti) {
        // scalo il credito in base alla chiamata e aumento il numero chiamate
        this.numero_chiamate++;
        let costo_chiamata = minuti * 0.2;
        this.saldo = this.saldo - costo_chiamata;
        console.log(`Hai effettuato una chiamata di ${minuti} minuti, hai speso ${costo_chiamata}€`);
    }
    numero404() {
        // mostro il saldo
        console.log(`Il tuo saldo è di ${this.saldo}€`);
    }
    getNumeroChiamate() {
        // mostro il numero chiamate
        console.log(`Hai effettuato ${this.numero_chiamate} chiamate`);
    }
    azzeraChiamate() {
        this.numero_chiamate = 0;
        console.log("Hai resettato il numero di chiamate effettuate");
    }
}
class Iphone extends Smartphone {
}
class SamsungGalaxy extends Smartphone {
}
class Huawei extends Smartphone {
}
class Utente {
    constructor(name, surname, smartphone) {
        this.name = name;
        this.surname = surname;
        this.smartphone = smartphone;
    }
}
let user1 = new Utente("Mario", "Rossi");
let iphone = new Iphone();
user1.smartphone = iphone;
let user2 = new Utente("Luigi", "Verdi");
let galaxy = new SamsungGalaxy();
user2.smartphone = galaxy;
let user3 = new Utente("Luca", "Rota");
let huawei = new Huawei();
user3.smartphone = huawei;
// mostro il saldo del telefono
user1.smartphone.numero404();
// ricarico e mostro nuovamente il saldo
user1.smartphone.ricarica(50);
user1.smartphone.numero404();
// eseguo una chiamata di 8 minuti e mostro nuovamente il saldo
user1.smartphone.chiamata(8);
user1.smartphone.numero404();
// eseguo altre due chiamate e mostro saldo e numero chiamate effettuate
user1.smartphone.chiamata(13);
user1.smartphone.chiamata(30);
user1.smartphone.numero404();
user1.smartphone.getNumeroChiamate();
// azzero il numero di chiamate
user1.smartphone.azzeraChiamate();
user1.smartphone.getNumeroChiamate();
