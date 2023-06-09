import { action } from 'typesafe-actions';
import { Action } from 'redux';

import { FillsTypes, Form } from './types';

// Add User Location
export const addUserLocation = (latitude: number, longitude: number): Action =>
  action(FillsTypes.ADD_USER_LOCATION, { latitude, longitude });

// Get Forms
export const getFormsRequest = (): Action =>
  action(FillsTypes.GET_FORMS_REQUEST);

export const getFormsSuccess = (data: Form[]): Action =>
  action(FillsTypes.GET_FORMS_SUCCESS, { data });

export const getFormsFailure = (): Action =>
  action(FillsTypes.GET_FORMS_FAILURE);

// Add Fill
export const addFillRequest = (data: FormData, formId: string): Action =>
  action(FillsTypes.ADD_FILL_REQUEST, { data, formId });

export const addFillSuccess = (msg: string): Action =>
  action(FillsTypes.ADD_FILL_SUCCESS, { msg });

export const addFillFailure = (): Action => action(FillsTypes.ADD_FILL_FAILURE);

export const setSuccessFalse = (): Action =>
  action(FillsTypes.SET_SUCCESS_FALSE);
