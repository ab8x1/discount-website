import "./styles/indexStyles.css"
import lottie from 'lottie-web';

const animationElement = document.getElementById("animation");

lottie.loadAnimation({
    container: animationElement, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './public/animation.json' // the path to the animation json
  });