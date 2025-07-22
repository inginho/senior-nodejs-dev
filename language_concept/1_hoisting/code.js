// przykład z var
console.log(var_a); // undefined
var var_a = 10;

// przykład z const
// console.log(const_a); // ReferenceError: Cannot access 'const_a' before initialization
// const const_a = 10;

// przykład z let
// console.log(let_a); // ReferenceError: Cannot access 'let_a' before initialization
// let let_a = 10;

// w przypadku const/let pomimo tego że podlegają hoistingowi (są windowane) to znajdują
// się w TDZ (Temporal Dead Zone) czyli tak jakby znajdują się pomiędzy wejście do scope a deklaracją zmiennej

// funkcje
console.log(fSayHelloDec()); // Hello
function fSayHelloDec() {
  return "Hello";
}
// co oznacza że deklaracja funkcji jest w pełni windowana (fully hoisted)

console.log(fSayHelloExp()); // TypeError: fSayHelloExp is not a function
var fSayHelloExp = function () {
  return "Hello from function expression";
};
