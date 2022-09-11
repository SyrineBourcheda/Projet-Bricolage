import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './Admin/login/login'
import AnouncementPage from './components/announcementPage/anouncemmentPage';
import AnounceDetails from './components/details/details';
import UserProfile from './components/profile/profile';
import Register from './Admin/register/register';
import Form from './components/announce-form/annouce-form';
import SellerProfile from './components/sellerProfile/sellerProfile';
import Logout from './Admin/logout';
import Auth from './hoc/auth';
import FormUpdate from './components/announce-update/annouce-update'
import Delete from './components/profile/delete';
import InfoUpdate from './Admin/info-update/info-update';
const Routes = () => {
    return (
        <Switch >
             <Route path="/" exact component={Auth(Home,null)}/>
             <Route path="/home" exact component={Home}/>
             <Route path='/form' exact import component={Auth(Form,true)}/>
             <Route path='/form/:id' exact import component={Auth(FormUpdate,true)}/>
             <Route path='/userUpdate' exact import component={Auth(InfoUpdate,true)}/>
             <Route path='/anounce' exact import component={Auth(AnouncementPage,true)}/>
             <Route path='/anouncePage' exact import component={AnouncementPage}/>
             <Route path='/Profile' exact import component={Auth(UserProfile,true)}/>
             <Route path='/Seller/:id' exact import component={Auth(SellerProfile,true)}/>
             <Route path='/details/:id' exact import component={Auth(AnounceDetails,true)}/>
             <Route path="/login" exact component={Auth(Login,false)}/>
             <Route path="/delete/:id" exact component={Auth(Delete,true)}/>
             <Route path='/register' exact import component={Auth(Register,false)}/>
             <Route path='/logout' exact import component={Auth(Logout,true)}/>
             

             
             
             
        </Switch>
    )
}
export default Routes;