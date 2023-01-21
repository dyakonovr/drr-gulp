import disableScroll from '../../functions/disableScroll.js';
import enableScroll from '../../functions/enableScroll.js';

const preloader = document.querySelector('.preloader');
const images = document.images;
const imagesTotal = images.length;
let imagesLoaded = 0;
const percentDisplay = document.querySelector('.preloader__percent');
const progressDisplay = document.querySelector('.preloader__progress');

if (preloader) {

  disableScroll();

  for (let i = 0; i < imagesTotal; i++) {
    let imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }

  function imageLoaded() {
    imagesLoaded++;
    let percent = (((100 / imagesTotal) * imagesLoaded) << 0);
    percentDisplay.innerHTML = percent + '%';
    progressDisplay.style.width = percent + '%';

    if (imagesLoaded >= imagesTotal) {
      setTimeout(function () {
        if (!preloader.classList.contains('preloader__done')) {
          preloader.classList.add('preloader__done');
          setTimeout(enableScroll, 70);
        }
      }, 1200)
    }
  }
}