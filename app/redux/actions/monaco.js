/* eslint-disable import/prefer-default-export */
import { MONACO_INSTANCE_UPDATE } from '../actionTypes';

// Action creators
export const updateMonacoInstance = payload => ({
  type: MONACO_INSTANCE_UPDATE,
  payload
});
