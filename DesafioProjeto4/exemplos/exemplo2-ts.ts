enum Profissao{
    Professor,
    Ator,
    Desenvolvedor,
    Pintor
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    curso: string,
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedor
}

const renata: Estudante = {
    nome: 'Renata',
    idade: 23,
    profissao: Profissao.Desenvolvedor,
    curso: 'Sistemas para Internet',
    materias: ['Programação para Web', 'Persistencia de Objetos']
}