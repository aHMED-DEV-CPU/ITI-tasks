// Builder

class Pizza {

    constructor() {
        this.ingredients = [];
    }

    showPizza() {
        console.log("Pizza Ingredients:");
        console.log(this.ingredients);
    }

}
class PizzaBuilder {

    constructor() {
        this.pizza = new Pizza();
    }

    addCheese() {
        this.pizza.ingredients.push("Mozzarella Cheese");
        return this;
    }

    addOlives() {
        this.pizza.ingredients.push("Olives");
        return this;
    }

    addSauce() {
        this.pizza.ingredients.push("red sauce");
        return this;
    }

    addOnions() {
        this.pizza.ingredients.push("Onions");
        return this;
    }

    build() {
        return this.pizza;
    }

}

const pizza = new PizzaBuilder()
    .addSauce()
    .addOnions()
    .addCheese()
    .build();

pizza.showPizza();