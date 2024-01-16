//вывести все числа делящиеся только на себя до 100
let Answer = ""; // Создаем пустую строку для чисел

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        Answer += i + ", "; // Добавляем простое число к переменной "Answer" через запятую
    }
}

console.log("Task 5 :", Answer); // Выводим ответы через запятую