/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    var currentMaxIndex = -1;
    var lastMaxDivisibility = -1;
    
    for (let d = 0; d < divisors.length; d++) {
        let divisibility = 0;

        for (let n = 0; n < nums.length; n++) {
            if (nums[n] % divisors[d] == 0) {
                divisibility += 1;
            }
        }

        if ((divisibility == lastMaxDivisibility && divisors[d] < divisors[currentMaxIndex]) || divisibility > lastMaxDivisibility) {
            currentMaxIndex = d;
            lastMaxDivisibility = divisibility; 
        }
    }

    return divisors[currentMaxIndex]
}

var nums = [56,22,79,41,8,39,81,59,74,14,45,49,15,10,28,16,77,22,65,8,36,79,94,44,80,72,8,96,78];
var divisors = [39,92,69,55,9,44,26,76,40,77,16,69,40,64,12,48,66,7,59,10,33,72,97,60,79,68,25,63];

console.log(maxDivScore(nums, divisors));