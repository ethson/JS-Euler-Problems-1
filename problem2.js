var prev_val=0;
var cur_val=0;
var FibN=1;
var sum=0;

while(FibN <= 4000000 - prev_val){
    cur_val = FibN;
    FibN += prev_val;
    prev_val = cur_val;
    console.log(FibN);
    if(FibN%2 === 0){ sum+=FibN;}
}

console.log(sum);
