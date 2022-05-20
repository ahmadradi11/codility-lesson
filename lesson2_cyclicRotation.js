

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numRotation = K % A.length
    let needToShiftArray = A.slice(A.length - numRotation)
    let resultArr = needToShiftArray.concat(A.slice(0, A.length - numRotation))
    return resultArr
}