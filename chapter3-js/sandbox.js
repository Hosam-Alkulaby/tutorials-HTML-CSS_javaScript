// for(let i=0;i<5;i++){
//     console.log('this the first loop:',i);
// }

// console.log('we have finished our first loop');

// const names = ['ali','hosam','bashar'];
// for(let i=0;i<names.length;i++){
//     //console.log(i);
//     //console.log(names[i]);
//     let html = '<div>'+(names[i])+'</div>';
//     console.log(html);
// }

   
 
//while loop
// const names=['hosam','ali','bashar'];
// let i =0;

// while(i<names.length){
//     // console.log('the loop',i);
//     console.log(names[i]);
//     i++;
// }


//do while
// let i=7;

// do{
//     console.log('val of i is ',i);
//     i++;
// }while(i<5);

//if statement

// let age =25;
// if(age >20){
//     console.log('your are over 20 years old');
// }

// const names=['hosam','mohammed','salem','random'];
// if(names.length > 3){
//     console.log("there's alot of names into array");
// }

// const password = 'p@ssword9';
// if(password.length >= 12 &&password.includes('@')){
//     console.log('this password  might be strong');
// }else if(password.length >= 8 ||password.includes('@') &&password.length > 5){
//     console.log('this password is long enough');
// }
// else{
//     console.log('this password is not long enough');
// }


//logical Not(!)
// let user=false;
// if(!user){
//  console.log('you must be logged in to continue')
// }
// console.log(!true);
// console.log(!false);




//break and continue  

const score = [3,25,23,0,6,100,5,4];
for (let i=0;i<score.length;i++){
    if(score[i]===0){
        console.log('shame on you');
        continue;
    }
    console.log('your socor:',score[i]);

    if(score[i] ===100){
        console.log('congrats');
        break;
    }
}





//switch statement

let grade='D';

switch(grade){
    case 'A':
        console.log('you got A');
        break;
    case 'B':
        console.log('you got B');
        break;
    case 'C':
        console.log('you got C');
        break;
    case 'D':
        console.log('you gat D');
        break;
    case 'E':
        console.log('you got E')
        break;
    default:
        console.log('not a valid grade');
}




//variables & block scope

const age=30;

if(true){
    const age =40;
    const name ='hosam';
    console.log('inside 1st code block :',age,name);

    if(true){
        const age=50;
        console.log('inside 2nd code block:',age);
    }
}

console.log('outside code block',age,name);