const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}
addBookToLibrary("abc", "pqr", 30, false);
addBookToLibrary("Lmn", "xy", 29, true);
addBookToLibrary("abc", "pqr", 30, false);
addBookToLibrary("Lmn", "xy", 29, true);


function displayBooks() {
  const cards = document.querySelector(".cards");
  const existingCards=document.querySelectorAll(".card");
  existingCards.forEach(c=>c.remove());
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    card.innerHTML=`
        <button type="button" class="removeBook" onclick="removeBookFunction(${index})">x</button>
        <div class="bookDetails">
        <div>Book name: ${book.title}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>Read: ${book.read}</div>
        </div>`;
  });
  if(myLibrary.length===0){
    cards.remove();
  }
}
function removeBookFunction(index){
    myLibrary.splice(index,1);
    displayBooks();
}

const addButton=document.querySelector("#addNewBookButton");
addButton.addEventListener("click",()=>{
    alert("hi");
})