export class Utils {
    /** Утилита для динамической генерации классов */
    static classnames(props: Record<string, string | boolean>): string {
        const arr: Array<string> = [];
        Object.entries(props).forEach(([key, value]) => {
            if (value) {
                arr.push(key);
            }
        });
        return arr.join(' ');
    }

    /** Утилита предотвращения повторной активации функции в результате быстрой серии событий */
    static debounce(func: Function, delay = 300) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(func.bind(context, args), delay);
            // timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }

    /** Утилита ограничивает скорость, с которой выполняется функция */
    static throttle(func: Function, delay = 300) {
        let wait = false;
        return (...args) => {
            if (wait) return;
            func(...args);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, delay);
        };
    }

    /** Утилита предотвратит выполнение, если метод уже вызван */
    static once(func: Function) {
        let ran = false;
        let result;
        return function () {
            if (ran) return result;
            result = func.apply(this, arguments);
            ran = true;
            return result;
        };
    }

    /**
     * Утилита используется для кэширования результатов данной функции,
     * чтобы предотвратить многократный вызов дорогостоящих в вычислительном отношении
     * подпрограмм с одними и теми же аргументами
     * */
    static memoize(func: Function) {
        const cache = new Map();
        return function () {
            const key = JSON.stringify(arguments);
            if (cache.has(key)) {
                return cache.get(key);
            }
            const result = func.apply(this, arguments);
            cache.set(key, result);
            return result;
        };
    }

    /** Утилита возвращает результат мгновенно вместо возврата другой функции по currying-цепочке */
    static partial(func: Function, ...args: Array<unknown>) {
        return function partiallyApplied(...moreArgs: Array<unknown>) {
            return func(...args, ...moreArgs);
        };
    }

    /** Утилита для объединения в цепочку нескольких функций и передачи выходных данных одной из них */
    static pipe(...funcs: Array<Function>) {
        return function piped(...args: Array<unknown>) {
            return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0];
        };
    }

    /** Утилита с функциональностью pipe, но функции будут применяться справа налево */
    static compose(...funcs: Array<Function>) {
        return function composed(...args: Array<unknown>) {
            return funcs.reduceRight((result, func) => [func.call(this, ...result)], args)[0];
        };
    }

    /** Утилита позволяет извлекать подмножество свойств из любого объекта, если эти свойства доступны */
    static pick(obj: Record<string, any>, keys: Array<string>) {
        return keys.reduce((acc, key) => {
            if (obj.hasOwnProperty(key)) {
                acc[key] = obj[key];
            }
            return acc;
        }, {});
    }

    /** Утилита является противоположностью функции Pick, поскольку она удалит определённые свойства из существующего объекта */
    static omit(obj: Record<string, any>, keys: Array<string>) {
        return Object.keys(obj)
            .filter((key) => !keys.includes(key))
            .reduce((acc, key) => {
                acc[key] = obj[key];
                return acc;
            }, {});
    }
}
