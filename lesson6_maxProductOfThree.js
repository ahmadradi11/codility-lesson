//Correctness 100%
//Performance 100%
//Detected time complexity: O(N*log(N))
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length
    A.sort((a, b) => a - b)

    let right = A[n - 1] * A[n - 2] * A[n - 3]
    let left = A[0] * A[1] * A[2]
    let mid = A[0] * A[1] * A[n - 1]

    let result = Math.max(left, mid, right)
    return result
}