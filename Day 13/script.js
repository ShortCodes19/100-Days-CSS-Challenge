const profiles = document.querySelectorAll(".profile");
const btnClose = document.querySelector(".cross");
const container = document.querySelector(".container");
const photo = document.querySelector(".photo");
const img = photo.querySelector("img");
const name = document.querySelector(".name");

const names = ["Hamid Sahil", "Zakir Hussain", "Hadi", "Usta Reza"];

profiles.forEach((profile, i) => {
  profile.addEventListener("click", () => {
    container.toggleAttribute("open");

    const image = profile.querySelector(".profile-photo");
    const imageSrc = image.getAttribute("src");

    name.innerHTMl = names[i];

    img.setAttribute("src", imageSrc);
  });
});

btnClose.addEventListener("click", () => {
  container.toggleAttribute("open");
});
