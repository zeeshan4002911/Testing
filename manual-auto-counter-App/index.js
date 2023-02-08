let val = 0;
const handleClick = (operator) => {
    if (val < 0 || val >= 1000) return;
    switch (operator) {
        case "+":
            val++;
            break;
        case "-":
            if (val == 0) break;
            val--;
    }
    document.getElementById("display").innerText = val;
}
let count;
let auto = false;
const handleAuto = () => {
    auto = (auto) ? false : true;
    if (auto && val <= 1000) {
        count = setInterval(() => {
            if (val >= 1000) return;
            val++;
            document.getElementById("display").innerText = val;
        }, 1000)
    } else {
        clearInterval(count);
    }
}

const btn = document.getElementsByTagName("button");
btn[0].addEventListener('click', () => handleClick("+"));
btn[1].addEventListener('click', () => handleClick("-"));
btn[2].addEventListener('click', () => handleAuto());