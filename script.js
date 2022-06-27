const names = document.getElementById('exampleInputEmail1')
const pass = document.getElementById('exampleInputPassword1')
const button = document.getElementById('button')

// console.log(names, pass, button)

function books(newName, newPass){
    this.newName = newName;
    this.newPass = newPass;
}

let booksArray = [];

button.addEventListener('click', (e) =>{
    const book = new books (names.value, pass.value)
    e.preventDefault()
    booksArray.push(book)
    console.log(booksArray)
})

function display() {



booksArray.forEach(element =>{
const Ul = document.createElement('ul')
})
}