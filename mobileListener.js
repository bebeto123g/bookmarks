// touchstart - касание экрана
// touchmove - задержка пальца на экране и смещение
// touchend - убрали палец

// touchenter - скользим пальцем и наскакиваем на этот элемент с прослушкой
// touchleave - палец скользил и ушел за пределы элемента
// touchcancel - палец скльзит и выходит за пределы браузера

const container = document.querySelector('.container')
const crd = document.querySelector('.crd')

container.addEventListener('touchstart', (e) => {
  e.preventDefault()
  console.log('start')
})

container.addEventListener('touchmove', (e) => {
  e.preventDefault()
  let x = e.touches[0].clientX
  let y = e.touches[0].clientY
  crd.innerHTML = `X: ${x} - Y: ${y}`
  console.log('mov')
})

container.addEventListener('touchend', (e) => {
  e.preventDefault()
  console.log('end')
})

// touches - список пальцев, которые взаимодествуют с экраном
// targetTouches - список пальцев на конкретно этом элементе
// changedTouches - список пальцев, учавствующих в текущем событии
