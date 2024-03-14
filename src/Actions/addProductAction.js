import axios from 'axios';
import {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    CATCH_ERROR
} from '../Constents/addProductConstent';

export const addProductAction = (category, itemname, eta) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PRODUCT_REQUEST
        });

        const apiurl = 'https://restrobackend.onrender.com/api/v6/addProduct'; 
        const { data } = await axios.post(apiurl, { category, itemname, eta }); 
        console.log(data);

        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_FAIL,
            payload: error.message
        });
    }
};

export const clearError = () => async (dispatch) => {
    dispatch({
        type: CATCH_ERROR
    });
};
