//time complexity:O(1)
function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let distToJump = Y - X
    let numOfJump = Math.floor(distToJump / D)
    if (distToJump % D != 0) numOfJump++

    return numOfJump
}