const form = document.getElementById('form-number');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numberA = parseInt(document.getElementById('number-a').value);
    const numberB = parseInt(document.getElementById('number-b').value);

    const mensagemValida = document.querySelector('.message-v');
    const mensagemInvalida = document.querySelector('.message-i');

    if (numberB > numberA) {
        mensagemValida.innerHTML = "Formulário válido.";
        mensagemValida.style.display = 'block';

        mensagemInvalida.style.display = 'none';

        document.getElementById('number-a').value = '';
        document.getElementById('number-b').value = '';
    } else {
        mensagemInvalida.innerHTML = "Formulário inválido, Você digitou um numero menor no campo b";
        mensagemInvalida.style.display = 'block';

        mensagemValida.style.display = 'none';

        document.getElementById('number-a').value = '';
        document.getElementById('number-b').value = '';
    }
});