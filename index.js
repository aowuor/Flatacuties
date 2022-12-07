//Initilizes the app
let animalObj;
let currentAnimal;
let animalName;
let animalImage;
let animalVote;
let animalId;

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    getAnimals();
})

// Fetches animal data from db.json
function getAnimals(){
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(animals => {
        for(let animal in animals){
            buildAnimalList(animals[animal])
        }
    })
}
        
// Renders a list of all animal names
function buildAnimalList(animal){
    const ul = document.getElementById('animals');
    const li = document.createElement('li');
    li.innerText = animal.name
    ul.appendChild(li)

    li.addEventListener('click', function(){
        currentAnimal = animal;
        getDetailedInfo(animal);
    })
}
    
// Renders details of particular animal selected from the list of animals
function getDetailedInfo(animal){
    animalName = document.getElementById('name')
    animalName.innerText = animal.name
    animalImage = document.getElementById('image')
    animalImage.src = animal.image
    animalVote = document.getElementById('voteCount')
    animalVote.innerText = parseInt(animal.votes) 
}   

// Adds votes for each animal
window.onload = function(){
    let form = document.getElementById("voteForm")
    console.log("hey")
    console.log(form)
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        let voteInput = parseInt(form.vote.value);
       currentAnimal.votes += voteInput;
       form.vote.value = " ";
       getDetailedInfo(currentAnimal)
    })
}
    



//POST a new animal
function addingNewAnimal(){
    let addForm = document.getElementById('updateForm');
    console.log(addForm)
    addForm.addEventListener('submit',function(e){
        e.preventDefault();
        console.log(addForm.nameUpdate.value)

        animalObj = {
            name: addForm.nameUpdate.value,
            image: addForm.imageUrlUpdate.value,
            votes: addForm.votesUpdate.value,
        }
        console.log(animalObj)

        fetch("http://localhost:3000/characters", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(animalObj)
        })
        .then(res => res.json())
        .then(animal => {console.log(animal)

            animalName = document.getElementById('nameUpdate');
            animalName.innerText = animalObj.name;
            animalImage = document.getElementById('imageUrlUpdate');
            animalImage.innerText = animalObj.image;
            animalVote = document.getElementById('votesUpdate');
            animalVote.innerText = animalObj.votes;
        })
        .catch(error => {
            alert("confirm correct entries for all fields")})
    
     })
 }
 
document.addEventListener('DOMContentLoaded', addingNewAnimal)
