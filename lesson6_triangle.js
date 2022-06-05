//Correctness 100%
//Performance 100%
//Detected time complexity: O(N*log(N))
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length
    A.sort((a, b) => a - b)
    for (let i = 0; i <= n - 3; i++) {
        let check1 = (A[i] + A[i + 1] > A[i + 2]) ? true : false
        let check2 = (A[i + 1] + A[i + 2] > A[i]) ? true : false
        let check3 = (A[i + 2] + A[i] > A[i + 1]) ? true : false

        if (check1 && check2 && check3) return 1
    }
    return 0
}