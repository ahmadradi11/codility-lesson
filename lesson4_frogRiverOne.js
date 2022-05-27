//Correctness 100%
//Performance 100%
// time complexity:O(N)
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let memo = {}
    let perm = 0
    let result = -1

    //calculate permutation of X. perm=X!
    for (let i = 1; i <= X; i++) {
        perm += i
    }

    //take note if there position(A[k]) does not have leaves yet.
    //subtract the position from permutation of X until it becomes 0. Means that all position have been covered.
    for (let k = 0; k < A.length; k++) {
        if (!(A[k] in memo) && A[k] <= X) {
            memo[A[k]] = true
            perm -= A[k]
        }

        if (perm == 0) {
            result = k
            break
        }
    }

    return result
}