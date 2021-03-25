import im1 from "./../media/img/gallery/gallery_1.jpg";
import im2 from "./../media/img/gallery/gallery_2.jpg";
import im3 from "./../media/img/gallery/gallery_3.jpg";
import im4 from "./../media/img/gallery/gallery_4.jpg";
import im5 from "./../media/img/gallery/gallery_5.jpg";
import im6 from "./../media/img/gallery/gallery_6.jpg";
import im7 from "./../media/img/gallery/gallery_7.jpg";
import im8 from "./../media/img/gallery/gallery_8.jpg";
import im9 from "./../media/img/gallery/gallery_9.jpg";
import im10 from "./../media/img/gallery/gallery_10.jpg";
import im11 from "./../media/img/gallery/gallery_11.jpg";
import im12 from "./../media/img/gallery/gallery_12.jpg";
const images = [im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12];
var t0 = performance.now();
function getGallerySettings() {
  let gallerySettings = [];
  for (let i of images) {
    let img = new Image();
    img.src = i;
    img.onload = () =>
      gallerySettings.push({
        src: i,
        height: img.height,
        width: img.width,
      });
  }
  var t1 = performance.now();
  console.log(
    "Call to file gallerysettings took " + (t1 - t0) + " milliseconds."
  );
  return gallerySettings;
}

export const gallerySettings = getGallerySettings();
