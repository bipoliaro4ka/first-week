//вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]]
// добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсортировать его
let bigArray = [[1,4,5],[1,3,4],[2,6]];

let array = [];

// перебор массивов
for (let i = 0; i < bigArray.length; i++){
    
    for (let j = 0; j < bigArray[i].length; j++){
        
        array.push(bigArray[i][j]);
    }
}

//сортировка
let sortedArray = array.sort((a,b) => a-b);

console.log(sortedArray);