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
    for (let j = i + 1; j < arr.length; j++) {

      // Step 4: If the current element is smaller than the minimum,
      // update min to store the index of this smaller element.
      // We do not swap immediately; we only track the smallest index.
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Step 5: After checking all remaining elements, min contains
    // the index of the smallest element in the unsorted portion.
    // Swap that element with the element at index i.
    // This places the smallest available element in its correct position.
    if (min !== i) {
      let temp = arr[i];  // Temporarily store the current element
      arr[i] = arr[min];  // Put the smallest element at index i
      arr[min] = temp;    // Put the old element at the minimum's position
    }

    // Step 6: Move to the next index.
    // The element at index i is now sorted, so we repeat the process
    // for the remaining unsorted elements.
  }

  // Step 7: Return the array after all elements have been sorted
  // in ascending order (smallest to largest).
  return arr;
}

console.log(selectionSort(arr));
// Output: [3, 6, 19, 41, 87, 88]