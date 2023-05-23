const alunosENotas = [{'nome': 'joão', 'nota': 10 }, {'nome': 'Maria', 'nota': 3 }, {'nome': 'Ricardo' , 'nota': 8 }, 
                        {'nome': 'Esther' , 'nota': 4 }, {'nome': 'Elcia', 'nota': 10 }, {'nome': 'Chris' , 'nota': 1 }]

function retornaAlunosAcimaDaMedia (arrayDeAlunos) {
    const alunosAcimaDaMedia = arrayDeAlunos.filter(function(aluno){
        return aluno.nota > 6 || aluno.nota == 6;
    })
    return alunosAcimaDaMedia
}

console.log(retornaAlunosAcimaDaMedia(alunosENotas));