// 3. Перед вами массив cities, let cities = 'Самара, Москва, Санкт-Петербург, Кемерово, Курск' 
//содержащий названия городов. Напишите программу, которая запрашивает у пользователя название города и проверяет, 
//есть ли такой город в массиве cities. Если город найден, программа должна вывести список городов, 
//начинающихся с той же буквы, что и введенный пользователем город в заявленном формате: 
//Города, начинающиеся с буквы "С": Санкт-Петербург, Саратов, Самара
console.log('№3')

 let cities = ['Самара', 'Москва', 'Санкт-Петербург', 'Кемерово', 'Курск']
 let citie = 'Самара'
 let letter
 let res_arr = []

 for(let i = 0;i < cities.length;i ++){
    if(cities[i] == citie){
        letter = citie[0]
    }
 }
console.log(citie[0])

 for(let i = 0;i < cities.length;i ++){
    if(cities[i][0] == letter){
        res_arr.push(cities[i])
    }
 }

 console.log(res_arr)
