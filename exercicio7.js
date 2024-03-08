//exercicio 7 
class Animal { //nome da classe 
    constructor(nome, idade){ // falando os atributo (carecteriosticas) que quero colocar, no caso nome, idade 
        this.nome = nome //se referir a qual objeto q estou falando
        this.idade = idade
        
    }
//criando uma função, 'em classes funcao recebe o nome de método'
    descrever(){ //
        console.log(`O animal ${this.nome} de idade ${this.idade}`) //${} serve para print o nome que vamos escolher pra o atributo


    }
}

const cachorro = new Animal ('cachorro', 3); // dando nome ao objeto CONST, new falar nome da classe, () colocar os 'nomes"
const gato = new Animal ('gato', 5);

cachorro.descrever(); //chamando o metodo do objeto, faz com que a apreça 
gato.descrever();


