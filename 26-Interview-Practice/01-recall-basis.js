console.info("--- 01 Recall Basis ---\n");

console.info("Exercise 1: E-commerce Order Processing System")
/*
Given an array of orders, each with: orderId, customer, items (array of {product, price, quantity}), status

Tasks:
1. Calculate the total revenue from all "completed" orders
2. Find the customer who spent the most money (sum of all their orders)
3. Get a list of all unique products sold
4. Group orders by status and count how many orders are in each status
5. Find the most expensive single item across all orders
6. Create a new array with orders that have total value > $500, adding a "priority" property
*/

const orders = [
    {
        orderId: 101,
        customer: "Alice",
        items: [
            { product: "Laptop", price: 1200, quantity: 1 },
            { product: "Mouse", price: 25, quantity: 2 }
        ],
        status: "completed"
    },
    {
        orderId: 102,
        customer: "Bob",
        items: [
            { product: "Phone", price: 800, quantity: 1 },
            { product: "Case", price: 15, quantity: 1 }
        ],
        status: "pending"
    },
    {
        orderId: 103,
        customer: "Alice",
        items: [
            { product: "Tablet", price: 600, quantity: 1 },
            { product: "Keyboard", price: 75, quantity: 1 }
        ],
        status: "completed"
    },
    {
        orderId: 104,
        customer: "Charlie",
        items: [
            { product: "Monitor", price: 350, quantity: 2 },
            { product: "Cable", price: 10, quantity: 3 }
        ],
        status: "completed"
    },
    {
        orderId: 105,
        customer: "Bob",
        items: [
            { product: "Laptop", price: 1200, quantity: 1 }
        ],
        status: "cancelled"
    }
];

console.log('\nTASK 1: Calculate the total revenue from all "completed" orders');
// I need to filter the completed orders -> Accumulate the total of the orders -> Accumulate the total per order
const totalRevenue = orders.filter(order => order.status === 'completed')
    .reduce((acc, order) => {

        const totalOrder = order.items.reduce((acc, product) => acc + (product.price * product.quantity), 0);

        return acc + totalOrder;
    }, 0);
/* EFFICIENT WITH JUST REDUCE
const totalRevenue = orders.reduce((acc, order) => {
    if (order.status === 'completed') {
        const orderTotal = order.items.reduce((sum, item) => 
            sum + (item.price * item.quantity), 0
        );
        return acc + orderTotal;
    }
    return acc;
}, 0);*/
console.log(`The total revenue for the completed orders it's $${totalRevenue}`);


console.log("\nTASK 2: Find the customer who spent the most money (sum of all their orders)")
// I need to groud the orders by costumer -> calculate the total per each costumer -> evaluate the max
const customerTotals = orders.reduce((acc, order) => {
    const orderTotal = order.items.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    acc[order.customer] = (acc[order.customer] || 0) + orderTotal;

    return acc;
}, {});

let bestCustomer = { name: null, total: 0 };
console.log(Object.entries(customerTotals)); // I need a map for that type of iteration
for (let [customer, total] of Object.entries(customerTotals)) {
    if (total > bestCustomer.total) {
        bestCustomer = { customer, total };
    }
}

/*
    OTHER OPTION FOR THE MAX
    
    FOR IN - ITERATE THE KEYS
    for (let customer in customerTotals) {
        if (customerTotals[customer] > bestCustomer.total) {
            bestCustomer = { customer, total: customerTotals[customer] };
        }
    }

    WITH REDUCE
    const topCustomer = Object.entries(customerTotals).reduce((max, [customer, total]) => 
    total > max.total ? { customer, total } : max
, { customer: '', total: 0 });

*/

console.log(customerTotals, bestCustomer);
console.log(`The best customer it's ${bestCustomer.name} spending $${bestCustomer.total}`);

console.log("\nTASK 3: Get a list of all unique products sold");


const products = orders.reduce((acc, order) => {
    order.items.forEach(item => acc.push(item.product));

    return acc;
}, []);
console.log(products);
const uniqueProducts = [...new Set(products)];
console.log(uniqueProducts);

console.log("\nTASK 4: Group orders by status and count how many orders are in each status");
// In need to group orders by status (reduce) and count how many per status key -> value  --- status -> #

const ordersByStatus = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
}, {});

/*{
    'completed' = 3,
    'pending' = 1,
    'cancelled' = 1
}*/
console.log(ordersByStatus);
for (status in ordersByStatus) {
    console.log(`Status: ${status} (${ordersByStatus[status]} total)`);
}


console.log("\nTASK 5: Find the most expensive single item across all orders");
// I need to get all the items 
const allItems = orders.flatMap(order => order.items);
/*
[
    { product: "Phone", price: 600, quantity: 1 },
    { product: "Laptop", price: 1200, quantity: 1 },
     .....
]
*/

const mostExpensive = allItems.reduce((max, item) => item.price > max.price ? item : max);
console.log(`The most expensive product it's: ${mostExpensive.product} - $${mostExpensive.price}`);


console.log("\nTASK 6: Create a new array with orders that have total value > $500, adding a priority property");

const newOrders = orders.reduce((acc, order) => {

    const totalOrder = order.items.reduce((acc, purchase) => acc + (purchase.price * purchase.quantity), 0);

    if (totalOrder > 500) {
        acc.push({ ...order, priority: true, totalOrder });
    }

    return acc;
}, []);

console.log(newOrders);
/*
[
    {order+priority,total},
    {order+priority,total},
    ...
]
*/


/*
    TIPS:

    1. **Need to transform every element?** → Use `.map()` (returns new array with same length)
    - "Get all names", "Double all prices", "Extract all titles"

    2. **Need to select/filter elements?** → Use `.filter()` (returns subset of array)
    - "Get items above X", "Find active users", "Show completed orders"

    3. **Need to find ONE element?** → Use `.find()` or `.findIndex()`
    - "Find the first/highest/lowest", "Get the user with ID..."

    4. **Need to accumulate/combine/sum/group?** → Use `.reduce()` (returns single value or object)
    - "Calculate total", "Group by X", "Count occurrences", "Find max/min"
    - Pattern: `array.reduce((greater, item) => item.price > greater.price ? item : greater)`

    5. **Working with nested arrays?** → Use `.flatMap()` or nested `.reduce()/.forEach()`
    - "Get all items from all orders", "Flatten nested structure"
    - Alternative: `orders.reduce((acc, order) => { order.items.forEach(...); return acc; }, [])`

    6. **Working with Objects?** → Convert to array first with `Object.entries()`, `Object.keys()`, or `Object.values()`
    - Then use `.map()`, `.filter()`, `.reduce()` on the resulting array
    - Or use `for...in` to iterate through keys directly (most efficient)

    7. **Need to add properties to objects?** → Use spread operator `{ ...original, newProp: value }`
    - Creates new object without mutating original

    8. **Need unique values (remove duplicates)?** → Use `[...new Set(array)]`
    - Works on simple arrays of primitives (strings, numbers)

    9. **Grouping/counting pattern with reduce:**
    - `acc[key] = (acc[key] || 0) + 1` for counting
    - `acc[key] = acc[key] || []; acc[key].push(value)` for grouping into arrays

    10. **Need to break early or use async/await?** → Use `for...of` loop instead of `.forEach()`
        - `.forEach()` can't break or properly handle await
        - `for...of` gives you full control with clean syntax
*/