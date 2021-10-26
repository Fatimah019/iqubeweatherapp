import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction<object | number | string | undefined>('api/callBegan');
export const apiCallSuccess = createAction<object | number | string | undefined>('api/callSuccess');
export const apiCallFailed = createAction<object | number | string | undefined>('api/callFailed');
