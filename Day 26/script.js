const frame = document.querySelector(".frame");
const cards = document.querySelectorAll(".card");

let currentCardIndex = 0;
const images = ["nelson.jpg", "pablo.jpg", "albert.jpg"];

updateBackgroundImage = () => {
  frame.style.backgroundImage = `url(${images[currentCardIndex]})`;
};

const updateCards = () => {
  cards.forEach((card, index) => {
    if (index === currentCardIndex) {
      card.classList.add("active");
    } else card.classList.remove("active");
  });
};

const changeCard = () => {
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  updateBackgroundImage();
  updateCards();
};

cards.forEach((card) => {
  card.querySelector(".button").addEventListener("click", changeCard);
});

updateBackgroundImage();
updateCards();
