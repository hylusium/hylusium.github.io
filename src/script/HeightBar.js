const toggleText = document.querySelector(".headerTitle");
const elementToToggle = document.querySelector(".HeaderNav");

toggleText.addEventListener("click", function () {
  if (elementToToggle.style.display === "none") {
    elementToToggle.style.display = "block";
  } else {
    elementToToggle.style.display = "none";
  }
});
