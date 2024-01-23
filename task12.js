//Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
//name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days
class Worker {
    
    constructor(name,surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    //считаем зп
    getSalary(){
        return this.rate * this.days;
    }

}

//создаём новый объект и передаём в него значения
let worker = new Worker('Уолтер','Уайт',5000,5);

//вывод
console.log(`Фамилия: ${worker.surname}; Имя: ${worker.name}; Рабочая ставка: ${worker.rate}; Кол-во дней: ${worker.days}; Зарплата: ${worker.getSalary()};`);