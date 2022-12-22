//function declaration 
function greet(){
    console.log('hello there');
}

greet();
//function expression                                        //function expression have semicolons after th braces of function ;;;;;;; like this       

const speak = function (name ='mohammed' ,time ='night'){
    console.log('good '+(time)+' '+(name)+'');  //U can use it more time
};

speak('hosam');

//returning values  from regular function                  this is regular function 

// const calcAre = function(radius){
//     return 3.14 * radius**2;
// };




//arrow function               this is arrow function            arrow function 

const calcArea = (radius) => 3.14 * radius**2;
const area = calcArea(5);
console.log('area is:',area);




// const bill = function(products, tax){
//     let total = 0;
//     for (let i=0;i<products.length;i++){
//         total += products[i] + products[i] *tax;
//     }

//     return total;
// }

// console.log(bill([10,15,30],0.2));
                                          //we convert this function to arrow function 



const bill =(products,tax) =>{
    let total = 0;
    for (let i=0;i<products.length;i++){
        total += products[i] + products[i] *tax;
    }

    return total;
}

const res = bill([10,15,30],0.2);
console.log(res);






// 
const name = 'ali';

//functions

const gree = () => 'hello';                        
let resultone = gree();
console.log(resultone);


//methods

let resulttwo = name.toUpperCase();                              //this how to call method //.and your method this how to deal with methods also we can use method into a function 
console.log(resulttwo);







//callbacks &foreach

const myfun = (callbackfun) => {
    //do something 
    let value = 50;
    callbackfun(value);
};

myfun(value =>{
    //do something 
    console.log(value);

});



//foreach 

// let people = ['mario','bashar','osama','khalid','hosam'];

// people.forEach((person ,index) => {                                             //we use it as arrow function 
//  console.log( index,person);
// })



//get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario','bashar','osama','khalid','hosam'];

let html = '';

people.forEach(function(person){
    //create htm template
    html += '<li style="color:purple">'+(person)+'</li>';
});

console.log(html);
ul.innerHTML=html;