<h1>STACK AND QUEUE </h1>
<h1>1. Stack Methods and Solutions</h1>

<h2>push(val)</h2>
<div>
  <strong>Add</strong> the value to the top of stack.
</div>
<ul>
  <li>The function should accept a value</li>
  <li>Create a new node with that value</li>
  <li>If there is no node in the stack, assign the first and the last to be the newly created node</li>
  <li>If there is at least a node, assign the next property of the first node to be newly created node</li>
  <li>Then set the first node to be the newly cread node</li>
  <li>Increment the size by 1</li>
</ul>

<h2>pop()</h2>
<div>
  <strong>Removing</strong> the value on the top of the stack.
</div>
<ul>
  <li>Check whether the first and the last (actually the first) have alrady existed or not</li>
  <li>If the first and the last have not existed, return <code>null</code></li>
  <li>Otherwise, create a variable to store the first to return the value need removing</li>
  <li>In case the first is the same as the last, set the last to be <code>null</code></li>
  <li>Assign the first to be the next of the first in the stack</li>
  <li>Decrement the size by 1</li>
  <li>Return the value of the first removed </li>
</ul>

<h1>2. Queue</h1>
<h2>enqueue(val)</h2>
<div>
  <strong>Adding</strong> to the beginning of the Queue!
</div>
<ul>
  <li>This function accepts some value</li>
  <li>Create a new node using that value passed to the function</li>
  <li>If there are no nodes in the queue, set this node to be the first and last property of the queue</li>
  <li>Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node</li>
  <li>Increment the size of the queue by 1</li>
</ul>

<h2>dequeue()</h2>
<div>
  <strong>Removing</strong> from the beginning of the Queue!
</div>
<ul>
  <li>If there is no first property, just return null</li>
  <li>Store the first property in a variable</li>
  <li>See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null</li>
  <li>If there is more than 1 node, set the first property to be the next property of first </li>
  <li>Decrement the size by 1</li>
  <li>Return the value of the node dequeued</li>
</ul>
