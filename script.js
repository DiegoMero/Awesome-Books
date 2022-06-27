const names = document.getElementById("title");
const pass = document.getElementById("author");
const button = document.getElementById("button");
const list = document.getElementById("list");

function books(title, author) {
  this.title = title;
  this.author = author;
}

let booksArray = [];

function saveData() {
  const toString = JSON.stringify(booksArray);
  localStorage.setItem('books-list', toString);
}

function setData(){
  const toObject = JSON.parse(localStorage.getItem('books-list'));
  return toObject

}

function remove(id) {
  //  we have index in array, and we can pass it to card
  // when we click rm btn, to pass back its parent index which is the card

 booksArray = booksArray.filter((book, index) => index != id);
}

function display() {
  list.innerHTML = "";
  booksArray.forEach((element, index) => {
    const bookCard = document.createElement("ul");
    const title = document.createElement("li");
    const author = document.createElement("li");
    const removeButton = document.createElement("button");

    bookCard.setAttribute("data-id", index);
    title.textContent = element.title;
    author.textContent = element.author;

    removeButton.addEventListener("click", (e) => {
      remove(index);
      removeButton.parentElement.remove();
      saveData();
    });

    list.appendChild(bookCard);
    bookCard.append(title, author, removeButton);
  });
}

button.addEventListener("click", (e) => {
  const book = new books(names.value, pass.value);
  e.preventDefault();
  booksArray.push(book);
  saveData();
  display();
});


