//Q. Given a number x, find out if it is a prime number or not, use javascript and find out the difference between Next prime number after x and x

//Logic is to first check if that given number is prime or not
//Step 1. Create a function to check if it is a prime or not
//Step 2. Create a another function start traversing from n+1 (where n is given number) until the next prime number we get.
//Step 3. As we get next prime number return difference of that number and given number.

let num = 17;
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
