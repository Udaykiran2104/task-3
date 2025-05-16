// Fetch Joke from API
async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    document.getElementById("joke-setup").textContent = data.setup;
    document.getElementById("joke-punchline").textContent = data.punchline;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}

// Call on page load
getJoke();

// Image Carousel Logic
const imageElement = document.getElementById("carousel-image");
let currentImage = 1;

function nextImage() {
  currentImage++;
  imageElement.src = `https://picsum.photos/300?random=${currentImage}`;
}

function prevImage() {
  currentImage = Math.max(1, currentImage - 1);
  imageElement.src = `https://picsum.photos/300?random=${currentImage}`;
}
