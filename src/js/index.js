const signs = document.querySelectorAll(".sign");

let scrollMemory = [0, 0];
document.addEventListener("scroll", () => {
  scrollMemory.shift();
  scrollMemory[1] = document.scrollingElement.scrollTop;
  for (let i = 0; i < signs.length; i++) {
    if (scrollMemory[0] < scrollMemory[1]) {
      if (i < 4) {
        let marginY = signs[i].y - 6;
        signs[i].style.marginTop = `${marginY}px`;
      } else {
        let marginY = signs[i].y - 1;
        signs[i].style.marginTop = `${marginY}px`;
      }
    } else {
      if (i < 4) {
        let marginY = signs[i].y + 6;
        signs[i].style.marginTop = `${marginY}px`;
      } else {
        let marginY = signs[i].y + 1;
        signs[i].style.marginTop = `${marginY}px`;
      }
    }
  }
});
