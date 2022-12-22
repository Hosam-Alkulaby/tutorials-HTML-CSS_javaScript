//object literals                  object in real lif have properties & things they can do ...
//                              example if we have (phone)
                                 //it has properties like  1 color                     and things it can do that called (method )
            
                                                           //2 size                      1  ring 

                                                           //3 model                      2 take a picture 
                                                                                          //3 play music


//object literals 

// const blogs = [
//     {title: 'why mac & cheese rules',likes:30},
//     {title:'10 things to make with marmite',like:50}
// ]

// console.log(blogs);

let user = {
    name:'crystal',
    age:30,
    email:'crystal@gmail.com',
    location: 'berlin',
    blogs:[
        {title: 'why mac & cheese rules',likes:30},
        {title:'10 things to make with marmite',likes:50}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){                                   //regular function 
        console.log('user logged out');
    },
    logBlogs(){
        // console.log(this.blogs);                                              //this is how to call to blogs array;
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {
              console.log(blog.title,blog.likes);
        });

    }
};
// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);
// console.log(user['name']);

// user['name'] = 'hosam';
// console.log(user.name);

// console.log(typeof user);

// user.login();


// const name = 'mario';
// name.toUpperCase();

user.logBlogs();
console.log(this);






//Math object                                                                            this math object 
console.log(Math);                                         //with this you can see all type of math method 

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;


console.log(Math.round(area));                                //this method around for example if we have 7.7 it round it to 8 
console.log(Math.floor(area));                               //this method floor  it remove what after . for example 6.7 it floor it to 6;
console.log(Math.ceil(area));                                //this ceil method  take any double value to the next number for example 5,3 it take it to 6;
console.log(Math.trunc(area));                               //this trunc method leave decimal and take the integar example 7.3 it's equal 7;


//random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random *100));





//primitive  & reference types
//primitive types              reference types
//numbers                     all types of objects 
//strings                     object literals 
//booleans                    arrays
//null                        functions
//undefined                   dates 
//symbols                     all other objects 

//stack                       heap
//stored in stack             stored into heap
//quite limtted in             better to use it    
//memory 


//primitive & value

// let scoreone =50;
// let scoretwo = scoreone;

// console.log('scoreone: '+(scoreone)+' ,scoretwo : '+(scoretwo)+'');

// scoreone = 100;
// console.log('scoreone: '+(scoreone)+' ,scoretwo : '+(scoretwo)+'');               //notice th change 



                                                            //notice the different between them in code 

//reference values 

const userone = {name:'hosam',age :30 };
const usertwo = userone;


console.log(userone,usertwo);

userone.name='ALi';
console.log(userone,usertwo);
