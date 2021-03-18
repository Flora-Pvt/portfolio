const header = document.querySelector("#show");

window.addEventListener("wheel", function changeHeaderVisibility() {
  if (header.getBoundingClientRect().y < 140) {
    header.style.visibility = "visible";
  } else {
    header.style.visibility = "hidden";
  }
  console.log(header.getBoundingClientRect().y < 140, header.style.visibility);
});
