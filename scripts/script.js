const projectCircles = document.querySelectorAll(".projects-nav-circles__item");
const projectNavItems = document.querySelectorAll(
  ".projects-examples-nav__item"
);
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const infoAboutProject = document.querySelectorAll(".projects__text");
const imgProject = document.querySelector(".projects__image");

let activeSlideNumber = 0;

const sliderInfo = [
  {
    cityInfo: "Rostov-on-Don<br>LCD admiral",
    areaInfo: "81 m2",
    timeInfo: "3.5 months",
    costInfo: "Upon request",
    imgLink: "images/image 2.1.jpg",
  },
  {
    cityInfo: "Sochi<br>Thieves",
    areaInfo: "105 m2",
    timeInfo: "4 months",
    costInfo: "Upon request",
    imgLink: "images/image 2.2.jpg",
  },
  {
    cityInfo: "Rostov-on-Don<br>Patriotic",
    areaInfo: "93 m2",
    timeInfo: "3 months",
    costInfo: "Upon request",
    imgLink: "images/image 2.3.jpg",
  },
];

const changeCircleDisplay = (activeSlide) => {
  projectCircles.forEach((circleElement) => {
    circleElement.className = "projects-nav-circles__item";
  });
  projectCircles[activeSlide].className =
    "projects-nav-circles__item projects-nav-circles__item--chosen";
};

const changingNavItem = () => {
  projectNavItems.forEach((navItemElement) => {
    navItemElement.addEventListener("click", () => {
      projectNavItems.forEach((navItemElement) => {
        navItemElement.className = "projects-examples-nav__item";
      });
      if (
        navItemElement.className !=
        "projects-examples-nav__item projects-examples-nav__item--chosen"
      ) {
        navItemElement.className =
          "projects-examples-nav__item projects-examples-nav__item--chosen";
      }
      activeSlideNumber = Array.from(projectNavItems).indexOf(navItemElement);
      changeCircleDisplay(activeSlideNumber);
      changeSlideDisplay(activeSlideNumber);
    });
  });
};

const changeNavItemDisplay = (activeSlide) => {
  projectNavItems.forEach((navItemElement) => {
    navItemElement.className = "projects-examples-nav__item";
  });
  projectNavItems[activeSlide].className =
    "projects-examples-nav__item projects-examples-nav__item--chosen";
};

const changingCircle = () => {
  projectCircles.forEach((circleElement) => {
    circleElement.addEventListener("click", () => {
      projectCircles.forEach((circleElement) => {
        circleElement.className = "projects-nav-circles__item";
      });
      if (
        circleElement.className !=
        "projects-nav-circles__item projects-nav-circles__item--chosen"
      ) {
        circleElement.className =
          "projects-nav-circles__item projects-nav-circles__item--chosen";
      }
      activeSlideNumber = Array.from(projectCircles).indexOf(circleElement);
      changeNavItemDisplay(activeSlideNumber);
      changeSlideDisplay(activeSlideNumber);
    });
  });
};

leftArrow.addEventListener("click", () => {
  activeSlideNumber =
    activeSlideNumber == 0 ? (activeSlideNumber = 2) : (activeSlideNumber -= 1);
  changeCircleDisplay(activeSlideNumber);
  changeNavItemDisplay(activeSlideNumber);
  changeSlideDisplay(activeSlideNumber);
});

rightArrow.addEventListener("click", () => {
  activeSlideNumber =
    activeSlideNumber == 2 ? (activeSlideNumber = 0) : (activeSlideNumber += 1);
  changeCircleDisplay(activeSlideNumber);
  changeNavItemDisplay(activeSlideNumber);
  changeSlideDisplay(activeSlideNumber);
});

const smoothHide = () => {
  infoAboutProject[1].style.marginLeft = "-15px";
  infoAboutProject[2].style.marginLeft = "-15px";
  infoAboutProject[3].style.marginLeft = "-15px";
  infoAboutProject[4].style.marginLeft = "-15px";
  /* imgProject.style.paddingLeft = "30px"; */
  infoAboutProject[1].style.opacity = 0;
  infoAboutProject[2].style.opacity = 0;
  infoAboutProject[3].style.opacity = 0;
  infoAboutProject[4].style.opacity = 0;
  imgProject.style.opacity = 0;
};

const smoothAppear = () => {
  infoAboutProject[1].style.opacity = 1;
  infoAboutProject[2].style.opacity = 1;
  infoAboutProject[3].style.opacity = 1;
  infoAboutProject[4].style.opacity = 1;
  imgProject.style.opacity = 1;
  infoAboutProject[1].style.marginLeft = "0px";
  infoAboutProject[2].style.marginLeft = "0px";
  infoAboutProject[3].style.marginLeft = "0px";
  infoAboutProject[4].style.marginLeft = "0px";
  /* imgProject.style.paddingLeft = "0px"; */
};

const changeSlideDisplay = (activeSlideNumber) => {
  setTimeout(() => {
    smoothHide();
  }, 0);
  setTimeout(() => {
    infoAboutProject[1].style.marginLeft = "15px";
    infoAboutProject[2].style.marginLeft = "15px";
    infoAboutProject[3].style.marginLeft = "15px";
    infoAboutProject[4].style.marginLeft = "15px";
    /* imgProject.style.paddingLeft = "-30px"; */
    infoAboutProject[1].innerHTML = sliderInfo[activeSlideNumber].cityInfo;
    infoAboutProject[2].innerHTML = sliderInfo[activeSlideNumber].areaInfo;
    infoAboutProject[3].innerHTML = sliderInfo[activeSlideNumber].timeInfo;
    infoAboutProject[4].innerHTML = sliderInfo[activeSlideNumber].costInfo;
    imgProject.src = sliderInfo[activeSlideNumber].imgLink;
  }, 200);

  setTimeout(() => {
    smoothAppear();
  }, 350);
};

changingNavItem();
changingCircle();

/* Mobile */

const arrowsMobile = document.querySelectorAll(
  ".projects__arrow--mobile"
);

arrowsMobile[0].onclick = () => {
  activeSlideNumber =
    activeSlideNumber == 0 ? (activeSlideNumber = 2) : (activeSlideNumber -= 1);
  changeCircleDisplay(activeSlideNumber);
  changeNavItemDisplay(activeSlideNumber);
  changeSlideDisplay(activeSlideNumber);
};
arrowsMobile[1].onclick= () => {
  activeSlideNumber =
    activeSlideNumber == 2 ? (activeSlideNumber = 0) : (activeSlideNumber += 1);
  changeCircleDisplay(activeSlideNumber);
  changeNavItemDisplay(activeSlideNumber);
  changeSlideDisplay(activeSlideNumber);
};
