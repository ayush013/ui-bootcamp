export default class ViewportObserver {

    initObserver(node, callback) {
        const observer = new IntersectionObserver(callback, { threshold: 0.9 })
        observer.observe(node);
    };

}