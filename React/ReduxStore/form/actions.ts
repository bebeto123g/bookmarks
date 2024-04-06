import { FormTypes, UserType } from './reducer';


// просто чтоб была валидация
const regexTextName = /[^А-Яа-яЁё\s]/gi;
const regexTextEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTextPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

export const setFormName = (name: string) => {
    name = name.trim().replace(regexTextName, '');
    const validate = name.length > 4;
    name = name.length > 100 ? name.slice(0, 100) : name;

    return { type: FormTypes.SET_USER_NAME, name, validate };
};

export const setFormEmail = (email: string) => {
    email = email.trim().toLowerCase();
    email = email.length > 50 ? email.slice(0, 50) : email;
    const validate = regexTextEmail.test(email);

    return { type: FormTypes.SET_USER_EMAIL, email, validate };
};

export const setFormPhone = (phone: string) => {
    phone = phone.trim().toLowerCase();
    phone = phone.length > 12 ? phone.slice(0, 12) : phone;
    const validate = regexTextPhone.test(phone);

    return { type: FormTypes.SET_USER_PHONE, phone, validate };
};

export const setFormUserType = (userType: UserType) => {
    return { type: FormTypes.SET_USER_TYPE, userType };
};

export const setFormIsAgree = (isAgree: boolean) => {
    return { type: FormTypes.SET_SERVICE_AGREE, isAgree };
};

export const setFormIsProcessingData = (isProcessingData: boolean) => {
    return { type: FormTypes.SET_PROCESSING_DATA, isProcessingData };
};

export const submitForm = () => {
    return { type: FormTypes.ACTION_FORM_SUBMIT };
};

export const clearForm = () => {
    return { type: FormTypes.CLEAR_FORM };
};

export default {
    setFormName,
    setFormEmail,
    setFormPhone,
    setFormUserType,
    setFormIsAgree,
    setFormIsProcessingData,
    submitForm,
    clearForm,
};
