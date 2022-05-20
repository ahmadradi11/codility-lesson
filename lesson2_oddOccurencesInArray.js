//Correctness 80%
//Performance 50%
//very slow solution, got timeout error for medium cases
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = A
    let target
    let pairIndex
    let result
    while (arr.length > 0) {
        target = arr.shift()
        pairIndex = arr.findIndex((element) => element === target)
        if (pairIndex == -1) {
            break
        }
        arr.splice(pairIndex, 1)
    }
    result = target
    return result
}

//Correctness 100%
//Performance 100%
//Detected time complexity: O(N) or O(N*log(N))
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = A
    let target
    let result
    let occurence = {}
    for (let i = 0; i < arr.length; ++i) {
        target = arr[i]
        if (target in occurence) occurence[target]++
        else occurence[target] = 1
    }
    result = parseInt(Object.keys(occurence).find(key => occurence[key] % 2 === 1))

    return result
}

