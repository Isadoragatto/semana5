
    //exercico 9 
    class SomadorDeNotas{
        constructor(total){
            this.total = 0 //está sendo inicializado com 0, 

        }
        adicionarNota(nota) { //recebe um parametro nota e adicion ao atributo total la em cima
            this.total += nota; //+= ta falando para somar a total e a nota
        }

        verTotal(){
            console.log( `o valor total das notas é ${this.total}` ) 
        }

    }

    const somador = new SomadorDeNotas(); //criando uma nova instãncia da classe 

    somador.adicionarNota(6);
    somador.adicionarNota(3);
    somador.adicionarNota(10);
    somador.adicionarNota(3)

    somador.verTotal(); //exibir o total das notas no console

    //atributo refere-se a caracteristica de objetos ou classes 
    //parâmetro é uma variavel, que utiliza nos metodos para recber os valorees, o metodo recebe o dado e utiliza internamnete 
    //instancia é um objeto especifico criado a partir de uma classe 
