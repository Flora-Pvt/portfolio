ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  scrub: 1,
  start: "10% bottom",
  end: "-=60%",
  markers: true,
});

const signs = document.querySelectorAll(".sign")
const accoladeEnd = document.querySelectorAll("#accolade-end")
const accolade = document.querySelectorAll("#accolade")
const bracket = document.querySelectorAll("#bracket")
const equal = document.querySelectorAll("#equal")
const parenthesis = document.querySelectorAll("#parenthesis")
const parenthesisEnd = document.querySelectorAll("#parenthesis-end")
const semicolon = document.querySelectorAll("#semicolon")
const tag = document.querySelector("#tag")
const tagEnd = document.querySelector("#tag-end")

console.log(tag);

gsap.to(signs, {
  scrollTrigger: "#work1",
  translateY: 600,
  ease: "bounce.out",
  delay: 3,
});
gsap.to(signs, {
  scrollTrigger: {
    trigger: "#work2",
  },
  translateY: 1600,
  ease: "bounce.out",
  delay: 3,
});
gsap.to(signs, {
  scrollTrigger: "#work3",
  translateY: 2600,
  ease: "bounce.out",
  delay: 3,
});

gsap.to(tag, {
  scrollTrigger: "#work1",
  translateY: "108vh",
  translateX: "-4vw",
  ease: "bounce.out",
  delay: 3,
});
gsap.to(tagEnd, {
  scrollTrigger: "#work1",
  translateY: "100vh",
  ease: "bounce.out",
  delay: 3,
});
gsap.to(tag, {
  scrollTrigger: "#work2",
  translateY: "190vh",
  ease: "bounce.out",
  delay: 3,
});
gsap.to(tagEnd, {
  scrollTrigger: "#work2",
  translateY: "198vh",
  translateX: "-60vw",
  ease: "bounce.out",
  delay: 3,
});
gsap.to(tag, {
  scrollTrigger: "#work3",
  translateY: "348vh",
  translateX: "-4vw",
  ease: "bounce.out",
  delay: 3,
});
gsap.to(tagEnd, {
  scrollTrigger: "#work3",
  translateY: "318vh",
  translateX: "-28vw",
  ease: "bounce.out",
  delay: 3,
});