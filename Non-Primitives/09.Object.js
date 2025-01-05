const library = {
  name: "Central Library",
  address: "123 Main St, Springfield, IL",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      available: true,
      copies: 5,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      available: true,
      copies: 2,
    },
  ],
};

const newLibrary = Object.assign({}, library);
newLibrary.name = "Public Library";
newLibrary.books.push({
  title: "1984",
  author: "George Orwell",
  category: "Dystopian",
  available: false,
  copies: 0,
});
library.books[0].copies = 30;
library.name = "National Central Library";

console.log(library);

console.log(newLibrary);
