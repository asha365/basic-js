function sayLoveYou(){
    console.log('hello world')
    //console.log('hello bangladesh')
}
sayLoveYou();

function doubleIt(num){
    var result = num * 2; 
    console.log(result);
}

    doubleIt(5);
    doubleIt(50);
    
    function doubleIt(num){
        var result = num * 2; 
        return result;
    }
    var first = doubleIt(5);
    var second = doubleIt(100);
    total = first + second;
    //console.log(first, second);
    console.log(total);

    function add(num1, num2){
        var result = num1 + num2;
        return result;
    }
    var sum = add(15,17);
    console.log(sum);