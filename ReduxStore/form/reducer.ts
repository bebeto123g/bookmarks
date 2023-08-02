import { GetActionsType } from '../index';
import actions from './actions';

export type UserType = 'individual' | 'entity'

type UserActionsType = GetActionsType<typeof actions>;
type FormStateType = typeof initState;

const initState = {
    name: {
        value: '',
        validate: false,
    },
    email: {
        value: '',
        validate: false,
    },
    phone: {
        value: '',
        validate: false,
    },
    userType: 'individual' as UserType,
    isAgree: true,
    isProcessingData: false,
    isSubmit: false,
    isSuccess: false,
};

export const FormTypes = {
    SET_USER_NAME: 'SET_USER_NAME',
    SET_USER_EMAIL: 'SET_USER_EMAIL',
    SET_USER_PHONE: 'SET_USER_PHONE',
    SET_USER_TYPE: 'SET_USER_TYPE',
    SET_SERVICE_AGREE: 'SET_SERVICE_AGREE',
    SET_PROCESSING_DATA: 'SET_PROCESSING_DATA',
    ACTION_FORM_SUBMIT: 'SET_USER_SUBMIT',
    CLEAR_FORM: 'CLEAR_FORM',
} as const;

const validFormSubmit = ({ isAgree, isProcessingData, name, email, phone }: FormStateType): boolean => {
    return isAgree && isProcessingData && name.validate && email.validate && phone.validate;
};

export function formReducer(state = initState, action: UserActionsType): FormStateType {
    switch (action.type) {
        case FormTypes.SET_USER_NAME: {
            const newState = { ...state, name: { value: action.name, validate: action.validate } };
            return { ...newState, isSubmit: validFormSubmit(newState) };
        }

        case FormTypes.SET_USER_EMAIL: {
            const newState = { ...state, email: { value: action.email, validate: action.validate } };
            return { ...newState, isSubmit: validFormSubmit(newState) };
        }

        case FormTypes.SET_USER_PHONE: {
            const newState = { ...state, phone: { value: action.phone, validate: action.validate } };
            return { ...newState, isSubmit: validFormSubmit(newState) };
        }

        case FormTypes.SET_USER_TYPE: {
            return { ...state, userType: action.userType };
        }

        case FormTypes.SET_SERVICE_AGREE: {
            const newState = { ...state, isAgree: action.isAgree };
            return { ...newState, isSubmit: validFormSubmit(newState) };
        }

        case FormTypes.SET_PROCESSING_DATA: {
            const newState = { ...state, isProcessingData: action.isProcessingData };
            return { ...newState, isSubmit: validFormSubmit(newState) };
        }

        case FormTypes.ACTION_FORM_SUBMIT: {
            console.log(state);
            return { ...state, isSuccess: true };
        }

        case FormTypes.CLEAR_FORM: {
            return { ...initState };
        }

        default:
            return state;
    }
}
