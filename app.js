// Chapter 38 to 42
// Task # 01

// function one(a,b){
//     var c = a +++ b;
//     alert(c)
// }
// one(5,6)

// Task # 02
 

// function two(){
//     var year;
//     year = prompt("Enter any Year");
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
// 		{
// 			alert(year+" is a leap year");  
// 		}
// 		else
// 		{
// 			alert(year+" is not a leap year");  
// 		}
// }
// two()

// Task # 03

// JavaScript program to find the area of a triangle

// let a = +prompt('Enter side1: ');
// let b = +prompt('Enter side2: ');
// let c = +prompt('Enter side3: ');

// var S;
// function three(){
// S = (a + b + c)/2;
// }
// three()
// function three2(){
// var area =  Math.sqrt(S*((S-a)*(S-b)*(S-c)));
// alert("Area of Triangle is " + area);
// }
// three2()

// Task # 04

//     var a= +prompt("Enter 1st Subject Marks");
//     var b= +prompt("Enter 2nd Subject Marks");
//     var c= +prompt("Enter 3rd Subject Marks");
//     var A;
// function avg(){
//      A = (a + b + c)/3;
//      alert("Average Marks is " +A)
//     }

// function perc(){
//     var B = a + b + c;
//     var full = 300;
//     var pert = ((B/full)*100)
//     alert("Peercantage is "+pert +"%")
// }
// function main(){
// avg()
// perc()
// }
// main();


// Task # 05
// function find_index(collection, item) {
//     for (var i = 0; i < collection.length; i++) {
//         if (collection[i] === item) {
//             return i;
//         }
//     }
//  };
//  find_index([5,4,3,2,1], 5)

// Task # 06

// function vowels(){
// var string = prompt("Enter Any String");
// string = string.replace( /[aeiou]/g, '' );
// alert(string);
// }
// vowels()


// Task # 07

// function findOccurrences() {
//     var str = prompt("enter any String")
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//   var C = str.charAt(count)
//     return C
//   }
  
//   console.log(findOccurrences());


// Task # 08

// var a = prompt("Enter distance between two cities");
// function Meter(){
// var meter = a * 1000;
// alert("Distance between two cities in meter is " +meter)
// }
// Meter()

// function centimeter(){
//     var cent = a * 1000 * 100;
//     alert("Distance between two cities is centimeter is " +cent)
// }
//  centimeter()

//  function feet(){
//     var feet = a * 3280.84;
//     alert("Distance between two cities in feet is " +feet)
// }
// feet()

// function inches(){
//     var inches = a *39370.08;
//     alert("Distance between two cities in inches is " +inches)
// }
// inches()


// Task # 09

// var a = prompt("enter Working Hour");
// if(a>40){
//     var overtime = a-40;
//     var pay = overtime*12
//     alert("Overtime Pay is " + pay);
// }
// else{
//     alert("You have to work more than 40 hours to get overtime pay")
// }


// Task # 10

// function currency(){
//     var a = prompt("Enter Your Amount");
//     var b = (Math.floor(a/100))
//    var c = Math.floor((a%100)/50)
//    var d=(Math.floor(((a%100)%50)/10))
//    var e = Math.floor((a%100)%50)%10
//    alert("you will have "+b +" hundred notes " +c +" fifty notes "+d+" ten notes and " +e +" rupees ")
// }
// currency()



// Chapter # 49 to 52

// Task # 02
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }





//  DOM

// var a = document.getElementById("main-content");
// var b = a.childNodes;
// var c= document.getElementsByClassName("render").innerHTML;
// var d= document.getElementById("first-name").value;
// var e= document.getElementById("last-name").value;
// var f= document.getElementById("email").value;
// var g = document.getElementById("form-content").nodeType;
// var h = document.getElementById("last-name");
// h.nodeType;
// h.hasChildNodes();




// var textnode = document.createTextNode("childupdate");
// var item = document.getElementById("last-name").childNodes;
// item.replaceChild(textnode, item.childNodes);


// var A = document.getElementById('main-content');
// var firstChild = A.firstChild.nodeName;
// var last = A.lastChild.nodeName;
// console.log(firstChild);
// console.log(last);


// var x = document.getElementById("email")
// x.parentNode.nodeName;
// x.parentNode.nodeType;



// TAsk #03 chapter# 43 

// function raw(){
// document.getElementById("row1").remove()
// }
// function raw1(){
//     document.getElementById("row2").remove()
//     }

// function raw2(){
//     document.getElementById("row3").remove()
//     }
// function raw3(){
//     document.getElementById("row4").remove()
//     }



