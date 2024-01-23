//Модифицируйте класс Worker из предыдущей задачи следующим образом: 
// сделайте все его свойства приватными, 
// а для их чтения сделайте методы-геттеры.
class Worker {
    //приватим
    #name;
    #surname;
    #rate;
    #days;

    constructor(name,surname,rate,days) {
        this.#name = name;
        this.#surname = surname;
        this.#days = days;
        this.#rate = rate;
    }

    //методы для чтения
    getName(){
        return this.#name;
    }

    getSurname(){
        return this.#surname;
    }

    getDays(){
        return this.#days;
    }

    getRate(){
        return this.#rate;
    }

    getSalary(){
        return this.#days * this.#rate;
    }

}

//создаём объект
let worker = new Worker('Уолтер','Уайт',5000,5);

//вывод
console.log(`Фамилия: ${worker.getSurname()}; Имя: ${worker.getName()}; Кол-во дней: ${worker.getDays()}; Ставка: ${worker.getRate()}; Зарплата: ${worker.getSalary()};`);