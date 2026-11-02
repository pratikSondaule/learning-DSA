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

/*
TIME COMPLEXITY:   

1. Outer Loop:
   - The outer loop runs from 0 to n - 1.
   - If the array contains n elements, it executes n times.

2. Inner Loop:
   - The inner loop starts from the current index i.
   - Its iterations decrease after each pass because the smallest
     element is placed at the beginning.

   - Pass 1: n iterations
   - Pass 2: n - 1 iterations
   - Pass 3: n - 2 iterations
   - ...
   - Last pass: 1 iteration

3. Total Iterations:
   - Total = n + (n - 1) + (n - 2) + ... + 1
   - Using the sum formula:

     Total = n * (n + 1) / 2

   - Expanding: (n² + n) / 2
   - Ignore constants and lower-order terms.
   - Final Time Complexity = O(n²)

4. Best Case: O(n²)
   - We still need to iterate through all the elements to compare them,
     even if the array is already sorted.

5. Average Case: O(n²)
  The nested loops result in quadratic time complexity.

- Worst Case: O(n²)
  When the array is sorted in reverse order, we perform the maximum
  number of comparisons and swaps.

SPACE COMPLEXITY:

- O(1)
  We are sorting the array in place and only using a constant amount
  of extra space for variables like i, j, and temp.

  This means Selection Sort is space-efficient.
*/