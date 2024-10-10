const url = "https://official-joke-api.appspot.com/random_joke";

async function fetchJokes() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    const element = document.querySelector(".jokes");
      const setup = data.setup;
      const punchline = data.punchline;
    
      element.innerHTML += "<p>" + AAAAAAAAAAAAAAAAA+"</p>";

}  


fetchJokes();