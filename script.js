/*No JavaScript, o "if" e "else" são usados para criar estruturas condicionais.
Essas estruturas permitem que o código execute diferentes blocos de instruções com base em uma condição.
O bloco de código dentro do "if" é executado se a condição fornecida for verdadeira, enquanto o bloco de código dentro do "else" é executado se a condição for falsa.

OBS: Ele executa o que for verdadeiro, ignorando os outros. ele só irá parar num if ou else a depender do resultado! */

//Exemplo: Exemplifiquei usando funções, ficou muito legal!!!


/*Novas anotações: IF e ELSE são "Controladores de Fluxo":
- IF(se) --> Faça ISSO!
- ELSE(se não) --> Faça Isto!

Operadores de comparação:
        > maior que
        < menor que
        == igual a
        
*/

function verificarIdade() {
    // Obter o valor da idade inserida pelo usuário.
    let idade = document.getElementById("idade").value;
    // Verificar se a idade é igual a 16 ou 17.
    if (idade == 16 || 17) {
        document.getElementById("result").innerHTML = "Não pode ser preso, mas já pode votar 🗳️"
    }
    // Verificar se a idade é maior ou igual a 18.
    if (idade >= 18) {
        document.getElementById("result").innerHTML = "você é maior de idade! Bom, já pode ser preso... 👮"
    }
    //Verifica se a idade é a da minha esposa.
    if (idade == 31) {
        document.getElementById("result").innerHTML = "Pera... você não tinha 25? 😯"
    }
    if (idade < 16) {
        document.getElementById("result").innerHTML = "Ainda é um neném! 👶"
    }
    else {
        console.log("Ainda é um neném! 👶")
    }
}