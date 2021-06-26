export const initialState = {
    isloged:null,
    details: ''
};
export const reducer = (state, action) => {
   // console.log(action.payload)
    console.log(action.value)
    switch (action.type) {
        case 'USER':
            console.log(action)
            return {
                ...state,
                isloged: action.payload,
                details:action.value
            };
        default: return state   
    }
    return state;
}