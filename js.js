// /* Q1 */
// console.log(1000/500);

// /* Q2 */
// console.log(1000-500);

// /* Q3 */
// console.log(1000+500);

// /* Q4 */
// console.log(1000*500);

// /* Q5 */
// console.log((7+9+2)/3);

// /* Q6 */
// console.log(150 - (150*0.3));

// /* Q7 */
// var age= 20
// if (age > 18 && age <30){
//     console.log(true)
// } else{
//     console.log(false)
// }

// /* Q8 */
// console.log(Math.pow(1,2));
// console.log(Math.pow(2,3));

// /* Q9 */
// console.log(1%10);
// console.log(2%4);

// /* Q10 */
// console.log(typeof(100));
// console.log(typeof(73,9));
// console.log(typeof(NaN));
// console.log(typeof("Water"));
// console.log(typeof(false));
// console.log(typeof(9 != 11));
// console.log(typeof("Orange" + "e"));
// console.log(typeof("Orange" - "s"));
// console.log("Orange" - "s");
// console.log(typeof("4" - "8"));
// console.log("4" - "8");
// console.log(typeof("4" + "8"));
// console.log("4" + "8");
// console.log(typeof("name" + 3));
// console.log("name" + 3);
// console.log(typeof("name" - 3));
// console.log("name" - 3);
// console.log(82 * "word");
// console.log(1 + "home");
// console.log("home" + 1);
// console.log(1 + true);
// console.log("hello" + true);
// console.log("hello" - true);
// console.log(typeof("hello" - true));
// console.log(typeof(Infinity));
// console.log(Infinity);
// console.log(1=="1");
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 === "1");




/* --------------------------- Strings ---------------------------*/




// /* Q10 */
// var o= "Welcome to Orange";
// var oo= " Jordan";
// var ooo= '"Jordan"';
// console.log(o.toUpperCase());
// console.log(o.toLocaleLowerCase());
// console.log(o.length);
// console.log(o.replace("to","from"));
// console.log(o.split(" "));
// console.log(o.split("to"));
// console.log(o.slice());
// console.log(o.slice(""));
// console.log(o.slice(" "));
// console.log(o.slice("to"));
// console.log(o.slice(7));
// console.log(o.slice(8,10));
// console.log((o.slice(8,10)).toUpperCase());
// console.log(o.slice(8,10).toUpperCase());
// console.log(o.concat(oo));
// console.log(o.concat(" ").concat(ooo));
// console.log(o + " " + ooo);
// console.log(o.replace("Orange",'"Orange"'));

// var word="cactus";
// var letter = word[0];
// var star= "*";
// console.log(letter);
// var newword=word[0];
// for( var i =1; i < word.length ; i++){
//     if (word[i] == letter ){
//         newword += star;
//         console.log(word);
//         console.log(newword);
//     } else{
//         newword += word[i];
//         console.log(word);
//         console.log(newword);
//     }
// }
// console.log(word);
// console.log(newword);




/* --------------------- Arrays --------------------- */




// var arr=["Coding", "Academy", "By", "Orange"];
// console.log(arr);
// arr.push("Jordan");
// console.log(arr);

// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// arr.unshift("to");
// arr.unshift("Welcome");
// console.log(arr);

// arr.shift();
// console.log(arr);

// var arr2 =arr.join();
// console.log(arr2);

// var arr2 =arr.toString(" ");
// console.log(arr2);

// var arr2 =arr.join(" ");
// console.log(arr2);

// var arr=["Coding", "Academy", "By", "Orange"];
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.splice(1,2);
// console.log(arr);


//---------------------------------------------------------------------------------


// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  
// console.log(fruit);
// console.log(vegetables);

// vegetables.pop();
// console.log(vegetables);

// fruit.shift();
// console.log(fruit);

// console.log(fruit.indexOf("orange"));

// var num= fruit.indexOf("orange");
// console.log(num);
// fruit.push(num);
// console.log(fruit);

// console.log(vegetables.length);

// var num= vegetables.length;
// console.log(num);
// vegetables.unshift(num);
// console.log(vegetables);
// vegetables.push(num+101);
// console.log(vegetables);

// var meh = ["brother" , "what" , "are" , "you"];
// var food = fruit.concat(vegetables, meh);
// console.log(food);

// var food = fruit.concat(vegetables);
// console.log(food);
// food.splice(4,2)
// console.log(food);

// var meh = ["brother" , "what" , "are" , "you"];
// var food = fruit.concat(vegetables);
// console.log(food);
// var food = food.concat(meh);
// console.log(food);
// food.reverse();
// console.log(food);

// var meh = ["brother" , "what" , "are" , "you"];
// var food = fruit.concat(vegetables);
// console.log(food);
// var food = food.concat(meh);
// console.log(food);
// food.reverse();
// console.log(food);
// food =food.join(" ")
// console.log(food);




/* --------------------- Functions --------------------- */




// var str = "Welcome to hell my brother";
// console.log(str);
// // str = str.split(" ");
// // console.log(str);
// function ToArr( string ){
//     console.log(string.split(" "));
// }
// ToArr(str);

// var num="0776807777";
// console.log(num);
// function hide (num){
//     var hid="";
//     for (i=0 ; i<num.length; i++){
//         if ( i < 7){
//             hid += "*";
//         } else{
//             hid += num[i]
//         }
//     }
//     console.log(hid);
// }
// hide(num);

