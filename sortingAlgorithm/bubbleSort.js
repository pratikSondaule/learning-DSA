let arr = [19, 87, 6, 41, 3, 88];

function bubbleSort(arr) {

  // Step 1: Start from the last index and move towards the beginning.
  // After every pass, the largest unsorted element will reach its
  // correct position at the end of the array.
  for (let i = arr.length - 1; i >= 0; i--) {

    let didSwap = 0;

    // Step 2: Compare adjacent elements starting from the first index.
    // We only compare until index i because elements after i
    // are already sorted and don't need to be checked again.
    for (let j = 0; j <= i - 1; j++) {

      // Step 3: Check if the current element is greater than
      // the next element. If yes, they are in the wrong order.
      if (arr[j] > arr[j + 1]) {

        // Step 4: Swap the adjacent elements to put them in the
        // correct ascending order.
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;

        didSwap = 1;
      }

    }

    if(didSwap == 0){
      break;
    }

  }

  // Step 5: Return the array after all elements are sorted.
  return arr;
}

console.log(bubbleSort(arr));

// Output: [3, 6, 19, 41, 87, 88]

/*
TIME COMPLEXITY ANALYSIS:

1. Outer Loop:
   - The outer loop runs from arr.length - 1 to 0.
   - If the array contains n elements, it executes n times.

2. Inner Loop:
   - The inner loop does not execute n times in every iteration.
   - Its iterations decrease after each pass because the largest
     element reaches its correct position at the end.

   - Pass 1: n - 1 iterations
   - Pass 2: n - 2 iterations
   - Pass 3: n - 3 iterations
   - ...
   - Last pass: 1 iteration

3. Total Iterations:
   - Total = (n - 1) + (n - 2) + ... + 2 + 1
   - Using the sum formula:

     Total = n * (n - 1) / 2

   - Expanding: (n² - n) / 2
   - Ignore constants and lower-order terms.
   - Final Time Complexity = O(n²)

4. Best Case: O(n²)
   - Even if the array is already sorted, both loops execute
     all their iterations because there is no early stopping.

5. Average Case: O(n²)
   - The algorithm performs a quadratic number of comparisons
     for an average input.

6. Worst Case: O(n²)
   - When the array is sorted in descending order, maximum
     swapping is required, along with all comparisons.


SPACE COMPLEXITY ANALYSIS:

1. We are sorting the original array without creating another array.

2. The variables i and j are used to track loop positions.

3. The temp variable is used temporarily to swap two elements.

4. These variables require a fixed amount of memory regardless
   of the input array size.

5. No additional array or data structure is created.

   Final Auxiliary Space Complexity = O(1)
*/