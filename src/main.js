import "./styles/indexStyles.css"
import observeImg from './modules/observe'

const lazyImgs = document.getElementsByClassName('lazyImg');
[...lazyImgs].forEach(img => {
    observeImg(
        img,
        () => {
            img.src = img.attributes['data-src'].value;
        }
    );
});