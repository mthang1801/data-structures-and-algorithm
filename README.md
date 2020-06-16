<h1>JAVASCRIPT DATA STRUCTURES AND ALGORITHMS</h1>

![Data-structures-and-algorithms](https://miro.medium.com/max/2560/0*VipVYAeCBQSqs3NC.jpg)

<h2><strong>SECTION 1 : ALGORITHMS</strong> <h2>

<h3> Chapter 1 : Big O Notation</h3>

![Bog-O-Notation](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)
<ul>
  <li>Motivate the need for sth like Big O Notation</li>
  <li> Describe what Big O Notation is </li>
  <li> Simplify Big O Expressions</li>
  <li> Define "time complexity" and "space complexity"</li>
  <li> Evaluate the time complexity and space complexity of different algorithms using Big O Notation</li>
  <li> Describe what a logarithm is</li>
</ul>

<h3> Chapter 2 : Recursion </h3>

![Recursion](https://miro.medium.com/max/1200/1*gSHrSNZK0bx-X7m1RraA6A.jpeg)
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

<h3> Chapter 3 : Searching Algorithms</h3>
- How do we search? Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want. (called linear search)
- **JS has search!**
  - There are many different search methods on arrays in javascript: 
    * indexOf
    * includes
    * find
    * findIndex

![Searching-Algorithms](https://miro.medium.com/max/981/1*sav5YXtt9R_3jmw7TBcSMg.png)


<h3> Chapter 4 : Sorting Algorithms Fundamental</h3>
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


* **Shortly**: 
  + Sorting is fundamental!
  + Bubble sort, selection sort, insertion sort, are all roughly equivalent
  + All have average time complexities that are quadratic
  + We can do better... but we need more complex algorithms!

<h3> Chapter 5 : Intermidiate Sorting Algorithms</h3>
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
  - This function should run in <strong>O(n + m)</strong> time and <strong>O(n + m)</strong> space and 
  - The order of element on either side of the pivot doesn't matter!
  - The helper should do this <strong>in place</strong>, that is, it should not create a new array
  - When complete, helper should return the index of the pivot.
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

<h4> Big O of Merge Sort </h4>

  <table>
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

<h2><strong>SECTION 2 : DATA STRUCTURES</strong></h2>
<div>
  <p><strong>Define: </strong>Data stuctures are collections of values, the relationship among them, and the functions or operations that can be applied to the data</p>
  <p>Different data structures excel at defferent things. Some are hightly specialized, while others (like arrays) are more generally used.</p>
</div>
<h2>Contents</h2>
<h3> 1. Class Syntax  </h3>

<h3> 2. Singly Linked Lists </h3>
  
<div>
  <p><strong>Linked lists</strong> is a data structure that contains a <strong>head, tail</strong> and <strong>length</strong> property.</p>
  <p>Linked lists consists of nodes, and each <strong>node</strong> has a <strong>value</strong> and a <strong>pointer</strong> to another node or null.</p>
</div>
<div>
  <h4>Comparisons with Arrays</h4>
  <table>
    <thead>
      <tr>
        <th>Lists</th>
        <th>Arrays</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul>
            <li>Do not have indexes!</li>
            <li>Connected via nodes with next pointer</li>
            <li>Random access is not allowed.</li>
          </ul> 
        </td>             
        <td>
          <ul>
            <li>Indexed in order!</li>
            <li>Insertion and deletion can be expensive</li>
            <li>Can quickly be accessed at a specific index.</li>
          </ul>
        </td>      
      </tr>    
    </tbody>
  </table>  
</div>
<h4>
  <strong>Big O Notation</strong>
</h4>

| type | time of complexity |
| ---  | --- |
| Insertion | O(1) | 
| Removal |  It depends ... O(1) or O(n)|
| Searching | O(n) |
| Access |  O(n)|

<h4><strong>RECAP: </strong></h4>
<ul>
  <li>Singly linked lists are excellent alternatives arrays when insertion and deletion at the beginning are frequently required</li>
  <li>Array contains a build in index, whereas Linked lists do not index.</li>
  <li>The idea of list data structure that consists of nodes is the foundation for other data structures like <code>Stacks and Queues</code></li>
</ul>

<h3>3. Doubly Linked Lists</h3>
<div>
  <strong>Doubly Linked Lists</strong> are the same as singly Linked Lists, except they have more previous pointer. Therefore, they take advantage of searching, remove the last item compare with singly linked lists, but they have to use memory more than singly linked lists.
</div>
<h4>
  <strong>Big O Notation</strong>
</h4>

| type | time of complexity |
| ---  | --- |
| Insertion | O(1) | 
| Removal |  O(1) |
| Searching | O(n) [actually O(n/2)] |
| Access |  O(n)|


<h4><strong>RECAP: </strong></h4>
<ul>
  <li>Doubly Linked Lists are almost identical to Singly linked lists except there is an additional pointer previous nodes.</li>
  <li>Better than Singly Linked List for finding nodes and can be done in half the time!</li>
  <li>However, they do take up more memory considering the extra pointer.</li>
</ul>

<h3>4. Stack And Queue</h3>

![Stack-and-Queue](https://miro.medium.com/max/680/1*gElPyOaYbFQPIDm5ucI8MQ.png)

<h4>1. Stack</h4>
<div>
  <strong>Stack</strong> is a <strong>LIFO</strong> data structure which is the last element added to the stack will be the first element removed from the stack.  
</div>
<ul>
  <li>Managing function invocations.</li>
  <li>Undo/ Redo</li>
  <li>Routing (the history object) is treated like a stack!</li>
</ul>
<h4>
  <strong>Big O Notation</strong>
</h4>

| type | time of complexity |
| ---  | --- |
| Insertion | O(1) | 
| Removal |  O(1) |
| Searching | O(n)|
| Access |  O(n)|

<h4>2. Queue</h4>
<div>
  <strong>Queue</strong> is a <strong>FIFO</strong> data structure which is the last element added to the queue will be the last element removed from the queue.
</div>

<h4>
  <strong>Big O Notation</strong>
</h4>

| type | time of complexity |
| ---  | --- |
| Insertion | O(1) | 
| Removal |  O(1) |
| Searching | O(n)|
| Access |  O(n)|


<h3>5. Binary Tree</h3>

![Binary-Tree](https://static.javatpoint.com/ds/images/binary-tree.png)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Binary Tree** is a data structure that consists of nodes an a **parent/child** relationship.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The different between **List** and **Tree** are : \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**List** is linear\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Tree** is nonlinear
<h4><strong>Tree Terminology</strong></h4>
  
  * **Root** : The top node in a tree.
  * **Child** : A node directly connected to another node when moving away from the **Root**
  * **Parent** : The converse notion of a child.
  * **Siblings** : A group of nodes with the same parent.
  * **Leaf** : A node with no children.
  * **Edge** : The connection between one node and another.

<h4><strong>Applications</strong></h4>

  * HTML DOM
  * Network Routing
  * Abstract syntax tree
  * Artificial Intelligence, Machine Learning
  * Folders in Operation Systems
  * Computer File Science

<h4><strong>How Binary Search Trees work</strong></h4>

  * Every parent node has at most **two** children
  * Every node to the left of a parent node is **always less** than the parent
  * Every node to the right of a parent node is **always greater** than the parent

<h4><strong>Big O Notation</strong></h4>

| type | time of complexity |
| ---  | --- |
| Insertion | O(log n) | 
| Searching | O(log n)|

