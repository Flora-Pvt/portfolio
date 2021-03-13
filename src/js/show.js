const effect = {
  options: {
    shapeColors: ["#9EC6C1", "#5C8DD6", "#F0BB81", "#86A9CE"],
    shapesOnTop: true,
  },
  show: {
    lettersAnimationOpts: {
      duration: 400,
      delay: (t, i) => (t.parentNode.children.length - i - 1) * 80,
      easing: "easeOutElastic",
      opacity: {
        value: [0, 1],
        duration: 100,
        easing: "linear",
      },
      translateY: (t, i) => (i % 2 === 0 ? ["-80%", "0%"] : ["80%", "0%"]),
      rotate: [90, 0],
    },
    shapesAnimationOpts: {
      duration: () => anime.random(1000, 3000),
      delay: (t, i) => i * 20,
      easing: "easeOutElastic",
      translateX: (t) => {
        const tx = anime.random(-250, window.innerWidth / 1.6);
        t.dataset.tx = tx;
        return [0, tx];
      },
      translateY: (t) => {
        const ty = anime.random(-250, window.innerHeight / 1.8);
        t.dataset.ty = ty;
        return [0, ty];
      },
      scale: (t) => {
        const s = randomBetween(0.1, 0.6);
        t.dataset.s = s;
        return [s, s];
      },
      rotate: () => anime.random(-90, 90),
      opacity: {
        value: 1,
        duration: 1000,
        easing: "linear",
      },
    },
  },
};

class Animation {
  constructor() {
    this.DOM = {};
    this.DOM.bg = document.querySelector("#home");
    this.DOM.word = Array.from(document.querySelectorAll(".title"));
    this.words = [];
    this.words[0] = new Word(this.DOM.word[0], effect.options);
    this.words[1] = new Word(this.DOM.word[1], effect.options);

    this.isAnimating = true;

    this.words[0].show(effect.show);
    setTimeout(() => {
      this.words[1].show(effect.show).then(() => (this.isAnimating = false));
    }, 500);
  }

  show() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    anime({
      targets: this.DOM.bg,
      duration: 600,
      easing: [0.2, 1, 0.3, 1],
    });
  }
}

window.addEventListener("load", () => {
  const animation = new Animation();
  animation.show();
});
