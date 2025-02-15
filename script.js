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

gsap.from(".logo, .menu, li ", {
  y: -30,
  opacity: 0,
  delay: 1.2,
  duration: 0.6,
  stagger: 0.2,
  ease: "power1.out",
  // ease : "bounce.out(1.7)"
});

gsap.from(".hero-text h1, .hero-text button", {
  x: -50,
  opacity: 0,
  delay: 1.5,
  duration: 0.7,
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", ()=>{
    console.log("jfk")
    document.querySelector(".nav-links").classList.toggle("active");
})
