const jumpStop = [
    {
        name: "Dre Funkz",
        genre: "Funk",
        age: 25
    },
    {
        name: "Dusta Grimes",
        genre: "Rap",
        age: 21
    },
    {
        name: "Loyonce Branis",
        genre: "Rap",
        age: 27
    }
]

const chatten = [
    {
        name: "Bruce Atkins",
        genre: "Country",
        age: 23
    },
    {
        name: "Bartholowmew Danielson",
        genre: "Bluegrass",
        age: 23
    },
    {
        name: "Avilee Dallas",
        genre: "Country",
        age: 19
    }
]

const polar = [
    {
        name: "Jenson Brown",
        genre: "Pop",
        age: 20
    },
    {
        name: "Austin Kinkaid",
        genre: "Pop",
        age: 22
    }
]

createArtist = (label) => {
    label.forEach(artist => {
        let p = document.createElement("p")
        p.textContent = `${artist.name} is a ${artist.genre} artist and is ${artist.age} years old`
        document.querySelector("#artists").appendChild(p)
    })
}

createArtist(jumpStop)
createArtist(chatten)
createArtist(polar)
