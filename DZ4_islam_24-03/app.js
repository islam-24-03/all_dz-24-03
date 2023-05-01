const wrapper = document.querySelector('.wrapper')

const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.responseType = 'json'
request.send()

request.onload = () => {
    const data = request.response
    data.forEach(people => {
        const box = document.createElement('div')
        box.classList.add('box')
        const name = document.createElement('h2')
        name.textContent = people.name
        box.appendChild(name)
        const age = document.createElement('span')
        age.textContent = `Age : ${people.age}`
        box.appendChild(age)
        wrapper.appendChild(box)
    })
}
