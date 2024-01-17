let year = 2022;
//выясняем високосный год или нет
if (( year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year,"Год высокосный")
} else{
    console.log(year, "Этот год не высокосный")
}

//выясняем какое время года
let month = Math.floor(Math.random() * 12) + 1;
if (month >= 1 && month <=2 || month === 12){
    console.log('Зима')
} else if (month >= 3 && month <= 5){
    console.log('Весна')
} else if (month >= 6 && month <= 8) {
    console.log('Лето')
} else if(month >= 9 && month <=11){
    console.log('Осень');
}