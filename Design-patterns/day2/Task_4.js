class Item {

    show(indent = 0) { }

    getPages() { }

}

class Book extends Item {

    constructor(name, pages) {
        super();

        this.name = name;
        this.pages = pages;
    }

    show(indent = 0) {

        console.log(
            " ".repeat(indent) +
            `book: ${this.name} (${this.pages} pages)`
        );

    }

    getPages() {
        return this.pages;
    }

}

class Box extends Item {

    constructor(name) {
        super();

        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    show(indent = 0) {

        console.log(
            " ".repeat(indent) +
            ` box: ${this.name}`
        );

        this.items.forEach(item => {
            item.show(indent + 4);
        });

    }

    getPages() {

        return this.items.reduce((total, item) => {
            return total + item.getPages();
        }, 0);

    }

}

const book1 = new Book("css", 300);
const book2 = new Book("html", 250);
const book3 = new Book("JS", 400);

const smallBox = new Box("Small Box");

smallBox.add(book1);
smallBox.add(book2);

const bigBox = new Box("Big Box");

bigBox.add(smallBox);
bigBox.add(book3);


bigBox.show();