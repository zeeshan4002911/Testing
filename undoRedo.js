let current = [];
let history = [];


function redo() {
    if (history.length) {
        current.push(history.pop());
    }
}

function undo() {
    if (current.length) {
        history.push(current.pop());
    }
}

function write(data) {
    current.push(data);
}