//we use documetn :   when we want to do something with web page;
// const para = document.querySelector('div.error');   //if you want get uniqe selector name go to the browsers an right click and inspect and copy and copy selectors

// console.log(para);




//queryselector     &  queryselectorAll
// const paras = document.querySelectorAll('p');     //qureyselectorAll to select all the element that have th same type or the same class
// const error = document.querySelectorAll('.error');
// paras.forEach(paras => {
//     console.log(paras);
// });
// 
// console.log(error);





//get an element by ID

// const title = document.getElementById('page-title');
// console.log(title);


//get elements by their class name

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

//get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);




const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'someone like you';          //override of text in web page   
// para.innerText += 'some on like you ';          


// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

//content.innerHTML = '<h2> THIS IS A NEW H2</h2>';             change the text inner html web page 


// const people = ['ali','hosam','hytham'];

// people.forEach(person => {
//     content.innerHTML += '<p> '+(person)+'</p>';
// })




const link = document.querySelector('a');

console.log(link.getAttribute('href'));                //this properties to get attribute from your html paage ..

link .setAttribute('href','https://www.google.com')                           //setattribute   this properties means what do you want to set instead of your attribute.

link.innerText = 'the name of  linking ';


const mssg = document.querySelector('p');


console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');


mssg.setAttribute('style','color:green');              //if th attribute doesn't exist java script will create it  it doesn't matter if it's not exist;

                                                                //create anew attribute doesn't exist;



//ch











                                                   

//change the style attribute or add it

const title = document.querySelector('h1');

// title.setAttribute('style','margin:50px');

console.log(title.style);              //you can use it to add style or remove it 
console.log(title.style.color);


title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';




//const content = document.querySelector('p');

//console.log(content.classList);
//content.classList.add('error');
//content.classList.remove('error');
//content.classList.add('success');


const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
       p.classList.add('success');
    }

    if(p.innerText.includes('success')){
        p.classList.add('error');
    }
});


const titled = document.querySelector('.page-title');

title.classList.toggle('test');
title.classList.toggle('test');






