import { apiCallBegan, apiCallFailed, apiCallSuccess } from '../actions';
import axios from 'axios';

type DispatchProps = {
    dispatch: (action: any) => void;
};
export const api =
    ({ dispatch }: DispatchProps) =>
    (next: any) =>
    async (action: any) => {
        if (action.type !== apiCallBegan.type) return next(action);

        next(action);
        const { url, method, onStart, onError, onSuccess } = action.payload;

        try {
            if (onStart) dispatch({ type: onStart });
            const response = await axios.request({
                baseURL: '',
                url,
                method,
            });

            if (onSuccess) return dispatch({ type: onSuccess, payload: response.data });
            dispatch({ type: apiCallSuccess.type, payload: response.data });
        } catch (error: any) {
            console.log('logging errors..');
            console.log(error.response);

            if (onError) return dispatch({ type: onError, payload: error.response });

            dispatch({ type: apiCallFailed.type, payload: error.response });
        }
    };
