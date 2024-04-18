document.addEventListener("mousemove", function (dets) {
  gsap.to("#crsr", {
    left: dets.x,
    top: dets.y,
  });
});
Shery.makeMagnet("#nav-part2 h4", {});

let tl = gsap.timeline();
function loadingAnimation(tl) {

  tl.from("h1", {
    y: 200,
    stagger: 0.5,
    duration: 1,
    delay: 0.5,
  });
  tl.from(" #line1-part1", {
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

  tl.to("#line> h2 ", {
    animationName: "anime1",
    duration: 0.5,
    opacity: 1,
  });
  tl.to("#loader", {
    delay: 4,
    duration: 1,
    opacity: 0,
  });
  tl.from("#page1", {
    y: 2000,
    opacity: 0,
    duration: 2,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
}

function page1() {
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h2, #hero2 h2 , #hero3 h2, #hero4 h2", {
    y: 150,
    stagger: 0.3,
  });
}

// loadingAnimation(tl);
page1(tl);
