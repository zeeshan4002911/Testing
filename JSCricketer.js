/*
Cricketer

Define a class Cricketer. This class should have two private properties: cricketerName and cricketerAge. The class should have a public method numberOfMatches() which will return the number of matches played by a cricketer.

It is assumed that the number of matches played by a cricketer = 25*(cricketerAge - 18).

Additionally define two subclasses: Batter and Bowler which will inherit all the functionalities of the Cricketer Class. The Batter class will have a batterRun property and a batterAverage() method which will return the average of the batter.

The average of batter = batterRun / Number of matches played by batter.

Similarly, the Bowler class will have a bowlerWicket property and a bowlerAverage() method which will return the average of the bowler.

The average of bowler= bowlerWicket / Number of matches played by bowler.

It is assumed that the age of cricketer will always be greater than 18. Also, the returned average value should be fixed to 2 decimal places.
Input

Three lines of input are given. The first line contains a name, the second line contains an integer 0 or 1. 0 means that the given cricketer is a bowler and 1 means that the given cricketer is a batter. Third line contains the age and the fourth line contains batter run or bowler wicket Depending upon the type of cricketer, batter or bowler respectively.
Output

One line output the average of the cricketer. batterAverage for batter and bowlerAverage for Bowler.
Example

Input:

Sachin

1

37

18000

Output:

37.89

Explanation:

Since 2nd input is 1, Sachin is a batsman. Age = 37

So, number of matches played = 25*(37-18) = 475.

Hence the average = 18000 / 475 = 37.89.
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
class Cricketer {
    #cricketerName;
    #crciketerAge;
    constructor(name, age) {
        this.#cricketerName = name;
        this.#crciketerAge = age;
    }
    numberOfMatches() {
        return (25 * (this.#crciketerAge - 18));
    }
}
class Batter extends Cricketer{
    constructor(name, age, runs) {
        super(name, age);
        this.batterRun = runs;
    }
    batterAverage() {
        return (this.batterRun / this.numberOfMatches());
    }
}
class Bowler extends Cricketer{
    constructor(name, age, wickets) {
        super(name, age);
        this.bowlerWicket = wickets;
    }
    bowlerAverage() {
        return (this.bowlerWicket / this.numberOfMatches());
    }
}

// Do not edit below this line
let cricketername = readLine();
let checktype = parseInt(readLine());
let age = parseInt(readLine());

// If type of player is batter
if (checktype === 1) {
  runs = parseInt(readLine());
  let batter = new Batter(cricketername, age, runs);
// Output the batter average fixed to 2 decimal places
  console.log(batter.batterAverage().toFixed(2));
} 
// If player is of type bowler
else {
  wicket = parseInt(readLine());
  let bowler = new Bowler(cricketername, age, wicket);
// Output the bowler average fixed to 2 decimal places
  console.log(bowler.bowlerAverage().toFixed(2));
}