// var email="orange_academy@orange.jo";
// console.log(email);
// function hide (email){
//     var hid="";
//     var ind= email.indexOf("@") ;
//     for (i=0 ; i<email.length; i++){
//         if ( i > 5 &&  i < ind){
//             hid += ".";
//         } else{
//             hid += email[i]
//         }
//     }
//     console.log(hid);
// }
// hide(email);

// var hello = "coding academy by orange";
// function tooup (hell){
//     var hell2 = hell.split(" ");
//     hell2 = (((hell2[0].charAt(0).toUpperCase() + hell2[0].slice(1)).split()).concat(hell2.slice(1))).join(" ");
//     console.log(hell2) ;
// }
// console.log(hello);
// tooup(hello);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// var hello = "coding academy by orange";
// function capitalizeFirstWord(str) {
//     var words = str.split(" ");
//     words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
//     return words.join(" ");
// }
// console.log(hello); // Print original string
// var result = capitalizeFirstWord(hello); // Call function and store result
// console.log(result); // Print modified string

// var inputString = "welcome to hell my brother";
// console.log(inputString);
// function capitalizeFirstLetter(string) {
//     var words = string.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// var result = capitalizeFirstLetter(inputString);
// console.log(result);

//Q from AI
// var inputString = "hello world, how are you?";
// console.log(inputString);
// function rev(string){
//     var str = string.split(" ");
//     for (var i=0 ; i < str.length ; i++){
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//         str[i] = str[i].split("").reverse().join("");
//     }
//     return str.join(" ");
// }
// var result = rev(inputString);
// console.log(result);

// var inputString = "0123456789";
// console.log(inputString);
// function rev(string){
//     var str = string.split("").reverse().join("");
//     return str;
// }
// var result = rev(inputString);
// console.log(result);

// var a=1 , b=9;
// console.log(a);
// console.log(b);
// //One
// function swap(x,y){
//     var a=x, b=y;
//     var c=a;
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     a=b;
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     b=c;
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // //Result
//     // console.log(a);
//     // console.log(b);
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// swap(a,b);
// console.log(a);
// console.log(b);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Two
// var a=1 , b=9;
// console.log(a);
// console.log(b);
// //--------------------------------
// a=a+b;
// console.log(a);
// console.log(b);
// //--------------------------------
// b=a-b;
// console.log(a);
// console.log(b);
// //--------------------------------
// a=a-b;
// console.log(a);
// console.log(b);
// // // function swap(x,y){
// // //     var a=x, b=y;
// // //     a=a+b;
// // //     b=a-b;
// // //     a=a-b;
// // //     console.log(a);
// // //     console.log(b);
// // // }
// // // var a=1,b=9;
// // // console.log(a);
// // // console.log(b);
// // // swap(a,b);
// // .
// .
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// //Three
// var a=1 , b=9;
// console.log(a);
// console.log(b);
// function swap(x,y){
//     var a=x, b=y;
//     return [b,a];
// }
// [a,b] = swap(a,b);
// console.log(a);
// console.log(b);
// // //-------------------------
// // var a=1 , b=9;
// // console.log(a);
// // console.log(b);
// // [a,b]=[b,a];
// // console.log(a);
// // console.log(b);

// var string = "Come on brother";
// console.log(string);
// function remove(string, a){
//     var str = string.replace(string[a], "");
//     return str;
// }
// remove(string, 3);
// console.log(string);
// var str = remove(string, 3);
// console.log(str);
// var str = remove(string, 4);
// console.log(str);
// var str = remove(string, 6);
// console.log(str);
// var str = remove(string, 9);
// console.log(str);
// var str = remove(string, 0);
// console.log(str);

// var string1 = "BBro", string2="Tther";
// console.log(string1);
// console.log(string2);
// function merge(string1, string2){
//     var str = string1.slice(1) + string2.slice(1) 
//     return str;
// }
// var str = merge(string1, string2);
// console.log(str);

// var sample1= "Brother", sample2="orange", sample3="Hello", sample4="Help";
// // console.log(sample1);
// // console.log(sample2);
// // console.log(sample3);
// // console.log(sample4);
// function sure(char, string){
//     if (string[0]== char || string[string.length - 1] == char){
//         console.log(true)
//     } else{
//         console.log(false)
//     }
// }
// sure("o", sample1);
// sure("o", sample2);
// sure("o", sample3);
// sure("o", sample4);

// var string = "I am about to commit suicide";
// console.log(string);
// function toarray(string){
//     var str = string.split(" ");
//     return str;
// }
// var str = toarray(string);
// console.log(str);

// var string =" brother what are you talking about?? abfdieclfzxaeomfpe";
// function arrange(string){
//     var str= string.split("").sort().join();
//     return str;
// }
// var str= arrange(string);
// console.log(str);  




/* --------------------- Conditionals -------------------- */




// var bd1= 1999, bd2= 2000, bd3=1800, bd4=2008, bd5=2019, bd6=1944;
// function apply(date){
//     var age = new Date().getFullYear()-date;
//     if (age < 18){
//         console.log("You may join the kids' program." + age);
//     } else if ( age >= 18 && age <= 30){
//         console.log("You are eligible. Start your application." + age);
//     } else if ( age > 30 && age <= 60){
//         console.log("You are not eligible. You may join other programs." + age);
//     } else if ( age > 60){
//         console.log("You may join the seniors’ program." + age);
//     }
// }
// apply(bd1);
// apply(bd2);
// apply(bd3);
// apply(bd4);
// apply(bd5);
// apply(bd6);

