// perfomance only 88%
function solution(H) {
    // Implement your solution here
    let block = 0
    let prevHeight = 0
    let checkedHeight = []
    let isInclude = false

    for(let i=0; i<H.length; i++){
        if(H[i] == prevHeight) continue
        if(H[i] > prevHeight) {
            block++
            checkedHeight.push(H[i])
            // console.log(H[i], checkedHeight)
        }
        else if(H[i] < prevHeight){
            isInclude = false
            for(let j=checkedHeight.length-1; j>=0; j--){
                if(H[i] < checkedHeight[j]) checkedHeight.pop()
                if(H[i] == checkedHeight[j]) isInclude = true
            }

            if(!isInclude) {
                block++
                checkedHeight.push(H[i])
                // console.log("less:", H[i], checkedHeight)
            }

        }
        prevHeight = H[i]
    }

    return block
}


//this code from https://www.honingjs.com/challenges/codility/stone-wall
//all evaluation 100%
//O(N)
function solution(H) {
    // Implement your solution here
    let block = 0
    let prevHeight = 0
    let checkedHeight = []
    let isInclude = false

    for(let i=0; i<H.length; i++){
        if(H[i] == prevHeight) continue
        if(H[i] > prevHeight) {
            block++
            checkedHeight.push(H[i])
            // console.log(H[i], checkedHeight)
        }
        else if(H[i] < prevHeight){
            isInclude = false
            for(let j=checkedHeight.length-1; j>=0; j--){
                if(H[i] < checkedHeight[j]) checkedHeight.pop()
                if(H[i] == checkedHeight[j]) isInclude = true
            }

            if(!isInclude) {
                block++
                checkedHeight.push(H[i])
                // console.log("less:", H[i], checkedHeight)
            }

        }
        prevHeight = H[i]
    }

    return block
}
