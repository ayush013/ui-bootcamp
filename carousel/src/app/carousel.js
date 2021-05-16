export default class Carousel {

    defaultOptions = {
        autoplay: true,
        duration: 2000,
        dots: false
    };

    constructor(options = this.defaultOptions) {
        this.baseWrapper = document.getElementById('carousel');

        this.validateCarousel(options);

        this.initCarousel(options);
    }

    validateCarousel(options) {
        if (!this.baseWrapper) {
            throw new Error('Cannot find a valid element');
        }

        if (typeof options !== 'object') {
            throw new Error('Invalid options provided');
        }

        const { autoplay, duration, dots } = options;

        // if(typeof autoplay)
    }

    initCarousel({ autoplay, duration, dots }) {
        let slides = this.baseWrapper.querySelectorAll('.slide');

        slides = Array.from(slides);

        if (!slides.length) {
            throw new Error('No slides to show');
        }

        const innerFragment = new DocumentFragment();

        const innerDiv = document.createElement('div');

        const width = this.baseWrapper.clientWidth;
        innerDiv.style.width = `${slides.length * width}px`;
        innerDiv.style.transition = `0.2s`;
        innerDiv.style.display = `flex`;

        innerFragment.appendChild(innerDiv);

        slides.forEach(slide => {
            slide.querySelector('img').style.userSelect = 'none';
            innerDiv.appendChild(slide)
        });

        this.baseWrapper.appendChild(innerFragment);

        let currentSlide = 1;
        let timer;

        if (autoplay) {
            timer = this.autoplayCarousel(duration, () => {

                innerDiv.style.transform = `translateX(-${currentSlide * width}px)`;
                currentSlide = (currentSlide + 1) % slides.length;

            });
        }

    }

    autoplayCarousel(duration, callback) {
        return setInterval(() => {
            callback();
        }, duration);
    }

}