const orderTotal = require('./order-total');

it('Quantity',()=> 
  expect(orderTotal({
    items: [
        {name: 'Dragon candy', price: 2, quantity: 3}
    ]  
})).toBe(6))


it('Check fail: Quantity',()=> 
  expect(orderTotal({
    items: [
        {name: 'Dragon candy', price: 3 }
    ]  
})).toBe(3))


it('Happy path (Example 1)',()=>
  expect(orderTotal({
    items: [
        {name: 'Dragon food',        price: 8},
        {name: 'Dragon cage(small)', price: 800}
    ]
})).toBe(808))

it('Happy path (Example 2)',()=>
  expect(orderTotal({
    items: [
        {name: 'Dragon collar',        price: 20 },
        {name: 'Dragon chew toy',      price: 40 }
    ]
})).toBe(60))



// Ctrl + shift + P type (quokka) open a new js
/* 
test runner: $npm i --save-dev jest

in package.json:
    "test":"jest",               // cmd $ npm test(this test is built in)
    "watch": "jest --watch *.js" // cmd $ npm run watch
    当运行“npm run watch”这条cmd时，不要quit，在.js文件中保存就自动testle

*/