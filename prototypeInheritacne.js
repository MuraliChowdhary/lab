// Parent object
const animal = {
    type: 'Animal',
    describe() {
      return `I am a ${this.type}`;
    }
  };
  
  // Child object
  const dog = Object.create(animal);
  dog.type = 'Dog';
  dog.bark = function() {
    return 'Woof!';
  };
  
  console.log(dog.describe()); // I am a Dog
  console.log(dog.bark()); // Woof!
  
  // Constructor function example
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
  };
  
  function Employee(name, position) {
    Person.call(this, name);
    this.position = position;
  }
  
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  const emp = new Employee('John', 'Developer');
  console.log(emp.greet()); // Hello, I'm John
  console.log(emp.position); // Developer