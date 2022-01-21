    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    document.querySelectorAll('[data-js-role="lazy"]').forEach((element) => {
        observer.observe(element);
    });

    function observerCallback(entries, observer) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            if (entry.target.dataset.src) {
                entry.target.src = `${entry.target.dataset.src}`;
            }
            observer.unobserve(entry.target);
        });
    }
