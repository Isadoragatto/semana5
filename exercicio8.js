//exercicio 8
class Animal {
    constructor(nome, idade){
        this.nome = nome //representa caracteristica especifica 
        this.idade = idade
    }
    descrever(){
        console.log(`Animal ${this.nome} com idade ${this.idade }`)
        

    }

 
    }

    class Gato extends Animal { //quando tem herança
        constructor(nome,cor, idade){
        super(nome, idade); //o super refere a class pai, no caso a class Gato, e a classe Animal que pega de herança 
        this.cor = cor //referece a instância especifica da classe na qual o metodo está sendo chamado
        }
        miar(){
            console.log(`${this.nome} está miando... MIAU!!!!!`)

        }
        descrever(){ //coloquei dnv descrever pq na class gato tem a cor a mais e no cachorro não tem, ai se não tiver esse descrever não iria aparecer no console
            console.log(`A animal ${this.nome} com idade ${this.idade} de cor ${this.cor}`)
        }

    }

    const cachorro = new Animal("cachorro", 8)
    const gato  = new Gato("gato", "preto e branco", 7)
    
    cachorro.descrever();
    gato.descrever();
    gato.miar();


