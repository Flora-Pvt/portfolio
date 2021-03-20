const banner = document.querySelector("#show");

window.addEventListener("wheel", function changeBannerVisibility() {
  if (banner.getBoundingClientRect().y < 15) {
    banner.style.visibility = "visible";
  } else {
    banner.style.visibility = "hidden";
  }
});
