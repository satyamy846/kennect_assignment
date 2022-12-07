let num =17;
function checkPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

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