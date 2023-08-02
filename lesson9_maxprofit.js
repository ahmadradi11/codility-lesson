// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let max = 0
    let min = A[0]

    for(let i=1; i<A.length; i++){
        max = Math.max(max, A[i]-min)
        if(min > A[i])
            min = A[i]
        // console.log(max, min)
    } 

    return max
}
