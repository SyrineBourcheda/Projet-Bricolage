export default function(state={},action){
    switch(action.type){
        case 'ADD_MESSAGE':
            return {...state,mesge:action.payload}
        case 'GET_REVIEWS':
                return {...state,reviews:action.payload}
        default:
            return state;
    }
}