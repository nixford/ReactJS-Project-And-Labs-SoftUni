import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

// Action Creators
// It returns data from back-end(DB), therefore it is neccesery async/await
export const getProperties = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProperties();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProperty = (property) => async (dispatch) => {
  try {
    const { data } = await api.createProperty(property);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProperty = (id, property) => async (dispatch) => {
  try {
    const { data } = await api.updateProperty(id, property);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeProperty = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProperty(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProperty = (id) => async (dispatch) => {
  try {
    await api.deleteProperty(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
