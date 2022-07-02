const card = document.getElementById('cards')

class Characters {
    constructor(name, species, image) {
        this.__name = () => name;
        this.__species = () => species;
        this.__image = () => image;
    }

    get name() {
        return this.__name();
    }

    get species() {
        return this.__species();
    }

    get image() {
        return this.__image();
    }


    show() {
        let characters = [this.image, this.name, this.species]

        card.innerHTML += `<div class= "card">
         <img src= "${characters[0]}"">
         <p>${characters[1]}</p>
         <p>${characters[2]}</p>
         </div>
         `
    }

}

const getData = async () => {

    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        for (let i of response.data.results) {
            
            let name = i.name.toUpperCase()
            let species = i.species.toUpperCase()
            let image = i.image


            let list = new Characters(name, species, image);
            list.show()
        }

    } catch (error) {
        console.log(error)
    }

}

getData();