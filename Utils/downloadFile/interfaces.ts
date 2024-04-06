// @ts-ignore
import { AxiosRequestConfig } from 'axios';

/**
 * Параметры запросы
 */
export interface IParams {
    [key: string]: string | number | boolean;
}

/**
 * Дополнительные конфиграции Axios
 */
// @ts-ignore
export interface IAxiosRequestConfig extends Omit<AxiosRequestConfig, 'config'> {}

/**
 * @prop source Источник данных
 * @prop [params] Параметры запросы
 * @prop [config] Дополнительные конфиграции Axios
 */
export interface IRequestProperty {
    sourceURL: string;
    params?: IParams;
    config?: IAxiosRequestConfig;
}
