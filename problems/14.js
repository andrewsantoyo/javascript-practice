/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    dict1 = {}
    let max = 0;

    for (const num of numbers) {
        if (dict1[num] == null) {
            dict1[num] = 1;
        } else {
            dict1[num] += 1;
        }
        
        if (dict1[num] > max) {
            if (dict1[num] >= (numbers.length/2)) {
                max = num
            }
        }
    }
    return max
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};