// var string = "OrAnGe Is So GoOd CoMe On BrOtHeR wHaT aRe YoU wAiTiNg FoR??"
// console.log(string);
// function swap(string){
//     var str = string.split("");
//     for (var i=0 ; i < str.length ; i++){
//         if (str[i] == str[i].toLowerCase()){
//             str[i] = str[i].toUpperCase();
//         } else{
//             str[i] = str[i].toLowerCase();
//         }
//     }
//     return str.join("");
// }
// var str = swap(string);
// console.log(str);

// var string = "orange coding academy is here brother";
// console.log(string);
// function Cap(){
//     var str = string.split(" ");
//     for (var i=0; i<str.length; i++){
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join("");
// }
// var str = Cap(string);
// console.log(str);

// var string = "Ah **** here we go AGAIN!!!!, Let's do this for the last time";
// var array = string.split(" ");
// var ex1 = "****", ex2="*", ex3="ah", ex4="Ah", ex5="here";
// function pick(array , sample){
//     var arr = array;
//     var ex=sample;
//     for (i=0; i<arr.length; i++){
//         if (arr[i] == ex){
//             arr.splice(i,1);
//         }
//     }
//     return arr;
// }
// // // // // // // // // // console.log(array);
// // // // // // // // // // //
// // // // // // // // // var a = array;
// // // // // // // // // var arr = pick(a, ex1);
// // // // // // // // // console.log(arr);
// // // // // // // // // //
// // // // // // // // var b = array;
// // // // // // // // var arr2 = pick(b, ex2);
// // // // // // // // console.log(arr2);
// // // // // // // // //
// // // // // // // var c = array;
// // // // // // // var arr3 = pick(c, ex3);
// // // // // // // console.log(arr3);
// // // // // // // //
// // // // // // var d = array;
// // // // // // var arr4 = pick(d, ex4);
// // // // // // console.log(arr4);
// // // // // // //
// // // // // var e = array;
// // // // // var arr5 = pick(e, ex5);
// // // // // console.log(arr5);
// // // // // //
// // // // var f = array;
// // // // var arr6 = pick(f, "we");
// // // // console.log(arr6);
// // // // //
// // // var g = array;
// // // var arr7 = pick(g, "again");
// // // console.log(arr7);
// // // //
// // var h = array;
// // var arr8 = pick(h, "go");
// // console.log(arr8);

// var a=-2,b=-1,c=0,d=1,e=2;
// function check(num){
//     if (num % 2 ==0){
//         console.log("Even");
//     } else{
//         console.log("Odd");
//     }
// }
// check(a);
// check(b);
// check(c);
// check(d);
// check(e);
// check(11);

// var a="1", b=1, c="a", d="12x";
// function check(num){
//     var checker = num * 1;
//     if (  isNaN(checker)  ){
//         console.log("It is NOT a Number");
//     } else {
//         console.log("It is a Number");
//     }
// }
// check(a);
// //
// console.log(typeof(a));
// console.log(typeof(a*1));
// console.log(a*1);
// console.log(" ");
// //
// //
// check(b);
// //
// console.log(typeof(b));
// console.log(typeof(b*1));
// console.log(b*1);
// console.log(" ");
// //
// //
// check(c);
// //
// console.log(typeof(c));
// console.log(typeof(c*1));
// console.log(c*1);
// console.log(" ");
// //
// //
// check(d);
// //
// console.log(typeof(d));
// console.log(typeof(d*1));
// console.log(d*1);
// console.log(" ");
// //
// //
// check(2778.7);
// //
// console.log(typeof(2778.7));
// console.log(typeof(2778.7*1));
// console.log(2778.7*1);
// console.log(" ");
// //
// check("5835");
// //
// console.log(typeof("5835"));
// console.log(typeof("5835"*1));
// console.log("5835"*1);
// console.log(" ");
// //
// //
// check("brother");
// //
// console.log(typeof("brother"));
// console.log(typeof("brother"*1));
// console.log("brother"*1);
// console.log(" ");
// //
// //
// check("One");
// //
// console.log(typeof("One"));
// console.log(typeof("One"*1));
// console.log("One"*1);
// console.log(" ");

// var a=-10, b=-1, c=0, d=1, e=10, f=Infinity, g=true, h=false, i=NaN, j=null;
// function max(a,b){
//     var x=a, y=b;
//     var max =Math.max(x,y);
//     console.log("The Largest Number is " + max);
//     return max;
// }
// console.log(a);
// console.log(b);
// var check = max(a,b);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(b);
// console.log(b);
// var check = max(b,b);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(b);
// console.log(c);
// var check = max(b,c);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(c);
// console.log(d);
// var check = max(c,d);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(d);
// console.log(e);
// var check = max(d,e);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(e);
// console.log(f);
// var check = max(e,f);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(9999999999999999999999999999999999);
// console.log(f);
// var check = max(9999999999999999999999999999999999,f);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(f);
// console.log(g);
// var check = max(f,g);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(f);
// console.log(h);
// var check = max(f,h);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(g);
// console.log(h);
// var check = max(g,h);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(h);
// console.log(i);
// var check = max(h,i);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(h);
// console.log(j);
// var check = max(h,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(g);
// console.log(i);
// var check = max(g,i);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(g);
// console.log(j);
// var check = max(g,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(i);
// console.log(j);
// var check = max(i,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(a);
// console.log(j);
// var check = max(a,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(a);
// console.log(i);
// var check = max(a,i);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(b);
// console.log(g);
// var check = max(b,g);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(b);
// console.log(h);
// var check = max(b,h);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(b);
// console.log(i);
// var check = max(b,i);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(b);
// console.log(j);
// var check = max(b,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(c);
// console.log(g);
// var check = max(c,g);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(c);
// console.log(h);
// var check = max(c,h);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(c);
// console.log(i);
// var check = max(c,i);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(c);
// console.log(j);
// var check = max(c,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(d);
// console.log(g);
// var check = max(d,g);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(d);
// console.log(h);
// var check = max(d,h);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(d);
// console.log(i);
// var check = max(d,i);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(d);
// console.log(j);
// var check = max(d,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(f);
// console.log(j);
// var check = max(f,j);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");
// //
// //
// console.log(f);
// console.log(i);
// var check = max(f,i);
// console.log(check);
// console.log(typeof(check));
// console.log(" ");

