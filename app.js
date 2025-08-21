const initScrollAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const THEME_COLORS = {
    light: "#FDEE4E",
    white: "#FFFFFF",
    black: "#000000",
  };

  gsap.context(() => {
    gsap.set("section span", { color: THEME_COLORS.black });

    setupLightModeTimeline(THEME_COLORS);
    setupOrTimeline();
    setupDarkModeTimeline(THEME_COLORS);
  });
};

const setupLightModeTimeline = (colors) => {
  const lightModeTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".line-one",
      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: true,
    },
  });

  lightModeTl
    .from(".line-one span", { y: 100, opacity: 0, stagger: 0.1 })
    .to("body", { backgroundColor: colors.light, duration: 1 })
    .from(".sun", { x: 300, opacity: 0, duration: 1 })
    .to({}, { duration: 0.5 })
    .to(
      ".line-one span",
      { x: 300, opacity: 0, stagger: 0.1, duration: 2 },
      "exit"
    )
    .to(".sun", { x: -300, opacity: 0, duration: 2 }, "exit")
    .to("body", { backgroundColor: colors.white, duration: 2 }, "exit");
};

const setupOrTimeline = () => {
  const orTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".line-two",
      start: "top top",
      end: "+=1500",
      scrub: 1,
      pin: true,
    },
  });

  orTl
    .from(".line-two span", { scale: 15, opacity: 0, stagger: 0.2 })
    .to(".line-two span:first-child", {
      y: -25,
      repeat: 1,
      yoyo: true,
      duration: 0.3,
      ease: "power1.inOut",
    })
    .to(".line-two span:last-child", {
      y: -25,
      repeat: 1,
      yoyo: true,
      duration: 0.3,
      ease: "power1.inOut",
    })
    .to(".line-two span", { y: -100, opacity: 0, stagger: 0.1 });
};

const setupDarkModeTimeline = (colors) => {
  const darkModeTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".line-three",
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
    },
  });

  darkModeTl
    .from(".line-three span", { y: 100, opacity: 0, stagger: 0.2 }, "<0.2")
    .to(".line-three", { backgroundPositionX: "0%" })
    .to(".line-three span", { color: colors.white }, "<10%")
    .from(".moon", { x: 300, opacity: 0, duration: 1 }, "<");
};

initScrollAnimations();
