var webBody = document.body;

let isDark = false;
const lightBtn = document.querySelector(".lightButton");
lightBtn.addEventListener("click", () => {
  if (isDark) {
    webBody.classList.remove("dark-mode");
    webBody.classList.add("light-mode");

    lightBtn.innerHTML =
      '<i class="fa fa-fire fa-md" aria-hidden="true">Dark-mode </i>';
    isDark = false;
  } else {
    webBody.classList.remove("light-mode");
    webBody.classList.add("dark-mode");

    lightBtn.innerHTML =
      '<i class="fa fa-fire" aria-hidden="true" style="color:white">Light-mode</i>';

    isDark = true;
  }
});
