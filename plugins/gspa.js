import { gsap } from "gsap";

gsap.from(".first .yellow", {
  y: -1000,
  duration: 2
})

gsap.from(".first .black", {
  y: 1000,
  duration: 2
})


gsap.from(".first img", {
  x: 1600,
  duration: 2
})

gsap.from(".first .small", {
  y: 100,
  opacity: 0,
  delay: 3
})

gsap.from(".first .big span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  delay: 2.1,
})