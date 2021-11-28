'use strict';
{
const productName = prompt('Напиши наименование товара');	

const count = Number(prompt('количества товара, сколько надо-то? пиши цифрами')); 
	
const productCategory = prompt('а категория товара какая?');

const price = Number(prompt('назови цену, договоримся')); 

if (count > 0 && price > 0) {
console.log(`На складе ${count} единицы товара "${productName}" на сумму ${price * count}`);
}
    else {
    console.log("Вы ввели некорректные данные")
    };
    
}

