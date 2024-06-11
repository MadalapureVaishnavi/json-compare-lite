const compareJSON = require('./index');

const obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "traveling"]
};

const obj2 = {
    name: "John",
    age: 31,
    address: {
        city: "Los Angeles",
        zip: "90001"
    },
    hobbies: ["reading", "sports"]
};

const differences = compareJSON(obj1, obj2);
console.log(JSON.stringify(differences, null, 2));

/* Expected output:
{
    "modified": {
        "age": {
            "old": 30,
            "new": 31
        },
        "address.city": {
            "old": "New York",
            "new": "Los Angeles"
        },
        "address.zip": {
            "old": "10001",
            "new": "90001"
        },
        "hobbies.1": {
            "old": "traveling",
            "new": "sports"
        }
    }
}
*/
