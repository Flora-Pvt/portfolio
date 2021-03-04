const bgSigns = document.querySelectorAll(".sign");

let scrollMemory = [0, 0];
document.addEventListener("scroll", () => {
  scrollMemory.shift();
  scrollMemory[1] = document.scrollingElement.scrollTop;
  for (let i = 0; i < bgSigns.length; i++) {
    if (scrollMemory[0] < scrollMemory[1]) {
      if (i < 4) {
        let marginY = bgSigns[i].y - 6;
        bgSigns[i].style.marginTop = `${marginY}px`;
      } else {
        let marginY = bgSigns[i].y - 1;
        bgSigns[i].style.marginTop = `${marginY}px`;
      }
    } else {
      if (i < 4) {
        let marginY = bgSigns[i].y + 6;
        bgSigns[i].style.marginTop = `${marginY}px`;
      } else {
        let marginY = bgSigns[i].y + 1;
        bgSigns[i].style.marginTop = `${marginY}px`;
      }
    }
  }
});


/* const hoverAnimation = document.querySelectorAll(".hoverAnimation");
const tag = document.querySelectorAll(".tag");

for (let i = 0; i < hoverAnimation.length / 3; i++) {
  hoverAnimation[i].addEventListener("mouseenter", (e) => {
    tag[i].style.opacity = 1;
  });
  hoverAnimation[i + 1].addEventListener("mouseenter", (e) => {
    tag[i].style.opacity = 1;
  });
  hoverAnimation[i + 2].addEventListener("mouseenter", (e) => {
    tag[i].style.opacity = 1;
  });

  hoverAnimation[i].addEventListener("mouseleave", (e) => {
    tag[i].style.opacity = 0;
  });
  hoverAnimation[i + 1].addEventListener("mouseleave", (e) => {
    tag[i].style.opacity = 0;
  });
  hoverAnimation[i + 2].addEventListener("mouseleave", (e) => {
    tag[i].style.opacity = 0;
  });
}*/


// const discoverBtn = document.querySelectorAll(".discoverBtn");