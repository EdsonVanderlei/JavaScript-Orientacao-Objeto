class Conta {
  constructor(pNome, pAgencia, pConta) {
    this.nome = pNome;
    this.agencia = pAgencia;
    this.conta = pConta;
    this.saldo = 0;
  }

  imprimir() {
    return ` Nome: ${this.nome} \n Agencia: ${this.agencia} \n Conta: ${this.conta} \n Saldo: R$${this.saldo} `;
  }

  depositar(Valor) {
    if (Valor > 0) {
      this.saldo += Valor;
      console.log(`Você depositou: R$${Valor}`);
    } else {
      console.log(`Valor inválido R$${Valor} é menor que 0`);
    }
  }

  get Nome() {
    return this.nome;
  }
  set Nome(pNome) {
    this.nome = pNome;
  }
  get Agencia() {
    return this.agencia;
  }
  set Agencia(pAgencia) {
    this.agencia = pAgencia;
  }
  get Conta() {
    return this.conta;
  }
  set Conta(pConta) {
    this.conta = pConta;
  }
}

class Corrente extends Conta {
  constructor(pNome, pAgencia, pConta, pLimite) {
    super(pNome, pAgencia, pConta);
    this.limite = pLimite;
  }
  saque(Valor) {
    if (Valor <= this.saldo + this.limite) {
      this.saldo -= Valor;
      console.log(`Você sacou ${Valor}`);
    } else {
      console.log(`Você está sem saldo`);
    }
  }
  imprimir() {
    return `${super.imprimir()} \n Limite: ${this.limite}`;
  }
  get Limite() {
    return this.limite;
  }
  set Limite(pLimite) {
    this.limite = pLimite;
  }
}

class Poupanca extends Conta {
  constructor(pNome, pAgencia, pConta, pAniversario) {
    super(pNome, pAgencia, pConta);
    this.aniversario = pAniversario;
  }
  saque(Valor) {
    if (Valor <= this.saldo) {
      this.saldo -= Valor;
      console.log(`Você sacou ${Valor}`);
    } else {
      console.log(`Valor invalido, está sem saldo`);
    }
  }
  imprimir() {
    return `${super.imprimir()} \n Aniversario: ${this.aniversario}`;
  }

  get Aniversario() {
    return this.aniversario;
  }
  set Aniversario(pAniversario) {
    this.aniversario = pAniversario;
  }
}
//Testes
/* const objeto = new Poupanca("Inter", 4823120, 1348, 13);
objeto.depositar(4000);
console.log(objeto.saldo);
objeto.depositar(1000);
console.log(objeto.saldo);
objeto.saque(2000);
console.log(objeto.saldo);
 */