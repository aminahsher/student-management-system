#! /usr/bin/env node
class institute{
    name:string;
    student:any=[];
    addStudent(studentobj:student){
        this.student.push(studentobj);
    }
    constructor(name:string){
        this.name = name;
    }
}
class student{
    name:string;
    constructor(name:string){
        this.name = name
    }
}
class course{
    name:string;
    constructor(name:string){
        this.name =name
    }
}
class teacher{
    name:string;
    course:any[]=[];
    addCourse(courseobj:course){
        this.course.push(courseobj)
    }
    constructor(name:string){
        this.name = name
    }

}
let i1 = new institute("Air university")
let studentobj1 =new student("Salman")
let c1 =new course("CS")
let teacher1 = new teacher("Sara")

i1.addStudent(studentobj1)
console.log(i1)
teacher1.addCourse(c1)
console.log(teacher1)