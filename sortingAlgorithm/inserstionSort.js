let arr = [19, 87, 6, 41, 3, 88];

function inserstionSort(arr) {

    // Step 1: Start from index 1 and move towards the end of the array.
    // We consider the first element (index 0) as already sorted.
    // Our goal is to take each next element and place it in its
    // correct position within the sorted portion of the array.
    for (let i = 1; i < arr.length; i++) {

        // Step 2: Store the current index in j.
        // We use j to move backwards and compare the current element
        // with the elements before it.
        let j = i;

        // Step 3: Check two conditions:
        // 1. j > 0 ensures we don't go outside the array.
        // 2. arr[j - 1] > arr[j] checks whether the previous element
        //    is greater than the current element.
        //
        // If both conditions are true, the elements are in the wrong
        // order and need to be swapped.
        while (j > 0 && arr[j - 1] > arr[j]) {

            // Step 4: Swap the adjacent elements.
            // This moves the smaller element one position towards
            // the beginning of the array.
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;

            // Step 5: Move j one position backwards.
            // This allows us to compare the element with the
            // previous elements and continue moving it left
            // until it reaches its correct position.
            j--;
        }

        // Step 6: After the while loop finishes, the current element
        // is now in its correct position.
        // The sorted portion of the array grows by one element.
    }

    // Step 7: Return the completely sorted array in ascending order.
    return arr;
}

console.log(inserstionSort(arr));

// Output: [3, 6, 19, 41, 87, 88]


/*
====================================================
TIME COMPLEXITY ANALYSIS
====================================================

1. Outer Loop:

   - The outer loop starts from index 1 and runs until
     arr.length - 1.
   - For an array containing n elements, it runs n - 1 times.
   - Therefore, the outer loop runs O(n) times.

2. Inner While Loop:

   - The while loop moves backwards to find the correct
     position for the current element.
   - In the best case, it may not execute at all.
   - In the worst case, it can execute up to i times
     for each outer loop iteration.

3. Total Iterations in Worst Case:

   - First pass: 1 iteration
   - Second pass: 2 iterations
   - Third pass: 3 iterations
   - ...
   - Last pass: n - 1 iterations

   Total = 1 + 2 + 3 + ... + (n - 1)

   Using the sum formula:

   Total = n * (n - 1) / 2

   Expanding:

   Total = (n² - n) / 2

   Ignore constants and lower-order terms:

   Final Worst Case Time Complexity = O(n²)


4. Best Case: O(n)

   - When the array is already sorted, the while loop
     condition fails immediately in every outer iteration.
   - The outer loop still executes n - 1 times.
   - Therefore, only O(n) comparisons are performed.

5. Average Case: O(n²)

   - On average, each element needs to move backwards
     through a portion of the already sorted elements.
   - This results in approximately a quadratic number
     of comparisons and swaps.

6. Worst Case: O(n²)

   - When the array is sorted in descending order,
     every new element needs to move towards the beginning.
   - The while loop performs the maximum number of
     iterations for each outer loop pass.


====================================================
SPACE COMPLEXITY ANALYSIS
====================================================

1. We are sorting the original array without creating
   another array.

2. The variables i and j are used to track loop positions.

3. The temp variable is used temporarily to swap two elements.

4. All these variables require a fixed amount of memory,
   regardless of the input array size.

5. No additional array or data structure is created.

   Final Auxiliary Space Complexity = O(1)


====================================================
FINAL COMPLEXITY SUMMARY
====================================================

Best Case Time Complexity    : O(n)
Average Case Time Complexity : O(n²)
Worst Case Time Complexity   : O(n²)
Auxiliary Space Complexity   : O(1)

*/