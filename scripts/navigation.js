const navButtons = document.querySelectorAll('.nav-button')
const articles = document.querySelectorAll('.portfolio-item')
const buttonClose = document.querySelector('.button-close-nav')
const buttonOpen = document.querySelector('.button-open-nav')
const nav = document.querySelector('nav')
const buttonActive = 'nav-button-active'
const articleActive = 'portfolio-item-active'
const navClosed = 'closed'
const navOpened = 'opened'

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        navButtons.forEach((button) => {
            button.classList.remove(buttonActive)
        })
        button.classList.toggle(buttonActive)

        articles.forEach((article) => {
            if (article.id === `${button.id}-content`) {
                article.classList.add(articleActive)
            } else {
                article.classList.remove(articleActive)
            }
        })

        window.scrollTo({
            top: 0
        })        
    })
})

buttonClose.addEventListener('click', () => {
    nav.classList.add(navClosed)
    nav.classList.remove(navOpened)
})

buttonOpen.addEventListener('click', () => {
    nav.classList.add(navOpened)
    nav.classList.remove(navClosed)
})

// window.addEventListener('scroll', () => {
//     const visibleArticles = Array.from(articles).filter(article =>
//         article.classList.contains('portfolio-item-active')
//     )
//     const lastVisible = visibleArticles[visibleArticles.length - 1]
//     const rect = lastVisible.getBoundingClientRect()

//     if (rect.bottom <= window.innerHeight + 10) {
//         const currentIndex = Array.from(articles).indexOf(lastVisible)
//         const next = articles[currentIndex + 1]

//         if (next && !next.classList.contains('portfolio-item-active')) {
//             next.classList.add('portfolio-item-active')
//         }
//     }
// })
