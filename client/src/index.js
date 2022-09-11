import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory as history} from 'history'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)
ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
       
            <Routes history={history} onUpdate={() => window.scrollTo(0, 0)}/>
      
        </BrowserRouter>
        
    </Provider>
   
   ,document.getElementById('root'));
