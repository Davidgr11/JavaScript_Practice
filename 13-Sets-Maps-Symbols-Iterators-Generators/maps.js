// MAPS:
// Maps are collections of key-value pairs where keys can be of any type.
// They maintain the insertion order of elements and allow for efficient retrieval, addition, and deletion of elements.
console.info("---Maps y WeekMaps---");
const client = new Map();
client.set('name', 'John');
client.set('lastame', 'Doe');
client.set('age', 20);
console.log(client);
console.log(client.size); // 3
console.log(client.get('name')); // John
console.log(client.has('age')); // true


const pacientes = new Map([['nombre', 'Juan'], ['propietario', 'Pedro'], ['email', 'a@a.com']]);
console.log(pacientes);

// WeakMaps: Similar to Maps, but keys must be objects and they do not prevent garbage collection.
const weakMap = new WeakMap();
const p1 = { type: 'tv' };
const p2 = { type: 'laptop' };
weakMap.set(p1, 'Product 1');
weakMap.set(p2, 'Product 2');
console.log(weakMap); // WeakMap { <items unknown> }