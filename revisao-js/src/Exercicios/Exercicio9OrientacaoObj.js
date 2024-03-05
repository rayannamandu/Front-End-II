class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    exibirInfo() {
        console.log("Nome: " + this.nome + ", Idade: " + this.idade + ", Profissão: " + this.profissao);
    }
}

var pessoa1 = new Pessoa("Lucas", 30, "Engenheiro");

pessoa1.exibirInfo();
