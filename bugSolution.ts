function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function processNumbers(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error: throw new Error('Invalid input: Non-numeric values provided');
  }

  return add(numA, numB);
}

let result = add(5, 3);  // Returns 8
console.log(result);

result = subtract(10, 5); // Returns 5
console.log(result);

result = processNumbers('7', 3); // Returns 10
console.log(result);

result = processNumbers('hello', 5); // Returns 0 due to error handling
console.log(result); 