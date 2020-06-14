<h1>DOUBLE LINKED LISTS</h1>

![Double-Link-List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/03/DLL1.png)

<h2>push(val)</h2>
<div>
  <strong>Adding</strong> a node to the <strong>end</strong> of the doubly linked list:
</div>
<ul>
  <li>Create a new node with the value passed to the function</li>
  <li>If the length is 0 (or head and tail property are null), 
    <ul>
      <li>Set the head to be the new node</li>
      <li>Set the tail to be the new node</li>
    </ul>
  </li>
  <li>If not, set the next property on the tail to be that node</li>
  <li>Set the previous property on the newly created node to be the tail</li>
</ul>

<h2>pop()</h2>
<div>
  <strong>Removing</strong> a node from the <strong>end</strong> of the doubly linked list:
</div>
<ul>
  <li>If there is no head, return <code>undefined</code></li>
  <li>Store the current tail in a variable to return later</li>
  <li>If the length is 1, 
    <ul>
      <li>Set the head to be the new node</li>
      <li>Set the tail to be the new node</li>
    </ul>
  </li>
  <li>Update the tail to be the previous Node</li>
  <li>Set the newTail's next to null</li>
  <li>Decrement the length</li>
  <li>return the value removed</li>
</ul>

<h2>shift()</h2>
<div>
  <strong>Removing</strong> a node from the <strong>start</strong> of the doubly linked list
</div>
<ul>
  <li>If there is no head,return <code>undefined</code></li>
  <li>Store the current head in a variable to return later</li>
  <li>If the length is 1 or (head = tail), 
    <ul>
      <li>Set the head to be the new node</li>
      <li>Set the tail to be the new node</li>
    </ul>
  </li>
  <li>Update the head to be the next Node</li>
  <li>Set the newTail's prev to null</li>
  <li>Decrement the length</li>
  <li>return the value removed</li>
</ul>

<h2>unshift(val)</h2>
<div>
  <strong>Inserting</strong> a node into the <strong>beginning</strong> of doubly linked list
</div>
<ul>
  <li>Create a new node with the value passed to the function</li>
  <li>If the length is 0 (or head and tail are null), 
    <ul>
      <li>Set the head to be the new node</li>
      <li>Set the tail to be the new node</li>
    </ul>
  </li>
  <li>Ortherwise , 
    <ul>
      <li>Set the prev property on the head of the list to be the new node</li>
      <li>Set the next property on the new node to be the head property</li>
      <li>Set the current head to be the new node</li>
    </ul>
  </li>    
</ul>

<h2>get(index)</h2>
<div>
  <strong>Accessing</strong> a node in a doubly Linked list by it's position
</div>
<ul>
  <li>If index less than 0 or index greater than or equal the length of doubly linked list, return <code>null</code></li>
  <li>If index is less than or equal the half of the length of the doubly linked list : <ul>
      <li>Loop throught the list starting from the head and loop towards the middle</li>
      <li>Return the node once it found</li>
    </ul>
  </li>
  <li>If the index is greater than the half of the length of the doubly linked list : <ul>
      <li>Loop throught the list starting from the tail and loop towards the middle</li>
      <li>Return the node once it found</li>
    </ul></li>
</ul>

<h2>set(index,val)</h2>
<div>
  <strong>Replacing</strong> a value of the node of the doubly linked list.
</div>
<ul>
  <li>Create a variable which is a result of <strong>get</strong> method at the index passed to the function</li>
  <li>If the <strong>get(index)</strong> returns a valid node, set the value of node to be the value passed to the function</li>
  <li>Return <code>true</code></li>
</ul>

<h2>insert(index,val)</h2>
<div>
  <strong>Adding</strong> a node in a doubly linked list by a certain position
</div>
<ul>
  <li>If the index is less than 0 or greater than the length of the doubly linked list </li>
  <li>If the index is 0, use <code>unshift(val)</code> </li>
  <li>If the index is the same as the length, use <code>push(val)</code></li>
  <li>Use <code>get(index)</code> method to access the index -1</li>
  <li>Set the next and prev properties on the correct nodes to link everything together</li>
</ul>

<h2>remove(index)</h2>
<div>
  <strong>Removing</strong> a node in a doubly linked list by certain position
</div>
<ul>
  <li>If the index is 0, use <code>shift()</code></li>
  <li>If the index is length -1, use <code>pop()</code></li>
  <li>Use <code>get(index)</code> method to retrieve the item to be removed</li>
  <li>Update the next and prev properties to remove the found node from the doubly linked list</li>
  <li>Set next and prev to null on the found node</li>
  <li>Decrement the length</li>
  <li>Return the removed node</li>
</ul>