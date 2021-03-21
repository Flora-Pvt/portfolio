const banner = document.querySelector("#banner");
const arrow = document.querySelector("#arrow");

const buttons = Array.from(document.querySelectorAll(".button"));
const modals = Array.from(document.querySelectorAll(".modal"));
const images = Array.from(document.querySelectorAll(".modal__img"));

window.addEventListener("wheel", function changeBannerVisibility() {
  if (arrow.getBoundingClientRect().top < -200) {
    banner.style.visibility = "visible";
  } else {
    banner.style.visibility = "hidden";
  }
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    console.log(images[i - 1].style);    
    modals[i - 1].style.opacity = 1;
    console.log(modals[i - 1].style.opacity);
    /*anime({
      targets: images[i - 1],
      duration: 500,
      easing: "easeInOutQuad",
      width: window.innerWidth / 2,
      height: window.innerHeight,
    });*/
  });
}
