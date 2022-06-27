const names = document.getElementById('exampleInputEmail1');
const pass = document.getElementById('exampleInputPassword1');
const button = document.getElementById('button');
const list = document.getElementById('list');
const removeButton = document.createElement('li');

function books(title, author) {
  this.title = title;
  this.author = author;
}

let booksArray = [];

function remove(index) {
  //  we have index in array, and we can pass it to card
  // when we click rm btn, to pass back its parent index which is the card
}

function display() {
  list.innerHTML = '';
  booksArray.forEach((element, index) => {
    const bookCard = document.createElement('ul');
    const title = document.createElement('li');
    const author = document.createElement('li');

    bookCard.setAttribute('data-id', index);
    title.textContent = element.title;
    author.textContent = element.author;

    list.appendChild(bookCard);
    bookCard.append(title, author);
  });
}

button.addEventListener('click', e => {
  const book = new books(names.value, pass.value);
  e.preventDefault();
  booksArray.push(book);

  display();
});
