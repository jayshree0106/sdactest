export class Emp{
    id=10;
    name="tom";

    displayInfo(){
        console.log(this.id);
        console.log(this.name);
    }

}
const e1= new Emp();
e1.displayInfo();