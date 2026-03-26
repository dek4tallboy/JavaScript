function q1(){
    console.log("=== Questão 1 ===")
    let idade = 22
    let nova_idade = 27

    console.log(`Minha idade hoje é ${idade} e daqui a 5 anos será ${nova_idade}`)
}

function q2(){
    console.log("=== Questão 2-A ===")
    const PI = 3.14159

    console.log("Valor de PI: ",PI)

    try {
        PI = 15
    } catch (error) {
        console.log("Error:",error.message)
        console.log("Explicação: Esse erro acontece pois estamos tentando mudar o valor de uma const(constante) e o valor de uma constante não pode ser reatribuido.")
    }

    console.log("=== Questão 2-B ===")

    try{ 
        eval(`
            const SemanasDoAno
            SemanasDoAno = 52 
        `)
    } catch(error) {
        console.log("Error:",error.message)
        console.log("Explicação: Se você inicialiazar uma variável sem valor o código quebra e diz que a variável SemanasDoAno não foi definida.")
    }

}

function q3(){
    console.log("=== Questão 3 ===")
    let nome,sobrenome,anoNascimento,nomecompleto
    nome = "André "
    sobrenome = "Luiz"
    anoNascimento = 2003
    nomecompleto = nome + sobrenome

    console.log(`Olá meu nome é ${nomecompleto} e eu nasci em ${anoNascimento}`)
}

function q4(){
    console.log("=== Questão 4 ===")
    let numero = 10

    console.log("Valor Fora do Bloco:")
    console.log(`${numero}`)
    {
        let numero = 20
        console.log("Valor Dentro do Bloco:")
        console.log(`${numero}`)
    }

}

function q5(){
    console.log("=== Questão 5 ===")
    var idade = Number(prompt("Informe sua idade: "))

    if (idade < 12) {
        console.log("Criança")
    }
    else if (idade >= 12 && idade <= 17) {
        console.log("Adolescente")
    }
    else {
        console.log("Adulto")
    }
}

function q6(){
    console.log("=== Questão 6 ===")
    var numero = Number(prompt("Informe um número: "))

    if (numero % 2 == 0) {
        console.log(`O número informado ${numero} é par!`)
    }
    else {
        console.log(`O número informado ${numero} é ímpar!`)
    }
}

function q7(){
    console.log("=== Questão 7 ===")
    nota = Number(prompt("Informe uma nota de 0 a 10: "))

    if (nota >= 7){
        console.log("Aprovado")
    }
    else if (nota >= 5 && nota < 7){
        console.log("Recuperação")
    }
    else{
        console.log("Reprovado")
    }
}

function q8(){
    console.log("=== Questão 8 ===")
    let numero = Number(prompt("Informe um número positivo ou negativo: "))

    let resultado = numero > 0
        ? "Positivo"
        : numero < 0
        ? "Negativo"
        : "Zero"
    console.log(resultado)
}

function q9(){
    console.log("=== Questão 9 ===")

    let num = Number(prompt("Informe um número: "))
    for (let i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i))
    }
}

function q10(){
    console.log("=== Questão 10 ===")

    let i = 10
    while (i >= 1){
        console.log(i)
        i--
    }
}

function q11(){
    console.log("=== Questão 11 ===")
    let pessoa = {
        nome : "André",
        idade : 22,
        cidade : "Brasília",
    }

    for(propriedades in pessoa){
        console.log(propriedades + " : " + pessoa[propriedades])
    }
}

function q12(){
    console.log("=== Questão 12 ===")
    let frutas = ["Maça","Uva","Banana"]
    for (fruta of frutas){
        console.log(fruta)
    }
}

function q13(){
    console.log("=== Questão 13 ===")
    let carro = {
        marca : "Chevrolet",
        modelo : "Onix Hatch",
        ano : 2024,
    }
    console.log("Marca : " + carro.marca)
    console.log("Modelo : " + carro.modelo)
    console.log("Ano : " + carro.ano)
}

function q14(){
    console.log("=== Questão 14 ===")
    let carro = {
        marca : "Chevrolet",
        modelo : "Onix Hatch",
        ano : 2024,

        descricao : function(){
            return "Marca : " + this.marca + " / Modelo : " + this.modelo + " / Ano : " + this.ano
        }
    }
    console.log(carro.descricao())
}

function q15(){
    console.log("=== Questão 15 ===")
    let livro = {
        titulo : "Batman",
        autor : "Musashi Myamoto"
    }
    livro.ano = 1960
    livro.titulo = "Resident Evil"
    delete livro.autor
    console.log(livro)
}

function q16(){
    console.log("=== Questão 16 ===")
    let numeros = [1,2,3,4,5]

    let dobro = numeros.map(function(numero){
        return numero * 2
    })
    console.log(dobro)
}

function q17(){
    console.log("=== Questão 17 ===")
    let numeros = [10,15,20,25,30]

    let pares = numeros.filter(function(numero){
        return numero % 2 == 0
    })
    console.log(pares)
}

function q18(){
    console.log("=== Questão 18 ===")
    let numeros = [5,1,9,3,7].sort()

    console.log(numeros)
}

function q19(){
    console.log("=== Questão 19 ===")

    let numeros = [2,5,8,11,14]
    let maiores = numeros.filter(function(numero){
        return numero > 5
    })
    let vezes2 = maiores.map(function(vezes){
        return vezes * 2
    })
    console.log(vezes2)
}
// Questão 20 está em HTML

//q21()

let fila = [];
let atendidos = [];

function q21() {

    let nomeInput = document.getElementById("nomeFila");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    let entradaTimestamp = Date.now();

    
    let formatador = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "medium"
    });

    let entradaFormatada = formatador.format(entradaTimestamp);

    fila.push({
        nome: nome,
        entrada: entradaTimestamp,
        entradaFormatada: entradaFormatada
    });

    nomeInput.value = "";

    atualizarTela();
}

function atender() {
    if (fila.length === 0) {
        alert("Fila vazia!");
        return;
    }

    let pessoa = fila.shift();

    let saidaTimestamp = Date.now();

    let formatador = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "medium"
    });

    let saidaFormatada = formatador.format(saidaTimestamp);

    let tempoEspera = Math.floor((saidaTimestamp - pessoa.entrada) / 1000);

    atendidos.push({
        nome: pessoa.nome,
        entrada: pessoa.entradaFormatada,
        saida: saidaFormatada,
        tempo: tempoEspera + " segundos"
    });

    atualizarTela();
}

function atualizarTela() {

    let filaDiv = document.getElementById("fila");
    let atendidosDiv = document.getElementById("atendidos");

    filaDiv.innerHTML = "<h3>Fila:</h3>";
    fila.forEach(p => {
        filaDiv.innerHTML += `Nome: ${p.nome} | Entrada: ${p.entradaFormatada}<br>`;
    });

    atendidosDiv.innerHTML = "<h3>Atendidos:</h3>";
    atendidos.forEach(p => {
        atendidosDiv.innerHTML += `
            Nome: ${p.nome} <br>
            Entrada: ${p.entrada} <br>
            Saída: ${p.saida} <br>
            Tempo de espera: ${p.tempo} <br><br>
        `;
    });
}