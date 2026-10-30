let arr = [19, 87, 6, 41, 3, 88];

function selectionSort(arr) {

  // Step 1: Start from the first index and move towards the end.
  // In each iteration, we want to place the smallest available
  // element at the current index (i).
  for (let i = 0; i < arr.length; i++) {

    // Step 2: Assume the element at the current index (i)
    // is the smallest element in the remaining unsorted array.
    // For example, when i = 0, we initially assume 19 is the smallest.
    let min = i;

    // Step 3: Traverse the remaining elements to find a smaller value.
    // We start from i + 1 because elements before i are already sorted.
    // We compare each element with the current minimum element.
    for (let j = i; j < arr.length; j++) {
      // Step 4: If the current element is smaller than the minimum,
      // update min to store the index of this smaller element.
      // We do not swap immediately; we only track the smallest index.
      if (arr[j] < arr[min]) {
        let temp = arr[j];  // Temporarily store the current element
        arr[j] = arr[min];  // Put the smallest element at index j
        arr[min] = temp;    // Put the old element at the minimum's position
      }

    }
  }

  return arr;
}

console.log(selectionSort(arr));
// Output: [3, 6, 19, 41, 87, 88]