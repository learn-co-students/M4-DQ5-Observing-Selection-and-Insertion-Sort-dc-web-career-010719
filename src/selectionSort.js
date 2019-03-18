function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i=0; i<=arr.length - 1; i++) {
    let minIndex = i
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      let a = arr[i]
      let b = arr[minIndex]
      let c = 0
      c = a
      arr[i] = b
      arr[minIndex] = c
    }
  }
}
