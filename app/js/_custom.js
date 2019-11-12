document.addEventListener("DOMContentLoaded", function() {
  const open = document.querySelectorAll(".open"),
    tariffButton = document.querySelectorAll(".tariff-box__button"),
    option = document.querySelectorAll(".option"),
    drawer = document.getElementById("drawer"),
    close = document.getElementById("close");

  for (let t = 0; t < open.length; t++) {
    open[t].addEventListener("click", function(e) {
      e.preventDefault();
      if (drawer.classList.contains("active")) {
        drawer.classList.remove("active");
        header.classList.add("active");
      } else {
        document.body.classList.add("non");
        drawer.classList.add("active");
        header.classList.remove("active");
      }
    });
  }

  for (let m = 0; m < tariffButton.length; m++) {
    tariffButton[m].addEventListener("click", function(e) {
      if (
        !drawer.classList.contains("active") &&
        !tariffButton[m].hasAttribute("selected")
      ) {
        for (let n = 0; n < option.length; n++) {
          option[n].removeAttribute("selected");
        }
        option[m].setAttribute("selected", "selected");
        document.body.classList.add("non");
        drawer.classList.add("active");
        header.classList.remove("active");
      }
    });
  }

  close.addEventListener("click", function() {
    document.body.classList.remove("non");
    drawer.classList.remove("active");
    header.classList.add("active");
  });

  // Tips Navigation
  const anchors = document.querySelectorAll(".scroll-to"),
    tips = document.querySelectorAll(".dots-href"),
    pages = document.querySelectorAll(".page");

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  for (let n = 0; n < pages.length; n++) {
    window.addEventListener("scroll", function(e) {
      if (
        pages[n].getBoundingClientRect().top < 150 &&
        pages[n].getBoundingClientRect().top > 0
      ) {
        for (let i = 0; i < anchors.length; i++) {
          anchors[i].classList.remove("active");
        }
        tips[n].classList.add("active");
      }
    });
  }
  // END Tips Navigation

  // Header
  document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header"),
      logo = document.getElementsByClassName("logo");

    window.addEventListener("scroll", function(e) {
      if (this.pageYOffset > 100 && !drawer.classList.contains("active")) {
        header.classList.add("active");
      } else if (this.pageYOffset == 0) {
        header.classList.remove("active");
      }
    });
  });
  // END Header

  // Tabs
  var myTabs = tabs({
    el: "#tabs",
    tabNavigationLinks: ".tabs-nav__link",
    tabContentContainers: ".tab"
  });
  myTabs.init();
  // END Tabs
});

$(".parallax-window").parallax({
  imageSrc:
    "https://img3.badfon.ru/original/1920x1080/5/c4/holmy-gory-ozero-gorizont.jpg"
});
