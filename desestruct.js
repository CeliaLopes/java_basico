const pessoa = {
    nome: 'Celia',
    sobrenome: 'Lopes',
    idade: '41',
    profissao: 'Linda'
};

console.log(pessoa);

//let nome = pessoa.nome;
//let sobrenome = sobrenome.pessoa;

let { nome, sobrenome, idade, profissao} = pessoa;
console.log(nome, sobrenome, idade, profissao);