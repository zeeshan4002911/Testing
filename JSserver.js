/*
Server

You have to manage a server. The threshold of the number of users at any time in the server is 6. Many users login and logout of the server. Read the instructions below and Design a class Server.

The class should contain two private properties activeStatus which will be 0 (inactive) or 1 (active) and activeUsers (the number of active users). This class should have one private method changeStatus() to change activeStatus to the opposite of current activeStatus, and one public method getActiveUsers() to get the number of active users.

Additionally, define a public method loginServer() which increases the number of active users by one if the server is active. Also, whenever the active users become greater than 5, it should call changeStatus() to change the activeStatus to 0 just after the login. Similarly define a public method logoutServer() which decreases the number of active users by one if the number of active users is at least one. Hence, whenever the number of active users becomes equal to 5 after a logout, it should call changeStatus() to change the activeStatus to 1.

Use a constructor to initialise the server object with activeStatus =1 and activeUsers =0.
Input

First line contains N which specifies the number of rows of data given to you. The next n lines contain the either of two instructions: ‘login’ or ‘logout’
Output

N lines of output which is the total number of active users after every instruction.
Example

Input:

16

login

logout

login

login

login

login

login

login

login

logout

logout

logout

logout

logout

logout

logout

Output:

1

0

1

2

3

4

5

6

6

5

4

3

2

1

0

0

Explanation: After the 8th instruction, the total number of active users = 6 which is the maximum limit of the server, so the server status will be changed to 0. When there will be a login request at 9th instruction, since the server status is 0, nothing will happen.

At 10th instruction one user logs out and the server status is back to 1. After the 15th instruction, all the users have logged out of the server, hence at 16th instruction of logout nothing will happen.
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

class Server {
    #activeStatus;
    #activeUsers;
    constructor() {
        this.#activeStatus = 1;
        this.#activeUsers = 0;
    }
    #changeStatus(val) {
        if (val == 0) {
            this.#activeStatus = 0;
        } else if (val == 1) {
            this.#activeStatus = 1;
        }
        this.#activeStatus = (this.#activeStatus === 0) ? 1 : 0;
    }
    getActiveUsers() {
        return this.#activeUsers;
    }
    loginServer() {
        if (this.#activeUsers < 6) {
            this.#activeUsers++;
        }
        if (this.#activeUsers > 5) {
            this.#changeStatus(0);
        }
    }
    logoutServer() {
        if (this.#activeUsers >= 1) {
            this.#activeUsers--;
        }
        if (this.#activeUsers === 5) {
            this.#changeStatus(1);
        }
    }
}

// Do not edit below this line
let n = parseInt(readLine());
let server = new Server();

for (let i = 0; i < n; i++) {
    let ins = readLine().trim();
    if (ins === "login") {
        server.loginServer();
    }
    else {
        server.logoutServer();
    }
    // Print ActiveUsers after every step
    console.log(server.getActiveUsers());
}