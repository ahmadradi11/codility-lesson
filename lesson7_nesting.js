function solution(S) {
    // Implement your solution here
    const s = S.split("")
    let stack = []

    for(let i=0; i<s.length; i++){
        if(s[i] == "(") stack.push(s[i])
        else {
            if(stack.length == 0) return 0
            stack.pop()
        }
    }
    return (stack.length == 0)? 1 : 0
}
