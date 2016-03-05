/*
 * This only checks whether a number is a pallindrome
 * Only works up to 3 digit numbers
 */


//function could be replaced with conversion from int to string and then reversing
//string, then comparing both strings. Did the mathetical method for extra practice
function isItPallindrome(value){
    var numPowers = -1;     //-1 to offset overcounting
    var reverseNum = 0;
    var curVal = 0;

    for(i = 10; curVal < value; i *=10){
        curVal = value%i;
        numPowers++;
    }

    for(numPowers; numPowers >= 0; numPowers--){
        var reversedDigit = curVal%10;
        curVal = Math.floor(curVal/10);
        reverseNum += reversedDigit*Math.pow(10, numPowers);
    }


    if(value != reverseNum){
        return false;
    } else {
        return true;
    }
}



var ndigits = prompt("How many digits factors?");
var largestNum = Math.pow(10, ndigits) - 1;
var largestPallindrome = 0;

console.log(largestNum);

for(let i = largestNum; i > 0; i--){
    for(var j = largestNum; j > 0; j--){
        var product = i*j;
        if(isItPallindrome(product)){
            if(largestPallindrome < product){
                largestPallindrome = product;
            }
            break;
        }
    }
}

console.log(largestPallindrome);
