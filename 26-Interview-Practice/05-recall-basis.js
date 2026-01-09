console.log('Exercise 5: Library Management with Classes');


/*
Tasks:
1. Create a Book class with: title, author, isbn, isAvailable
   - Add method: getInfo() that returns formatted string
   - Add static method: compareByTitle(book1, book2) for sorting

2. Create a Library class with: name, books (array), members (array)
   - Add method: addBook(book)
   - Add method: borrowBook(isbn, memberName) - marks book unavailable
   - Add method: returnBook(isbn) - marks book available
   - Add method: getAvailableBooks() - returns array of available books
   - Add method: getMostActiveReader() - member who borrowed most books
   - Add method: searchByAuthor(authorName) - returns all books by author

3. Create a Member class with: name, borrowedBooks (array of ISBNs)
   - Add method: borrowBook(isbn)
   - Add method: returnBook(isbn)

4. Test your system:
   - Create a library with 5 books
   - Create 3 members
   - Simulate borrowing and returning books
   - Find the most active reader
   - Get all available books
   - Search for books by a specific author
*/

// YOUR CODE HERE

// Example structure to get you started:
class Book {
    // Implement here
}

class Member {
    // Implement here
}

class Library {
    // Implement here
}

// Test your implementation:
const library = new Library("City Library");
// Add books, members, and test all methods