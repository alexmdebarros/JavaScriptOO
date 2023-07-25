function Veiculo(marca, modelo, cor, placa) {
    this.marca = marca,
    this.modelo = modelo,
    this.cor = cor;

    let _placa = placa;

    this.getPlaca = function () {
        return _placa;
    }

    this.setPlaca = function (numPlaca) {
        if (typeof numPlaca === 'string') {
            return _placa = numPlaca;
        }
    }

    this.zeroA100km = function () {
        return
    }
}

function Carro(marca, modelo, cor, placa) {
    Veiculo.call(this, marca, modelo, cor, placa)

    this.tempoEmSegAte100km = function () {
        return 10
    }
}

function Moto(marca, modelo, cor) {
    Veiculo.call(this, marca, modelo, cor)

    this.tempoEmSegAte100km = function () {
        return 8
    }
}

function Barco(marca, modelo, cor, identificador) {
    Veiculo.call(this, marca, modelo, cor)

    let _identificador = identificador;

    this.getIdentificador = function () {
        return _identificador;
    }

    this.setIdentificador = function (valorIdentificador) {
        return _identificador = valorIdentificador;
    }

    this.tempoEmSegAte100km = function () {
        return 25
    }
}


const carroAlex = new Carro('Peugeot','3008', 'azul', 'AAA0A00')
console.log(carroAlex.marca);
console.log(carroAlex.modelo);
console.log(carroAlex.cor);
console.log(carroAlex.getPlaca());
console.log("-----------")


const motoIsabella = new Moto('BMW','K1600', 'cinza')
motoIsabella.setPlaca('III0I00')
console.log(motoIsabella.marca);
console.log(motoIsabella.modelo);
console.log(motoIsabella.cor);
console.log(motoIsabella.getPlaca());
console.log("-----------")

const barcoAlice = new Barco('Marquis','720 Tri-Deck', 'Branco', 'AA-0000')
console.log(barcoAlice.marca);
console.log(barcoAlice.modelo);
console.log(barcoAlice.cor);
console.log(barcoAlice.getIdentificador());
console.log("-----------")













