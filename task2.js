// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to rural farmers. This is through their online marketplace where farmers can trade vegetables and fruits with grocery vendors. To begin with, farmers have to register on the platform and login. Thereafter, they can upload their products with respective prices. On the other hand, grocery vendors can signup and login to the platform to place their bulk order requests. 
// Create a class Mkulima that will keep a list of farms, grocery vendors and products. A single farm record should contain id, farm name, farmer, phone number and address. A single grocery vendor record should contain id, store name and phone number. A product should have id, name and price fields. 
// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity
//
class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendor = [];
    this.product = [];
    //  addFarm - params: farmId, name, farmer, phone, address
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})}
    //  removeFarm - params: farmId
    this.removeFarm = (farmId) => {
    let exactIndex = this.farms.find(item => item.farmId ===farmId);
    let deleteFarms = this.farms.indexOf(exactIndex);
    this.farms.splice(deleteFarms, 3);}
    //  updateFarm - params: farmId, name, farmer, phone, address
    this.updateFarm = function(farmId,new_FarmId,new_FarmName,new_FarmerName,new_Phone,new_Address){
    let new_Farm = this.farms.find(item => item.farmId ===farmId)
    new_Farm.farmId =new_FarmId;
    new_Farm.farmName =new_FarmName;
    new_Farm.farmer =new_FarmerName;
    new_Farm.phone =new_Phone;
    new_Farm.address =new_Address;}
    //  getFarm - params: farmId - returns a farm object
    this.getFarm = (new_Id)=>{
    console.log(this.farms.find(object=>object.farmId===new_Id))}
    //  addProduct - params: productId, name, price
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})}
    //  removeProduct - params: productId
    this.removeProduct = (productId) => {
    let removesItem = this.product.find(item => item.productId ===productId);
    let productPosition = this.product.indexOf(removesItem);
    this.product.splice(productPosition, 2);}
    //  updateProduct - params: productId, name, price
    this.updateProduct = function(productId,new_ProductId,new_ProductName,new_Price){
    let upgradeProducts = this.product.find(item => item.productId ===productId)
    upgradeProducts.productId =new_ProductId;
    upgradeProducts.productName = new_ProductName;
    upgradeProducts.price = new_Price;}
    //  getProduct - params: productId - returns a product object
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))}
    //  printProducts - No param, console logs a list of product items with their prices.
    this.printProducts = ()=>{
    console.log(this.product)}
    // calculateOrderCost - params: productId, quantity
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);}
    }
    }
    
    let person1 = new Mkulima();
    farm1.addFarm("001","Irwen","Mercy","0713045562", "MO34DE");
    farm1.addFarm("002","KIlima","Florence","073948378", "HFC89N3");
    farm1.addFarm("003","Ndabarnach","Grace","074894049", "489DJ4");
    console.log(person1.farms);
    
    person1.removeFarm("001");
    console.log(person1.farms)

    person1.updateFarm("003","004","Ainapkoi","George","074543422","Kitale");
    console.log(person1.farms);

    person1.getFarm("002")
    console.log(person1.farms);

    person1.addProduct("097","Mango");
    person1.addProduct("20","Apple")
    console.log(person1.farms)

    person1.removeProduct("001");
    console.log(person1.farms);

    person1.updateProduct("097","098","Banana","100")
    console.log(person1.farms);

    person1.getProduct("098");
    console.log(person1.farms)

    person1.printProducts();
    console.log(person1.farms)

    person1.calculateOrderCost("098","1");
    console.log(person1.farms)