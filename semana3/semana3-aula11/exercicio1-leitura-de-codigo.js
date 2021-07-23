const bool1 = true
const bool2 = false
const bool3 = !bool2
/* bool3 e negativo por causa do "!"*/

let resultado = bool1 && bool2

console.log("a. ", resultado)

/*False*/

resultado = bool1 && bool2  && bool3
/*true + false + true
false + true
false
*/
console.log ("b. ", resultado)
/*False*/

resultado = bool1 && (bool2  || bool3)

/*true (false OU true)
true  + já que uma dos elementos é true o OU acaba em TRUE 
true*/

console.log ("b. ", resultado)
/*True*/



console.log ("e. ", typeof resultado)
Boolean