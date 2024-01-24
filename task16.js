class calculation {
    #calculationLine

    constructor() {
        this.#calculationLine = '';
    }

    setterCalculationLine(number){
        this.#calculationLine = number;
    }

    setLastSymbolCalculationLine(symbol){
        this.#calculationLine += symbol;
    }

    gettercalCulationLine(){
        return this.#calculationLine;
    }

    lastSymbol(){
        //проверка на наличие длины строки
        if (this.#calculationLine.length > 0) return this.#calculationLine.charAt(this.#calculationLine.length - 1);
        //если строка пустая вернём null
        return null;
    }

    deleteLastSymbol(){
        //если в строке что-то есть, то удаляем последний символ
        if (this.#calculationLine.length > 0) this.#calculationLine = this.#calculationLine.slice(0,-1);
    }

}

let calculator = new calculation();

//присваиваем значение
calculator.setterCalculationLine('100');

console.log((calculator.gettercalCulationLine()));

//добавляем значение
calculator.setLastSymbolCalculationLine('222');

console.log((calculator.gettercalCulationLine()));

//вывод последнего символа строки
console.log(calculator.lastSymbol());

//удаляем последний символ
calculator.deleteLastSymbol();

console.log((calculator.gettercalCulationLine()));