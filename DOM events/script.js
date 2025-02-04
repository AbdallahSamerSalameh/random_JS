const click = document.querySelector(".click")

const hover = document.querySelector(".hover")
const scroll = document.querySelector(".scroll")
const pressA = document.querySelector(".pressA")


const inputs = document.querySelectorAll("input")
const form = document.querySelector("form")

// click.onclick = () => {
//   click.style.backgroundColor = 'red'
// }
// click.onclick = () => {
//   click.style.color = 'green'
// }


click.addEventListener ('click' , () => {
  click.style.backgroundColor = 'red'
})

click.addEventListener ('click' , () => {
  click.style.backgroundColor = 'green'
})

hover.addEventListener('mouseover' , () => {
  hover.style.backgroundColor = 'green' 
})
hover.addEventListener('mouseout' , () => {
  hover.style.backgroundColor = 'red' 
})

scroll.addEventListener('scroll' , () => {
  scroll.style.backgroundColor = 'red' 
})


document.addEventListener('keydown' , (event) => {
  if (event.key == 'a') {
    pressA.style.backgroundColor = 'red' 
  }
})

document.addEventListener('keyup' , (event) => {
  if (event.key == 'a') {
    pressA.style.backgroundColor = 'green' 
  }
})


inputs.forEach((input) => {
  input.addEventListener('focus' , () => {
    input.style.backgroundColor = 'green' 
  })
})

inputs.forEach((input) => {
  input.addEventListener('input' , () => {
    input.style.backgroundColor = 'red' 
  })
})
inputs.forEach((input) => {
  input.addEventListener('blur' , () => {
    input.style.backgroundColor = 'blue' 
  })
})

function qqq(event) {
  e.preventDefault()
  form.style.backgroundColor = 'black'
  
}

form.addEventListener('submit' , qqq)

form.removeEventListener('submit' , qqq)