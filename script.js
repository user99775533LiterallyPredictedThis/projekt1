const url = "https://official-joke-api.appspot.com/random_joke";

async function fetchJokes() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

}



fetchJokes();