const humburger = document.getElementById("humburger");
const icon = document.getElementById("icon");
const hiddenMenu = document.getElementById("hidden-menu");

humburger.addEventListener("click", () => {
  icon.classList.toggle("fa-xmark");
  if (icon.classList.contains("fa-xmark")) {
    hiddenMenu.classList.remove("hidden");
  } else {
    hiddenMenu.classList.add("hidden");
  }
});



