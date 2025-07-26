console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
      const imageContainer = document.getElementById("dog-image-container");
      data.message.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "A cute dog";
        imageContainer.appendChild(img);
      });
    });
});

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then(resp => resp.json())
  .then(data => {
    const breedList = document.getElementById("dog-breeds");
    for (let breed in data.message) {
      const li = document.createElement("li");
      li.textContent = breed;
      breedList.appendChild(li);
    }
  });

  document.getElementById("dog-breeds").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "mediumvioletred"; // Or any color you like
  }
});

const breedDropdown = document.getElementById("breed-dropdown");
let allBreeds = [];

fetch(breedUrl)
  .then(resp => resp.json())
  .then(data => {
    const breedList = document.getElementById("dog-breeds");
    allBreeds = Object.keys(data.message);
    renderBreeds(allBreeds);
  });

function renderBreeds(breeds) {
  const breedList = document.getElementById("dog-breeds");
  breedList.innerHTML = "";
  breeds.forEach(breed => {
    const li = document.createElement("li");
    li.textContent = breed;
    breedList.appendChild(li);
  });
}

breedDropdown.addEventListener("change", (e) => {
  const selectedLetter = e.target.value;
  const filtered = allBreeds.filter(breed => breed.startsWith(selectedLetter));
  renderBreeds(filtered);
});
