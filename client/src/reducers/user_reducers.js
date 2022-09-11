export default function(state={},action){
    switch(action.type){
        case 'USER_LOGIN':
            return {...state,login:action.payload}
        case 'ADD_USER':
            return {...state,register:action.payload}
         case 'GET_USER':
             return {...state,login:action.payload.login,
                userProfile:action.payload.userProfile}
        case 'GET_USERS':
                    return {...state,users:action.payload}
         case 'ADD_USER':
                return {...state,register:action.payload}
        case 'GET_SELLER':
                return {...state,sellerDetails:action.payload.sellerDetails,
                       sellerAds:action.payload.sellerAds}
        case 'CLEAR_SELLERDETAILS':
                        return {...state,
                            sellerDetails:action.payload.sellerDetails
                               }
        case 'CLEAR_SELLERADS':
                     return {...state,
                                    sellerAds:action.payload.sellerAds}
        case 'USER_AUTH':
                    return {...state,login:action.payload}
        case 'UPDATE_USER':
                return { ...state,updateUser:action.payload.success,
                                       userr:action.payload.doc}
                                   
        default:
            return state;
    }
}