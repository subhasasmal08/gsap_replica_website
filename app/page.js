"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import thumbnail from "../public/Assets/Images/thumbnail.png";
import Image from "next/image";
import Modal from "./components/Modal/Modal";
function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [OpenVideoModal, setOpenVideoModal] = useState(false);
  const [currentAmbassadorVideo, setCurrentAmbassadorVideo] = useState("");

  useEffect(() => {
    console.log("useeffect");
    OpenVideoModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [OpenVideoModal]);

  const ambassadorArr = [
    {
      name: "Eneko Atxa",
      desc: "3 Michelin Stars",
      poster:
        "https://spaincollection.com/wp-content/uploads/2020/10/caratula_eneko.jpg",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/eneko_atxa.mp4",
    },
    {
      name: "Pedro Subijana",
      desc: "3 Michelin Stars",
      poster:
        "https://spaincollection.com/wp-content/uploads/2020/10/caratula_pedro.jpg",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/Akelarre-1.mp4",
    },
    {
      name: "Germán Jiménez",
      desc: "Journalist specialized in Fashion & Lifestyle",
      poster:
        "https://spaincollection.com/wp-content/uploads/2020/12/caratula_german.jpg",
      src: "https://spaincollection.com/wp-content/uploads/2020/12/German-gimenez.mp4",
    },
  ];

  const whyArr = [
    {
      desc: "Because our passion is people, travel and our country, it’s what makes us get out of bed in the morning.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/modulo_Why_11.jpg",
    },
    {
      desc: "Because nothing is more fulfilling than creating something from scratch and seeing it come to life.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/Capa-1.jpg",
    },
    {
      desc: "Because of that blissful moment, after months of planning, when your clients thank you for giving them have the time of their lives.",
      src: "https://spaincollection.com/wp-content/uploads/2020/11/Capa-3.jpg",
    },
  ];
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
        // markers: true,
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
    !OpenVideoModal && LandingPageScrollTrigger();
    gsap.to("#ambassadors_wrapper", {
      backgroundColor: "#fff",
      scrollTrigger: {
        trigger: "#ambassadors_wrapper",
        start: "0% 0%",
        end: "60% 0%",
        // markers: true,
        scrub: true,
      },
    });
  };

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

  const playVideo = (videoId) => {
    var video = document.getElementById("video_player");
    var play_btn = document.getElementById("play_btn");
    video.play();
    video.controls = true;
    play_btn.style.display = "none";
    console.log(video.pause());
  };

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
      <div className="about_us_wrapper">
        <p className="about_">about us</p>
        <video
          poster="https://stop.es/wp-content/uploads/2017/10/stop-staff-abene-mendizabal.png"
          className="video_"
          preload="none"
          muted="muted"
          playsInline
          id="video_player"
          src="https://spaincollection.com/wp-content/uploads/2020/11/Abene_Home.mp4"
        />
        <img
          id="play_btn"
          className="play_btn"
          src="https://spaincollection.com/wp-content/themes/spaincollection/img/player.svg"
          onClick={() => {
            console.log("click");
            playVideo();
          }}
        />
        <p className="name">Abene Mendizabal</p>
        <p className="role">Founder & CEO Spain Collection</p>
      </div>
      <div id="ambassadors_wrapper" className="ambassadors_wrapper">
        <p className="ambassaodors_">ambassaodors</p>
        <div className="ambassadors_video_wrapper">
          {ambassadorArr.map((item) => {
            return (
              <div className="card_">
                <video poster={item.poster} src={item.src} />
                <img
                  id="play_btn"
                  className="play_btn"
                  src="https://spaincollection.com/wp-content/themes/spaincollection/img/player.svg"
                  onClick={() => {
                    console.log("click");
                    setOpenVideoModal(true);
                    setCurrentAmbassadorVideo(item.src);
                  }}
                />
                <p className="name">{item.name}</p>
                <p className="role">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div id="why" className="why_wrapper">
        <p className="why_tag">why CHOOSE SPAIN COLLEC-TION?</p>
        <div className="why_images">
          {whyArr.map((item, index) => {
            return (
              <div className="card_">
                <img className="card_images"src={item.src} />
                <p className="num_">{"0" + (index + 1) + "/"}</p>
                <p className="desc_">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {OpenVideoModal && (
        <Modal
          className={"ambassador_video_modal"}
          onClose={() => setOpenVideoModal(false)}
        >
          <video
            className="video_"
            controls
            autoPlay
            playsInline
            style={{ objectFit: "cover" }}
            src={currentAmbassadorVideo}
          />
        </Modal>
      )}
    </div>
  );
}
export default App;
