#! /usr/bin/env node
class institute {
    name;
    student = [];
    addStudent(studentobj) {
        this.student.push(studentobj);
    }
    constructor(name) {
        this.name = name;
    }
}
class student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class course {
    name;
    constructor(name) {
        this.name = name;
    }
}
class teacher {
    name;
    course = [];
    addCourse(courseobj) {
        this.course.push(courseobj);
    }
    constructor(name) {
        this.name = name;
    }
}
let i1 = new institute("Air university");
let studentobj1 = new student("Salman");
let c1 = new course("CS");
let teacher1 = new teacher("Sara");
i1.addStudent(studentobj1);
console.log(i1);
teacher1.addCourse(c1);
console.log(teacher1);
export {};
