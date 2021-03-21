const banner = document.querySelector("#banner");
const arrow = document.querySelector("#arrow");

const buttons = Array.from(document.querySelectorAll(".button"));
const modals = Array.from(document.querySelectorAll(".modal"));
const images = Array.from(document.querySelectorAll(".modal__img"));

const svg = document.querySelector(".morph");

window.addEventListener("wheel", function changeBannerVisibility() {
  if (arrow.getBoundingClientRect().top < -200) {
    banner.style.visibility = "visible";
  } else {
    banner.style.visibility = "hidden";
  }
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    anime({
      targets: svg,
      scaleX: 4.5,
      scaleY: 3,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: modals[i - 1],
      duration: 500,
      delay: 800,
      easing: "easeInOutQuad",
      opacity: 1,
    });
  });
}
