const banner = document.querySelector("#show");
const arrow = document.querySelector("#arrow");

window.addEventListener("wheel", function changeBannerVisibility() {
  if (arrow.getBoundingClientRect().top < -200) {
    banner.style.visibility = "visible";
  } else {
    banner.style.visibility = "hidden";
  }
});
