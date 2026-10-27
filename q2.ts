class Student{
    name:string;
    studentID:number;
    grade:string;
    address:string;

    constructor(name:string,studentID:number,grade:string,address:string){
        this.name=name;
        this.studentID=studentID;
        this.grade=grade;
        this.address=address;
    }

    displayInfo(){
        console.log(this.name);
        console.log(this.studentID);
        console.log(this.grade);
        console.log(this.address);
    }
}

const student=new Student("jayshree",12,"A","Mumbai");
//student.displayInfo();

//Q3

class School{
    static totalStudents:number=0;
    studentList: Student[]=[];
    addStudents(s:Student){
        this.studentList.push(s);
        School.totalStudents++;
        console.log("Student added successfully"+School.totalStudents);
    }
}
const s1= new Student("ritika",13,"B","mira road");
s1.displayInfo();

const s2= new Student("mansi",14,"C","bhayander");
s2.displayInfo();


const sch= new School();
sch.addStudents(s1);
console.log(sch.studentList);


//Q4

abstract class Person{
    abstract getDetails():void;
    abstract getRoles():void;

    

}
class Student1 extends Person{
    id:number=10;
    name:string="tom";
    getDetails(): void {
console.log(this.id);
console.log(this.name);
        
    }
    getRoles(): void {
        console.log("student role");
        
    }

}
class Teacher extends Person{
    id:number=12;
    name:string="marry"
    getDetails(): void {
        console.log(this.id);
        console.log(this.name);

        
    }
    getRoles(): void {
        console.log("Teachers Role");
        
    }
}

const s3= new Student1();
s3.getDetails();
s3.getRoles();

const teacher= new Teacher();
teacher.getDetails();
teacher.getRoles();

//Q5

function getStudentInfo<T>(info:T):T{
    return info;

}
console.log(getStudentInfo(student));

//Q6













