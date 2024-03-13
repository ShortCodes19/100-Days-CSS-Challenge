const marker = document.querySelectorAll(".marker");
const cards = document.querySelectorAll(".card");

marker.forEach((element) => {
  element.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.add("active");
    });

    marker.forEach((pin) => {
      pin.classList.add("inactive");
    });
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    marker.forEach((pin) => {
      pin.classList.remove("inactive");
    });
  });
});
