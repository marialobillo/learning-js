const strings = ['One', 'Two', 'Three', 'Four']
const lastItem = strings[strings.length -1]

console.log(lastItem)

1. let arr = []
2. let arr = [1,2,3]

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

1.

people.indexOf('Mahatma Gandhi')

2.

let index = people.indexOf('Pablo Picasso')
people[index]

3.

let index = people.indexOf('Walt Disney')
people[index] = 'Disneyland'

4.

people.concat('Best Friend Name')

5.

  let name = ['Another Friend']
  let newarr = name.concat(people)

6.

  let firstpart = people.slice(0,8)
  let secondpart = people.slice(9)
  let newpeople =  firstpart.concat('Maria', secondpart)

7.

  let ben = people.slice(1, people.length )

8.

 let nosteve = people.slice(0, - 1)

 9.

 let napoleon = people.indexOf('Napolean Bonaparte')
 let uno = people.slice(0, napoleon)
 let dos = people.slice(napoleon + 1, people.length)
 let newpeople = uno.concat(dos)
