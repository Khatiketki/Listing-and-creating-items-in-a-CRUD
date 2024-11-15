// API URL (replace this with your Beeceptor endpoint)
const apiUrl = 'https://books.free.beeceptor.com'; // Your Beeceptor endpoint

// Fetch book list from the API
document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();

    // Create book button event listener
    document.getElementById('create-btn').addEventListener('click', () => {
        window.location.href = 'create.html'; // Navigate to create page
    });
});

function fetchBooks() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('book-list');
            if (data && data.length > 0) {
                // Loop through the books and display them
                data.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.classList.add('book-item');
                    bookElement.innerHTML = `
                        <h3>${book.title}</h3>
                        <p>by ${book.author}</p>
                        <a href="details.html?id=${book.id}">View Details</a>
                    `;
                    bookList.appendChild(bookElement);
                });
            } else {
                bookList.innerHTML = '<p>No books available at the moment.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '<p>Failed to load books. Please try again later.</p>';
        });
}
