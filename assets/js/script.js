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
  const deskNav = document.querySelector(".nav_main-list--mobile");
  const show = document.querySelector(".show");
  const mobileNav = document.querySelector(".mob_nav");
  burger.addEventListener("click", () => {
    document.getElementsByTagName("BODY")[0].classList.toggle("no_scroll");
    burger.classList.toggle("open");
    deskNav.classList.toggle("show");
    mobileNav.classList.toggle("show");
    console.log("hello");
  });
}

// Video Functionality
function videoPlayer() {
  let videoPlay = document.querySelector("video");
  const videoBtn = document.querySelector(".controls");
  console.log(videoBtn);
  let btnPause = document.querySelector(".fa-pause");
  let btnPlay = document.querySelector(".fa-play");
  let text = document.querySelector(".video-content-wrapper-text");

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
    }
  });

  let header = document.getElementById("playList-container");
  let btns = header.getElementsByClassName("playList_content");

  Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", function () {
      let current = document.querySelector(".active");
      current.classList.remove("active");
      this.classList.add("active");

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
    });

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

console.log("Hello World! how are you?");
