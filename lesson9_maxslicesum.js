// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//Kadane Algorithm
function solution(A) {
    // Implement your solution here
    let localMax = 0
    let globalMax = A[0]
    A.forEach(a => {
        localMax = Math.max(localMax + a, a)
        globalMax = Math.max(localMax, globalMax)
    })

    return globalMax
}
