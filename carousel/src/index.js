import Carousel from './app/carousel';
import './style.scss'

export const loadApp = () => {

    new Carousel({
        autoplay: true,
        duration: 1000,
        pauseOnHover: true
    });
}

loadApp();