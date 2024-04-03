document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".menu-icon").classList.remove("paused");
  document.querySelector(".menu-icon").classList.add("active");
  document.querySelector(".menu").classList.remove("paused");
  document.querySelector(".menu").classList.add("active");
});

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".menu-icon").classList.remove("active");
  document.querySelector(".menu").classList.remove("active");
});
