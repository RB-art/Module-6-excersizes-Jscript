/*Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как 
аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/
cfunction sum(x) {
    return function(y) {
        return x + y;
    };
}
console.log( sum(1)(2), sum(2)(2), sum(40)(2) );function sum(x) {
    return function(y) {
        return x + y;
    };
}
console.log( sum(1)(2), sum(2)(2), sum(40)(2) );