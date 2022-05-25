//Correctness 100%
//Performance 100%
// time complexity:O(N + M)
function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = {}
    let maxCounter = { 'max': 0, 'maxCnt': 0 }
    let max = 0
    let result = []

    for (let i = 1; i <= N; i++) {
        counter[i] = { 'value': 0, 'maxCnt': 0 }
    }

    for (let x of A) {
        if (x >= 1 && x <= N) {
            if (counter[x].maxCnt < maxCounter.maxCnt) {
                counter[x].value = maxCounter.max + 1
                counter[x].maxCnt = maxCounter.maxCnt
            }
            else counter[x].value++

            if (counter[x].value > max)
                max = counter[x].value
        }
        if (x == N + 1) {
            maxCounter.max = max
            maxCounter.maxCnt++
        }
    }

    for (let [x, { value, maxCnt }] of Object.entries(counter)) {
        if (maxCnt < maxCounter.maxCnt) {
            value = maxCounter.max
        }

        result[parseInt(x) - 1] = value
    }
    return result
}
