// best choice prototype
/*
Create a new document from an existing document. Each document should have a header, a footer, pages, and text
*/
class Document {
    constructor(header, footer, pages, text) {
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text;
    }

    print() {
        console.log("header content :", this.header);
        console.log("footer content:", this.footer);
        console.log("pages:", this.pages);
        console.log("text:", this.text);
    }

    clone() {
      
        return new Document(
            this.header,
            this.footer,
            [...this.pages], 
            this.text
        );
    }
}

const mainDoc = new Document(
    " DailyDev",
    " Ahmed@2026",
    [1, 2, 3],
    "This is the Main document"
);

const newDoc = mainDoc.clone();

newDoc.text = "This is the New document";
newDoc.pages.push(9);
newDoc.header = "Speedy cart";
// newDoc.footer = "Gaber @2026";

console.log("main document:");
mainDoc.print();

console.log("\nnew document:");
newDoc.print();