import './styles/mainStyles.css'
import observeImg from './modules/observe'
import './public/social-card.png'

const lazyImgs = document.getElementsByClassName('lazyImg');
[...lazyImgs].forEach(img => {
    observeImg(
        img,
        () => {
            img.src = img.attributes['data-src'].value;
        }
    );
});