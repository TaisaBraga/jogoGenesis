**Currying** é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried. ... Aplicação parcial de uma função corresponde a chamar a função passando menos argumentos do que a função recebe.

Ex.

const produto = a => (b => a * b);
// os parênteses são opcionais; a seta (=>) é associativa à direita.

var dobro = produto(2);
console.log(dobro(8));
console.log(produto(2)(8));



**É uma boa prática sempre declarar a função antes de usar**



0800 056 2420

