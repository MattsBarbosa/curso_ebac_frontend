function Pessoa(nome, sobrenome, idade, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.dataDeNascimento = dataDeNascimento;
}

function Funcionario(nome, sobrenome, idade, dataDeNascimento, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome, sobrenome, idade, dataDeNascimento);
}

function Lutador (nome, sobrenome, idade, dataDeNascimento, peso, categoria) {
    this.peso = peso;
    this.categoria = categoria;

    Pessoa.call(this, nome, sobrenome, idade, dataDeNascimento);
}

const matheus = new Pessoa("Matheus", "Barbosa", 25, "22/09/1997");
console.log(matheus)

const funcionario1 = new Funcionario("Matheus", "Barbosa", 25, "22/09/1997", "dev full stack", 15000);
console.log(funcionario1)

const lutador1 = new Lutador("Lucas", "marcol", 29, "22/07/1968", 89, "peso pena");
console.log(lutador1);