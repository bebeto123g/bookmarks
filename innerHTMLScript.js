    render(template) {
        this.body.innerHTML = template;
        const scripts = this.body.querySelectorAll('script');
        if (scripts.length) {
            scripts.forEach((oldScript) => {
                const script = document.createElement('script');
                [...oldScript.attributes].forEach((attr) => script.setAttribute(attr.name, attr.value));
                script.appendChild(document.createTextNode(oldScript.innerHTML));
                oldScript.parentNode.replaceChild(script, oldScript);
            });
        }
    }
