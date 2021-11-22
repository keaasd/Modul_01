'use strict';
{
const productName = 'Рубашка'; // наименование товара
const count = 2; // количества товара
const productCategory = 'Одежда'; // категория товара
const price = 1500; // цена товара

// console.log(productName);
// console.log(`общая сумма товара: ${price * count}`);
}

{
const productName = 'Ласты';
const count = 4;
const productCategory = 'Спорт-товары';
const price = 799;

// console.log(productName);
// console.log(`общая сумма товара: ${price * count}`);
}
{
const productName = 'Проездной';
const count = 10;
const productCategory = 'транспортные товары';
const price = 375;

// console.log(productName);
// console.log(`общая сумма товара: ${price * count}`);
}
const productName = prompt('Напиши наименование товара');	

const count = Number(prompt('количества товара, сколько надо-то? пиши цифрами')); 
	
const productCategory = prompt('а категория товара какая?');

const price = Number(prompt('назови цену, договоримся')); 


console.log(typeof productName);
console.log(typeof count);
console.log(typeof productCategory); 
console.log(typeof price);

console.log(`На складе ${count} единицы товара "${productName}" на сумму ${price * count}`);

