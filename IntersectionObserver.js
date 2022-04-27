/**
 * картинки с data-src
 * */

const options = {
    rootMargin: '50px 0 0', // пересечение срабатываия
};

const callback = (entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // уже в поле видимости
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
};

const imageObserver = new IntersectionObserver(callback, options);

document.querySelectorAll('[data-src]').forEach((elemet) => {
    imageObserver.observe(elemet);
});
