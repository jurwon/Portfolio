//alert("하이");
const start = document.querySelector("#start");
const main = document.querySelector("#main");

function begin() {
  start.style.animation = "fadeOut 1s";
  setTimeout(() => {
    main.style.animation = "fadeIn 1s";
  }, 450);

  setTimeout(() => {
    start.classList.add("d-none");
    main.style.display = "block";
  }, 900);
}
