/*
 * This is simply the union of two sets, those of multiples of 3 and multiples of 5
 * Sum of these sets should provide the answer, but due to inclusion exclusion principle
 * we must subtract the intersection of these sets.
 *
 * In other words add multiples of 3 and 5, subtract multiples of 15
 */
var solution3 = function(input){
    var sum = 0;
    var five_coeff = input/5;
    var three_coeff = input/3;
    var fifteen_coeff = input/15;

    for(i = 1; i < three_coeff; i++){
        if(i < five_coeff){
            sum += i*5;
        }
        sum+= i*3;
    }
    for(i = 1; i < fifteen_coeff; i++){
        sum-= i*15;
    }
    return sum;
};

var input = prompt("Enter the bounds");

start = new Date().getTime();
answer = solution3(input);
end = new Date().getTime();
console.log('Answer #3: ' + answer);
console.log('Runtime #3: ' + (end - start) + 'ms');
