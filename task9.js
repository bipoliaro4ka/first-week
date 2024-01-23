// Задаём два массива
let array = [1,2,3,6,8,1,6,3,2,1,0,4];
let arrayString = ['one', 'two','three'];

// Сортировка пузырьком
function Bubble(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

// Объединяем массивы
let fullArray = Bubble(array.concat(arrayString));

console.log("Task 9:", fullArray);