'use strict'; // Modo restrito
// Este modo faz com que o Javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('complemento').value = '';
    
}

const eNumero = (numero) => /^[0-9]+$/.test();


// lenght é uma propriedade que verifica a quantidade de caracteres no argumento CEP
const cepValido = (cep) => cep.lenght == 8 && eNumero (cep);




