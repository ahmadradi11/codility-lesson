// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function Stack() {
    let stack = []
    this.push = function (el) {
        stack.push(el)
    }
    this.pop = function () {
        stack.pop()
    }

    return {
        ...this,
        get size() {
            return stack.length
        },
        get head() {
            return stack[this.size - 1]
        }
    }
}

function solution(A) {
    // Implement your solution here
    let stack = new Stack()
    let memo= {}

    A.forEach((a, i) => {
        if(!memo[a]) memo[a] = 1
        else memo[a]++

        if (stack.size && stack.head.val !== a) {
            stack.pop()
            return
        }
        stack.push({ "val": a, "pos": i })
    })

    return (stack.size &&  memo[stack.head.val]> A.length / 2 )?
        stack.head.pos : -1
}
