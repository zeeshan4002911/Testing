/*
gearVehicle

Design a class gearVehicle. This class should contain two private properties - model and numberOfGear and one public property speed. Use a constructor to initialise vehicle objects with a given model. The number of gears and the speed should be initialised to 0. The default model should be Suzuki. There should be three get methods getModel(), getNumberOfGear() and getSpeed() used to get model, numberOfGear and speed respectively.

Define a private method increaseGear() which will be used to increase the number of gears by 1 unit. Similarly, Define a public method increaseSpeed() which will take an argument an integer n and will increase speed by n units. Whenever the speed increases by 20 units the number of gears increases by 1 unit, hence increaseGear() is called inside the increaseSpeed() method.

You can note since, increaseGear() is a private method, you can only increase speed when you define an object which controls the number of gears, and cannot change the number of gears directly. This is also known as encapsulation.
Input

First line contains n which specifies the number of rows of data given to you. The next line has one input: model. The next n-1 lines contain the speed by which the speed of the vehicle is desired to be increased. 0 means there will be no change in speed.
Output

One line output, in the order: Final Speed and Final number of gears.
Example

Input:

7

Audi

10

5

0

5

0

20

Output:

40 2
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
class gearVehicle {
    #model;
    #numberOfGear;
    constructor(model = "Suzuki") {
        this.#model = model;
        this.#numberOfGear = 0;
        this.speed = 0;
        this.temp = 0;
    }
    getModel() {
        return this.#model;
    }
    getNumberOfGear() {
        return this.#numberOfGear;
    }
    getSpeed() {
        return this.speed;
    }
    #increaseGear() {
        this.#numberOfGear++;
    }
    increaseSpeed(n) {
        this.speed += n;
        this.temp += n;
        if (this.temp >= 20) {
            this.#increaseGear();
            this.temp -= 20;
        }
    }
}
// Do not edit below this line
let n = parseInt(readLine());

let model = readLine();
let vehicle = new gearVehicle(model);

for (let i = 1; i < n; i++) {
    amount = parseInt(readLine());
    vehicle.increaseSpeed(amount);
}

let speed = vehicle.getSpeed();

let gear = vehicle.getNumberOfGear();

// Output the final speed and final number of gear
console.log(speed + " " + gear);