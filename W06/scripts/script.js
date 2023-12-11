let p = document.createElement("p");

function output(fact) {
    let divContainer = document.querySelector(".fact")
    p.innerHTML = fact.text;

    divContainer.appendChild(p)
}


const url = "https://uselessfacts.jsph.pl/random.json?language=en"

let getFact = async () => {
    let response = await fetch(url);
    data = await response.json();
    output(data);
};

document.querySelector(".generate").addEventListener('click', getFact);