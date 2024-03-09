const menuIcon = document.getElementById("menu-icon");
const Lines = document.querySelectorAll(".no-animation");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");

  Lines.forEach((line) => {
    line.classList.remove("no-animation");
  });
});
