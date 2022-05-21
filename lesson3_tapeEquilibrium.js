//slow solution. Time complexity O(N*N) 
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let frontArr, backArr
    const getSum = (a, b) => a + b
    let n = A.length
    let result, diff
    for (let i = 1; i <= n - 1; ++i) {
        frontArr = A.slice(0, i)
        backArr = A.slice(i, n)
        diff = Math.abs(frontArr.reduce(getSum, 0) - backArr.reduce(getSum, 0))
        if (result == undefined || result > diff) result = diff
    }

    return result
}

//also slow solution but better than above. Time complexity O(N*N) 
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length
    let result, diff
    let firstSum = 0, secondSum = 0

    for (let i = 1; i < n; ++i) {

        for (let j = 0; j < i; ++j) {
            firstSum += A[j]
        }

        for (let k = i; k < n; ++k) {
            secondSum += A[k]
        }

        diff = Math.abs(firstSum - secondSum)
        if (result == undefined || result > diff) result = diff
        firstSum = 0
        secondSum = 0
    }

    return result
}

//Correctness 100%
//Performance 100%
//Detected time complexity:O(N)
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let frontArr, backArr
    const getSum = (a, b) => a + b
    let n = A.length
    let result, diff
    let firstSum = A[0], secondSum = 0

    for (let k = 1; k < n; ++k) {
        secondSum += A[k]
    }
    result = Math.abs(firstSum - secondSum)

    for (let i = 2; i < n; ++i) {
        firstSum += A[i - 1]
        secondSum -= A[i - 1]
        diff = Math.abs(firstSum - secondSum)
        if (result > diff) result = diff
    }

    return result
}
