function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      const swap = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = swap;
      j--;
    }
    ++i;
  }
  return arr;
}
