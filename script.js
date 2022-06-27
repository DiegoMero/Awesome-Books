const names = document.getElementById('title');
const pass = document.getElementById('author');
const button = document.getElementById('button');
const list = document.getElementById('list');

list.style.width = '20%';

function Books(title, author) {
  this.title = title;
  this.author = author;
}

function setData() {
  const toObject = JSON.parse(localStorage.getItem('books-list'));
  return toObject;
}

let booksArray = setData() ?? [];

function saveData() {
  const toString = JSON.stringify(booksArray);
  localStorage.setItem('books-list', toString);
}

function remove(id) {
  booksArray = booksArray.filter((_book, index) => index !== id);
}

function display() {
  list.innerHTML = '';
  booksArray.forEach((element, index) => {
    const bookCard = document.createElement('ul');
    const title = document.createElement('li');
    const author = document.createElement('li');
    const removeButton = document.createElement('button');
    const line = document.createElement('hr');

    bookCard.style.listStyle = 'none';
    bookCard.style.padding = 0;
    bookCard.setAttribute('data-id', index);

    title.textContent = element.title;
    author.textContent = element.author;
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
      remove(index);
      removeButton.parentElement.remove();
      saveData();
    });

    list.appendChild(bookCard);
    bookCard.append(title, author, removeButton, line);
  });
}

button.addEventListener('click', (e) => {
  const book = new Books(names.value, pass.value);
  e.preventDefault();
  booksArray.push(book);
  saveData();
  display();
});

display();
