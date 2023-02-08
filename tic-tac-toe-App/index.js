let count = 0;
let input = {};
let display = document.getElementById("result");

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
        if (count % 2) {
            event.currentTarget.innerText = "⭕";
            input[event.currentTarget.id] = "o";
        } else {
            event.currentTarget.innerText = "❌";
            input[event.currentTarget.id] = "x";
        }
        const result = game();
        if (!result) { count++; }
        else if (result === "o") display.innerText = "O win the Game";
        else if (result === "x") display.innerText = "X win the Game";
        if (count == 9) display.innerText = "Draw";
    })
})

function game() {
    // Row wise win
    if (input["1"] == "o" && input["2"] == "o" && input["3"] === "o") { return "o" }
    if (input["1"] == "x" && input["2"] == "x" && input["3"] === "x") { return "x" }
    if (input["4"] == "o" && input["5"] == "o" && input["6"] === "o") { return "o" }
    if (input["4"] == "x" && input["5"] == "x" && input["6"] === "x") { return "x" }
    if (input["7"] == "o" && input["8"] == "o" && input["9"] === "o") { return "o" }
    if (input["7"] == "x" && input["8"] == "x" && input["9"] === "x") { return "x" }

    // Column wise win
    if (input["1"] == "o" && input["4"] == "o" && input["7"] === "o") { return "o" }
    if (input["1"] == "x" && input["4"] == "x" && input["7"] === "x") { return "x" }
    if (input["2"] == "o" && input["5"] == "o" && input["8"] === "o") { return "o" }
    if (input["2"] == "x" && input["5"] == "x" && input["8"] === "x") { return "x" }
    if (input["3"] == "o" && input["6"] == "o" && input["9"] === "o") { return "o" }
    if (input["3"] == "x" && input["6"] == "x" && input["9"] === "x") { return "x" }

    // Diagonal Wise win
    if (input["1"] == "o" && input["5"] == "o" && input["9"] === "o") { return "o" }
    if (input["1"] == "x" && input["5"] == "x" && input["9"] === "x") { return "x" }
    if (input["3"] == "o" && input["5"] == "o" && input["7"] === "o") { return "o" }
    if (input["3"] == "x" && input["5"] == "x" && input["7"] === "x") { return "x" }
}