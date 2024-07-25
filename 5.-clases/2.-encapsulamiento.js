class CuentaBancaria {
    // Declaracion de datos privados
    #saldo = 0;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(cantidad) {
        this.#saldo += cantidad;
    }

    obtenerSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria(100);
cuenta.depositar(50);

console.log(cuenta.obtenerSaldo()); // 150
