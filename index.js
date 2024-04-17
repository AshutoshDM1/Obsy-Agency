let tl = gsap.timeline();
tl.from("h1", {
  y: 200,
  stagger: 0.5,
  duration: 1,
  delay: 0.5,
});
tl.from("#line> h2 , #line1-part1", {
  opacity: 0,
  duration: 1,
  onStart: function () {
    let h5Timer = document.querySelector("#line1-part1 h5");
    let grow = 0;
    setInterval(function () {
      if (grow <= 100) {
        h5Timer.innerHTML = grow;
        grow++;
      } else {
        grow = 100;
      }
    }, 30);
  },
});

tl.to("#loader", {
  delay: 3.5,
  duration: 1.4,
  opacity :  0,
})
