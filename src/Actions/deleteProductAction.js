import {
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    CATCH_ERROR
  } from '../Constents/deleteProductConstent'

import axios from 'axios';

export const deleteProductAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_PRODUCT_REQUEST
        });

        const apiurl = `https://restrobackend.onrender.com/api/v6/deleteProduct/${id}`; 
        const { data } = await axios.delete(apiurl); 
        console.log(data);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.message
        });
    }
};

export const clearError = () => async (dispatch) => {
    dispatch({
        type: CATCH_ERROR
    });
};
