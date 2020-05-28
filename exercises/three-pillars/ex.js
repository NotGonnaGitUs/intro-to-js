class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  // TODO: define methods `addFavoriteBook(..)`
  // and `printFavoriteBooks()`
}

function loadBooks(myBookshelf) {
  // TODO: call fakeAjax( .. );
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      myBookshelf.addFavoriteBook(bookName);
    }
    myBookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

var wowBookshelf = new Bookshelf();

loadBooks(wowBookshelf);
// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
