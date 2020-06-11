# JAVASCRIPT DATA STRUCTURES AND ALGORITHMS
<h2> Chapter 1 : Big O Notation</h2>
<ul>
  <li>Motivate the need for sth like Big O Notation</li>
  <li> Describe what Big O Notation is </li>
  <li> Simplify Big O Expressions</li>
  <li> Define "time complexity" and "space complexity"</li>
  <li> Evaluate the time complexity and space complexity of different algorithms using Big O Notation</li>
  <li> Describe what a logarithm is</li>
</ul>

<h2> Chapter 2 : Recursion </h2>
<h4> Objectives </h4>
- Define what recursion is and how it can be used.
- Understand the two essential components of a recursive function.
- Visualize the call stack to better debug and understand recursive functions.
- Use helper method recursion and pure recursion to solve more difficult probles.

<h4> Introduce </h4>
- What is recursion? A **process**( a function in our case) that **call itself**
- In almost all program languages, there is a built in data structure that manages what hanppens when functions are invoked (It's named **call stack**).
  * **About call stack** 
    - It's stack in data structure.
    - Any time a function is invoke it is placed (pushed) on the top of the call stack
    - When JS sees the returns ****key workd** or when the function ends, the compiler will remove(pop).
    * **Brieftly**
      - You're used to functions being pushed on the call stack and popped off when they are done.
      - When we write recursive functions, we keep pushing new functions onto the call stack!

- How recursive functions work?\
Invoke the **same** function with a different input ultil reaching to base case.

<h2> Chapter 3 : Searching Algorithms</h2>
- How do we search? Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want. (called linear search)
- **JS has search!**
  - There are many different search methods on arrays in javascript: 
    * indexOf
    * includes
    * find
    * findIndex

## Chapter 4 : Sorting Algorithms Fundamental
- Sorting is the process of rearanging the items in a collection(e.g array) so that the item are in some kind of order.
  + Example : 
    * Sorting numbers from smallest to largest
    * Sorting names alphabetically
    * Sorting movies based on release year
    * Sorting movies based on revenue
- Sorting is an incredibly common task, so it's good to know how it works.
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages.
- Elementary Sort : 
  1. Bubble sort.
  2. Selection sort.
  3. Insertion sort.
- Compare Bubble, Selection, Insertion sort

| Algorithms | Time Complexity(Best) | Time Complexity(Avg) | Time Complexity(Worst)| Space Complexity |
|------------|-----------------------|----------------------|---------------------- | ---------------- |
| Bubble Sort| O(n)                  | O(n<sup>2</sup>)     | O(n<sup>2</sup>)      |     O(1)         |
| Insertion Sort| O(n)               | O(n<sup>2</sup>)     | O(n<sup>2</sup>)      |     O(1)         |
| Selection Sort| O(n<sup>2</sup>)   | O(n<sup>2</sup>)     | O(n<sup>2</sup>)      |     O(1)         |

* **Shortly**: 
  + Sorting is fundamental!
  + Bubble sort, selection sort, insertion sort, are all roughly equivalent
  + All have average time complexities that are quadratic
  + We can do better... but we need more complex algorithms!

<h2> Chapter 5 : Intermidiate Sorting Algorithms</h2>
<h4> Why? </h4>

- The sorting algorithms we've learned so far don't scale well.
- There is family of sorting algorithms that can improve time of complexity from O(n<sup>2</sup>) to O(nlogn).
- The more efficient algorithms are much less simple, and generally take a longer time to understand
<h4> 1.Merging Arrays</h4>

  - In order to implement merge sort, it's useful to first implement a function responsible for merging sort.
  - Given two arrays which are sorted, this helper function should create a new array, which is also sorted, and consists of all of the elements in the two input arrays.
  - This function should run in **O(n + m)** time and **O(n + m)** space and **should not** modify the parameters passed to it.\

<h4> 2.Quick sort </h4>
  - In order to implement merge sort, it's useful to first implement a function responsible for merging sort.
  - Given two arrays which are sorted, this helper function should create a new array, which is also sorted, and consists of all of the elements in the two input arrays.
  - This function should run in **O(n + m)** time and **O(n + m)** space and 
  - The order of element on either side of the pivot doesn't matter!
  - The helper should do this **in place**, that is, it should not create a new array
  - When complete, helper should return the index of the pivot.
  **Picking a pivot**
  - The runtime of quick sort depends on parts on how one selects the pivot
  - Ideally, the pivot should be chosen so that it's roughly the median value in data set you are setting.
  - For simplicity, we'll always choose the pivot to be the first element.

<h4> 3.Radix sort </h4>
<ul>
  <li>Radix sort is a special sorting algorithm that works on lists of numbers</li>
  <li>It nerver makes comparisions between elements</li>
  <li>It exploits the fact that information about the size of a number is encoded in the number of digits</li>
  <li>More digits means the bigger number!</li>
</ul>

<h3> Big O of Merge Sort </h3>

  <table style="text-align:center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Time of complexity (Best)</th>
        <th>Time of complexity (Avg)</th>
        <th>Time of complexity (worst)</th>
        <th>Space complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Merge Sort</td>
        <td>O(n logn)</td>
        <td>O(n logn)</td>
        <td>O(n logn)</td>
        <td>O(n)</td>
      </tr>
      <tr>
        <td>Quick Sort</td>
        <td>O(n logn)</td>
        <td>O(n logn)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(logn)</td>
      </tr>
      <tr>
        <td>Radix Sort</td>
        <td>O(kn)</td>
        <td>O(kn)</td>
        <td>O(kn)</td>
        <td>O(n + k)</td>
      </tr>
    </tbody>
  </table>


