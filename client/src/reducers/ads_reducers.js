export default function(state={},action){
    switch(action.type){
        case 'GET_ADS':
            return { ...state,list:action.payload }
        case 'GET_GARDENING':
            return {...state,gardening:action.payload}
        case 'GET_BABY':
            return {...state,baby:action.payload}
        case 'GET_DIY':
                return {...state,diy:action.payload}
        case 'GET_LESSONS':
                return {...state,lessons:action.payload}
        case 'GET_HOUSEWORK':
                    return {...state,housework:action.payload}
        case 'GET_ESTHETICIAN':
                return {...state,esthetician:action.payload}
         case 'GET_DETAILSAD':
                 return {...state,adDetails:action.payload.adDetails,
                    userDetails:action.payload.userDetails}
        case 'CLEAR_ADS':
                    return {
                        ...state,
                        adDetails:action.payload.adDetails
                       
                    }
        case 'ADD_AD':
                 return {
                            ...state,
                            ad:action.payload.ad
                        }
        case 'GET_USERADS':
                return {
                    ...state,login:action.payload.login,
                   userads:action.payload.userads
                } 
        case 'CLEAR_USERADS':
                 return {
                        ...state,
                        userads:action.payload.userads
                       
                 }
                        
         case 'GET_AD_ID':
            return {
                         ...state,
                       upDate:action.payload } 
         case 'UPDATE_AD':
             return {
                            ...state,
                            updateAd:action.payload.success,
                            ade:action.payload.doc
                        }
        
        default:
            return state;
    }
}