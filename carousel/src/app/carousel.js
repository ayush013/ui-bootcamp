export default class Carousel {

    defaultOptions = {
        autoplay: true,
        duration: 2000,
        dots: false,
        pauseOnHover: false
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

    initCarousel({ autoplay, duration, dots, pauseOnHover }) {
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

        let slide = { current: 1 };
        let timer;

        if (autoplay) {
            timer = this.autoplayCarousel(duration, innerDiv, slide, width, slides);
        }

        if (pauseOnHover) {
            this.initPauseOnHover((type) => {
                if (type === 'mouseenter') {
                    clearTimeout(timer);
                } else {
                    timer = this.autoplayCarousel(duration, innerDiv, slide, width, slides);
                }
            })
        }

    }

    autoplayCarousel(duration, innerDiv, slide, width, slides) {
        return setInterval(() => {
            innerDiv.style.transform = `translateX(-${slide.current * width}px)`;
            slide.current = (slide.current + 1) % slides.length;
        }, duration);
    }

    initPauseOnHover(callback) {
        this.baseWrapper.addEventListener('mouseenter', () => {
            callback('mouseenter');
        });

        this.baseWrapper.addEventListener('mouseleave', () => {
            callback('mouseleave');
        });
    }


}