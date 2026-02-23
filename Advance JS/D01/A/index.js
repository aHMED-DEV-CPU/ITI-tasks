const MyLinkedList = {
    data: [],
    // check duplication
    exists(value) {
        return this.data.some(item => item.value === value)
    },

    // Add at the beginning 
    enqueue(value) {
        if (this.exists(value)) {
            throw new Error("duplication not allowed")
        }
        // not the first one 
        if (this.data.length > 0 && value >= this.data[0].value) {
            throw new Error("Value must be smaller than the first element ")
        }

        this.data.unshift({ value })
    },

    // Add at the End 
    pushVal(value) {
        if (this.exists(value)) {
            throw new Error("duplication not allowed")
        }
        if (
            this.data.length > 0 &&
            value <= this.data[this.data.length - 1].value
        ) {
            throw new Error("Value must be greater than last element ")
        }

        this.data.push({ value })
    },

    //  Insert in specific index
    insertAt(index, value) {
        if (this.exists(value)) {
            throw new Error("duplication not allowed")
        }

        if (index < 0 || index > this.data.length) {
            throw new Error("Invalid index")
        }

        // check ascending condition
        const prev = this.data[index - 1]
        const next = this.data[index]

        if (
            (prev && value <= prev.value) ||
            (next && value >= next.value)
        ) {
            throw new Error("Value breaks ascending order")
        }

        this.data.splice(index, 0, { value })
    },

    // remove from end
    pop() {
        if (this.data.length === 0) {
            throw new Error("List is empty")
        }
        return this.data.pop()
    },

    //  Remove specific value
    remove(value) {
        const index = this.data.findIndex(item => item.value === value)

        if (index === -1) {
            return "data not found"
        }

        this.data.splice(index, 1)
        return "removed successfully"
    },

    // remove from beginning
    dequeue() {
        if (this.data.length === 0) {
            throw new Error("List is empty")
        }
        return this.data.shift()
    },

    //  Display
    display() {
        console.log(this.data.map(item => item.value))
    }
}
MyLinkedList.pushVal(10)
MyLinkedList.pushVal(20)
MyLinkedList.pushVal(30)

MyLinkedList.enqueue(5)

MyLinkedList.insertAt(2, 15)

MyLinkedList.display()

MyLinkedList.remove(15)
MyLinkedList.pop()
MyLinkedList.dequeue()

MyLinkedList.display()
