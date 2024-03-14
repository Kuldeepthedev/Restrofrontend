import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  CATCH_ERROR
} from '../Constents/getProductConstent'

const initialState = {
    loding : false,
    error:null,
    data:[]
};

export const getProductReducer = (state = initialState, action)=>{
     switch(action.type){
        case GET_PRODUCT_REQUEST:
            return{
                ...state,
                loding:true
            };
        case GET_PRODUCT_SUCCESS:
            return{
                ...state,
                loding:false,
                data : action.payload
            };
        case GET_PRODUCT_FAIL:
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