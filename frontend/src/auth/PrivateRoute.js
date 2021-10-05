//If a user isn't logged in, it's going to direct them to the login page

import { Redirect, Route } from 'react-router-dom';
import { useUser } from './useUser';


export const PrivateRoute = props => {
    const user = useUser();

    if (!user){
        return <Redirect to="/login"/>
    }

    return <Route {...props} />
    
}