// var tri1 = [1,1,1], tri2=[1,1,2], tri3=[1,2,3];
// function check(array){
//     arr = array;
//     if (arr[0]==arr[1] && arr[1]==arr[2] ){
//         console.log("Equilateral Triangle");
//     } else if (arr[0]==arr[1] || arr[1]==arr[2] || arr[0]==arr[2]){
//         console.log("Isosceles Triangle");
//     } else {
//         console.log("Scalene Triangle");
//     }
// }
// check(tri1);
// check(tri2);
// check(tri3);
// check(1,3,3);
// check([1,5,1]);

// var a=[-1,1] , d=[-576, 7662];
// var aa=0, bb=3, cc=-1, dd=-34, qq=-643, ww=-445, ff=34, vv=346, xx=124, zz=3456, aaa=-346334, bbb=647846;
// function check(array, number){
//     var arr = array;
//     var num = number;
//     if (num >= arr[0] && num <=arr[1]){
//         console.log("The number is in range");
//     } else{
//         console.log("The number is NOT in range");
//     }
// }
// check(a,aa);
// check(a,bb);
// check(a,cc);
// check(a,dd);
// check(a,qq);
// check(a,ww);
// check(a,ff);
// check(a,vv);
// check(a,xx);
// check(a,zz);
// check(a,aaa);
// check(a,bbb);
// check(d,aa);
// check(d,bb);
// check(d,cc);
// check(d,dd);
// check(d,qq);
// check(d,ww);
// check(d,ff);
// check(d,vv);
// check(d,xx);
// check(d,zz);
// check(d,aaa);
// check(d,bbb);

// var a=1999, b=2000, c=2001, d=2002, e=2003, f=2004, g=2020, h=5484, i=5486;
// function leap(number){
//     year = number;
//     if (year % 4 ==0){
//         console.log("This year is a LEAP year");
//     }
//     else{
//         console.log("This year is NOT a LEAP year");
//     }
// }
// leap(a);
// leap(b);
// leap(c);
// leap(d);
// leap(e);
// leap(f);
// leap(g);
// leap(h);
// leap(i);
// leap(6739712);




/* --------------------------------------------- Loops --------------------------------------------- */




// // for (var i=1; i<=50; i++){
// //     if (i%2 == 0){
// //         console.log(i);
// //     }
// // }
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// var i=1;
// while(i<=50){
//     if (i%2 == 0){ 
//         console.log(i);
//     }
//     i++;
// }

// for (var i=1; i<=50; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }

// for (var i=1; i<=50; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }
// for (var i=1; i<=50; i++){
//     if (i%2 != 0){
//         console.log(i);
//     }
// }

// for (var i=1; i<=100;i++){
//     if (i%3==0 && i%5==0){
//         console.log("Fizz Buzz");
//     }else if (i%3 == 0){
//         console.log("Fizz");
//      } else if (i%5 == 0){
//         console.log("Buzz");
//      } else {
//         console.log(i);
//      }
// }

// // function fubzz(number){
// //     var num = number;
// //     if (num%3==0 && num%5==0){
// //         console.log("Fizz Buzz");
// //     }else if (num%3 == 0){
// //         console.log("Fizz");
// //     } else if (num%5 == 0){
// //         console.log("Buzz");
// //     } else {
// //         console.log(num);
// //     }
// // }
// // for (var i=1; i<=100;i++){
// //     fubzz(i);
// // }
// for (var i=1; i<=100;i++){
//     function fubzz(number){
//         var num = number;
//         if (num%3==0 && num%5==0){
//             console.log("Fizz Buzz");
//         }else if (num%3 == 0){
//             console.log("Fizz");
//         } else if (num%5 == 0){
//             console.log("Buzz");
//         } else {
//             console.log(num);
//         }
//     }
//     fubzz(i);
// }

// // //My code
// // function fubzz(number1,number2){
// //     var start=number1, end=number2, counter=start;
// //     if (counter%3==0 && counter%5==0){
// //         console.log("Fizz Buzz");
// //     }else if (counter%3 == 0){
// //         console.log("Fizz");
// //     } else if (counter%5 == 0){
// //         console.log("Buzz");
// //     } else {
// //         console.log(counter);
// //     }
// //     counter++;
// //     if (counter > end){
// //     } else {
// //         fubzz(counter, end);
// //     }
// // }
// // fubzz(1,10);
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // fixed code **** IT IS BETTER
// //
// //
// //
// //************************************************** */
// function fubzz(number1, number2) {
//     var start = number1, end = number2, counter = start;
//     if (counter % 3 == 0 && counter % 5 == 0) {
//         console.log("Fizz Buzz");
//     } else if (counter % 3 == 0) {
//         console.log("Fizz");
//     } else if (counter % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(counter);
//     }
//     counter++;
//     if (counter <= end) {
//         fubzz(counter, end);
//     }
// }
// fubzz(1,10);
// //*********************************************************** */

