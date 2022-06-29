const title = document.getElementById("title");
const author = document.getElementById("author");
const button = document.getElementById("button");
const list = document.getElementById('list');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// class BooksList {
//   constructor(collection) {
//     this.collection = collection;
//   }

//  static add(book) {
//     BooksList.collection.push(book);
//   }

//   remove(book) {
//     this.collection = this.collection.filter(item => item !== book);
//   }
// }

// let booksArray = new BooksList(setData() ?? []);

class Display {
  static displayList() {
    const booksArray = Storage.getBooks();
    booksArray.forEach((book) => Display.addBook(book));
  }

  static addBook(book) {
    const list = document.getElementById("list");
    const bookCard = document.createElement("ul");
    const title = document.createElement("li");
    const author = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.classList.add("delete");
    const line = document.createElement("hr");

    title.textContent = book.title;
    author.textContent = book.author;
    removeButton.textContent = "Remove";

    list.appendChild(bookCard);
    bookCard.append(title, author, removeButton, line);
  }

  static removeBook(eTarget) {
    if (eTarget.classList.contains("delete")) {
      eTarget.parentElement.remove();
    }
  }

  static clearInputFields() {
    title.value = "";
    author.value = "";
  }
}

class Storage {
  static getBooks() {
    let booksArray;
    if (localStorage.getItem("books") === null) {
      booksArray = [];
    } else {
      booksArray = JSON.parse(localStorage.getItem("books"));
    }
    return booksArray;
  }

  static addBookStorage(book) {
    const booksArray = Storage.getBooks();
    booksArray.push(book);
    localStorage.setItem("books", JSON.stringify(booksArray));
  }

  static removeBookStorage(bookTitle) {
    let booksArray = Storage.getBooks();
    booksArray = booksArray.filter((book) => book.title !== bookTitle);
    localStorage.setItem("books", JSON.stringify(booksArray));
  }
}


button.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value === "" || author.value === "") {
    alert("Empty fields");
  } else {
    const book = new Book(title.value, author.value);
    Display.addBook(book);
    Storage.addBookStorage(book);
    Display.clearInputFields();
  }
});

document.getElementById("list").addEventListener("click", (e) => {
  Display.removeBook(e.target);
  Storage.removeBookStorage(e.target.parentElement.firstChild.textContent);
});

Display.displayList()