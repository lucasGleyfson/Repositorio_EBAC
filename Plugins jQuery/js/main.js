$('#telefone').mask('(00) 00000-0000');

$('#cep').mask('00000-000');

$('#cpf').mask('000.000.000-00');


$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: { required: true },
        endereco: { required: true },
        cep: { required: true },
    },
    messages: {
        nome: "Insira seu nome completo",
        email: "Insira um email valido",
        telefone: "Insira um numero de celular",
        cpf: "Adicione seu CPF",
        endereco: "Insira seu endenço completo",
        cep: "Insira o CEP",
    },
    submitHandler: function (form) {
        alert(`Cadastro concluído com sucesso!`);

        nome.value = "";
        email.value = "";
        telefone.value = "";
        cpf.value = "";
        endereco.value = "";
        cep.value = "";
    },
})