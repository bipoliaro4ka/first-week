//Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]] Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
function objectToArray(obj) {
    
    let keys = Object.keys(obj);

    let resultArray = keys.map(key => [key, obj[key]]);

    return resultArray;
}

// Пример использования
let example = { a: 1, b: 2 };


let resultArray = objectToArray(example);

console.log(resultArray);