document.querySelectorAll(".frame").forEach(function (frame) {
  frame.addEventListener("click", function () {
    document.querySelector(".white").classList.toggle("normal");
    document.querySelector(".white").classList.toggle("big");
    document.querySelector(".red").classList.toggle("small");
    document.querySelector(".red").classList.toggle("normal");
  });
});
