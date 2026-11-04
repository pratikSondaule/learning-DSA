let arr = [19, 87, 6, 41, 3, 88];

function mergeSort(arr) {

    // Step 1: Base Condition
    // If the array contains 0 or 1 element, it is already sorted.
    // We return the array because there is no need to divide it further.
    //
    // This condition is important because it stops the recursion.
    if (arr.length <= 1) {
        return arr;
    }

    // Step 2: Find the middle index of the array.
    // Math.floor() removes the decimal part if the array has
    // an odd number of elements.
    //
    // Example: If array length is 5, mid = Math.floor(5 / 2) = 2.
    let mid = Math.floor(arr.length / 2);

    // Step 3: Divide the original array into two parts.
    // slice(0, mid) takes elements from index 0 up to mid - 1.
    // slice(mid) takes all elements starting from mid.
    //
    // We recursively call mergeSort() on both halves.
    // Each half will continue dividing until it contains
    // only one element.
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // Step 4: Once both halves are sorted, pass them to merge().
    // The merge() function combines both sorted arrays
    // into one sorted array.
    return merge(left, right);

}


// This function combines two already sorted arrays
// and returns one completely sorted array.
function merge(left, right) {

    // Step 1: Create an empty array to store the sorted elements.
    let temp = [];

    // Step 2: Create two pointers.
    // i tracks the current position in the left array.
    // j tracks the current position in the right array.
    let i = 0;
    let j = 0;

    // Step 3: Compare elements from both arrays.
    // Continue while both arrays still have elements to compare.
    while (i < left.length && j < right.length) {

        // Step 4: Compare the current elements of both arrays.
        // If the left element is smaller, add it to temp
        // and move the left pointer forward.
        if (left[i] < right[j]) {
            temp.push(left[i]);
            i++;

        } else {

            // Otherwise, add the right element to temp
            // and move the right pointer forward.
            temp.push(right[j]);
            j++;
        }
    }

    // Step 5: One of the arrays might still contain elements.
    // Since both input arrays are already sorted, we can
    // directly append the remaining elements.
    //
    // left.slice(i) returns the remaining elements of the left array.
    // right.slice(j) returns the remaining elements of the right array.
    //
    // Spread operator (...) adds all remaining elements to temp.
    return [...temp, ...left.slice(i), ...right.slice(j)];
}


// Step 6: Call mergeSort() with the original array.
console.log(mergeSort(arr));

// Output: [3, 6, 19, 41, 87, 88]


/*
====================================================
TIME COMPLEXITY ANALYSIS
====================================================

Merge Sort uses the Divide and Conquer approach.

It divides the array into smaller halves, sorts those halves,
and then merges them back together.


1. DIVIDING THE ARRAY:

   - In every recursive call, the array is divided into
     two smaller arrays.
   - Each division reduces the array size approximately by half.

   Example:

   [19, 87, 6, 41, 3, 88]

                  |
          -----------------
          |               |
       [19, 87, 6]     [41, 3, 88]

          |               |
       ---------       ---------
       |       |       |       |
     [19]   [87, 6]  [41]   [3, 88]

   - This process continues until every array contains
     only one element.

   - The number of times we can divide n by 2 is log₂(n).

   Therefore, the recursion depth is O(log n).


2. MERGING THE ARRAYS:

   - After dividing, we start merging the smaller arrays.
   - During merging, we compare elements from the left
     and right arrays.
   - Each element is added to the resulting array once.

   - For n elements, merging all elements at one level
     takes O(n) time.

   - Even though there are multiple recursive levels,
     the total number of elements processed at each
     level is approximately n.

   Therefore, merging at each level takes O(n) time.


3. TOTAL TIME COMPLEXITY:

   - Number of levels = log n
   - Work performed at each level = n

   Total = n * log n

   Final Time Complexity = O(n log n)


4. BEST CASE: O(n log n)

   - Even if the array is already sorted, Merge Sort
     continues dividing the array into smaller halves.
   - It also continues merging those halves.
   - Therefore, the time complexity remains O(n log n).


5. AVERAGE CASE: O(n log n)

   - The array is divided into halves and merged
     regardless of the original arrangement of elements.
   - Therefore, the time complexity remains O(n log n).


6. WORST CASE: O(n log n)

   - Even if the array is sorted in descending order,
     the algorithm follows the same divide-and-conquer process.
   - The number of division levels and merging operations
     remains approximately the same.

   Therefore, the time complexity remains O(n log n).


====================================================
SPACE COMPLEXITY ANALYSIS
====================================================

1. slice() METHOD:

   - We use slice() to create new left and right arrays.
   - These are additional arrays that require memory.

2. TEMP ARRAY:

   - Inside merge(), we create an empty temp array.
   - It stores the sorted elements while merging.
   - In total, temporary arrays can hold n elements
     at a time during a merge level.

3. RECURSION STACK:

   - Every recursive call is stored in the call stack.
   - The array is divided approximately log n times.
   - Therefore, recursion requires O(log n) stack space.

4. TOTAL SPACE COMPLEXITY:

   - Temporary arrays: O(n)
   - Recursion stack: O(log n)

   Total = O(n) + O(log n)

   Since O(n) grows faster than O(log n), we ignore
   the lower-order term.

   Final Auxiliary Space Complexity = O(n)


====================================================
FINAL COMPLEXITY SUMMARY
====================================================

Best Case Time Complexity    : O(n log n)
Average Case Time Complexity : O(n log n)
Worst Case Time Complexity   : O(n log n)
Auxiliary Space Complexity   : O(n)

====================================================
*/