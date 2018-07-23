const button = document.querySelector('button')

/*
button.addEventListener('click', function () {
  const body = document.body

  body.classList.add('button-is-clicked')
  button.classList.add('is-clicked')
})

button.addEventListener('click', function(){
  const body = document.body

  if(button.classList.contains('is-clicked')) {
    body.classList.remove('button-is-clicked')
    button.classList.remove('is-clicked')
  } else {
    body.classList.add('button-is-clicked')
    button.classList.add('is-clicked')
  }
})

button.addEventListener('click', function () {
  const body = document.body
  body.classList.toggle('button-is-clicked')
  button.classList.toggle('is-clicked')
})
*/
// 1.
button.addEventListener('click', function(){
  console.log('I clicked the button!!')
})

const tauButton = document.getElementById('tau');

tauButton.addEventListener('click', function(){
  const body = document.body
  body.classList.toggle('red')
  tauButton.classList.toggle('blue')
})
