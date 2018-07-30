const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Napolean Bonaparte',
  'Abraham Lincoln',
  'Mother Theresa',
  'Mahatma Gandhi',
  'Winston Churchill',
  'Charles Darwin',
  'Albert Einstein',
  'Pablo Picasso',
  'Ludwig Beethoven',
  'Walt Disney',
  'Henry Ford',
  'Steve Jobs'
]

let napoleon = people.indexOf('Napolean Bonaparte')
let uno = people.slice(0, napoleon)
let dos = people.slice(napoleon + 1, people.length)
let newpeople = uno.concat(dos)
console.log(newpeople);
