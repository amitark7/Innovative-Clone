const slideBox = document.querySelectorAll(".slide-box");
let serviseBoxCount = 0;

slideBox.forEach((box, index) => {
  box.style.left = `${index * 373}px`;
});
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
