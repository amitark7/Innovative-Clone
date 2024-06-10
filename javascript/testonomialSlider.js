const testonomials = document.querySelectorAll(".testonomial");
let count = 0;

testonomials.forEach((testonomial, index) => {
  testonomial.style.left = `${index * 100}%`;
});

const testonomialSlide = () => {
  setInterval(() => {
    if (count > testonomials.length - 1) {
      count = 0;
    }
    testonomials.forEach((testonomial) => {
      testonomial.style.transform = `translateX(-${count * 100}%)`;
    });
    count++;
  }, 4000);
};
testonomialSlide();
