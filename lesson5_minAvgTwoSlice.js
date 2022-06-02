//Correctness 100%
//Performance 0%
//time complexity:O(N ** 3) 
// Analysis summary:The following issues have been detected: timeout errors.
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let n = A.length
    let minAveAtEachP = []
    let sum = 0, average, min
    for (let p = 0; p < n; p++) {
        sum = A[p]
        min = 100000000
        for (let q = p + 1; q < n; q++) {
            sum += A[q]
            average = sum / (q - p + 1)
            min = Math.min(average, min)
        }
        minAveAtEachP[p] = min
    }
    let minimalAve = minAveAtEachP.reduce((a, b, id) => Math.min(a, b))
    result = minAveAtEachP.indexOf(minimalAve)
    return result
}

//Correctness 100%
//Performance 100%
//time complexity:O(N) 
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length

    let minAve = 100000
    let ave, pos = 0

    for (let i = 0; i <= n - 2; i++) {
        ave = (A[i] + A[i + 1]) / 2
        if (ave < minAve) {
            pos = i
            minAve = ave
        }

        if (n - i >= 3) {
            ave = (A[i] + A[i + 1] + A[i + 2]) / 3
            if (ave < minAve) {
                pos = i
                minAve = ave
            }
        }
    }
    return pos
}

