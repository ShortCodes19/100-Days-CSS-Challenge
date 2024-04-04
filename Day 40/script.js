const pics = document.querySelectorAll(".pic");

pics.forEach((pic) => {
  pic.addEventListener("click", () => {
    pics.forEach((element) => {
      element.classList.toggle("away");
    });

    pic.classList.remove("away");
    pic.classList.toggle("active");
  });
});
