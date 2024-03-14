import {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    CATCH_ERROR
  } from '../Constents/addProductConstent'
  const initialState = {
      loding : false,
      error:null,
      data:[]
  };
  
  export const getProductReducer = (state = initialState, action)=>{
       switch(action.type){
          case ADD_PRODUCT_REQUEST:
              return{
                  ...state,
                  loding:true
              };
          case ADD_PRODUCT_SUCCESS:
              return{
                  ...state,
                  loding:false,
                  data : action.payload
              };
          case ADD_PRODUCT_FAIL:
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