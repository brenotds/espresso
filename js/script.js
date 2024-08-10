function initAnimeScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowSize = window.innerHeight * 0.6;

    function animeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowSize < 0;
        if (isSectionVisible) {
          section.classList.add("anime");
        }
      });
    }
    animeScroll();
    window.addEventListener("scroll", animeScroll);
  }
}
initAnimeScroll();

function initImageSwap() {
  const image = document.getElementById("image-bg");
  const images = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];

  setInterval(function () {
    const random = Math.floor(Math.random() * 3);
    image.src = images[random];
  }, 2000);
}
initImageSwap();
