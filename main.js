const form = document.getElementById('number-form');
let span = document.getElementById('span');

let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numMaior = parseInt(document.getElementById('num-maior').value);
    let numMenor = parseInt(document.getElementById('num-menor').value);

    if ( numMaior > numMenor) {
        span.innerHTML = `${numMaior} é maior que ${numMenor}. Você acertou!`
        span.classList.add('correct');
    }else {
        span.innerHTML = `${numMaior} não é maior que ${numMenor}. Você Errou!`
        span.classList.add('wrong');
    }
})