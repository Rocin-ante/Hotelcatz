javascript
// Mock database for gallery and blog posts
let gallery = [
    "images/gallery/image1.jpg",
    "images/gallery/image2.jpg",
    "images/gallery/image3.jpg"
];

let blogPosts = [
    "5 Tips for a Perfect Stay",
    "Exploring the Local Area"
];

// Function to render gallery images
function renderGallery() {
    const galleryContainer = document.getElementById("gallery-images");
    galleryContainer.innerHTML = ""; // Clear existing images

    gallery.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = `../${image}`;
        img.alt = `Gallery Image ${index + 1}`;
        img.onclick = () => removeGalleryImage(index);
        galleryContainer.appendChild(img);
    });
}

// Function to add a new image to the gallery
function addGalleryImage() {
    const uploadInput = document.getElementById("upload-image");
    if (uploadInput.files.length > 0) {
        const newImage = `images/gallery/${uploadInput.files[0].name}`;
        gallery.push(newImage);
        renderGallery();
    }
}

// Function to remove an image from the gallery
function removeGalleryImage(index) {
    gallery.splice(index, 1);
    renderGallery();
}

// Function to render blog posts
function renderBlogPosts() {
    const blogContainer = document.getElementById("blog-posts");
    blogContainer.innerHTML = ""; // Clear existing posts

    blogPosts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.textContent = post;
        postDiv.onclick = () => removeBlogPost(index);
        blogContainer.appendChild(postDiv);
    });
}

// Function to add a new blog post
function addBlogPost() {
    const newPost = document.getElementById("new-post").value;
    if (newPost) {
        blogPosts.push(newPost);
        renderBlogPosts();
        document.getElementById("new-post").value = "";
    }
}

// Function to remove a blog post
function removeBlogPost(index) {
    blogPosts.splice(index, 1);
    renderBlogPosts();
}

// Event listeners
window.onload = () => {
    renderGallery();
    renderBlogPosts();

    document.getElementById("add-image").onclick = addGalleryImage;
    document.getElementById("add-post").onclick = addBlogPost;
};