"use strict";
class Student {
    name;
    studentID;
    grade;
    address;
    constructor(name, studentID, grade, address) {
        this.name = name;
        this.studentID = studentID;
        this.grade = grade;
        this.address = address;
    }
    displayInfo() {
        console.log(this.name);
        console.log(this.studentID);
        console.log(this.grade);
        console.log(this.address);
    }
}
const student = new Student("jayshree", 12, "A", "Mumbai");
//student.displayInfo();
//Q3
class School {
    static totalStudents = 0;
    studentList = [];
    addStudents(s) {
        this.studentList.push(s);
        School.totalStudents++;
        console.log("Student added successfully" + School.totalStudents);
    }
}
const s1 = new Student("ritika", 13, "B", "mira road");
s1.displayInfo();
const s2 = new Student("mansi", 14, "C", "bhayander");
s2.displayInfo();
const sch = new School();
sch.addStudents(s1);
console.log(sch.studentList);
//Q4
class Person {
}
class Student1 extends Person {
    id = 10;
    name = "tom";
    getDetails() {
        console.log(this.id);
        console.log(this.name);
    }
    getRoles() {
        console.log("student role");
    }
}
class Teacher extends Person {
    id = 12;
    name = "marry";
    getDetails() {
        console.log(this.id);
        console.log(this.name);
    }
    getRoles() {
        console.log("Teachers Role");
    }
}
const s3 = new Student1();
s3.getDetails();
s3.getRoles();
const teacher = new Teacher();
teacher.getDetails();
teacher.getRoles();
//Q5
function getStudentInfo(info) {
    return info;
}
console.log(getStudentInfo(student));
//Q6
