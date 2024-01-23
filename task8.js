// Сортируем
let arr = [6,1,7,3,5,8,0,-1,3,2,4,5];
arr.sort(function (a, b) {
    return a - b;
});

// Бинарный поиск
function search(array, item) {

    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

// Пока не найдено и пока первый индекс меньше или равно последнего индекса делим на 2 части
    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2);


        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }

        else if (item < array[middle]) {
            end = middle - 1;
        }

        else {
            start = middle + 1;
        }
    }
    return position;
}

console.log("Индекс числа '0' -", search(arr, 0));