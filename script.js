gsap.from(".main", {
  height: "0%",
  opacity: 0,
  duration: 0.7,
  delay: 0.1,
  ease: "power1.out",
});

gsap.from(".image-container img", {
  y: 100, // Move it up from below
  scaleY: 0, // Unfold effect from left
  transformOrigin: "left bottom", // Make sure it expands from the bottom
  opacity: 0,
  duration: 1.1, // Slightly longer for smoothness
  delay: 0.7,
  ease: "power3.out",
});

gsap.from(".logo, .nav-links li", {
  y: -20,  // Slightly reduced movement for a softer entrance
  opacity: 0,
  delay: 1.3, // Starts a bit earlier for a smoother experience
  duration: 1, // Increased duration for a gradual effect
  stagger: 0.15, // Reducing the delay between items for fluid motion
  ease: "expo.out", // Best for a smooth and natural feel
});


gsap.from(".hero-text h1, .hero-text button", {
  x: -50,
  opacity: 0,
  delay: 1.5,
  duration: 0.7,
});

const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");


gsap.matchMedia().add("(max-width: 768px)", () => {
  menu.addEventListener("click", () => {
    gsap.to(".sidebar", {
      right: "0",
      duration: 0.5,
      ease: "power1.out",
    });
  });
  cross.addEventListener("click", () => {
    gsap.to(".sidebar", {
      right: "-100%",
      duration: 0.5,
      ease: "power1.out",
    });
  });
});

gsap.matchMedia().add("(min-width: 769px)", () => {
  menu.addEventListener("click", () => {
    gsap.to(".sidebar", {
      right: "0",
      duration: 0.6,
      ease: "power1.out",
    });

  });
  
  cross.addEventListener("click", () => {
    gsap.to(".sidebar", {
      right: "-30%",
      duration: 0.6,
      ease: "power1.out",
    });
  });
});


