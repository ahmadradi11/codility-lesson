// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const getMaxArr = A => {
        let arr = Array(A.length)
        let localMax = 0
        let globalMax = A[0]
        for (let i = 0; i < A.length; i++) {
            if(i===0 && A[i]<0) localMax = A[i]
            else localMax = Math.max(localMax + A[i], localMax)
            
            globalMax = Math.max(globalMax, localMax)
            arr[i] = globalMax
        }
        return arr
    }

    let leftSlicedArr = A.slice(1, A.length - 2)
    let rightSlicedArr = A.slice(2, A.length - 1)
    // console.log(leftSlicedArr, rightSlicedArr)

    let leftArr = [0].concat(getMaxArr(leftSlicedArr))
    let rightArr = getMaxArr(rightSlicedArr.reverse()).reverse().concat([0])
    // console.log(leftArr, rightArr)

    let sum, i = 0, max = 0
    while (i < leftArr.length) {
        sum = leftArr[i] + rightArr[i]
        max = Math.max(sum, max)
        i++
    }

    return max
}


// [-2, -3, -4, 1, -5, -6, -7] => -1
 //[6, 1, 5, 6, 4, 2, 9, 4] =>26
