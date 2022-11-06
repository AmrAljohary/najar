
// arwwo

let arrwo = document.querySelector(".arrwo");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    arrwo.classList.add("reset-arrwo");
  } else {
    arrwo.classList.remove("reset-arrwo");
  }
};

arrwo.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//  end of arwwo