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
    duration: .7,
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
    delay: 3,
    duration: .8,
    opacity: 0,
  });
  tl.from("#page1", {
    y: 1200,
    opacity: 0,
    duration: 1,
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
    if(y<=155) {
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

function imgAnimation(){
  console.log("1")
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749691738595},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.6,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}}
  });
}

navtextmagnet()
// loadingAnimation(tl);
page1(tl);
imgAnimation();