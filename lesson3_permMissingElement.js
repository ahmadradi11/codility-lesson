//Correctness 100%
//Performance 100%
//Detected time complexity: O(N) or O(N*log(N))
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length

    const getSum = (a, b) => a + b;
    let sumOfA = A.reduce(getSum, 0)
    let supposeSum = (n + 1) * 0.5 * (2 + (n + 1) - 1)
    let result = supposeSum - sumOfA
    return result
}