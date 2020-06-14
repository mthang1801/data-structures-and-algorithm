<h1>METHOD AND SOLUTION FOR LINKED LIST</h1>

![Linked-list](https://miro.medium.com/max/953/1*elJncKhH_P9oQglfI1aVQA.png)

<h2>push(val)</h2>
  <div>
    <h3>Define:</h3>
    <strong>Pushing</strong>: Adding a new node to the end of the linked list!
  </div>
  <h3>Solution</h3>
  <ul>
    <li>This function should accept a value.</li> 
    <li>Create a new node using the value passed to the function.</li> 
    <li>If there is no head property on the list, set the head and tail to be the newly </li> 
    created node
    <li> Otherwise set the next property on the tail to be the new node and 
    set the next property on the list to be the newly created node.</li>
    <li>Increment the length by one</li>
  </ul>
    
<h2>pop()</h2>
  <h3>Solution</h3>
  <ul>
    <li> If there are no nodes in the list, return undefined.</li>
    <li>Loop through the list until reaching the tail.</li>
    <li> Set the next property of 2nd to last node to be null.</li>
    <li>Decrement the length of the list.</li>
    <li>Return the value of the node removed.</li>
  </ul>

<h2>shift()</h2>
  <ul>
    <li>If there are no nodes, return undefined.</li>
    <li>Store the current head property in a varable (current value).</li>
    <li>Set the head property to be current head's next property.</li>
    <li>Decrement the length by 1.</li>
    <li> Return the value of the node removed.</li>
  </ul>

<h2>unshift(val)</h2>
  <div><strong>Adding</strong> a new Node to beginning of the Linked list</div>
  <ul>
    <li>This function should accept a value </li>
    <li>Create a new node using the value passed to the function</li>
    <li>If there is no head property on the list, set the head and tail to be newly created node</li>
    <li> Otherwise set the newly created node's next property to be current head property on the list</li>
    <li>Set the head property on the list to be that newly created node</li>
    <li>Increment the length of the list by 1</li>
    <li> Return the linked list</li>
  </ul>

<h2>get(index)</h2>
  <div>Retrieve a <strong>node</strong> by it's position in the Linked List.</div>
  <ul>
    <li>This function should accept an value</li>
    <li>If the index is less than 0 or greater than or equal the length of the list, return null</li>
    <li>Loop through the list until reaching the index and return node and specific index </li>
  </ul>

<h2>set(index, val)</h2>
  <ul>
    <li>This function should accept a value and an index</li>
    <li>Use your <strong>get</strong> method to find the specific value</li>
    <li>If the node is not found, return false</li>
    <li>If the node is found, set the value of that node to be the value passed to the function and return value.</li>
  </ul>

<h2>insert(index, val)</h2>
  <div>
    <strong>Adding </strong>a node to the Linked list at a specific position
  </div>

  <ul>
    <li>If the index is less than 0 or greater than the length, return false</li>
    <li>If the index is tha same as the length, push a new node to the end of the list</li>
    <li>If the index equal 0, unshift a new code to the start of the list</li>
    <li>Otherwise, using the <strong>get</strong> method access the node at the index -1</li>
    <li>Set the next propperty on the node to be new node</li>
    <li>Increment the length</li>
    <li>Return <code>true</code></li>
  </ul>

<h2>remove(index)</h2>

  <div>
    <strong>Remove </strong>a node to the Linked list at a specific position
  </div>
  <ul>
    <li>If the index is less than 0 or greater than the length, return false</li>
    <li>If the index is the same as the length, use pop method to remove the end element of the list</li>
    <li>If the index is 0, use shift method to remove the start element of the list</li>
    <li>Decrement the length</li>
    <li>return <code>true</code></li>
  </ul>

<h2>reverse()</h2>

  <div>
    <strong>Reverse </strong>a node to the Linked list <strong>in place.</strong>
  </div>

  <ul>
    <li>Swap the head and tail</li>
    <li>Create a variable called next</li>
    <li>Create a variable called prev</li>
    <li>Create a variable called noded and initialize it to the head</li>
    <li>Loop through the list</li>
    <li>Set next to be the next property on whatever node is </li>
    <li>Set the next property on the node to be whatever prev is</li>
    <li>Set prev to be the value of the node variable</li>
    <li>Set the node variable to be the value of the next variable</li>
  </ul>