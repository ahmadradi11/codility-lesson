// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const getMaxArr = A => {
        let arr = Array(A.length)
        let localMax = 0
        for (let i = 0; i < A.length; i++) {
            localMax = Math.max(localMax + A[i], 0)         
            arr[i] = localMax
        }
        return arr
    }

    let leftSlicedArr = A.slice(1, A.length - 2)
    let rightSlicedArr = A.slice(2, A.length - 1)
    // console.log(leftSlicedArr, rightSlicedArr)

    let leftArr = [0].concat(getMaxArr(leftSlicedArr))
    let rightArr =[0].concat(getMaxArr(rightSlicedArr.reverse()))
    // console.log(leftArr, rightArr)

    let sum, i = 0, j=rightArr.length-1, max = 0
    while (i < leftArr.length && j>=0) {
        sum = leftArr[i] + rightArr[j]
        max = Math.max(sum, max)
        i++
        j--
    }
  return max
}
