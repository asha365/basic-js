//student details 
var student = {id: 121, phone: 17445, name: 'abir'};
var student2 = {id:131, phone:457, name:'mahi'};

console.log(student);
console.log(student2);

var student = {id: 121, phone: 17445, name: 'abir'};
var student2 = {id:131, phone:457, name:'mahi'};
var phoneNo = student2.phone;
console.log(phoneNo);

//student new value add
var student = {id: 121, phone: 17445, name: 'abir'};
var student2 = {id:131, phone:457, name:'mahi'};
student2.cinema = 'ogni2';
student2['cinema'] = 'smart lady';
console.log(student2);



//update phone no way-1
var student = {id: 121, phone: 17445, name: 'abir'};
var student2 = {id:131, phone:457, name:'mahi'};
student2.phone = 333836;
console.log(student2);

//update phone no way-2
var student = {id: 121, phone: 17445, name: 'abir'};
var student2 = {id:131, phone:457, name:'mahi'};
student2 ['phone'] = 333565756836;
console.log(student2);

//update phone no way-3
var student = {id: 121, phone: 17445, name: 'abir'};
var student2 = {id:131, phone:457, name:'mahi'};
var phonePropName ='phone';
student2 [phonePropName] = 333111;
console.log(student2);
    
