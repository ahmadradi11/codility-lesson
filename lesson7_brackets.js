//Correctness 100%
//Performance 100%
//Detected time complexity: O(N))
function solution(S) {
    // Implement your solution here
        const s = S.split("")
        let stack = []
        let prev

        for(let i=0; i<s.length; i++){

            if((s[i] === "]" || s[i] === ")" || s[i] === "}") && (i===0 || stack.length === 0)) 
                return 0

            if(i===0) stack.push(s[i])

            if((s[i] === "[" || s[i] === "(" || s[i] === "{") && i !== 0) 
                stack.push(s[i])

            if(s[i] === "]" && stack.length > 0){
                prev = stack.pop()
                if(prev !== "[")
                    return 0
            }

            if(s[i] === ")" && stack.length > 0){
                prev = stack.pop()
                if(prev !== "(")
                    return 0
            }

            if(s[i] === "}" && stack.length > 0){
                prev = stack.pop()
                if(prev !== "{")
                    return 0
            }
        }

        if(stack.length === 0) return 1
        else return 0
}