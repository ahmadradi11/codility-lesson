// Correctness 100%
// Performance 0%
// Detected time complexity:O(B-A)
// Analysis summary:
// The following issues have been detected: timeout errors.
// For example, for the input [0, 2000000000, 1] the solution exceeded the time limit.

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0
    for (let i = A; i <= B; i++) {
        if (i % K == 0) count++
    }

    return count
}

//Correctness 100%
//Performance 100%
//time complexity:O(1)
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0
    let countFromA, countFromB
    let remainderA = A % K, quotientA = A / K
    let remainderB = B % K, quotientB = B / K

    countFromA = Math.floor(quotientA)
    countFromB = Math.floor(quotientB)
    count = countFromB - countFromA

    if (remainderA == 0) count++

    return count
}