gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".career dl").forEach((dl) => {
  gsap.to(dl, {
    scrollTrigger: {
      trigger: dl,
      start: "-70px center",
      end: "-30px center",
      scrub: true,
    },
    "--scale-y": 1,
    // duration: 4,
    ease: "none",
  });
});
