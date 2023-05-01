const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')
let tabCounter = 0
const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}
const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
                tabCounter = i
            }
        })
    }
}

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')
const secondModalTrigger = document.querySelector('.btn_dark')
const openModal = () => {
    setTimeout(() => {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }, 100)
}
const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
secondModalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()

modal.onclick = (event) => (event.target === modal ? closeModal() : false)
modal.onkeydown = (event) => event.code === 'Escape' ? closeModal() : false

const switchTabs = () => {
    hideTabContent()
    showTabContent(tabCounter)
    tabCounter++
    if (tabCounter >= tabs.length){
        tabCounter = 0
    }
}
setInterval(switchTabs, 2500)


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const scrollHeight = document.body.scrollHeight
    if (scrollPosition >= scrollHeight){
        openModal()
    }
})  

window.onload = () => setTimeout(() => openModal(), 10000)