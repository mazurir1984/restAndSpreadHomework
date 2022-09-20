'use strict';

//Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.
const sumString = (...incomingData) => incomingData.filter((element) => typeof element === 'string').length;

sumString(3, 7, 'fhvfhh', 'fhhfhf');


/*Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. */

const advanceCalc = function(mathSymbol, ...numbers) {
    switch(mathSymbol) {
        case '+': {
        return numbers.reduce((num1, num2) => num1 + num2);
    }
    case '-': {
        return numbers.reduce((num1, num2) => num1 - num2);
    }
    case '*': {
        return numbers.reduce((num1, num2) => num1 * num2);
    }
    case '/': {
        return numbers.reduce((num1, num2) => num1 / num2);
    }
    default: return 'неверный математический знак'
}
}

advanceCalc('/', 100, 10);


//Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

const maxNumber = (...numbers) => Math.max(...numbers);

maxNumber(20, 60, 85, 463543367);



