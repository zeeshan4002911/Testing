document.getElementById("submit").addEventListener("click", () => {
    const p = document.querySelectorAll("p");
    p[0].innerText = ``;
    p[1].innerText = ``;
    p[2].innerText = ``;
    p[3].innerText = ``;
    p[4].innerText = ``;
    const zip_code = document.getElementById("zipcode").value;
    const promise = getData(zip_code)
    promise.then((data) => {
        console.log(data)
        if (!data.length) {
            document.getElementById("status").innerText = "Unable to find your zip code";
            return
        }
        data = data[0];
        p[0].innerText = `Zip Code: ${data.postal_code}`;
        p[1].innerText = `City: ${data.city}`;
        p[2].innerText = `State: ${data.state}`;
        p[3].innerText = `Longitude: ${data.longitude}`;
        p[4].innerText = `Latitude: ${data.latitude}`;
    })

})
async function getData(zip) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '470491b794mshec1246d46e6818bp1ebff5jsn4d37403f944b',
            'X-RapidAPI-Host': 'zipcodebase-zip-code-search.p.rapidapi.com'
        }
    };
    let data = []
    document.getElementById("loading").style.display = "block";
    await fetch(`https://zipcodebase-zip-code-search.p.rapidapi.com/search?codes=${zip}`, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("status").innerText = "Found a record";
            if (!response.results[zip]?.length) {
                data = [];
                return
            }
            data = response.results[zip];
            console.log(response)
        })
        .catch(err => {
            data = []
            document.getElementById("status").innerText = "Disonnected"
            console.error(err)
        })
        .finally(() => {
            document.getElementById("loading").style.display = "none";
        })
    return data;
}