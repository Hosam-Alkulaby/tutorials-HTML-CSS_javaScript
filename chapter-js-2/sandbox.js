 let age=8;
 console.log(age);
 //you can override variable
 age =30;
 console.log(age);
 let year = 2015;
 console.log(age,year);
 //if you have variable its type is const you cann't override it
 const hosam = 7; 
 console.log(hosam);
 //any undefined variable , automatically defined as var 
 hos = 9;
 console.log(hos);
 




 // Data Type

 //string 
  console.log('hello ,world');
  let email='hosamalkulaby7@gmail.com';
  console.log(email);


  //string concatenation 
  let FirstName = 'hosam';
  let LastName = 'ali';
  let FullName = FirstName +' '+ LastName;
  console.log(FullName);


  //getting characters          //the index in java script begin from 0;
  console.log(FullName[0]);
  console.log(FullName[4]);

  //string length
  console.log(FullName.length);
  console.log(FirstName.length);

  //string methods
  console.log(FullName.toUpperCase());
  let r=FullName.toLowerCase();
  console.log(r ,FullName);

  let result=email.indexOf('@');
  console.log(result);
  let re=email.indexOf('h')>=0;
  console.log(re);


  

  //common string methods

  let emailto = 'mario@thenetninja.co.uk';
  //let sce = emailto.lastIndexOf('a');

  //let sce = emailto.slice(2,17);


  //let sce = emailto.substring(2,7);

  //let sce = emailto.replace('n','w');
  let sce = emailto.replaceAll('n','w');
  console.log(sce);




  let radius=10;
  const pi =3.14;

  //math operators -,+,*,/,**,%

  //console.log(10/2);
  //let res = radius % 3;
  //let res= pi * radius**2;


  //order of operation - B I D M A S

  //let res= 5 *(10-3)**2;
  //console.log(res);


  //let like =10;
  //like= like +1;
  //like ++;
  //like --;

  //like +=10;
  //like -=5;
  //like *=2;
  //like /=2;
  //console.log(like);


  //NaN - not a number

  //   console.log(5/'hello');

  //let resu= 'the blog has' + like + 'like';
  //console.log(resu);







  //template string
  let title = 'best reads of 2019';
  const author = 'hosam';
  const likes = 30;

  //concatenation way   //this is old way i don't like it
  //let resultll='the blog called' + title + 'by' + author + 'has' + likes + 'likes';
  //console.log(resultll);


  //template string way i like it
  //let resulw = 'the blog called ${title} by ${author} has ${likes} likes ';
 // console.log(resulw);



  //creating html templates
 // let html = ' <h2> ${titl} </h2><p>By ${author}</p> <span>this is blog has ${likes} likes</span>';
  
 // console.log(html);




 let ninjas = ['ali','rami','bashar']; //the index in java script begining with zero hhhh

 //ninjas[1]='hosam';//we override it
 //console.log(ninjas[1]);

 //let ag = [38,334,53,33];
 //console.log(ag);
 //console.log(ag[2]);


 //let random = ['ali','crystal','hosamdev',77,99];
 //console.log(random);

 console.log(ninjas.length);











 //arry methods                                                             arry methods

 //let resultarry = ninjas.join(',');

 //let resultarry = ninjas.concat(['ali','hosam','abdallh']);       //concat method   //this method concat arrys together 
 let resultarry = ninjas.push('ken');                              //push method      //alter th orignal method and add the items that added on push method to it,   also give the give the length of array  with the items that you added on it
 resultarry = ninjas.pop();                                        //pop method       //remove the last element in the array and returns it;

 console.log(resultarry);





 //undefined and null

 let num;
 console.log(num ,num +7,'the number is '+ ' ' +num);                 //undefined that menas you don't give the variable any value its undefined you should giv it value;

 let h = null;
 console.log(h,h +4,'the h is ' +h);                                  //null it means we give the variable null value ;




 //booleans &comparisons
 console.log(true,false,"true","false"); //it's different

 //mehtod can return booleans

 let emailhos = 'hosamalkulaby7@gmail.com'
 let check = emailhos.includes('@');                               //includes method checked from any array or string text or ..etc that encludes this items or not ;and return ture or false hhhh

 console.log(check);



 //comparsions operators

 let hosa = 60;
 console.log(hosa == 60);
 console.log(hosa == 70);
 console.log(hosa != 50);
 console.log(hosa > 7);




 //strict comparsions (different types cannot be equal);

 console.log(hosa === 60);                                //=== three equal that means it's equal th type of the variable and the value ;
 console.log(hosa ==='60');
 console.log(hosa !== 60);
 console.log(hosa !=='60');






 //type conversion 
 let score='100';
 score = Number(score);                               //to Convert from string to number write the  Number(the name of variable here that you want convert); 
  
 console.log(score +1);
 console.log(typeof score);                         //--typeof-- properties to check from kind of values ;

 let scor=7;
 scor=String(scor);
  let sco =Boolean('');
 console.log(sco,typeof scor);


 let mr = Boolean();
 console.log(mr,typeof mr);
 



 


 




  


  


