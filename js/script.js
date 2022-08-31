const axios = require('axios')

async function load() {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`)
        const personagens = response.data.results.filter((elemento) => {
            return elemento.species == 'Human' && 
                   elemento.status == 'Alive' && 
                   elemento.type == '' &&
                   (elemento.location.name == 'Earth (Replacement Dimension)' || elemento.location.name == 'Citadel of Ricks')
        })
        console.log(personagens);
    } catch (error) {
        console.log('Ocorreu um erro!');
    }
}

load()
