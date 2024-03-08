class Funcionario { //nome da classe
    constructor(nome, idade, salario) { //adicionado os atributos que esssa classe tem 

        //dando um parametro ao meu atributo ou seja dando um valor
        this.nome = nome; 
        this.idade = idade;
        this.salario = salario;
    }

    calcularSalario() { //declarando o metodo dessa classe
        return this.salario; //faka o valor do atributo "salario" quando esse metodo for chamado
    }
}

class Professor extends Funcionario { //adicionado outra classe que herda da classe Professor 
    constructor(nome, idade, salario, disciplina, horasDeAulaPorSemana) { //dando os atributos
        super(nome, idade, salario); //o super refere a class pai, no caso a class Funcionario, e a classe Professor que pega de herança da classe pai
        this.disciplina = disciplina;
        this.horasDeAulaPorSemana = horasDeAulaPorSemana;
    }

    calcularSalario() {
        const valorHoraAula = this.salario / 24; // calcula o valor da hora/aula, com 24 horas semanais, const é tipo um var, mas que voce não consegue mudar o valor 
        const salarioProfessor = this.horasDeAulaPorSemana * valorHoraAula; //calcula o salario do professor mutiplicando as horas de aula por semana pelo valor hora/aula
        return salarioProfessor; //retorna o salario calculado para o professor quando o metodo for chamado 
    }
}

//criando uma instancia na classe (NEW) professor, falamos o nome, idade, salario, matéria, horas de aula por semana
const professor1 = new Professor("Pedro", 23, 5000, "Inglês", 25); 
const professor2 = new Professor("Nicole", 40, 5100, "Negócios", 20);
const professor3 = new Professor("Yasmin", 65, 4000, "História", 20)

//exibe no console a resposta de cada professor 
console.log(`O professor ${professor1.nome} de ${professor1.disciplina} , com ${professor1.idade} anos, recebe um salário de R$ ${professor1.calcularSalario().toFixed(2)}`);
console.log(`A professora ${professor2.nome} de ${professor2.disciplina} , com ${professor2.idade} anos, recebe um salário de R$ ${professor2.calcularSalario().toFixed(2)}`);
console.log(`A professora ${professor3.nome} de ${professor3.disciplina} , com ${professor3.idade} anos, recebe um salário de R$ ${professor3.calcularSalario().toFixed(2)}`);
