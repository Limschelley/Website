// app.js
document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            const postsContainer = document.getElementById("posts-container");
            
            // Loop through the data and create HTML for each post
            data.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");

                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;

                postsContainer.appendChild(postElement);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
