// Correctness 100%
// Performance 20%
// Detected time complexity:O(N ** 2)
// Analysis summary:The following issues have been detected: timeout errors.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length
    let p
    let count = 0
    let result
    for (let i = 0; i < n; i++) {
        p = A[i]
        if (p == 0) {
            for (let j = i + 1; j < n; j++) {
                if (count == 1000000000) {
                    count = -1
                    break
                }
                count += A[j]
            }
        }
    }
    result = count
    return result
}

//Correctness 100%
//Performance 100%
//time complexity:O(N) 
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length
    let count = 0, numOfZero = 0
    let result
    for (let i = 0; i < n; i++) {
        if (A[i] == 0) {
            numOfZero++
            for (let j = i + 1; j < n; j++) {
                if (A[j] == 0) numOfZero++
                count += A[j] * numOfZero

                if (count > 1000000000) {
                    count = -1
                    break
                }
            }
            break
        }
    }
    result = count
    return result
}

