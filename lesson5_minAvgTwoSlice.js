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
            console.log(p, q, average, min)
        }
        minAveAtEachP[p] = min
    }
    let minimalAve = minAveAtEachP.reduce((a, b, id) => Math.min(a, b))
    result = minAveAtEachP.indexOf(minimalAve)
    console.log(minimalAve, result)
    return result
}