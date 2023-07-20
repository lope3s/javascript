//Symbols are immutable primitive types, just like numbers and strings. The difference is that
//Symbols are unique, as retrated below:

const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1  === sym2) // false
console.log(Symbol('abc') === Symbol('abc')) //false

//The string added to a symbol serves more as a description to help debugging it.

//This happens because each symbol has a unique identifier that can't be changed, and this identifier
//is used to compare them.

//Symbols are acessible through realms.
//You can register global Symbols and access them through those reamls too.
//There is a Symbol class called "Well-Known", those Symbols exist between reamls, but aren't accesible in the global register.

//REAMLS:
//AKA. context, a web page is a <document> context while, inside of it, we can have a <iframe> with a different context/reaml.

//Adding Symbols to the runtime (Runtime-wide):
//Runtime-wide just mean that we can access those Symbols between contexts;
//1. Symbol.for(key) -> Verifies if a symbol associed with that key exists in the global register and return it if so, if it doesn't
//then the Symbol is created and then returned:

const s1 = Symbol.for('key') //Symbol doesn't exist, so it's created
const s2 = Symbol.for('key') //Symbol already exists, so its just returned

console.log(s1 === s2) // true

//The global Symbol register keeps a key for each created Symbol, and this is the identifier we can use to find those values in this context.
//Note that when we create a "key" using Symbol.for('key'), this value becomes our description.


//2. Symbol.keyFor(Symbol) -> With this we can find the associed key for the provided Symbol:

console.log(Symbol.keyFor(s1)) //key
console.log(Symbol.keyFor(s2)) //key

//Well-known -> built-in symbols used in the core of the language.
//Well-known symbols are unique, but they are shared between realms, even though they aren't acessible trough the golbal register;

console.log(Symbol.keyFor(Symbol.iterator)) //undefined

//Iterating through Symbols:
//Symbols can be used as object keys:

const foo = {
    [Symbol()]: 'foo',
    [Symbol('foo')]: 'bar',
    [Symbol.for('bar')]: 'baz',
    propriedade: 'legal'
}

//The thing with those Symbol keys is that Object.keys, JSON.stringfy and some others, ignore them completely. Not console.log, he is just too smart.
//To iterate over Symbols, we need to use Object.getOwnPropertySymbols, this method iterates only through the Symbols.

//Use Cases:
//Name conflicts: we can use the unique nature of the Symbols to avoid repeated object keys.
//Privacy: We can use Symbols to create objects with configurations of metadata.
//Constants: Symbols are unique and are rarely accessed, wich means that they can be realy good for constants.

//In the end, Symbols are a great way add properties to objects in a symple way, or to create guidelines that you program should follow under the cloths.

//Defining protocols and hooks:
//Symbol.iterator is a protocol that every Array adhere to, and that says if the object can be iterated.

//Basically, when executing a for ... of, Javascript checks if Object[Symbol.iterator] exists, and that tells him if the object can be iterated or not.
//If we want to create a protocol that says how an object should be transformed into a string. We could create a Symbol.for('object.upper') and put it in any of our objects:

let obj = { nome: 'Luan' }
obj[Symbol.for('object.upper')] = true

console.log(obj) // { NOME: 'LUAN' }
console.log(Object.keys(obj)) // ['NOME']

//For the previous example to work we would have to implement the logic inside conole.log to check for our Symbol;
//We can add a function to a Symbol creating what is called a Hook, functions that are executed in some part of our code responding to determined methods.
