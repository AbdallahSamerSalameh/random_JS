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




