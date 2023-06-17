main();

function main() {
    const ul = document.querySelector('ul');
    const [username, gender, height, img, button] = document.querySelectorAll('.info>*');
    console.log(img);
    console.log(document.querySelectorAll('.info>*'));
    const [block1, player2] = document.querySelectorAll("Section");
    console.log(document.querySelectorAll("Section"));

    console.log(button);
    button.addEventListener('click', ()=>{
        console.log('elo')
        block1.classList.remove("hide");
        player2.classList.add("hide");
    })

    fetchApi();
    async function fetchApi() {
        let requestUrl = "https://swapi.dev/api/people/";
        let request = new Request(requestUrl);

        let response = await fetch(request);
        let starWars = await response.json();
        // console.log(starWars);
        console.log(starWars.next);
        while (starWars.next !== null) {
            populate(starWars.results);

            requestUrl = starWars.next;
            request = new Request(requestUrl);

            response = await fetch(request);
            starWars = await response.json();
        }
    } 

    function populate(characterList) {
        characterList.forEach((character) => {
            const li = document.createElement('li');
            li.innerHTML = character.name;
            ul.append(li);
            li.style.cursor = ('pointer')
            li.addEventListener('click', () => showDetails(character));
            // li.addEventListener('hover', () => showDetails(character));
            
        });
    }

    function showDetails(character) {
      console.log(character.name)
      console.log(username);
      username.innerHTML = character.name
      gender.innerHTML = "Gender: " + character.gender;
      height.innerHTML = "Height: " + character.height;
    //   img.src ="th.jpg" + character;
      block1.classList.add("hide");
      player2.classList.remove("hide");
        
    }
}   