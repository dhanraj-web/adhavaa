let checkBox = document.getElementById("checkbox");
let mainLogo = document.getElementById("logo1");
let bannerImg = document.querySelector(".banner");
let getBannerImg = getComputedStyle(bannerImg);

// console.log("mainLogo", mainLogo.src);

// check the theme from localstorage
let theme = window.localStorage.getItem("theme");
checkBox.checked = theme == "dark" ? true : false;

const lightThemeHandler = () => {
  window.localStorage.setItem("theme", "light");
  document.body.classList.remove("dark-theme");
  // mainLogo.src = "";
};

const darkThemeHandler = () => {
  window.localStorage.setItem("theme", "dark");
  document.body.classList.add("dark-theme");
  // mainLogo.src = "AdhavaaMainLogoDarkTheme.svg";
};

checkBox.addEventListener("change", function () {
  if (this.checked) {
    darkThemeHandler();
  } else {
    lightThemeHandler();
  }
});

//check the if dark theme is active or not.
if (theme === "dark") {
  darkThemeHandler();
  // document.body.classList.add("dark-theme");
}
