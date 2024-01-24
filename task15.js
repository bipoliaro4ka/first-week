class MyString {
    //разбиваем строку на массив символов, разворачиваем порядок элементов и собираем массив обратно в строку
    reverse(row){
        return row.split('').reverse().join('');
    }

    //получаем первый символ строки, поднимаем его в верхний регистр и присоединяем нашу строку начиная со 2 элемента
    ucFirst(row){
        return row.charAt(0).toUpperCase() + row.slice(1);
    }

    //разбиваем строку на массив слов, применяем метод ucFirst к каждому слову в массиве и собираем массив обратно в строку через пробелы
    ucWords(row){
        return row.split(' ').map(word => this.ucFirst(word)).join(' ');
    }

}

//создаём объект
let newString = new MyString();

//проверяем как работают методы
console.log(newString.reverse('task reverse'));

console.log(newString.ucFirst('task ucFirst'));

console.log(newString.ucWords('task ucWords'));