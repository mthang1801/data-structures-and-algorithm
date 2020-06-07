// FIBONACCI
// @description
// fibonacy(2) = 1
//   return fibonacci(1) + fibonacci(0) = 1 + 0

// fibonacy(3) = 2
//   return fibonacy(2) + fibonacy(1) = 1 + 0 + 1
//      return fibonacy(1) + fibonacy(0) + 1

//fibonacy(4)
//  return fibonacy(3) + fibonacy(2)
//    return fibonacy(2) + fibinacy(1) + fibonacy(1) + fibonacy(0)
//      return fibonacy(1) + fibonacy(0) + fibonacy(1) + fibonacy(1) + fibonacy(0)
//        return 1 + 0 + 1 + 1+ 0
const fibonacci = (n) => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(35));
