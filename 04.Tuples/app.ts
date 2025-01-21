// A tuple is a fixed-length array where each element has a specific type, making it useful for representing a group of values with different types.

let person: [string, number];
person = ["Alice", 25]; // Valid
// person = [25, "Alice"]; // Error: Type mismatch
console.log(person); // Output: ["Alice", 25]
