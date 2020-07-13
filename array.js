// array to variable convert

var friendAge = [23, 21, 19, 18, 17]
console.log(friendAge[2])


var friendAge = [23, 21, 19, 18, 17]
var sonaliAge =  friendAge[2];
console.log(sonaliAge)


//position of array
var friendAge = [23, 21, 19, 18, 17]
var position = friendAge.indexOf(18);
console.log(position)

//age update
var friendAge = [23, 21, 19, 18, 17]
 friendAge [1] = 45;
console.log(friendAge)

//array element push
var friendAge = [23, 21, 19, 18, 17]
friendAge.push(15);
friendAge.push(20);
console.log(friendAge)

//array element push
var friendAge = [23, 21, 19, 18, 17]
console.log(friendAge.length)
friendAge.push(15);
friendAge.push(20);
console.log(friendAge.length)

//array element pop
var friendAge = [23, 21, 19, 18, 17]
friendAge.pop(1);
console.log(friendAge)

//array add element add the beginning
var a = [23, 20, 40, 30, 35];
    a.unshift(19);
    console.log(a)

//secound way array add element add the beginning
var arr = [11, 12, 15, 16, 20];
 arr = [30, ...arr];
 console.log(arr)

 //frist way array remove element remove the beginning
 var ar = [20, 40, 43, 45, 56, 44];
    ar.shift(20);
    console.log(ar)
    
 //secound array remove element remove the beginning
 //js slice  
 var arr = [20, 40, 43, 45, 56, 44];
 var removed = arr.splice(2,2);
 console.log(removed)


 var teaLine = ['kalam', 'salam', 'balam'];
 teaLine.push('jalam');
 console.log(teaLine)


 var teaLine = ['kalam', 'salam', 'balam'];
 teaLine.unshift('malam');
 console.log(teaLine)


 var teaLine = ['kalam', 'salam', 'balam'];
 teaLine.pop('jalam')
 console.log(teaLine)

 var teaLine = ['kalam', 'salam', 'balam'];
 var part = teaLine.slice(1,2);
 console.log(part)
 
