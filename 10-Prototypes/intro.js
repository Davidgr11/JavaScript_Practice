// Predefifned objects in JavaScript
const client ={
    name: "John",
    age: 30,
}
console.log(client);

// Now we use prototypes with a reusable constructor of an object
function Client(name, age, cash) {
    this.name = name;
    this.age = age;
    this.cash = cash;
}

// We can create a new instance of the Client constructor
const mathew = new Client ("Mathew", 25, 11000);
console.log(mathew);

// We can add methods to the prototype of the Client constructor
Client.prototype.greet = function() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
};
Client.prototype.type = function () {
    if (this.cash > 10000) {
        return `Premium client with $${this.cash} balance.`;
    }else{
        return "Regular Client with $" + this.cash + " balance.";
    }
}
Client.prototype.transfer = function (amount) {
    if (this.cash >= amount) {
        this.cash -= amount;
        return `Transferred $${amount}. New balance is $${this.cash}.`;
    } else {
        return "Insufficient funds.";
    }
};

console.log(mathew);
console.log(mathew.type());
console.log(mathew.transfer(5000));


// Inheritance with prototypes
function PremiumClient(name, age, cash, perks) {
    Client.call(this, name, age, cash); // Call the parent constructor
    this.perks = perks; // Additional property for PremiumClient
}

PremiumClient.prototype = Object.create(Client.prototype); // Inherit from Client
PremiumClient.prototype.constructor = Client;

const alice = new PremiumClient("Alice", 28, 15000, ["Free shipping", "Priority support"]);

PremiumClient.prototype.showPerks = function() {
    return `Perks: ${this.perks.join(", ")}`;
};
console.log(alice);
console.log(alice.greet());
console.log(alice.type());
console.log(alice.showPerks());