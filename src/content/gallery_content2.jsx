const baseurl = "http://localhost:1337";
const sizes = ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"];
console.log("Fetching data from API");
let ret = [];
fetch(baseurl + "/galleries", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data[0].pictures.map((x) => {
      let formats = [];
      if (x.formats) {
        for (const [val, format] of Object.entries(x.formats)) {
          formats.push(baseurl + format.url + " " + format.width + "w");
        }
      }
      console.log(formats);
      gallerySettings.push({
        src: baseurl + x.url,
        width: x.width,
        height: x.height,
        srcset: formats,
        sizes,
      });
    });
  });

export const gallerySettings = ret;
// export const gallerySettings = [
//   {
//     src:
//       "https://github.com/captain-inch/lcc_export/blob/main/src/media/img/gallery/gallery_6.jpg?raw=true",
//     height: 1080,
//     width: 1440,
//   },
//   {
//     src:
//       "https://github.com/captain-inch/lcc_export/blob/main/src/media/img/gallery/gallery_4.jpg?raw=true",
//     height: 1080,
//     width: 1631,
//   },
// ];
