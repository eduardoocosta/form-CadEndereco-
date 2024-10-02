// Este modo faz com que o Javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
// * Consumo de API - https://viacep.com.br/ */
 
// FUNÇÃO PARA LIMPAR O FORMULARIO
const limparFormulario = () =>{
    document.getElementById ('logradouro').value = '';
    document.getElementById ('uf').value = '';
    document.getElementById ('bairro').value = '';
    document.getElementById ('complemento').value = '';
    document.getElementById ('localidade').value = '';
    document.getElementById ('numero').value = '';
}
 
// VERIFICAR SE TEM SOMENTE NÚMERO NO CÓDIGO - EXPRESSÃO REGULAR (REGEX) PARA TESTAR O VALOR INFORMADO PELO USUARIO
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// length É UMA PROPRIEDADE QUE VERIFICA A QUANTIDA DE CARACTERES DENTRO DO CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
// DIGITA APENAS NÚMERO
 
// FUNÇÃO PARA PREENCHER FORMULARIO COMO CAMPOS DA API
 
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf
}
// FUNÇÃO DE CONSUMO DE API VIA CEP
// função ASSÍNCRONAS são úteis quando dependemos do resultado de alguma coisa para executar a função.
const pesquisarcep = async() => {
    // ASYNC essas funções podem realizar operações que demoram algum tempo, sem bloquear a execução do programa./  é uma forma de escrever funções que podem fazer várias coisas ao mesmo tempo, sem travar o programa
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
 
    // Função
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        // FETCH é um metodo do js que faz um pedido para via cep, e dar retorno.
        const addres = await dados.json();
        // JSON  é um formato leve para trocar dados, é usado principalmente para enviar e receber dados entre um cliente e um servidor.
 
       // Função
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        } else{
            // Função
            preencherFormulario(addres);
        }
    } else{
        alert("CEP Incorreto!");
    }
}
// ADICIONAR ESCUTADOR PARA EXECUTAR CONSUMO DE API DA ViaCep
// Função
document.getElementById('cep').addEventListener('focusout', pesquisarcep);
 


// métodos await
// métodos fetch
// métodos json
// métodos addres
// método hasOwnProperty
// métodos addEventListener