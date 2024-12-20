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
addBookToLibrary("A Tale of Two Cities", "Charles Dickens", 544 , false);
addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 310 , true);


const toggleButton=document.getElementById("toggleButton");
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
        <div class="read">
          <div>Read:</div>
          <button id="toggleButton" onclick="toggleRead(${index})">${book.read}</button>
        </div>  
        <div class="toggleAlert">*Click the button to change your preference.</div>
        </div>`;
  });
}
function toggleRead(index){
  if (myLibrary[index].read===true)
  {
    toggleButton.textContent="False";
    myLibrary[index].read=false;
  }
  else{
    toggleButton.textContent="True";
    myLibrary[index].read=true;
  }
  displayBooks();
}
function removeBookFunction(index){
    myLibrary.splice(index,1);
    displayBooks();
}

const dialog=document.querySelector("dialog");
const addButton=document.querySelector("#addNewBookButton");
const closeButton=document.querySelector("dialog button");
const inputTitle=document.getElementById("bookTitle");
const inputAuthor=document.getElementById("bookAuthor");
const inputPages=document.getElementById("Pages");
addButton.addEventListener("click",()=>{
    dialog.showModal();
})
closeButton.addEventListener("click",()=>{
  dialog.close();
})
const form=document.querySelector(".form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const title=inputTitle.value;
  const author=inputAuthor.value;
  const pages=inputPages.value;
  const isRead=document.querySelector('input[name="read"]:checked')?.value==='true';
  addBookToLibrary(title,author,pages,isRead);
  dialog.close();
  form.reset();
})
