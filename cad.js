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

// const eNumero = (numero) => /^[0-9]+$/.test(numero);
// lenght é uma propriedade que verifica a quantidade de caracteres no argumento CEP
//const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para preencher formulário como campos da API
const preencherFormulário = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
}


// Função de consumomde API viaCEP
// Função assyncrona : preencher os dados sem ser em tempo real
/*const pesquisarCep = async() =>{
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        // Função verdadeiro ou falso
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontado');
        }else{
            preencherFormulário(addres);
        }
    }else{
        alert("CEP incorreto");
    }
}
*/
//Verifica se o CEP é válido...
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
//Consumindo API... 2- passo
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //await = esperar
        const addres = await dados.json(); // fetch = promessa
       
        // hasOwnProperty  retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
        if(addres.hasOwnProperty('erro')){
            // document.getElementById('rua').value = 'CEP não encontrado!';
            alert('CEP não encontrado!');
        }else {
            preencherFormulário(addres);
        }
    }else{
        // document.getElementById('rua').value = 'CEP incorreto!';
        alert('CEP incorreto!');
    }
}

// Adiciona escutador para executar consumo de API da viaCEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

