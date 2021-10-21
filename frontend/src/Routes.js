import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LoginPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { SignUpPage } from './pages/SignUpPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { AddItemPage } from './pages/AddItemPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <UserProfilePage />
                </Route>
                <Route path="/login">
                    <LogInPage/>
                </Route>
                <Route path="/signup">
                    <SignUpPage/>
                </Route>
                <Route path="/addItem">
                    <AddItemPage/>
                </Route>
                
            </Switch>
        </Router>
    );
}