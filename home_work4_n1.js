// 1. Создайте массив с произвольными значениями. Далее, запросите у пользователя индексы элементов, 
//которые они хотят вывести и в каком порядке через запятую (формат '0, 3, 1').
//Выведите через пробел запрошенные элементы массива.
console.log('№1') 

let arr = []
let arr_us = []
let size = Math.floor(Math.random() * (10 - 1) + 1)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

for(let i = 0; i <= size; i++){
    arr[i] = 'string' + i
}

console.log(arr)

rl.question("Enter numbers\n", function (arr_us) {

    for(let i = 0; i < arr_us.length; i++){
        if((arr_us[i]) < arr.length){
           console.log('Result is' ,arr[(arr_us[i])], '\n') 
        }
        i+=2
    }

    rl.close
    process.exit(0);
});