// var a=1, b=7, c=28, d=99, dd=100 ,e=176 ,f=540 ,g=798 ,h=2964;
// // tokens are 100, 50, 20, 10, 5, 1
// function bank(money,tokens){
//     var mon=money; tk=tokens;
//     while(mon !=0){
//         if (mon-100 >= 0){
//             tk.push(100);
//             mon=mon-100;
//         } else if (mon-50 >= 0){
//             tk.push(50);
//             mon=mon-50;
//         } else if (mon-20 >= 0){
//             tk.push(20);
//             mon=mon-20;
//         } else if (mon-10 >= 0){
//             tk.push(10);
//             mon=mon-10;
//         } else if (mon-5 >= 0){
//             tk.push(5);
//             mon=mon-5;
//         } else  if (mon-1 >= 0){
//             tk.push(1);
//             mon=mon-1;
//         } else {
//             break;
//         }
//     }
//     //console.log(tk);
//     return tk;
// }
// var tokens=[];
// tokens = bank(a,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(b,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(c,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(d,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(dd,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(e,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(f,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(g,tokens);
// console.log(tokens);
// console.log(" ");
// //
// var tokens=[];
// tokens = bank(h,tokens);
// console.log(tokens);
// console.log(" ");

// var string="Welcome to Orange coding Academy BROTHER";
// function count(string, char){
//     var str=string;
//     var low=char.toLowerCase(), up=char.toUpperCase();
//     var counter=0;
//     for (var i=0; i<str.length; i++){
//         if (str[i]==low || str[i]==up){
//             counter++;
//         }
//     }
//     return counter;
// }
// var s=count(string, "o");
// console.log(s);

// for(var i=0; i<=20; i++){
//     console.log(i);
// }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for(var i=3; i<=29; i++){
//     if (i%2 != 0){
//         console.log(i);
//     }
// }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for(i=12; i>=-14; i--){
//     if(i%2==0){
//         console.log(i);
//     }
// }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for(i=50; i>=20;i--){
//     if(i%3 == 0){
//         console.log(i);
//     }
// }

// var string="CodingAcademy", array=[7, 500, 'KH404', 'black', 36];
// for(var i=0; i<array.length; i++){
//     console.log(array[i]);
// }
// for(var i=string.length; i>=0; i--){
//     console.log(string[i]);
// }

// var array=[7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
// var odd=[], even=[];
// // array.sort(function(a,b){return a-b;});
// // array.sort((a,b)=>(a-b));
// for(i=0; i<array.length; i++){
//     // array.sort(function(a,b){return a-b});
//     array.sort((a,b)=>(a-b));
//     if(array[i]%2==0){
//         even.push(array[i]);
//     } else{
//         odd.push(array[i]);
//     }
// }
// console.log(array);
// console.log(odd);
// console.log(even);
// // array.sort(function(a,b){return a-b});
// // array.sort((a,b)=>(a-b));
// // console.log(array);

// var Protein =['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
// var Grain =['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
// var Vegetable =['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
// var Beverage =['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']; 
// var Dessert =['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
// function meal(number){
//     for(var i=1; i<=number; i++){
//         var array=[];
//         array.push(Protein[Math.floor(Math.random()*6)]);
//         array.push(Grain[Math.floor(Math.random()*6)]);
//         array.push(Vegetable[Math.floor(Math.random()*6)]);
//         array.push(Beverage[Math.floor(Math.random()*6)]);
//         array.push(Dessert[Math.floor(Math.random()*6)]);
//         console.log(array); 
//     }
// }
// // meal(Math.floor(Math.random*11));
// meal(10);




//---------------------------------------------------End of JS-1----------------------------------------------------------------//
//---------------------------------------------------End of JS-1----------------------------------------------------------------//
//---------------------------------------------------End of JS-1----------------------------------------------------------------//
//---------------------------------------------------End of JS-1----------------------------------------------------------------//
//---------------------------------------------------End of JS-1----------------------------------------------------------------//
//---------------------------------------------------End of JS-1----------------------------------------------------------------//
//---------------------------------------------------End of JS-1----------------------------------------------------------------//




//---------------------------------------------------JS-Functions----------------------------------------------------------------//
//---------------------------------------------------JS-Functions----------------------------------------------------------------//




// var array=[1,-3,77,9,47,-67];
// function small(array){
//     var arr=array, min=arr[0];
//     for (var i=1; i<arr.length; i++){
//         min = Math.min(min,arr[i]);
//     }
//     return min;
// }
// var min = small(array);
// console.log(min);

// var string = "hello brother";
// function arrange(string){
//     var str=string.split("").sort().join("");
//     return str;
// }
// var str = arrange(string);
// console.log(str);

// var number = 8;
// function fact(number){
//     var num=number;
//     for (i=num-1; i>1; i--){
//         num=num*i;
//     }
//     return num;
// }
// var num= fact(number);
// console.log(num);

// var odd=9, even=10;
// function oddoreven(number){
//     if (number%2==0){
//         console.log("Even");
//     } else{
//         console.log("Odd");
//     }
// }
// oddoreven(odd);
// oddoreven(even);
// oddoreven(5);
// oddoreven(2);

