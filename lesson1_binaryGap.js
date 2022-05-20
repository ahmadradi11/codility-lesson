
//3 solutions

//Solution 1: pure math
//trailing_zeroes=0.076s
//power of 2=0.72s
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let quotient
    let remainder
    let len = 0
    let max = 0
    let start = false

    for (let num = N; num >= 1; num /= 2) {
        remainder = Math.floor(num % 2)
        quotient = Math.floor(num / 2)
        if (remainder == 1) {
            start = true
            if (max < len) max = len
            len = 0
        } else if (remainder == 0) {
            if (start) len++
        }
    }
    return max
}

//Solution 2: pure math with filtering
//all 0.08s except 1 cases 0.072s(n=6291457=11000000000000000000001_2)
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let quotient
    let remainder
    let len = 0
    let max = 0
    let start = false
    let beforeIsOne = false

    for (let num = N; num >= 1; num /= 2) {
        remainder = Math.floor(num % 2)
        quotient = Math.floor(num / 2)

        if (beforeIsOne && remainder == 1) continue //check for consecutive 1
        if (remainder == 0 && !start) continue //check for trailing zeros

        if (remainder == 1) {
            beforeIsOne = true
            start = true
            if (max < len) max = len
            len = 0
        } else if (remainder == 0) {
            beforeIsOne = false
            if (start) len++
        }
    }
    return max
}

//Solution 3: using regex and javascript methods
//all cases 0.068s
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = (N).toString(2)
    let reg = /10+(?=1)/g //lookahead, X(?=Y), it means "look for X, but match only if followed by Y
    let arr = bin.match(reg)
    let max = 0
    if (arr != null)
        max = arr.map(a => a.length - 1).reduce((a, b) => Math.max(a, b))
    return max
}