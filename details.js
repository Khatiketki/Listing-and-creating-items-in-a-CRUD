// API URL (replace with your Beeceptor endpoint)
const apiUrl = 'https://books.free.beeceptor.com';

// Get book ID from URL
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

// Fetch book details by ID
document.addEventListener('DOMContentLoaded', () => {
    fetchBookDetails(bookId);
});

function fetchBookDetails(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(book => {
            const bookDetails = document.getElementById('book-details');
            bookDetails.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Publisher:</strong> ${book.publisher}</p>
                <p><strong>Edition:</strong> ${book.edition}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Pages:</strong> ${book.pageCount}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching book details:', error);
        });
}
