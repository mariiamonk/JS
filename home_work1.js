//задание 1:
console.log("" + 1 + 0)//10
console.log("" - 1 + 0)//-1
console.log(true + false)//1
console.log(6 / "3")//2
console.log("2" * "3")//6
console.log(4 + 5 + "px")//9px
console.log("$" + 4 + 5)//$45
console.log("4" - 2)//2
console.log("4px" - 2)//NaN
console.log("  -9  " + 5)//'  -9  5'
console.log("  -9  " - 5)//-14
console.log(null + 1)//1
console.log(undefined + 1)//NaN
console.log(" \t \n" - 2)//-2

console.log('\n')

//задание 2:
//Создайте переменную age и присвойте ей значение 96
let age = 96

//Выведите переменную age
console.log(age)

//Выведите сообщение «Прошел год»
console.log('Прошел год')

//Присвойте переменной age значение 97
age = 97

//Выведите переменную age
console.log(age)

console.log('\n')

//задание 3:
//Напишите программу, которая строго сравнивает 2 значения, если они не равны в 3ю переменную записать результат их побитового или(or)

let a = 3
let b = 3
let c = a !== b
c &&= (a|b)

console.log(c)
