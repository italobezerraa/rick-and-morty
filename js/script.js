const button = document.querySelector('button')

button.addEventListener('click', startRequest)

async function startRequest() {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`)
        const charactersFiltred = response.data.results.filter((element) => {
            if (element.species == 'Human' && 
            element.status == 'Alive' && 
            element.type == '' &&
            (element.location.name == 'Earth (Replacement Dimension)' || 
             element.location.name == 'Citadel of Ricks'))
            return true
        })

        const charactersDetails = charactersFiltred.map((element) => {
            return {
                name: element.name,
                specie: element.species,
                gender: element.gender,
                location: element.location.name,
                image: element.image
            }
        })

        const charactersList = charactersDetails.map((person) =>  `
        <div id="characters-card">
            <img id="card-image" src="${person.image}">
            <div id="characters-card-content">
                <h3>Name: ${person.name}</h3>
                <h3>Specie: ${person.specie}</h3>
                <h3>Gender: ${person.gender}</h3>
                <h3>Location: ${person.location}</h3>
            </div>
        </div>
        `)

        document.querySelector('#list-characters').innerHTML = charactersList.join('')
    } catch (error) {
        console.log('Ocorreu um erro!');
    }
}