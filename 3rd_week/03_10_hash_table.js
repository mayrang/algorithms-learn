class LinkedTuple {
    constructor() {
        this.items = [];
    }
    
    add(key, value) {
        this.items.push(new KeyValuePair(key, value));  // ["333", 7] -> ["77", 6]
    }
    
    get(key) {
        for (let pair of this.items) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return null;
    }
}

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

function main() {
    let linkedTuple = new LinkedTuple();
    
    linkedTuple.add("333", 7);
    linkedTuple.add("77", 6);
    console.log(linkedTuple.get("333"));
}

// Run the main function
main();