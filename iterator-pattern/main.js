/** Iterator Pattern **/
//Traverse through the items in different order 

const items = [1, 2, 3, 4, 5]

function Iterator(items) {
    this.items = items;
    this.index = 0;
}

Iterator.prototype = {
    hasNext() {
        return this.index < this.items.length
    },
    next() {
        return {
            value: this.items[this.index++], done: !this.hasNext()
        }
    }
}

let iterator = new Iterator(items)

while (iterator.hasNext()) {
    console.log(iterator.next());
}