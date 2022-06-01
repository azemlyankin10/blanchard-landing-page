const buttonSlide = document.querySelectorAll('.galeryCarusel__slide')
const modalWindow = document.querySelector('.galery__modal')
const closeBtn = document.querySelector('.modal__close')
const caruselBtn = document.querySelectorAll('.galeryCarusel__btn')

buttonSlide.forEach(el => {
  el.addEventListener('click', (e) => {
    const img = e.target.firstElementChild.children[1].getAttribute('src')
    const author = e.target.dataset.author
    const name = e.target.dataset.name
    const year = e.target.dataset.year
    const descr = e.target.dataset.descr
    modal(img, author, name, year, descr)
  })
})

closeBtn.addEventListener('click', () => {
  modalClose()
})

caruselBtn.forEach(el => {
  el.addEventListener('click', () => {
    modalClose()
  })
})


function modal(img, author = 'Автор неизвестен', name = 'Название картины неизвестно', year = '', descr = ''){
  document.querySelector('.modal__img').setAttribute('src', img)
  document.querySelector('.modal__author').innerHTML = author
  document.querySelector('.modal__name').innerHTML = name
  document.querySelector('.modal__year').innerHTML = year
  document.querySelector('.modal__descr').innerHTML = descr

  const width = document.querySelector('.galery__rightSide').offsetWidth
  const height = document.querySelector('.galeryCarusel__wrapper').offsetHeight

  modalWindow.style.opacity = 1
  modalWindow.style.zIndex = 10
  modalWindow.style.width = `${width}px`
  modalWindow.style.height = `${height}px`
}

function modalClose(){
  modalWindow.style.opacity = 0
  modalWindow.style.zIndex = -1
  document.querySelector('.modal__img').setAttribute('src', '')
  document.querySelector('.modal__author').innerHTML = ''
  document.querySelector('.modal__name').innerHTML = ''
  document.querySelector('.modal__year').innerHTML = ''
  document.querySelector('.modal__descr').innerHTML = ''
}
