//Correctness 100%
//Performance 0%
//time complexity:O(N*M)
// Analysis summary:The following issues have been detected: timeout errors.
function solution(S, P, Q) {
    let n = S.length
    let prefixMin = []
    let pIndex, qIndex, min
    let result = []
    let minFactor = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 }
    for (let i = 0; i < n; i++) {
        prefixMin[i] = minFactor[S.charAt(i)]
    }
    for (let j = 0; j < P.length; j++) {
        pIndex = P[j]
        qIndex = Q[j]
        min = 5
        for (let k = pIndex; k <= qIndex; k++) {
            min = Math.min(prefixMin[k], min)
        }

        result[j] = min
    }
    return result
}

//Correctness 100%
//Performance 100%
//time complexity:O(N + M)
function solution(S, P, Q) {
    let pIndex, qIndex, min
    let result = []
    let str
    let factor = [['A', 1], ['C', 2], ['G', 3], ['T', 4]]

    for (let j = 0; j < P.length; j++) {
        pIndex = P[j]
        qIndex = Q[j]

        str = S.substring(pIndex, qIndex + 1)
        for (const [c, fac] of factor) {
            if (str.includes(c)) {
                min = fac
                break
            }
        }
        result[j] = min
    }
    return result
}