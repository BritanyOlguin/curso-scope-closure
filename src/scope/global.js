var a;//declarar
var b='b'; //declarar / asignar
b='bb'; //reasignacion
var a = 'aa'; //redeclaracion

//global scope
var fruit = 'Apple'; //global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country);