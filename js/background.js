const images = [ "0.jpeg","1.jpeg","2.jpeg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/** img 태그 생성 */
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

/** body태그의 자식태그 추가 */
document.body.appendChild(bgImage);