import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    CATCH_ERROR
  } from '../Constents/getProductConstent'

import axios from 'axios';

export const getProductAction = ()=>async(dispatch)=>{
      try{
        dispatch({
            type:GET_PRODUCT_REQUEST
        });
        const apiurl = "https://restrobackend.onrender.com/api/v6/getProduct"
        const {data} = await axios.get(apiurl)
         console.log(data)
        dispatch({
            type:GET_PRODUCT_SUCCESS,
            payload:data
        })
      }

      catch(error){
         dispatch({
            type :GET_PRODUCT_FAIL,
            payload : error.message
         })
      }
}

export const clearError = ()=> async(dispatch)=>{
     dispatch({
        type:CATCH_ERROR
     })
}
