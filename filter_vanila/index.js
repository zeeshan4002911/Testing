let data;
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json)
    .finally(() => {
        console.log(data);
        document.querySelector("#submit").addEventListener("click", () => {
            const search = document.getElementById("search").value;
            const option = document.getElementById("option").value;
            const ul = document.querySelector("ul");
            ul.innerHTML = "";
            const pattern = new RegExp(search);
            data.forEach((obj) => {
                if (option === "first_name") {
                    if (obj.first_name.match(pattern)) {
                        const li = document.createElement("li");
                        li.innerText = obj.first_name;
                        ul.appendChild(li);
                    }
                } else if (option === "last_name") {
                    if (obj.last_name.match(pattern)) {
                        const li = document.createElement("li");
                        li.innerText = obj.last_name;
                        ul.appendChild(li);
                    }
                } else if (option === "email") {
                    if (obj.email.match(pattern)) {
                        const li = document.createElement("li");
                        li.innerText = obj.email;
                        ul.appendChild(li)
                    }
                }
            })
        })
    })
