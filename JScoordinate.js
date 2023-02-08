/*
Coordinate

Define a class with the name Coordinate. The class needs two properties with name x and y. Define a constructor which has parameters x and y of type int and it needs to initialise the x and y.

Additionally define getX and getY to return the value of x and y. Also, define setX and setY to set the value of x and y.

Apart from these, define two additional methods:

    Method named distanceXY() with two parameters x, y to return the distance between this Point and Point x,y as float

    Method named distancePoint() with parameter another of type Point, it needs to return the distance between this Point and another Point as float.

Input

You don't need to worry about inputs.
Output

You don't have to output anything.
Example

Input:

5 6

1 3

Output:

5

3

7.81

5.00

Explanation:

The first output : X of the point1

The second output : Y of the point2

The third output : Distance between point 1 from origin

The fourth output : Distance between point 1 and point 2
*/

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}
// Do not edit above this line
// Code Here

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    distanceXY(x, y) {
        return Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
    }
    distancePoint(obj) {
        return Math.sqrt((this.x - obj.x) ** 2 + (this.y - obj.y) ** 2);
    }
}

// Do not edit below this line 
let inp1 = readLine().split(" ");
let inp2 = readLine().split(" ");
let [x1, y1] = [parseInt(inp1[0]), parseInt(inp1[1])];
let [x2, y2] = [parseInt(inp2[0]), parseInt(inp2[1])];

let first = new Point(x1, y1);
let second = new Point(x2, y2);

// Output x coordinate of first point
console.log(first.getX());

// Output Y coordinate of first point
console.log(second.getY());

// Output Distance of first point from origin fixed to 2 decimal places
console.log(first.distanceXY(0, 0).toFixed(2));

// Output Distance of first point from second point fixed to 2 decimal places
console.log(first.distancePoint(second).toFixed(2));