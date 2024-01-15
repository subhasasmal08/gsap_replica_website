"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import thumbnail from "../public/Assets/Images/thumbnail.png";
import Image from "next/image";
function App() {
  gsap.registerPlugin(ScrollTrigger);

  function LandingPageScrollTrigger() {
    gsap.to("body", {
      opacity: 1,
      duration: 5,
    });

    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "0% 0%",
        end: "500% 0%",
        pin: "#ImgWrapper",
        scrub: 2.2,
        markers: true,
      },
    });
    LandingPageScrollTrigger.to(
      "#ImgWrapper #img7",
      { transform: "translateZ(4500px)" },
      0
    )
      .to("#ImgWrapper #img6", { transform: "translateZ(3700px)" }, 0)
      .to(
        "#ImgWrapper #img5",
        {
          transform: "translateZ(1590px)",
          left: "34%",
          bottom: "36%",
          width: "30vw",
          height: "28vh",
        },
        0
      )
      .to("#ImgWrapper #img4", { transform: "translateZ(2800px)" }, 0)
      .to("#ImgWrapper #img3", { transform: "translateZ(2600px)" }, 0)
      .to("#ImgWrapper #img2", { transform: "translateZ(2400px)" }, 0)
      .to("#ImgWrapper #img1", { transform: "translateZ(2200px)" }, 0)
      .from("#end div", { y: 130, opacity: 0, backgroundColor: "#000" }, 0.31);
  }

  window.onload = () => {
    LandingPageScrollTrigger();
  };
  const inputRef = useRef();

  function submit(e) {
    const data = {};

    e.preventDefault();

    let id = document.querySelectorAll("input");
    id.forEach((userItem) => {
      let name = userItem.name.split(".");
      console.log(name[1]);
      if (name[1] !== undefined) {
        if (name[2] !== undefined) {
          console.log("2");
          data[name[0]] = {
            [name[1]]: {
              [name[2]]: userItem.value,
            },
          };
        } else if (name[2] !== undefined) {
          console.log(name[1], "1");
          data[name[0]] = {
            [name[1]]: userItem.value,
          };
        }
      } else {
        data[name[0]] = userItem.value;
      }
    });
    let output = {
      foo: {
        bat: "val", //Actual value of 1st text box
        bar: {
          baz: "val", // Value of 2nd text box
        },
      },
      fizz: "val", // Value of 3rd text box
    };
    console.log(data);
    console.log(output);
  }

  return (
    <div className="main_page_wrapper">
      {/* <form id="parent" ref={inputRef} onSubmit={submit}>
        <input
          id={"p"}
          type="text"
          name="foo.bat"
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          id={"p"}
          type="text"
          name="foo.bar.baz"
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          id={"p"}
          type="text"
          name="fizz"
          onChange={(e) => console.log(e.target.value)}
        />
        <button className="submit_btn" type="submit" value="Send">
          submit
        </button>
      </form> */}
      <div className="main_page_desc">
        <p className="desc_">
          Spain Collection is your expert partner for deluxe bespoke travel
          experiences in
        </p>
        <p className="country_">Spain & portugal</p>
      </div>
      <div id="ImgWrapper">
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
          // preload="none"
          muted="muted"
          // playsInline
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
        {/* <div className="video_player_wrapper" id="end">
          <div>
            <span>End</span>
          </div>
        </div> */}
      </div>
      <div className="video_player_wrapper">
        <p className="about_">ABOUT US</p>
        <video
          poster="https://upload.wikimedia.org/wikipedia/commons/4/46/Bear_Alaska_%283%29.jpg"
          className="video_"
          preload="none"
          muted="muted"
          playsInline
          src="https://spaincollection.com/wp-content/uploads/2020/11/Abene_Home.mp4"
        />
        <img
          id="play_btn"
          className="play_btn"
          src="https://spaincollection.com/wp-content/themes/spaincollection/img/player.svg"
        />
      </div>
    </div>
  );
}
export default App;
