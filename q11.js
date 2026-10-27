class Product{
    name="Laptop";
    productId=12;
    price=20000;

    displayDetails(){
        console.log(this.name);
        console.log(this.productId);
        console.log(this.price);
    }




}
const p1= new Product();
p1.displayDetails();