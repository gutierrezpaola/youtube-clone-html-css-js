const iconRight = document.querySelector(".rigth-arrow");
const iconLeft = document.querySelector(".left-arrow");
const containerTranslate = document.querySelector(".sliding-buttons-container");
const divLeftArrow = document.querySelector(".arrow-container-left");
const divRigthArrow = document.querySelector(".arrow-container-rigth");
const listBtnChip = document.querySelectorAll(".btn-chip");

const lastItem = listBtnChip[listBtnChip.length - 1];

const callback = (entries) => {
  const elemento = entries[0];
  const isVisible = elemento.intersectionRatio >= 1;

  if (isVisible) {
    divRigthArrow.classList.add("hidden");
  } else {
    divRigthArrow.classList.remove("hidden");
  }
};

const intersectionObserver = new IntersectionObserver(callback, {
  threshold: 1,
});

intersectionObserver.observe(lastItem);

var position = 0;

iconRight.addEventListener("click", () => {
  position = position - 120;
  containerTranslate.style.transform = `translateX(${position}px)`;
  divLeftArrow.classList.remove("hidden");
});

iconLeft.addEventListener("click", () => {
  position = position + 120;
  containerTranslate.style.transform = `translateX(${position}px)`;
  if (position === 0) {
    divLeftArrow.classList.add("hidden");
  }
});
