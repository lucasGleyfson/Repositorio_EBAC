
$(document).ready(function () {
    // Função para adicionar tarefa à lista
    $('form').submit(function (event) {
        event.preventDefault();

        const NomeTarefa = $('#NomeTarefa').val();

        $('#Lista').append("<li>" + NomeTarefa + "</li>");

        $('#NomeTarefa').val("");
    });

    // Função para aplicar o efeito de linha quando um item da lista é clicado
    $('#Lista').on('click', 'li', function () {
        $(this).toggleClass('linha-through');
    });
});



