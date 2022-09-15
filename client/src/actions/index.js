import axios from 'axios';
export function getAds(
    limit = 20,
    start = 0,
    order = 'asc',
    list = ''
){
    
    const request = axios.get(`/api/ads?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                            if(list){
                                return [...list,...response.data]
                            } else {
                                return response.data
                            }
                        }
                    )

    return {
        type:'GET_ADS',
        payload:request
    }

}
export function getGardening(){
    const request = axios.get(`/api/Ad-Category?category=Gardening`)
                    .then(response => response.data);

    return {
        type:'GET_GARDENING',
        payload:request
    }
}

export function getBabySitter(){
    const request = axios.get(`/api/Ad-Category?category=Baby Sitter`)
                    .then(response => response.data);

    return {
        type:'GET_BABY',
        payload:request
    }
}

export function getDiy(){
    const request = axios.get(`/api/Ad-Category?category=Diy`)
                    .then(response => response.data);

    return {
        type:'GET_DIY',
        payload:request
    }
}
export function getPrivateLessons(){
    const request = axios.get(`/api/Ad-Category?category=Private lessons`)
                    .then(response => response.data);

    return {
        type:'GET_LESSONS',
        payload:request
    }
}
export function getHousework(){
    const request = axios.get(`/api/Ad-Category?category=Houseworker`)
                    .then(response => response.data);

    return {
        type:'GET_HOUSEWORK',
        payload:request
    }
}
export function getEsthetician(){
    const request = axios.get(`/api/Ad-Category?category=Esthetician`)
                    .then(response => response.data);

    return {
        type:'GET_ESTHETICIAN',
        payload:request
    }
}

export function getDetailsAd(id){
    const request = axios.get(`/api/getAd?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let adDetails = data;
            axios.get(`/api/User-Email?email=${adDetails.email}`)
            .then(({data})=>{
                let response = {
                    adDetails,
                    userDetails:data
                }
                dispatch({
                    type:'GET_DETAILSAD',
                    payload:response
                })
            })
        })
    }
}
export function getAdId(id){
    const request = axios.get(`/api/getAd?id=${id}`)
        .then(response => response.data);

    return {
        type:'GET_AD_ID',
        payload:request
    }
}           
                    

export function clearAds(){
    return {
        type:'CLEAR_ADS',
        payload:{
            adDetails:{}
        }
    }
}
export function addAD(ad){
    const request = axios.post('/api/ad',ad)
        .then(response => response.data);

    return {
        type:'ADD_AD',
        payload:request
    }
}
export function getUserAds(){
    const request = axios.get(`/api/auth`)

    return (dispatch)=>{
        request.then(({data})=>{
            let login = data;

            axios.get(`/api/Ad-Email?email=${login.email}`)
            .then(({data})=>{
                let response = {
                    login,
                    userads:data
                }

                dispatch({
                    type:'GET_USERADS',
                    payload:response
                })
            })
        })
    }
}
export function clearUserAds(){
    return {
        type:'CLEAR_USERADS',
        payload:{
            userads:{}
        }
    }
}
export function updateAd(data){
    const request = axios.post(`/api/ad_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_AD',
        payload:request
    }

}
///*******USER **********///
export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                .then(response => response.data)

    return {
        type:'USER_LOGIN',
        payload:request
    }
}
export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);

    return {
        type:'GET_USERS',
        payload:request
    }
}
export function addUser(user){
    const request = axios.post('/api/register',user)
        .then(response => response.data);

    return {
        type:'ADD_USER',
        payload:request
    }
}
//
export function getUser(){
    const request = axios.get(`/api/auth`)

    return (dispatch)=>{
        request.then(({data})=>{
            let login = data;

            axios.get(`/api/getUser?id=${login.id}`)
            .then(({data})=>{
                let response = {
                    login,
                    userProfile:data
                }

                dispatch({
                    type:'GET_USER',
                    payload:response
                })
            })
        })
    }
}

export function getSeller(id){
    const request = axios.get(`/api/getUser?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let sellerDetails = data;
            axios.get(`/api/Ad-Email?email=${sellerDetails.email}`)
            .then(({data})=>{
                let response = {
                    sellerDetails,
                    sellerAds:data
                }
                dispatch({
                    type:'GET_SELLER',
                    payload:response
                })
            })
        })
    }
}
export function clearSellerDetaills(){
    return {
        type:'CLEAR_SELLERDETAILS',
        payload:{
            sellerDetails:{}
        }
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }

}
export function updateUser(data){
    const request = axios.post(`/api/user_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_USER',
        payload:request
    }

}
//get user by email
export function getUserByEmail(mail){
    const request = axios.get(`/api/User-Email?email=mail`)
                    .then(response => response.data);

    return {
        type:'GET_USERBYEMAIL',
        payload:request
    }
}

////comment
export function addComment(comment){
    const request = axios.post('/api/AddComment',comment)
        .then(response => response.data);

    return {
        type:'ADD_COMMENT',
        payload:request
    }
}
// get comments
export function getAdComments(id){
    const request = axios.get(`/api/AdComment?adId=${id}`)
        .then(response => response.data);

    return {
        type:'GET_AD_COMMENTS',
        payload:request
    }
}   
export function clearComments(){
    return {
        type:'CLEAR_COMMENTS',
        payload:{
            adComment:{}
        }
    }
}
// message
//post message
export function addMsg(message){
    const request = axios.post('/api/AddMsg',message)
        .then(response => response.data);
    
    return {
        type:'ADD_MESSAGE',
        payload:request
    }
}
//get message
export function getReviews(
    limit = 3,
    start = 0,
    order = 'asc',
    list = ''
){
    
    const request = axios.get(`/api/message?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                            if(list){
                                return [...list,...response.data]
                            } else {
                                return response.data
                            }
                        }
                    )

    return {
        type:'GET_REVIEWS',
        payload:request
    }

}