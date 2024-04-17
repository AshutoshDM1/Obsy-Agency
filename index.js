try {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h4", {});
}
catch(err){
console.log(err)
}

function loadingAnimation() {
  let tl = gsap.timeline();
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
function animateNav() {
  gsap.from("#nav", {
  opacity: 0,
  duration: 2,
});
}
let t2 = gsap.timeline();

t2.from("#hero1 h1 ,#hero2 h1", {
  y: 130,
  duration: 0.3,
  stagger: 0.2,
});
t2.from("#hero3 h2 ,#hero4 h1 ", {
  y: 150,
  duration: 0.4,
  stagger: 0.2,
});
t2.from("", {
  y: 130,
  duration: 0.4,
});
makeMagnet();
animateNav();
// loadingAnimation();
