import * as types from './actionType';
const initialState={
    users:{},
    user:{},
    loading:true,
};
const postReducer =(state =initialState , action: any ) =>{
    switch(action.type){
        case types.GET_POST:
            return{...state,
                users: action.payload,
                loading:false
            };
        default:
            return state;
    }
}
export default postReducer;