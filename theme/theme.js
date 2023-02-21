let themeChangeBtn = Array.from(document.querySelectorAll(".theme-icon-btn"));
let themeIcon = Array.from(document.querySelectorAll(".theme-icon"));
let mainLogo = document.getElementById("logo1");
let bannerImg = document.querySelector(".banner");
let misImg = document.querySelector(".mis-img");
let posImg = document.querySelector(".pos-img");
let sateliteImg = document.querySelector(".satelite-img");
let carouselMis = document.getElementById("carousal-mis");
let carouselPos = document.getElementById("carousal-pos");
let carouselSatellite = document.getElementById("carousal-satellite");
let carousalPrev = document.getElementById("carousal-prev");
let carousalNext = document.getElementById("carousal-next");
let customDashboard = document.getElementById("custom-dashboard");
let boardResolution = document.getElementById("board-resolution");
let idCardGeneration = document.getElementById("id-card-generation");
let shareCertificate = document.getElementById("share-certificate");
let inventory = document.getElementById("inventory");
let invoice = document.getElementById("invoice");
let dashboard = document.getElementById("dashboard");
let supportWhatsapp = document.getElementById("support-whatsapp");
let landCertificate = document.getElementById("land-certificate");
let scoreCard = document.getElementById("score-card");
let bulbImg = document.getElementById("bulbImg");
let svgWrapper = document.querySelector(".svg-wrapper");
let marketplaceContainer = document.getElementById("marketplace-container");
let marketplaceCardContainer = document.getElementById(
  "marketplace-card-container"
);
let marketplaceContainerFooter = document.getElementById(
  "marketplace-footer-container"
);
let subscribeBtn = document.querySelector('.subscribe-btn');

// check the theme from localstorage
let theme = window.localStorage.getItem("theme");

const ourVisionSvgHandler = (setImage) => {
  let getAllSvgWrapper = svgWrapper.querySelectorAll("img");
  Array.from(getAllSvgWrapper).map((item) => (item.src = setImage));
};

const lightThemeHandler = () => {
  window.localStorage.setItem("theme", "light");
  document.body.classList.remove("dark-theme");
  themeIcon[0].src = "../images/darkModeIcon.svg";
  themeIcon[1].src = "../images/darkModeIcon.svg";
  mainLogo.src = "../images/AdhavaMainLogo.svg";
  bannerImg.style.backgroundImage = "";
  misImg.style.backgroundImage = "";
  posImg.style.backgroundImage = "";
  // sateliteImg.style.backgroundImage = "";
  carouselMis.src = "../images/carousal/CarousalImg1.png";
  carouselPos.src = "../images/carousal/CarousalImg2.png";
  // carouselSatellite.src = "../images/carousal/CarousalImg3.png";
  carousalPrev.src = "../images/carousal/CarousalPrev.svg";
  carousalNext.src = "../images/carousal/CarousalNext.svg";
  customDashboard.src = "../images/carousal/carousal1-1.svg";
  boardResolution.src = "../images/carousal/carousal1-2.svg";
  idCardGeneration.src = "../images/carousal/carousal1-3.svg";
  shareCertificate.src = "../images/carousal/carousal1-4.svg";
  inventory.src = "../images/carousal/Carousal2-1.svg";
  invoice.src = "../images/carousal/Carousal2-2.svg";
  dashboard.src = "../images/carousal/Carousal2-3.svg";
  // supportWhatsapp.src = "../images/carousal/Carousal3-1.svg";
  // landCertificate.src = "../images/carousal/Carousal3-2.svg";
  // scoreCard.src = "../images/carousal/Carousal3-3.svg";
  bulbImg.src = "../images/BulbImg.svg";
  ourVisionSvgHandler("../images/OurvisionSvg.svg");
  marketplaceContainer.style.background = "";
  marketplaceContainerFooter.style.background = "";
  bannerImg.classList.remove('dark-banner-mobile');
  bannerImg.classList.add('light-banner-mobile');
};

const darkThemeHandler = () => {
  window.localStorage.setItem("theme", "dark");
  document.body.classList.add("dark-theme");
  themeIcon[0].src = "../images/lightModeIcon.svg";
  themeIcon[1].src = "../images/lightModeIcon.svg";
  mainLogo.src = "../images/AdhavaaMainLogoDark.svg";
  bannerImg.style.backgroundImage = "url(../images/BannerImgDark.svg)";
  misImg.style.backgroundImage = "url(../images/mis-dark.svg)";
  posImg.style.backgroundImage = "url(../images/pos-dark.svg)";
  // sateliteImg.style.backgroundImage =
  //   "url(../images/chitta-satellite-dark.svg)";
  carouselMis.src = "../images/carousal/CarousalImg1-dark.png";
  carouselPos.src = "../images/carousal/CarousalImg2-dark.png";
  // carouselSatellite.src = "../images/carousal/CarousalImg3-dark.png";
  carousalPrev.src = "../images/carousal/CarousalPrevDark.svg";
  carousalNext.src = "../images/carousal/CarousalNextDark.svg";
  customDashboard.src = "../images/carousal/carousal1-1-dark.svg";
  boardResolution.src = "../images/carousal/carousal1-2-dark.svg";
  idCardGeneration.src = "../images/carousal/carousal1-3-dark.svg";
  shareCertificate.src = "../images/carousal/carousal1-4-dark.svg";
  inventory.src = "../images/carousal/Carousal2-1-dark.svg";
  invoice.src = "../images/carousal/Carousal2-2-dark.svg";
  dashboard.src = "../images/carousal/Carousal2-3-dark.svg";
  // supportWhatsapp.src = "../images/carousal/Carousal3-1-dark.svg";
  // landCertificate.src = "../images/carousal/Carousal3-2-dark.svg";
  // scoreCard.src = "../images/carousal/Carousal3-3-dark.svg";
  bulbImg.src = "../images/bulbImgDark.svg";
  ourVisionSvgHandler("../images/OurvisionSvgDark.svg");
  marketplaceContainer.style.background = "transparent";
  marketplaceCardContainer.style.background = "none";
  marketplaceContainerFooter.style.background = "none";
  marketplaceContainer.style.background = `linear-gradient(${"#031E29"}, ${"#0E2732"})`;
  bannerImg.classList.add('dark-banner-mobile');
  bannerImg.classList.remove('light-banner-mobile');
};

const themeChangeHandler = (mode) => {
  switch (mode) {
    case "dark":
      return lightThemeHandler();
    case "light":
      return darkThemeHandler();
    default:
      return darkThemeHandler();
  }
};

themeChangeBtn[0].addEventListener("click", () => {
  themeChangeHandler(window.localStorage.getItem("theme"));
});
themeChangeBtn[1].addEventListener("click", () => {
  themeChangeHandler(window.localStorage.getItem("theme"));
});

//check the if dark theme is active or not.
if (theme === "dark") {
  darkThemeHandler();
}
