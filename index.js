const Slider = document.querySelectorAll(".slide-images");
const humburger = document.getElementById("humburger");
const icon = document.getElementById("icon");
const hiddenMenu = document.getElementById("hidden-menu");
const slideBox = document.querySelectorAll(".slide-box");
let homeSliderCount = 0;
let serviseBoxCount = 0;

slideBox.forEach((box, index) => {
  box.style.left = `${index * 373}px`;
});

humburger.addEventListener("click", () => {
  icon.classList.toggle("fa-xmark");
  if (icon.classList.contains("fa-xmark")) {
    hiddenMenu.classList.remove("hidden");
  } else {
    hiddenMenu.classList.add("hidden");
  }
});
Slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const autoHomeSlider = () => {
  setInterval(() => {
    if (homeSliderCount > Slider.length - 1) {
      homeSliderCount = 0;
    }
    Slider.forEach((slide) => {
      slide.style.transform = `translateX(-${homeSliderCount * 100}%)`;
    });
    homeSliderCount++;
  }, 4000);
};
autoHomeSlider();

const autoServiceBoxSlider = () => {
  setInterval(() => {
    if (serviseBoxCount > slideBox.length - 1) {
      serviseBoxCount = 0;
    }
    slideBox.forEach((box) => {
      box.style.transform = `translateX(-${serviseBoxCount * 373}px)`;
    });
    serviseBoxCount++;
  }, 4000);
};
autoServiceBoxSlider();
