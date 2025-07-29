/********************************************************************************************
* Objetivo: iniciar os primeiros comandos em Node.JS
* Autor: Kauan Lopes Pereira
* Data: 29/07/2025
* Versão: 1.0.0.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************

* Console.log - printa no console um valor de uma variavel ou texto
* var - declaração de uma variavel
* typeof(nome da variavel) - retorna o tipo da variavel em string
* require('Nome do arquivo') - Método para fazer importação de um arquivo como uma bibliotéca
* toUpperCase - Altera o valor de uma string para maiusculo

************************ FUNÇÕES UTILIZADAS NA BIBLIOTECA READLINE **************************
* createInterface - cria um objeto da classe readline
* question - Printa na tema uma string e precisa de uma função para retornar o valor digitado
pelo usuário
* close - fecha a interface de entrada de dados do readline

********************************************************************************************/

// Importação de biblioteca
var readline = require('readline')

// Criando um objeto de entradaDeDados para captar ou printar dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Ativação da interface de leitura do console
entradaDeDados.question('Digite seu nome: ', function(nome){
    var nomeUsuario = nome

    // Condição para tratativa de dados
    if(nomeUsuario == ''){
        console.log('Não foi possivel processar a solicitação')
    }else {
        console.log(`O nome digitado foi: ${String(nomeUsuario).toUpperCase}`)
    }

    entradaDeDados.close()
})



/* 

console.log ('Aula 01 de node.JS')

// Declarando de uma variavel
var nome = 'Kauan'

// Exemplo de concatenação de dados (simbolo de (+))
console.log('O nome digitado foi: ' + nome)

// Exemplo de concatenação de metodo reduzido e mais utilizado no mercado
console.log(`O nome digitado foi: ${nome}`)

console.log(typeof(nome))

//Testando typeof
var tipo = typeof(nome)
console.log(`O tipo da variavel digitada foi: ${tipo}`)

*/