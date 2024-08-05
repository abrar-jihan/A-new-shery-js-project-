Shery.imageEffect("#back", {
  style: 5,
  gooey: true,
  config: {
    a: { value: 0.69, range: [0, 30] },
    b: { value: -0.88, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.007415282258216 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.3, range: [0, 10] },
    metaball: { value: 0.15, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.41, range: [0, 2] },
    noise_scale: { value: 16.79, range: [0, 100] },
  },
});

var elem = document.querySelectorAll(".elem");
elem.forEach((el) => {
  var h1 = el.querySelectorAll("h1");
  let index = 0;
  let animation = false;
  elem.querySelector("#main").addEventListener("click", function () {
    if (!animation) {
      animation = true;
      gsap.to(h1[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animation = false;
        },
      });

      index === h1.length - 1 ? (index = 0) : index++;

      gsap.to(h1[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
