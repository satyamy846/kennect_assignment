//Q. Given a number x, find out if it is a prime number or not, use javascript and find out the difference between Next prime number after x and x
let num =17;
//it will check the number is prime or not
function checkPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
// if it is prime then it will search the next prime number and return that number
function nextprimediff(num){
    let i=num+1;
    let flag =1;
    while(flag){
        if((checkPrime(i))){
            flag = 0;
            break;
        }
        else{
            i++;
        }
    }
    return i-num;
}

let ans = nextprimediff(num);
console.log("ans = ",ans);
