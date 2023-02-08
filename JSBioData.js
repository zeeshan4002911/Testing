/*

BioData --JavasScript practise

You are assigned a task to prepare biodata for students for a school. You have to design a class Student. The class should have studentName, rollNumber and dateOfBirth as properties. Define class in such a way that once an student object is defined, the properties can neither be modified nor accessed, outside the class. Additionally, to get the data of a particular student object define three get methods getStudentName(), getRollNumber() and getDateOfBirth() which will be used to get the studentName, rollNumber and dateOfBirth respectively for the particular object.

You don’t need to worry about input and output. Just create the given class according to description, Problem text...
Input

Three lines of input are given in three consecutive lines: Student Name, Roll Number and Date Of Birth respectively.
Output

Use get methods to print one line of output in the order Date Of Birth, Student Name, Roll Number.
Example

Input:

ABC XYZ

20QS103

01.02.2003

Output:

01.02.2003

ABC XYZ

20QS103

*/

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}
// Do not Edit above this Line
// Code here

class Student {
    constructor(studentName, rollNumber, dateOfBirth) {
        this._studentName = studentName;
        this._rollNumber = rollNumber;
        this._dateofBirth = dateOfBirth;
    }
    getStudentName() {
        return this._studentName;
    }
    getRollNumber() {
        return this._rollNumber;
    }
    getDateOfBirth() {
        return this._dateofBirth;
    }
}

// Do not edit below this Line
let studentName = readLine();
let rollNumber = readLine();
let dateOfBirth = readLine();

const student = new Student(studentName, rollNumber, dateOfBirth);

// Output DOB of student
console.log(student.getDateOfBirth());
// Output Name of student
console.log(student.getStudentName());
// Output Roll Number of student
console.log(student.getRollNumber());