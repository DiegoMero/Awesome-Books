const names = document.getElementById('title');
const pass = document.getElementById('author');
const button = document.getElementById('button');
const list = document.getElementById('list');

list.style.width = '20%';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BooksList {
  constructor(collection) {
    this.collection = collection;
  }

  add(book) {
    this.collection.push(book);
  }

  remove(book) {
    this.collection = this.collection.filter(item => item !== book);
  }
}

let booksArray = new BooksList(setData() ?? []);

class Display {
  static addBook(book) {
    const bookCard = document.createElement('ul');
    const title = document.createElement('li');
    const author = document.createElement('li');
    const removeButton = document.createElement('button');
    const line = document.createElement('hr');

    bookCard.style.listStyle = 'none';
    bookCard.style.padding = 0;
    title.textContent = book.title;
    author.textContent = book.author;
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
      booksArray.remove(book);
      removeButton.parentElement.remove();
      saveData();
    });

    list.appendChild(bookCard);
    bookCard.append(title, author, removeButton, line);
  }

  static displayList(list) {
    list.forEach(book => this.addBook(book));
  }
}

function setData() {
  const toObject = JSON.parse(localStorage.getItem('books-list'));
  return toObject;
}

function saveData() {
  const toString = JSON.stringify(booksArray);
  localStorage.setItem('books-list', toString);
}

button.addEventListener('click', e => {
  const book = new Book(names.value, pass.value);
  e.preventDefault();
  booksArray.add(book);
  Display.addBook(book);
});

Display.displayList(booksArray.collection);
