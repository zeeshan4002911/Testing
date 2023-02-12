class Airplane {
    constructor(name) {
        this.name = name;
        this.isFlying = false;
    }
    takeOff() {
        this.isFlying = true;
    }
    land() {
        this.isFlying = false;
    }
}

let airIndia_3214 = new Airplane("AirIndia-3214");
airIndia_3214.takeOff();
console.log("Plane is flying", airIndia_3214.isFlying);

// After 2 seconds
setTimeout(() => {
    airIndia_3214.land();
    console.log("Plane is flying", airIndia_3214.isFlying)
}, 2000)