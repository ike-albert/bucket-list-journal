import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LoginPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { SignUpPage } from './pages/SignUpPage';
import { UserProfilePage } from './pages/UserProfilePage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserProfilePage />
                </PrivateRoute>
                <Route path="/login">
                    <LogInPage/>
                </Route>
                <Route path="/signup">
                    <SignUpPage/>
                </Route>
            </Switch>
        </Router>
    );
}