// var array=[0,1,2,3,4,5,6,7,8,9];
// function even(array){
//     var arr=array,eve=[];
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] %2 == 0){
//             eve.push(arr[i]);
//         }
//     }
//     return eve;
// }
// var arr=even(array);
// console.log(arr);

// var array=[1,"5", "ali", 1,5,0,345,"78", "brother"];
// function nums(array){
//     var arr=array, newarr=[];
//     for(var i=0; i<arr.length; i++){
//         if (isNaN(arr[i] * 1) == false){
//             newarr.push(arr[i]*1);
//         }
//     }
//     console.log(newarr);
// }
// nums(array);
// nums([1,7,4545,-875,"343", "ali", 1, "brp", 12, 45, "ali"]);

// var number=8;
// function summ(number){
//     var num=number;
//     for (var i=num-1; i>0; i--){
//         num= num+i;
//     }
//     return num;
// }
// console.log(summ(number));
// console.log(summ(4));

// var array=[1,45,96,-3,13,199];
// function all(array){
//     var arr=array, min=arr[0], max=arr[0], avg=arr[0], len=arr.length;
//     for(var i=1; i<arr.length; i++){
//         min=Math.min(min,arr[i]);
//         max=Math.max(max,arr[i]);
//         avg=avg+arr[i];
//     }
//     avg=avg/len;
//     return [min, max, len, avg];
// }
// var arr=all(array);
// console.log(arr);
// var arr1= all([1,45,74,976,235,-85,445]);
// console.log(arr1);
// var arr2=all([7,13,3,77,100]);
// console.log(arr2);

// var year = 1989;
// function roman(number){
//     var num=number, rom="";
//     while(num != 0){
//         if (num-1000 >= 0){
//             rom = rom+"M";
//             num=num-1000;
//         } else if (num-900 >= 0){
//             rom = rom+"CM";
//             num=num-900;
//         } else if (num-500 >= 0){
//             rom = rom+"D";
//             num=num-500;
//         } else if (num-400 >= 0){
//             rom = rom+"CD";
//             num=num-400;
//         } else if (num-100 >= 0){
//             rom = rom+"C";
//             num=num-100;
//         } else if (num-90 >= 0){
//             rom = rom+"XC";
//             num=num-90;
//         } else if (num-50 >= 0){
//             rom = rom+"L";
//             num=num-50;
//         } else if (num-40 >= 0){
//             rom = rom+"XL";
//             num=num-40;
//         } else if (num-10 >= 0){
//             rom = rom+"X";
//             num=num-10;
//         } else if (num-9 >= 0){
//             rom = rom+"IX";
//             num=num-9;
//         } else if (num-5 >= 0){
//             rom = rom+"V";
//             num=num-5;
//         } else if (num-4 >= 0){
//             rom = rom+"IV";
//             num=num-4;
//         } else if (num-1 >= 0){
//             rom = rom+"I";
//             num=num-1;
//         }
//     }
//     return rom;
// }
// var num= roman(year);
// console.log(num);
// console.log(roman(1975));
// console.log(roman(345));
// console.log(roman(13496));
// console.log(roman(3546));
// console.log(roman(2002));

// var string ="Hello there, we are studying coding";
// function count(string){
//     str= string.split(" ");
//     return str.length;
// }
// var str= count(string);
// console.log(str);
// console.log(count("Hello there, what are you doing here"));

// var array=[3, 6, 34, 98, 23];
// function multi(array){
//     arr=array, len=arr.length;
//     for (var i=0; i<arr.length; i++){
//         arr[i] = arr[i]*len;
//     }
//     return arr;
// }
// var arr=multi(array);
// console.log(arr);
// console.log(multi([2,3,7,1,2,3,55,6]));

// var str1 = "CodingOrangeShool", str2="Ac", str3="hool" , str4="ange";
// function check(str1, str2){
//     var org=str1, end=str2, olen=org.length, elen=end.length;
//     if (org.lastIndexOf(end)== olen-elen){
//         return true;
//     } else {
//         return false;
//     }
// }
// var chk = check(str1,str2);
// console.log(chk); 
// var chk = check(str1,str3);
// console.log(chk); 
// var chk = check(str1,str4);
// console.log(chk); 
// var chk = check("well, hello there brother","her");
// console.log(chk); 
// var chk = check("well, hello there brother","llo");
// console.log(chk); 

// var string = "Coding";
// function repeat(string){
//     var str=[];
//     for (var i=0; i<string.length; i++){
//         str.push(string[i]);
//         str.push(string[i]);
//     }
//     return str.join("");
// }
// var str = repeat(string);
// console.log(str);

// var array =['ali', 'mazen', 'ahmad','khaled','brother'];
// function find(array, string){
//     if (array.indexOf(string) != -1){
//         return array.indexOf(string);
//     } else{
//         console.log("This item is not in your array");
//         return -1;
//     }
// }
// // console.log(array.indexOf("b"));
// console.log(find(array,"ali"));
// console.log(find(array,"ahmad"));
// console.log(find(array,"bro"));

// var array=[1,-19,56,7,-1,-5,-6,8,-11,32];
// function summ(array){
//     var sum=0;
//     for (var i=0; i<array.length; i++){
//         sum=sum+Math.abs(array[i]);
//     }
//     return sum;
// }
// var sun= summ(array);
// console.log(sun);




//---------------------------------------------------JS-IF----------------------------------------------------------------//
//---------------------------------------------------JS-IF----------------------------------------------------------------//




// var age=14;
// if (age>18){
//     console.log("You are an adult");
// } else {
//     console.log("You are NOT an adult");
// }
// var age2=19;
// if (age2>18){
//     console.log("You are an adult");
// } else {
//     console.log("You are NOT an adult");
// }
// var age3=18;
// if (age3>18){
//     console.log("You are an adult");
// } else {
//     console.log("You are NOT an adult");
// }

// var score=10;
// function sco(num){
//     if (num<=50){
//         console.log("You failed");
//     }
// }
// sco(score);
// var score=70;
// sco(score);
// var score=50;
// sco(score);

// var name1="john", name2="ali";
// function isjon(name){
//     if (name ==="john"){
//         console.log("Hello " + name);
//     }
// }
// isjon(name1);
// isjon(name2);

// var day1="Sunday", day2="Monday", day3="Saturday",day4="Friday";
// function isweek(day){
//     if (day !="Friday" && day != "Saturday"){
//         console.log("Week day");
//     } else{
//         console.log("WEEKEND");
//     }
// }
// isweek(day1);
// isweek(day2);
// isweek(day3);
// isweek(day4);

// var a=1,b=4;
// function even(num){
//     if (num%2==0){
//         console.log("Even number");
//     }
// }
// even(a);
// even(b);

// var a="a", b="1", c="A";
// function ischar(char){
//     if (isNaN(char*1) == true){
//         console.log("Its a char");
//     }
// }
// ischar(a);
// ischar(b);
// ischar(c);

// var list1=1, list2=[1,5,2], list3=[1,'a',4], list4="4g", list5=[1];
// function islist(list){
//     if (list.join != undefined){
//         console.log("It is an array");
//     } else {
//         console.log("NOT an array");
//     }
// }
// // console.log(list5.join)
// islist(list1);
// islist(list2);
// islist(list3);
// islist(list4);
// islist(list5);
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222
// // function islist(list){
// //     if (Array.isArray(list)==true){
// //         console.log("It is an array");
// //     } 
// //      else {
// //         console.log("NOT an array");
// //     }
// // }
// // islist(list1);
// // islist(list2);
// // islist(list3);
// // islist(list4);
// // islist(list5);

// var a=1, b=-1, c=23, d=-23;
// function posi(num){
//     if (num ==Math.abs(num)){
//         console.log("Positive");
//     } else{
//         console.log("Negative");
//     }
// }
// posi(a);
// posi(b);
// posi(c);
// posi(d);

// var a=1, b=-1, c=23, d=-23;
// function posi(num){
//     if (num ==Math.abs(num)){
//         console.log("Positive");
//     } else{
//         console.log("Negative");
//     }
// }
// posi(a);
// posi(b);
// posi(c);
// posi(d);

// var a=1,b=4,c=9;
// function multi3(num){
//     if (num%3==0){
//         console.log("Multi of 3");
//     } else{
//         console.log("NOT Multi of 3");
//     }
// }
// multi3(a);
// multi3(b);
// multi3(c);

// var a=2.8, b=3.0, c=3.7;
// function gpa(num){
//     if(num>=3.0){
//         console.log("You have a good GPA");
//     } else{
//         console.log("try harder");
//     }
// }
// gpa(a);
// gpa(b);
// gpa(c);

// var a="4fdie", b="gsdidvc8d", c="qgvdgk", d="gqkhfg23o487tr";
// function pass(pas){
//     if (pas.length>=8){
//         console.log("You password is strong");
//     } else{
//         console.log("try longer password");
//     }
// }
// pass(a);
// pass(b);
// pass(c);
// pass(d);

// var age1=12, age2=56, age3=88;
// function work(age){
//     if (age>=18 && age<=65){
//         console.log("You are Of a working age");
//     } else{
//         console.log("You are NOT Of a working age");
//     }
// }
// work(age1);
// work(age2);
// work(age3);

// var col1="red", col2="green", col3="blue", col4="yellow", col5="orange";
// function isprim(str){
//     if(str=="red" || str=="green" || str=="blue"){
//         console.log("is Primarry");
//     } else{
//         console.log("NOT Primarry");
//     }
// }
// isprim(col1);
// isprim(col2);
// isprim(col3);
// isprim(col4);
// isprim(col5);

// function isnum(num){
//     if (isNaN(num*1)==false){
//         console.log("anumber");
//     } else{
//         console.log("NOT a number");
//     }
// }
// isnum(1);
// isnum("3");
// isnum("f");
// isnum("gf");
// isnum(456);
// isnum(-56);
// isnum("0.654");
// isnum("3fg");




//---------------------------------------------------JS-ARRYS----------------------------------------------------------------//
//---------------------------------------------------JS-ARRYS----------------------------------------------------------------//



//IMPORTANT PLEASR SEE THIS
// array=[1,2,3,4,5];
// array.forEach(function(array){
//     console.log(array);
// });

// array[1,3,5,7,9];
// var arr=array.map(function(array){
//     return array*2;
// });
// console.log(arr);

// var array=[1,2,3,4,5,6,7,8,9,10];
// var arr= array.filter(function(array){
//     return array%2==0;
// });
// console.log(arr);

// var array=[1,4,9,3,6,2,0,12];
// var arr= array.reduce(function(sum, current){
//     return sum+current;
// },0);
// console.log(arr);

// var array=['apple', 'car', 'banana','air'];
// console.log(array.sort());

// var array=['apple', 'car', 'banana','air'];
// console.log(array.reverse());

// var array=['apple', 'car', 'banana','air'];
// var array2=[1,4,7,9,12,-87];
// console.log(array.concat(array2));

// var array=[1,2,3,4,5,6,7,8,9];
// function extract(array, start, end){
//     var arr= array.slice(start, end);
//     console.log(arr);
//     return arr;
// }
// var arr=extract(array,2,4);
// console.log(arr);

// var array=[1,2,3,4,5,6,7,8,9];
// function extract(array, start, end){
//     var arr= array.splice(start, end);
//     console.log(arr);
//     return arr;
// }
// var arr=extract(array,2,4);
// console.log(arr);

// var array=[1,2,3,4,5,6,7,8,9];
// function find(num){
//     var arr= array.indexOf(num);
//     // console.log(arr);
//     return arr;
// }
// var arr=find(5);
// console.log(arr);

// var array=[1,2,3,4,5,6,7,8,9];
// function stringing(array){
//     var arr= array.join("");
//     console.log(arr);
//     return arr;
// }
// var arr=stringing(array);
// console.log(arr);

// var array="123456789";
// function listing(array){
//     var arr= array.split("");
//     console.log(arr);
//     return arr;
// }
// var arr=listing(array);
// console.log(arr);

// var array=[1,2,3,4,5,6,7,8,9];
// function tall(array){
//     var arr= array.length;
//     console.log(arr);
//     return arr;
// }
// var arr=tall(array);
// console.log(arr);

// var arrays=[1,2,3,4,5,6,7,8,9];
// function print(arrays){
//   for (var array of arrays){
//     console.log(array)
//   }
// }
// print(arrays);

// var arrays=[1,2,3,4,5,6,7,8,9];
// function print(arrays){
//   for (var index in arrays){
//     console.log(arrays[index])
//   }
// }
// print(arrays);

// var array=[1,2,3,4,5,6,7,8,9];
// var string="123456789";
// function isarr(array){
//     if (Array.isArray(array)){
//         console.log("Is an array");
//     } else{
//         console.log("Is NOT an array");
//     }
// }
// isarr(array);
// isarr(string);

// var obj={0:1, 1:"A", 2:"df",3:56, length:4};
// function toarr(obj){
//     var arr=Array.from(obj);
//     console.log(arr);
// }
// toarr(obj);

// var array=Array.of(1,'ali',3,4,'bro');
// console.log(array);

// var array=[1,2,3,4,5];
// var arr=array.fill(0,0,3);
// console.log(arr);

// var array = [1, 2, 3, 4, 5];
// array.copyWithin(1, 0, 1);
// array.copyWithin(2, 0, 1);
// console.log(array); 




//---------------------------------------------------JS-LOOPS----------------------------------------------------------------//
//---------------------------------------------------JS-LOOPS----------------------------------------------------------------//




// for(var i=1; i<=10;i++){
//     console.log(i);
// }

// var i=1;
// while(i<=10){
//     console.log(i);
//     i++
// }

// var array=[1,2,3,4,5];
// for(var i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// for(var i=1; i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// var counter=0;
// for(var i=1; i<=10;i++){
//    counter=counter+i; 
// }
// console.log(counter);

// var array=[1,23,5,75,8,976];
// var max=array[0];
// for(var i=0; i<array.length; i++){
//     max = Math.max(max,array[i]);
// }
// console.log(max);

// var array=[1,23,5,75,8,976];
// var min=array[0];
// for(var i=0; i<array.length; i++){
//     max = Math.min(min,array[i]);
// }
// console.log(max);

// var array=[1,23,5,75,8,976];
// var avg=array[0];
// for(var i=1; i<array.length; i++){
//     avg=avg+array[i];
//     if(i==array.length-1){
//         avg=avg/array.length;
//     }
// }
// console.log(avg);

// var a=5;
// var b=1;
// for (var i =a; i>=1; i-- ){
//     b=b*i;
// }
// console.log(b);

// var lim=10;
// var fapo=[0,1];
// for(var i=2; ; i++){
//     fapo.push(fapo[i-2]+fapo[i-1]);
//     if (fapo[i]>=lim){
//         break;
//     }
//     console.log(fapo.join(" "));
// } 

// //using chatgpt because i really dont know
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// }
// function printPrimes(limit) {
//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }
// printPrimes(20); 

// var num=5;
// for (var i=0; i<= 12; i++){
//     console.log(num +" X " + i + " = " + num*i);
// }

// var array=[[1,2,3],[4,5,6],[7,8,9]]
// // console.log(array.join(",").split(",").join(" "));
// for (var i=0; i<array.length;i++){
//     for(var j=0; j<array[i].length; j++){
//         console.log(array[i][j]);
//     }
// }

// var array=[1,2,3,4,5];
// for(var i=array.length-1; i>=0; i--){
//     console.log(array[i]);
// }

// var array=[1,2,3,4,5,6,7,8];
// var range=[2,4];
// for(var i=range[0]; i<=range[1]; i++){
//     console.log(array[i]);
// }

// var array=[1,2,3,4,5,6,7,8];
// var step=2;
// for(var i=0; i<array.length; i=i+step){
//     console.log(array[i]);
// }

// var array=[1,2,3,4,5,6,7,8];
// var num=5;
// for(var i=0; i<array.length; i++){
//     if(array[i]==num){
//         console.log(true);
//         break;
//     } 
// }

// var array=[1,2,3,1,2,5,3,2,4,1,6,1,2,1,8,6,9,12,1];
// var num=1;
// var freq=0;
// for(var i=0; i<array.length; i++){
//     if(array[i]==num){
//         freq++;
//     } 
// }
// console.log(freq);




//---------------------------------------------------JS-OBJECTS----------------------------------------------------------------//
//---------------------------------------------------JS-OBJECTS----------------------------------------------------------------//




