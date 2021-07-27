console.log('-----------------------№3');

function sum (x) {    
    return function (y) {
       return x + y;
    };
}

const sum1 = sum(1);
sum1(2); // результат выполнения 3
console.log('sum1', sum1(2));

sum(1)(2); // результат выполнения 3
console.log('sum', sum(1)(2));

console.log('-----------------------№4');

console.log('-----------------------№4 Вариант №1');

for (let i = 0; i < 10; i++) {   
    setTimeout(function() {
        console.log('i1 = ', i+1);
    }, 0); 
}
// Это получилось, как то автоматически и первое что пришло на ум, в памяти как то зависло что цикл for (начало; условие; шаг), и начало объявляется через let а не var.
// setTimeout - выполняется с задержкой (она ставиться в очередь) и есть вложенная функция
// объявление var выделяет одну "ячейку" в памяти и на эту одну и туже "ячейку" всегда ссылается переменная i.
// объявление let при каждой итерации выделяет новую "ячейку", таким образом переменная i на каждом шаге перебора цикла ссылается на новый адрес.

console.log('-----------------------№4 Вариант №2');

for (var i = 0; i < 10; i++) {   
    setTimeout(function() {
        console.log('i2 = ', i+1);
    }(), 0); 
}

// setTimeout - выполняется с задержкой (она ставиться в очередь).
// И выполниться тогда, когда цикл пройдет и получит значение 10, и так 10 раз, поэтому и получим значение 10 десять раз.
// А запустив функцию до setTimeout каждому из замыканий создается свое собственное замыкание и i получает свое новое значение которе и выведет setTimeout.

// Даже если сейчас запустить эти две функции одна с let, а вторая с var мы увидим что сначала выполниться с var, а потом с let. Хотя в коде они стоят в обратном порядке. setTimeout(0) ждет пока выполниться все остальное.

console.log('-----------------------№4 Вариант №3');

for (var i = 0; i < 10; i++) { 
    let z = i;  
    setTimeout(function () {
        console.log('Z = ', z+1);
    }, 0); 
}

// let z = i; - создаем лексическую область видимости для функции с console.log('Z = ', z+1);
// и при каждом вызове получаем z с следующим значением которе попадает в область видимости нашей функции.

console.log('-----------------------№4 Вариант №4');

function area () {
    for (var i = 0; i < 10; i++) {               
        setTimeout(iter (i), 0);  
        function iter (i) {
            let index = i; 
            console.log('index = ', index+1);
        }    
    }
}
area ();
//Наш масив пребирает значения от 0 до 9 и функция которая срабатывает
// через определенное время (время это наши циклы). 
// далее мы создаем лексическое окружение для каждой итерации (для текущего значения i), в setTimeout
// мы ложим функцию iter(i) и сразу ее вызываем. И сразу создается лексическое окружение для каждой итерации.
// функцию вызываем сразу, иначе у нас цикл отрабатывает первее чем setTimeout и лексическое окружение создается один раз, а значение i перезатрется и будет для всех вызовов setTimeout одинаковое.

console.log('-----------------------№4 Вариант №5');

for (var i = 0; i < 10; i++) {     
    function h (i) {               
        setTimeout(function () {        
            console.log ('i3 = ', i+1);
        },0);       
    }    
    h (i);
}
//При запуске функции h(i), а это происходит при переборе нашего цикла for от 0 до 9 (тоесть 10 раз), 
//  мы каждый раз создаем новое лексическое окружение для нашей i которая находиться внутри setTimeout и выводим значение через console.log.

console.log('-----------------------№4 Вариант №6');

for (var i = 0; i < 10; i++) {                  
    setTimeout(function (i) {        
        console.log ('i4 = ', i+1);
    },0,i);            
}

//Синтаксис setTimeout(func|code, [delay], [arg1], [arg2], ...) и мы передаем как аргумент i в нашу функцию тем самым создавая лексическое окружение.

console.log('-----------------------№4 Вариант №7');

for (var i = 0; i < 10; i++) {
    setTimeout(lexion(i), 0);
}
function lexion(i) {
    let i5 = i;
    return function () {
        console.log('i5 = ', i5+1);
    }
}
console.log('-----------------------№4 Вариантов больше нет!)))');
























































































































// function dd () {
//     for (var i = 0; i < 10; i++) { 
//         let index = i;       
//          setTimeout(function () {
//             console.log('Z4 = ', index+1);
//         }, 0);      
//     }
// }
// dd ();


// function d () {
//     for (var i = 0; i < 10; i++) {               
//          setTimeout(function (i) {
//             let index = i; 
//             console.log('Z5 = ', index+1);
//         }(i), 0);      
//     }
// }
// d ();
