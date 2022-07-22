

fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
// let x=Object.keys(fruitsPriceList);
// let y=Object.values(fruitsPriceList);
// x.forEach(function(entry) {
//   console.log(`I love ${entry}`);
// });
// console.log(Object.values(fruitsPriceList));
class KioskCalc {
    constructor(Fruits,quantity) {
        this.Fruits = Fruits
        this.quantity = quantity
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
        this.getTotalCost = function () {
            let x=Object.keys(fruitsPriceList);
            let y=Object.values(fruitsPriceList);
            let b=x.forEach(function(entry) {
                console.log(`${entry}`);
              });
            let c=y.forEach(function(entry) {
                console.log(` ${entry}`);
              });
              
            return `${this.quantity} ${b} for KES ${this.quantity * c}`
        }
    }
}
var orange = new KioskCalc()
console.log(orange.getTotalCost())
