export class LazyIntersecting {
    constructor(selector: string, options?: IntersectionObserverInit) {
        this.init(selector, options);
    }

    private init(selector: string, options: IntersectionObserverInit = {}) {
        const observer = new IntersectionObserver(LazyIntersecting.observerCallback, options);
        document.querySelectorAll<HTMLImageElement | HTMLVideoElement>(selector).forEach((element) => {
            observer.observe(element);
        });
    }

    static observerCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLImageElement | HTMLVideoElement;
                target.src = target.dataset?.src || '';
                observer.unobserve(target);
            }
        });
    }
}
