document.getElementById("input").addEventListener("keyup", (e) => {
    const val = (e.target.value);
    if (Number.isNaN(val)) return;
    let gram = (453.592 * val);
    let ounce = 16 * val;
    ounce = (Number.isInteger(ounce)) ? ounce : ounce.toFixed(2) 
    document.getElementById("gram").innerText = gram.toFixed(2)
    document.getElementById("kilogram").innerText = (gram / 1000).toFixed(2)
    document.getElementById("ounce").innerText = ounce
})