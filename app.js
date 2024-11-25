/*
ini = "000"
target = "101" /length 3
i = 0
count = 2
*/

var minFlips = function(target) {
    let count = 0
    for(let i=0; i < target.length; i++){
        if(parseInt(target[i]) !== count % 2) {
             count++
        }
    }
    return count
};

//solution 2
function minFlips(target) {
    let flips = 0;
    let current = '0';

    for (const char of target) {
        if (char !== current) {
            flips++;
            current = char;
        }
    }

    return flips;
}