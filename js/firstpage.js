let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let carousel = document.querySelector(".carousel");
let carouselList = carousel.querySelector(".carousel .list");
let preview = document.querySelector(".carousel .preview");
let previewItems = preview.querySelectorAll(".item");

preview.appendChild(previewItems[0]);

nextBtn.onclick = function () {
  moveCarousel("next");
};

prevBtn.onclick = function () {
  moveCarousel("prev");
};

function moveCarousel(direction) {
  let carouselItems = carouselList.querySelectorAll(".item");
  let previewItems = document.querySelectorAll(".preview .item");

  if (direction === "next") {
    carouselList.appendChild(carouselItems[0]);
    preview.appendChild(previewItems[0]);
    carousel.classList.add("next");
  } else {
    carouselList.prepend(carouselItems[carouselItems.length - 1]);
    preview.prepend(previewItems[previewItems.length - 1]);
    carousel.classList.add("prev");
  }

  carousel.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        carousel.classList.remove("next");
      } else {
        carousel.classList.remove("prev");
      }
    },
    { once: true }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button button[data-link]");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const link = button.getAttribute("data-link");
      window.location.href = link;
    });
  });
});
