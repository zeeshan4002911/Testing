function closure() {
    let private = 10;
    return function() {
        private++;
        console.log(private);
    }
}

const test = closure();
closure = null;
console.log(closure);
test();
test();

// Closure