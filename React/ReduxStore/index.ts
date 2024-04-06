import { combineReducers,  createStore } from 'redux';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import { formReducer as form } from './form/reducer';

const rootReducer = combineReducers({ form });

export type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;
export type SomeType<T> = T extends { [key: string]: infer U } ? U : never;
export type GetActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<SomeType<T>>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const store = createStore(rootReducer);
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
