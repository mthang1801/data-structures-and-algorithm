# JAVASCRIPT DATA STRUCTURES AND ALGORITHMS
## Chapter 1 : Big O Notation
### Objectives
- Motivate the need for sth like Big O Notation
- Describe what Big O Notation is 
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is

## Chapter 2 : Recursion 
### Objectives 
- Define what recursion is and how it can be used.
- Understand the two essential components of a recursive function.
- Visualize the call stack to better debug and understand recursive functions.
- Use helper method recursion and pure recursion to solve more difficult probles.

### Introduce 
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

## Chapter 3 : Searching Algorithms
- How do we search? Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want. (called linear search)
- **JS has search!**
  - There are many different search methods on arrays in javascript: 
    * indexOf
    * includes
    * find
    * findIndex

## Chapter 4 : Sorting Fundamental
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