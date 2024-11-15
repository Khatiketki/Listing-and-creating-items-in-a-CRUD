// API URL (replace with your Beeceptor endpoint)
const apiUrl = 'https://books.free.beeceptor.com';

// Handle form submission
document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const newBook = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        publisher: document.getElementById('publisher').value,
        edition: document.getElementById('edition').value,
        genre: document.getElementById('genre').value,
        pageCount: document.getElementById('pageCount').value,
    };

    // Send POST request to create a new book
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
    })
    .then(response => response.json())
    .then(data => {
        alert('Book created successfully!');
        window.location.href = 'index.html'; // Redirect back to homepage
    })
    .catch(error => {
        console.error('Error creating book:', error);
    });
});
