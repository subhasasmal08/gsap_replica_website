"use client";
import { useRef, useEffect } from "react";
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    cursor();
  }, []);

  const cursor = () => {
    const follower = document.querySelector(".follower");
    document.onmousemove = function (e) {
      gsap.to(follower, 0.6, {
        left: e.clientX,
        top: e.clientY,
        ease: Power2.easeOut,
      });
      // gsap.to(follower, 0.6, { left: e.clientX, top: e.clientY, ease: Elastic.easeOut});
      let id = document.getElementById("follower");
      if (e.target.id == "link") {
        id.style.background = "#B4D4FF";
        id.style.zIndex = "-2";
        gsap.to(follower, 0.3, { width: 50, height: 50 });
      } else {
        id.style.background = "darkblue";
        id.style.zIndex = "-1";
        gsap.to(follower, 0.3, { width: 10, height: 10 });
      }
    };
  };

  function LandingPageScrollTrigger() {
    gsap.to("body", {
      opacity: 1,
      duration: 1.3,
    });

    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "0% 0%",
        end: "100% 0%",
        pin: "#ImgWrapper",
        scrub: 2.2,
      },
    });
    LandingPageScrollTrigger.to(
      "#ImgWrapper #img7",
      { transform: "translateZ(4500px)" },
      0
    )
      .to("#ImgWrapper #img6", { transform: "translateZ(3700px)" }, 0)
      .to("#ImgWrapper #img5", { transform: "translateZ(3100px)" }, 0)
      .to("#ImgWrapper #img4", { transform: "translateZ(2800px)" }, 0)
      .to("#ImgWrapper #img3", { transform: "translateZ(2600px)" }, 0)
      .to("#ImgWrapper #img2", { transform: "translateZ(2400px)" }, 0)
      .to("#ImgWrapper #img1", { transform: "translateZ(2200px)" }, 0)
      .from("#end a", { y: 130, opacity: 0 }, 0.31);
  }

  window.onload = () => {
    LandingPageScrollTrigger();
  };
  return (
    <div id="ImgWrapper">
      <div className="follower" id="follower"></div>
      <video
        // controls
        autoPlay
        preload="none"
        muted="muted"
        playsInline
        loop
        style={{ objectFit: "cover" }}
        src={
          "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=00,02"
        }
        id="img1"
        alt="greensocklogo"
      />
      <video
        // controls
        autoPlay
        preload="none"
        muted="muted"
        playsInline
        loop
        style={{ objectFit: "cover" }}
        src={
          "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=03,04"
        }
        id="img2"
        alt="greensocklogo"
      />
      <video
        // controls
        autoPlay
        preload="none"
        muted="muted"
        playsInline
        loop
        style={{ objectFit: "cover" }}
        src={
          "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=06,09"
        }
        id="img3"
        alt="greensocklogo"
      />
      <video
        // controls
        autoPlay
        preload="none"
        muted="muted"
        playsInline
        loop
        style={{ objectFit: "cover" }}
        src={
          "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=08,10"
        }
        id="img4"
        alt="greensocklogo"
      />
      <video
        playi
        // controls
        autoPlay
        preload="none"
        muted="muted"
        playsInline
        loop
        style={{ objectFit: "cover" }}
        src={
          "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4"
        }
        id="img5"
        alt="greensocklogo"
      />
      <video
        // controls
        autoPlay
        preload="none"
        muted="muted"
        playsInline
        loop
        style={{ objectFit: "cover" }}
        src={
          "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=01,03"
        }
        id="img6"
        alt="greensocklogo"
      />
      <video
        // controls
        autoPlay
        preload="none"
        muted="muted"
        playsInline
        loop
        style={{ objectFit: "cover" }}
        src={
          "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=05,07"
        }
        id="img7"
        alt="greensocklogo"
      />

      <div id="end">
        <a>
          <span>End</span>
        </a>
      </div>
    </div>
  );
}
export default App;
