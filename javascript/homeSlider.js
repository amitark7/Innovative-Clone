const Slider = document.querySelectorAll(".slide-images");
let homeSliderCount = 0;
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
