let data;
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json)
    .finally(() => {
        console.log(data);
        const name = document.getElementById("country-names")
        data.forEach(obj => {
            name.innerText += ", " + obj.region;
        })
        document.querySelector("#submit").addEventListener("click", () => {
            const search = document.getElementById("search").value.toLowerCase();
            const ul = document.querySelector("ul");
            ul.innerHTML = "";
            console.log(search)
            const gender = document.getElementById("gender").value;
            data.forEach((obj) => {
                if (gender == 'male' && obj.region.toLowerCase() == (search)) {
                    for (let i = 0; i < obj.male.length; i++) {
                        const li = document.createElement("li");
                        li.innerText = obj.male[i];
                        ul.appendChild(li)
                    }
                } else if (gender == 'female' && obj.region.toLowerCase() == (search)) {
                    for (let i = 0; i < obj.female.length; i++) {
                        const li = document.createElement("li");
                        li.innerText = obj.female[i];
                        ul.appendChild(li)
                    }
                }
            })
        })
    })
