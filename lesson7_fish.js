function solution(A, B) {
    // Implement your solution here
    let upStack = []
    let downStack = []
    let len = A.length

    for(i=0; i<len; ++i){
        if(B[i]=="1") 
            downStack.push(A[i])

        if(B[i]=="0" && downStack.length == 0)
            upStack.push(A[i])

        else if(B[i]=="0" && downStack.length > 0){
            for(let j=downStack.length-1; j>=0; j--){
                if(A[i]>downStack[j]) {
                    downStack.pop()
                }else break
            }

            if(downStack.length == 0) upStack.push(A[i])
        }
    }

    return upStack.length+downStack.length    
}
