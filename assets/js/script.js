// Navbar
function navbar() {
  const navbar = document.querySelector(".navigation");
  window.onscroll = () => {
    if (window.scrollY > 100) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };
}

// Burger Menu
function burgerMenu() {
  const burger = document.querySelector(".burger_menu");
  const mobileNav = document.querySelector(".mob_nav");
  burger.addEventListener("click", () => {
    document.getElementsByTagName("BODY")[0].classList.toggle("no_scroll");
    burger.classList.toggle("open");
    mobileNav.classList.toggle("show");
    console.log("hello");
  });
}

// Video Functionality
function videoPlayer() {
  const videoPlay = document.querySelector("video");
  const videoBtn = document.querySelector(".controls");
  console.log(videoBtn);
  const btnPause = document.querySelector(".fa-pause");
  const btnPlay = document.querySelector(".fa-play");
  const text = document.querySelector(".video-content-wrapper-text");

  videoPlay.addEventListener("click", () => {
    if (videoPlay.paused) {
      videoPlay.play();
      btnPause.classList.remove("none");
      btnPlay.classList.add("none");
      text.classList.add("none");
      videoBtn.classList.add("opacity");
    } else {
      videoPlay.pause();
      btnPause.classList.add("none");
      btnPlay.classList.remove("none");
      videoBtn.classList.remove("opacity");
    }
  });

  const playList = document.getElementById("playList-container");
  const btns = playList.getElementsByClassName("playList_content");

  Array.from(btns).forEach((btn) => {
    btn.addEventListener(
      "click",
      function (e) {
        btn.classList.add("active");
        console.log(btn);

        // Getting all btn at once
        let allBtns = [...btns];
        console.log(allBtns);

        let selectedBtn = allBtns.filter((eachBtn) => {
          console.log(allBtns);
          console.log(eachBtn == btn);
          return eachBtn !== btn;
        });

        // Getting new Array which also present the active class becoz of the click as it not removed.

        console.log(selectedBtn);

        // Removing class active from the new array we getting
        selectedBtn.map((eachBtn) => {
          eachBtn.classList.remove("active");
        });

        const videoSource = this.getAttribute("data-video-src");
        const videoPoster = this.getAttribute("data-video-poster");

        videoPlay.setAttribute("src", videoSource);
        videoPlay.setAttribute("poster", videoPoster);
        text.classList.remove("none");
        videoPlay.load();

        videoPlay.addEventListener("ended", () => {
          btnPause.classList.add("none");
          btnPlay.classList.remove("none");
          text.classList.remove("none");
          videoBtn.classList.remove("opacity");
          videoPlay.setAttribute("src", videoSource);
        });
        e.stopPropagation();
      },
      true
    );

    videoPlay.addEventListener("mouseover", function () {
      if (!videoPlay.paused) {
        videoBtn.classList.remove("opacity");
      }
    });

    videoPlay.addEventListener("mouseout", function () {
      if (!videoPlay.paused) {
        videoBtn.classList.add("opacity");
      }
    });
  });
}

window.addEventListener("load", () => {
  navbar();
  burgerMenu();
  videoPlayer();
});
