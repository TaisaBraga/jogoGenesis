let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}
