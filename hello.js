//three type of variable 

//numeric / number type of variable
 console.log(21);
console.log('Good Morning');

var myRoll= 19;
console.log(myRoll);

var age = 23;
console.log(age);

var seenAfter = 10;
console.log(seenAfter);

var myBestfriend= 3;
console.log(myBestfriend);

var favoriteFood= 5;
console.log(favoriteFood);

var bananaPrice= 12; 
console.log(typeof bananaPrice);

var seenAfter = 21; 
console.log(typeof seenAfter);

//string type variable
var name= "Asha Afrin";
console.log(typeof name);

var country = "Bangladesh"
console.log(typeof country);

var paragraph = "Hello world"
console.log(typeof paragraph);

//boolean type of variable

var isHot = true;
var isRich = false;
console.log(typeof isHot);

var itsBook = true;
var itsPen = false;
console.log(typeof itsBook);

var city = true;
var country = false;
console.log(typeof country);

//prove variable name case sensitive
var myname = 'asha afrin';
    myname = 'fatima';
    myname = 'afrin';
    myName = 'sathi islam';
    console.log(myname);

    //string UperCase LowerCase
    var promise = 'I promise i will work hard to become a programmer';
    console.log(promise); 
    console.log(promise.toUpperCase());
    console.log(promise.toLowerCase());
    // see word position 
    console.log(promise.indexOf('work'));
    //font split 
    console.log(promise.split('will'));
    console.log(promise.split(' '));

    //intiger variable & floating type variable
    var number1 = 25;           //intiger 
    var number2 = 15.5;         //float
    console.log(number1 + number2);

    //parseFloat 
    var number1 = 25;
    var number2 = 15.5;
    number2 = parseFloat(number2);
    console.log(number1 + number2);

    //parseInt
    var number1 = 25;
    var number2 = 15.5;
    number2 = parseInt(number2);
    console.log(number1 + number2);

    //using + sign
    var number1 = 25;
    var number2 = 15.5;
    number2 = +number2;
    console.log(number1 + number2);

    //number to string convert
    var number1 = 25;
    var number2 =  15.5;
    number1 = '' + number1;
    console.log(typeof number1);

    var number1 = 0.1;
    var number2 = 0.2;
    var total = number1 + number2;
    total = total.toFixed(4);
    console.log(total);