const moon = document.querySelector("#moon");
const cloud1 = document.querySelector("#cloud1");
const cloud2 = document.querySelector("#cloud2");
const base = document.querySelector("#base");
const heading = document.querySelector("#heading");

window.addEventListener("scroll", () => {
  let Effect = scrollY;
  heading.style.top = Effect * 2.5 + "px";
  heading.style.opacity = 1 - Effect / 300;
  base.style.marginTop = Effect * 0.5 + "px";
  cloud1.style.marginLeft = Effect * -1.5 + "px";
  cloud2.style.marginRight = Effect * -1.5 + "px";
  moon.style.marginLeft = Effect * -2 + "px";
});
