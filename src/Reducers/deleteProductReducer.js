import {
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    CATCH_ERROR
  } from '../Constents/deleteProductConstent'
  
  const initialState = {
      loding : false,
      error:null,
      data:[]
  };
  
  export const getProductReducer = (state = initialState, action)=>{
       switch(action.type){
          case DELETE_PRODUCT_REQUEST:
              return{
                  ...state,
                  loding:true
              };
          case DELETE_PRODUCT_SUCCESS:
              return{
                  ...state,
                  loding:false,
                  data : action.payload
              };
          case DELETE_PRODUCT_FAIL:
              return{
                  ...state,
                  loding:false,
                  error: action.payload
              }
          case CATCH_ERROR:
              return{
                  ...state,
                  error:null
              }
            default : return state  
       }
  };