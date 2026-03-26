// Há 3 formas de declarar uma variável em JS:

// var 
// let
// const

// Declaração de Variáveis:
var nome,sobrenome,nome_completo;

// Declaração de Valores:

nome = "André";
sobrenome = "Luiz";
nome_completo = nome + " " + sobrenome;
idade = 22

pessoa = nome + " " + sobrenome + " " + idade;

document.getElementById("eu").innerHTML = nome_completo;

document.getElementById("var").innerHTML = "O var é de variável e o que difere dos demais tipos de declarações é que esse pode trocar os valores, ou seja a variável se repetir lá na frente alterando o valor. Exemplo: Var numero = 1 e posteriomente var numero = 2. Posso trocar o valor sem problemas.";

document.getElementById("let").innerHTML = "O let é uma variável única, não pode se repetir no código como o var. Exemplo: var numero = 1 e posteriomente var numero = 2 vai dar erro por repetição da mesma variável. Podendo mudar somente dentro de um bloco separado.";

document.getElementById("const").innerHTML = "O const não pode mudar em lugar nenhum do código, ela sempre é aquele valor exemplo var pi = 3.14. PI nunca muda o valor ele sempre é 3.14.";

var nome1 = "André ";
var nome2 = "Luiz";
var nome3 = nome1+nome2;
alert(nome3);

// Para comparar valores basta usar == exemplo valor 3 = (valor1 == valor2)
// Parar comparar valores basta usar === exemplo valor 3 = (valor1 === valor2)

// Condição dentro da própria variável:
var idade_eleitor,eleitor,resultado;
idade_eleitor = 71;
eleitor = (idade_eleitor < 18) ? "Não eleitor" : "eleitor"; // mesmo que o if e else
resultado =! (idade_eleitor === 65); // E comercial(&&) é o mesmo que o and e o ou(or) é o mesmo que ||
alert(resultado);
