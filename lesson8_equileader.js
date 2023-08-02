// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Task Score 100%
// Correctness 100%
// Performance 100%
function solution(A) {
    // Implement your solution here
    const getLeader = A =>{
        let memo = {}
        let leaderArr = Array(A.length)
        let occ, maxOcc, leader

        maxOcc = 0
        A.forEach((a, i)=>{
            occ = (memo[a] || 0) + 1
            memo[a] = occ
            if(occ > maxOcc){
                maxOcc = occ
                leader = a
            }

            if(!(maxOcc > Math.floor((i+1)/2)))
                leader = -1
            
            leaderArr[i] = leader
        })
        return leaderArr
    }

    let left = getLeader(A)
    let right = getLeader(A.reverse()).reverse()
    // console.log(left, right)

    let count = 0, i = 0
    while(i<left.length-1){
        if(left[i] !== -1 && left[i] === right[i+1])
            count++
        i++
    }
    return count
}
