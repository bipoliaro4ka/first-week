// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.
class Worker {
    //приватим
    #name;
    #surname;
    #rate;
    #days;

    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#days = days;
        this.#rate = rate;
    }

    //методы для чтения
    getName() {
        return this.#name;
    }

    getSurname() {
        return this.#surname;
    }

    getDays() {
        return this.#days;
    }

    //метод сеттер
    setDays(days){
        this.#days = days;
    }

    getRate() {
        return this.#rate;
    }

    setRate(rate){
        this.#rate = rate;
    }

    getSalary() {
        return this.#days * this.#rate;
    }

}

//создаём объект
let worker = new Worker('Уолтер','Уайт',5000,5);

//вывод
console.log(`Фамилия: ${worker.getSurname()}; Имя: ${worker.getName()}; Кол-во дней: ${worker.getDays()}; Ставка: ${worker.getRate()}; Зарплата: ${worker.getSalary()};`);

//вызываем методы-сеттеры и присваиваем с их помощью новое значение
worker.setDays(20);
worker.setRate(24);

//проверяем новые значения
console.log(`Новая зарплата: ${worker.getSalary()}`);