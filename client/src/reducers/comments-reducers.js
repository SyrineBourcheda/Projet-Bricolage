export default function(state={},action){
    switch(action.type){
        case 'ADD_COMMENT':
            return {...state,commentaire:action.payload}
        case 'GET_AD_COMMENTS':
                return {...state,adComment:action.payload}
        case 'CLEAR_COMMENTS':
                return {...state,adComment:action.payload}
        default:
            return state;
    }
}