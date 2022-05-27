//Correctness 100%
//Performance 100%
//time complexity:O(N) or O(N * log(N))
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let memo = {}
    let result = -1

    for (const a of A) {
        memo[a] = true
    }

    for (let i = 1; i <= 1000000; i++) {
        if (!(i in memo)) {
            result = i
            break
        }
    }

    return result
}