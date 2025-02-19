function saudacao(){
    console.log('Olá, mundo');
}
saudacao();

function cumprimetar(nome){
    console.log(`Olá, ${nome}`);
}
cumprimetar('Mauricio');

function multiplicarNumero(numero){
    return console.log(numero * 2);
}
multiplicarNumero('55');

function mediaNumeros(numero1, numero2, numero3){
    return console.log((numero1 + numero2 + numero3) / 3);
}
mediaNumeros(20, 5, 5);

function maiorValor(valor1,  valor2){
    return console.log(Math.max(valor1, valor2));
}
maiorValor(43743, 6823468237);

function mesmoNumero(numero){
    return console.log(numero * numero)
}
mesmoNumero(10);

function indiceMassaCorporal(peso, altura){
    return console.log(peso / (altura * altura));
}
indiceMassaCorporal(84, 1.70);

function factorialize(numero){
    var resultado = 1;
    if (numero === 0 || numero === 1)
        return 1;
    while (numero > 1){
        resultado *= numero;
        numero--;
    }
    return console.log(resultado);
}
factorialize(6);

function converterDolar(valor){
    return console.log('R$',valor * 5.70);
}
converterDolar(322);

function areaPerimetro(altura, largura){
    return console.log('Área =', altura * largura, 'm') || console.log('Perímetro =', altura + altura + largura + largura, 'm');
}
areaPerimetro(10, 5);

function areaPerimetroCirculo(r, p){
    return console.log('Área Circulo =', p * r * r) || console.log('Perímetro Circulo =', 2 * p * r);
}
areaPerimetroCirculo(3, 3.14);

function tabuada(numero){
    let multiplicador = 1;
    while(multiplicador < 11){
        console.log(numero * multiplicador);
        multiplicador++;
    }
}
tabuada(9);

let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push ('Java', 'Ruby', 'GoLang');
console.log (linguagensDeProgramacao);

let listaDeNomes = ['felipe', 'mauricio', 'rafael'];
console.log (listaDeNomes[listaDeNomes.length - 1]);