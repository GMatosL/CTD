let alunos = require('./alunos');
//3º Criar objeto literal curso
function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam) {
    this.nomeDoCurso = nomeDoCursoParam
    this.notaDeAprovacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = alunos.listaALunos
    this.adicionarAluno = function (alunoNovo) {
        return this.listaDeEstudantes.push(alunoNovo)
    }
    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado
        if (alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas) {
            return aprovado = true
        } else if (alunoAvaliado.calcularMedia() >= (this.notaDeAprovacao + (this.notaDeAprovacao * 0.1)) && alunoAvaliado.qtFaltas == this.faltasMaximas) {
            return aprovado = true
        } else {
            return aprovado = false
        }
    }
    this.alunosAprovados = function () {
        let listaAlunosAprovados = []
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[0]))
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[1]))
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[2]))
        console.log(listaAlunosAprovados)

    }

}
let FrontEnd = new Curso("Front-End", 7, 5)
let ProgImperativa = new Curso("Programação Imperativa", 7, 5)


FrontEnd.alunosAprovados()