//Correctness 83%
//Performance 66%
//for the input [1, 4, 1] the solution returned a wrong answer (got 1 expected 0).
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const getSum = (a, b) => a + b;
    let sumOfA = A.reduce(getSum, 0)

    let n = A.length
    let supposeSum = n * 0.5 * (2 + n - 1)

    result = (sumOfA == supposeSum) ? 1 : 0
    return result
}

//Correctness 100%
//Performance 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length
    let count = {}
    for (let i = 1; i <= n; ++i) {
        count[i] = 0
    }
    for (const element of A) {
        if (element in count) count[element]++
    }

    result = (Object.keys(count).some(e => count[e] == 0)) ? 0 : 1
    return result
}