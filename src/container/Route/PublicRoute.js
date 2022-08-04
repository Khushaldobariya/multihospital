import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utils/Index';

function PublicRoute({component: Component,restricted = false,...rest}) {
    return (
        <Route{...rest} render={props => (
            isLogin()&& restricted ?
            <Redirect to={"/About"} />
            :
            <Component {...props}/>
        )}
        />
    );
}

export default PublicRoute;
