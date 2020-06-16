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
