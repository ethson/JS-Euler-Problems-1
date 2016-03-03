/*
 * Recursive solution that checks for the smallest possible factor first.
 * Since it tries to find the smallest possible factor that is fully divisible this guarantees
 * that it will find a prime factor, as this would be by definition the first small
 * integer that results in mod 0.
 * When it finds one it reports the factor to the console, divides by that number to get a new number
 * to look for factors recursively, and then exits the loop.
 */
var findFactors = function(number){
    if(number === 1){
        console.log("1");
    } else {
        for(i = 2; i <= number; i++){
            if(number%i === 0){
                var factor = number/i;
                console.log(i + " ");
                findFactors(factor);
                i = number;
            }
        }
    }
};

findFactors(600851475143);
