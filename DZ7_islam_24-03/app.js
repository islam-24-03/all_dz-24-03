async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await response.json()
}

async function creatCards(){
    const poste = await getPosts()
    const cardContaner = document.querySelector('.console')

    poste.forEach(post => {
        const card = document.createElement("div")
        const image = document.createElement("img")
        const title = document.createElement("h2")
        const body = document.createElement("p")

        card.className = 'card'
        image.src = 'news.png'
        title.textContent = post.title
        body.textContent = post.body

        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(body)
        cardContaner.appendChild(card)

    })
}

creatCards().catch(error => console.log(error))