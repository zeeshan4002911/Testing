const memo = (cb) => {
    //{arg, value}
    let memoziedKeyValue = [];
    return (arg1, arg2) => {
        debugger
        //findimg is args pair exit or not
        let result = memoziedKeyValue.find((x) => {
            return x.args === JSON.stringify(args);
        });
        if (result) {
            console.log("From previous value")
            return result.value
        }
        result = cb(arg1, arg2);
        //cache
        memoziedKeyValue.push({ args: JSON.stringify(args), value: result });
        return result;
    }
}

const add1 = memo((arg1, arg2) => { return arg1 + arg2 });
console.log(add1(1, 2))
console.log(add1(1, 2))    