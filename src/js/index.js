const svg = document.querySelector(".morph");

const banner = document.querySelector("#banner");
const arrow = document.querySelector("#arrow");

const openButtons = Array.from(document.querySelectorAll(".open-button"));
const modals = Array.from(document.querySelectorAll(".modal"));
const images = Array.from(document.querySelectorAll(".modal__img"));
const closeButtons = Array.from(document.querySelectorAll(".close-button"));

window.addEventListener("wheel", function changeBannerVisibility() {
  if (arrow.getBoundingClientRect().top < -200) {
    banner.style.visibility = "visible";
  } else {
    banner.style.visibility = "hidden";
  }
});

for (let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener("click", function displayModal() {
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

    modals[i - 1].style.pointerEvents = "all"
  });
}

for (let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener("click", function displayModal() {
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

    modals[i - 1].style.pointerEvents = "all"
  });
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function closeModal() {
    anime({
      targets: modals[i],
      duration: 500,
      delay: 800,
      easing: "easeInOutQuad",      
      opacity: 0,
    });

    anime({
      targets: svg,
      scaleX: 1,
      scaleY: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    modals[i ].style.pointerEvents = "none"
  });
}