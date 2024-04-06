    const mql = window.matchMedia("(orientation: portrait)");
    mql.addEventListener('change', function(e) {
        console.log(e);
        if (e.matches) {
            console.log('orientation:portrait');
        }
        else {
            console.log('orientation:landscape');
        }
    });
