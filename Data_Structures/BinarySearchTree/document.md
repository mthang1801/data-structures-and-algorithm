<h1>BINARY SEARCH TREE METHODS AND SOLUTIONS</h1>

<h2>insert(val)</h2>
<ul>
 <li>Create a new node</li> 
 <li>Starting at the root
  <ul>
    <li>Check if there is a root, if not - the root now becomes that new node!</li>
    <li>If there is a root, check if the value of the new node is greater than or less than the value of the root</li>
    <li>If it is greater 
      <ul>
        <li>Check to see if there is a node to the righ</li>
        <ul>
          <li>If there is, move to that node and repeat these steps</li>
          <li>If there is not, add that node as the right property</li>
        </ul>
      </ul>
    </li>
    <li>If it is less 
      <ul>
        <li>Check to see if there is a node to the left
          <ul>
            <li>If there is, move to that node and repeat these steps</li>
            <li>If there is not, add that node as the left property</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
 </li>  
</ul>

<h2>find(val)</h2>
<ul>
  <li>Starting at the root
    <ul>
      <li>Check if there is a root, if not - we're done searching!</li>     
      <li>If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!</li>
      <li>If not, check to see if the value is greater than or less than the value of the root</li>
      <li>If it is greater
        <ul>
          <li>Check to see if there is a node to the right
            <ul>
              <li>If there is, move to that node and repeat these steps</li>
              <li>If there is not, we're done searching!</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>If it is less
        <ul>
          <li>Check to see if there is a node to the left
            <ul>
              <li>If there is, move to that node and repeat these steps</li>
              <li>If there is not, we're done searching!</li>
            </ul>
          </li>          
        </ul>
      </li>  
    </ul>
  </li>
</ul>

<h2>BFS()</h2>
<ul>
  <li>Create a queue (this can be an array) and a variable to store the values of nodes visited</li>
  <li>Place the root node in the queue</li>
  <li>Loop as long as there is anything in the queue
    <ul>
      <li>Dequeue a node from the queue and push the value of the node into the variable that stores the nodes</li>
      <li>If there is a left property on the node dequeued - add it to the queue</li>
      <li>If there is a right property on the node dequeued - add it to the queue</li>
    </ul>
  </li>
  <li>Return the variable that stores the values</li>
</ul>

<h2>DFSinOrder()</h2>
<div>
  <p>Used commonly with BST's</p>
  <p>Notice we get all nodes in the tree in their underlying order</p>
</div>
<ul>
  <li>Create a variable to store the values of nodes visited</li>
  <li>Store the root of the BST in a variable called current</li>
  <li>Write a helper function which accepts a node
    <ul>
      <li>If the node has a left property, call the helper function with the left property on the node</li>
      <li>Push the value of the node to the variable that stores the values</li>
      <li>If the node has a right property, call the helper function with the right property on the node</li>      
    </ul>
  </li>
  <li>Invoke the helper function with the current variable</li>
  <li>Return the array of values</li>
</ul>

<h2>DFSpreOrder()</h2>
<ul>
  <li>Create a variable to store the values of nodes visited</li>
  <li>Store the root of the BST in a variable called current</li>
  <li>Write a helper function which accepts a node
    <ul>
      <li>Push the value of the node to the variable that stores the values</li>
      <li>If the node has a left property, call the helper function with the left property on the node</li>
      <li>If the node has a right property, call the helper function with the right property on the node</li>
    </ul>
  </li>
  <li>Invoke the helper function with the current variable</li>
  <li>Return the array of values</li>
</ul>

<h2>DFSpostOrder()</h2>
<div>
  <p>Can be used to "export" a tree structure so that it is easily reconstructed or copied.</p>
</div>
<ul>
  <li>Create a variable to store the values of nodes visited</li>
  <li>Store the root of the BST in a variable called current</li>
  <li>Write a helper function which accepts a node
    <ul>
      <li>If the node has a left property, call the helper function with the left property on the node</li>
      <li>If the node has a right property, call the helper function with the right property on the node</li>
      <li>Push the value of the node to the variable that stores the values</li>
      <li>Invoke the helper function with the current variable</li>
    </ul>
  </li>
  <li>Return the array of values</li>
</ul>

<h2>remove()</h2>
<ul>
  <li>Find the parent of the node that needs to be removed and the node that needs to be removed</li>
  <li>If the value we are removing is greater than the parent node
    <ul>
      <li>Set the right property of the parent to be null</li>
    </ul>
  </li>
  <li>If the value we are removing is less than the parent node
    <ul>
      <li>Set the left property of the parent to be null</li>
    </ul>
  </li>
  <li>Otherwise, the node we are removing has to be the root, so set the root to be null</li>
</ul>