/**
 * Данный скрипт полезен, нужен в случаях, когда в rest приходит ответ со строкой, где внутри строки есть скрипты
 * Этот костыль помогает исполнять эти скрипты, но вроде как работает только один раз, далее сыпятся ошибки из-за
 * конфликта глобальных переменных
 * */

function render(template) {
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
