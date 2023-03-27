// const others = [
//   {
//     id: 1,
//     img: './images/item2.jpg',
//     title: 'Collaboration learning',
//     desc: 'Move your creative journey forward without putting life on hold.',
//     link: 'Our Customer ',
//   },
//   {
//     id: 2,
//     img: './images/item3.jpg',
//     title: 'Make easy access',
//     desc: 'Take classes on the go with the Skillshare app. Download to watch.',
//     link: 'Our Mission',
//   },
//   {
//     id: 3,
//     img: './images/item1.jpg',
//     title: 'Helping child growth',
//     desc: 'Explore new skills, deepen existing passions, and get lost in creativity.',
//     link: 'See What We Do ',
//   },
// ]
// const imgfolder = document.querySelector('.img-folder')
// window.addEventListener('DOMContentLoaded', () => {
//   let wow = others
//     .map((item) => {
//       return `<div class="items">
//      <img src="${item.img}" alt="" class="img">
//      <h1>${item.title}</h1>
//      <p>${item.desc}</p>
//   <a href="">${item.link}  <i class="fa-sharp fa-solid fa-arrow-right"></i></a>
//     </div>`
//     })
//     .join('')
//   imgfolder.innerHTML = wow
// })

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar')
  const windowHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if (windowHeight > 87) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
})

class showlinks {
  showlinks() {
    const bars = document.querySelector('.bars')
    const linksContainer = document.querySelector('.links-container')
    bars.addEventListener('click', () => {
      linksContainer.classList.toggle('show-links')
    })
  }
}

const showLinksInstance = new showlinks()
showLinksInstance.showlinks()

const bars = document.querySelector('.bars')

bars.addEventListener('click', () => {
  bars.classList.toggle('rotate')
})
