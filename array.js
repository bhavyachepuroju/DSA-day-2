 //1//
 
 let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

let result=items.map(function(x){

    return{
        name:x.name,
        total:x.qty*x.price
    };
})
console.log(result);
//2//

let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

let dupilcate=users.filter((name,index,arr) =>{
 return arr.indexOf(name) !== arr.lastIndexOf(name)&&arr.indexOf(name)===index
});
console.log(dupilcate)
//3//

let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

let total = orders.reduce((acc,{product,qty})=>{
    acc [product]=(acc[product] ||0)+qty 
    return acc 
},{});
  
let soldmore=Object.entries(total).reduce ((max,curr)=>{
    return curr[1]>max[1]?curr:max;
})[0];
console.log(soldmore)
