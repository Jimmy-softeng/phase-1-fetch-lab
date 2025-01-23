function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json()) // Convert the response to JSON
    .then((books) => {
      renderBooks(books); // Display the books on the page

      // 1. The 5th book in the series
      const fifthBook = books[4]; // Index 4 for the 5th book
      console.log("The 5th book in the series:", fifthBook.name);

      // 2. The 1031st character in the series
      let allCharacters = [];
      books.forEach(book => {
        allCharacters = allCharacters.concat(book.characters); // Concatenate character arrays
      });

      const character1031 = allCharacters[1030]; // The 1031st character is at index 1030 (0-indexed)
      console.log("The 1031st character in the series:", character1031);

      // 3. The total number of pages of all the books
      const totalPages = books.reduce((acc, book) => acc + book.numberOfPages, 0);
      console.log("Total number of pages in all the books:", totalPages);
    })
    .catch((error) => console.error("Error fetching books:", error)); // Handle any errors
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Display book name
    main.appendChild(h2); // Append each book name to the page
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Fetch books when the DOM content is loaded
});
