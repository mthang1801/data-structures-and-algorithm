<h1>CLASS SYNTAX</h1>
<h2>Defining classes</h2>
<div>
<strong>Classes</strong> are in fact "special functions", and just as you can define function function expressions and function declarations,the class syntax has two components: class expressions and class declarations.
</div>

```
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
```

<h3>Hoisting</h3>
<div>
<strong>Note</strong> : An important difference between function declarations and class declarations is 
  that function are hoisted and class declarations are not. You first need to declare your class
  and then access it, otherwise code like the following will throw a Reference Error.

```
  const person = new Person(); //Reference error

  class Person {}
```

</div>

<h3>Class expressions</h3>
<div>
  <strong>Define: </strong> A class expression is another way to define a class. Clas expressions can be named or unnamed. The name given to a named class expression is local to the class's body.(it can be retrieved through the class's (not an instance's) name property, though).
<h4>unnamed</h4>

```
let Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }  
};

console.log(Rectangle.name) //undefined
```
<h4>named</h4>

```
let Rectangle = class Rectangle1 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  } 
};
console.log(Rectangle.name); //Rectangle2
```

<strong>Note:</strong> Class expressions are subject to the same hoisting restrictions as
described in the Class declarations section.
</div>

<h2>Class body and method definitions</h2>
<div>The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructor.</div>
<h3>Strict mode</h3>
<div>The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.</div>
<h3>Constructor</h3>
<div>
  <p>The <code>constructor</code> method is special method for createing and initializing an object created with <code>class</code>. There can be only one special method with the name "constructor" in the class. A <code>SyntaxError</code> will be thrown if the class contains more than one occurence of a <code>constructor</code> method.</p>
  <p>A constructor can use the super keyword to call the <code>constructor</code> of the super class.</p>
</div>
 
<h3>Prototype methods</h3>
<div>

```
class Person{
  constructor(name,gender,age){
    this.name = name ;
    this.gender = gender ; 
    this.age = age ; 
  }
  speak(){
    console.log(`Ladies and gentlemen, My name is ${this.name}, I am ${age} years old`)
  }
}

let person = new Person("John Doe", "male", 42);
person.speak() // Ladies and gentlemen, My name is John Doe, I am 42 years old.
```

</div>

<h3>Static methods</h3>
<div>
  <p>The <code>static</code> keyword defines a static method for a class.</p>

  ```
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
      }
    }

    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);
    p1.distance; //undefined
    p2.distance; //undefined

    console.log(Point.distance(p1, p2)); // 7.0710678118654755
  ```

</div>