gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


const cursorCircle = document.querySelector("#crsr");
    window.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
          left: dets.x,
          top: dets.y,
        });

        // cursorCircle.style.top = dets.pageY + 'px';
        // cursorCircle.style.left = dets.pageX + 'px';
    });
Shery.makeMagnet("#nav-part2 h4", {});

let tl = gsap.timeline();
function loadingAnimation(tl) {

  tl.from("#loader h1", {
    y: 200,
    stagger: 0.5,
    duration: .4,
    // delay: 0.5,
  });
  tl.from(" #line1-part1", {
    opacity: 0,
    duration: 2,
    // delay: 2.3,
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
    y: -1200,
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
  tl.from("#hero1 h2, #hero2 h2 , #hero3 h2,#hero3 h3, #hero4 h2", {
    y: 150,
    stagger: 0.3,
  });
}

function navtextmagnet() {
  window.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    if(y<=100) {
      gsap.to("#crsr", {
        transform: "translate(-50%, -50%)",
        cursor : "none",
      });
    }
    else{
      gsap.to("#crsr", {
        transform: "translate(-150%, -150%)",
        cursor : "default",
      });
    }
});
}

navtextmagnet()
loadingAnimation(tl);
page1(tl);
