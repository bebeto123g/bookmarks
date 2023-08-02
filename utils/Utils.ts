const INTL_DATE_FORMAT_SETTINGS = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
} as const;

const INTL_TIME_FORMAT_SETTINGS = {
    hour: 'numeric',
    minute: 'numeric',
} as const;

type TClassnamesProp = Record<string, string | boolean>;

export class Utils {
    /** Утилита для динамической генерации классов */
    static classnames(props: TClassnamesProp): string {
        const arr: Array<string> = [];
        Object.entries(props).forEach(([key, value]) => {
            if (value) {
                arr.push(key);
            }
        });
        return arr.join(' ');
    }

    /** Утилита для динамической генерации классов */
    static classnames2(props: TClassnamesProp | Array<string | TClassnamesProp>): string {
        function entriesToString(obj: TClassnamesProp): string {
            return Object.entries(obj).reduce<string>(
                (acc, [key, value]) => (value ? `${key} ${acc}` : acc).trim(),
                ''
            );
        }

        if (!Array.isArray(props)) {
            return entriesToString(props);
        }

        return props.reduce<string>((acc, item) => {
            const className: string = typeof item === 'string' ? item : entriesToString(item);
            return (className ? `${className} ${acc}` : acc).trim();
        }, '');
    }

    /** Утилита форматирования дат */
    static formatDate(date: Date, settings: { date?: boolean; time?: boolean } = { date: true }): string {
        return new Intl.DateTimeFormat('ru', {
            ...(settings.date ? INTL_DATE_FORMAT_SETTINGS : null),
            ...(settings.time ? INTL_TIME_FORMAT_SETTINGS : null),
        }).format(date);
    }

    /** Утилита предотвращения повторной активации функции в результате быстрой серии событий */
    static debounce(callback: Function, delay = 300) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(callback.bind(context, args), delay);
            // timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }

    /** Утилита ограничивает скорость, с которой выполняется функция */
    static throttle(callback: Function, delay = 300) {
        let wait = false;
        return (...args) => {
            if (wait) return;
            callback(...args);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, delay);
        };
    }

    /** Утилита предотвратит выполнение, если метод уже вызван */
    static once(callback: Function) {
        let ran = false;
        let result;
        return function () {
            if (ran) return result;
            result = callback.apply(this, arguments);
            ran = true;
            return result;
        };
    }

    /**
     * Утилита используется для кэширования результатов данной функции,
     * чтобы предотвратить многократный вызов дорогостоящих в вычислительном отношении
     * подпрограмм с одними и теми же аргументами
     * */
    static memoize(callback: Function) {
        const cache = new Map();
        return function () {
            const key = JSON.stringify(arguments);
            if (cache.has(key)) {
                return cache.get(key);
            }
            const result = callback.apply(this, arguments);
            cache.set(key, result);
            return result;
        };
    }

    /** Утилита возвращает результат мгновенно вместо возврата другой функции по currying-цепочке */
    static partial(callback: Function, ...args: Array<unknown>) {
        return function partiallyApplied(...moreArgs: Array<unknown>) {
            return callback(...args, ...moreArgs);
        };
    }

    /** Утилита для объединения в цепочку нескольких функций и передачи выходных данных одной из них */
    static pipe(...callbacks: Array<Function>) {
        return function piped(...args: Array<unknown>) {
            return callbacks.reduce((result, callback) => [callback.call(this, ...result)], args)[0];
        };
    }

    /** Утилита с функциональностью pipe, но функции будут применяться справа налево */
    static compose(...callbacks: Array<Function>) {
        return function composed(...args: Array<unknown>) {
            return callbacks.reduceRight((result, callback) => [callback.call(this, ...result)], args)[0];
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
