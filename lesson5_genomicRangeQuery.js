function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = S.length
    let prefixMin = []
    let minFactor = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 }
    prefixMin[0] = minFactor[S.charAt(0)]
    for (let i = 1; i < n; i++) {
        prefixMin[i] = minFactor[S.charAt(i)]
        prefixMin[i] = Math.min(prefixMin[i - 1], prefixMin[i])
    }
    console.log(prefixMin)
}