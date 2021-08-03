import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home ';
import Login from './containers/Login';
import Add from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Activate from './containers/Activate';
import Layout from './hocs/Layout';
import Product from './containers/Product';
import AddProduct from './containers/AddProduct';

import { Provider } from 'react-redux';
import store from './store';


const App = () => (
    <div className="container">
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Add} />
                    <Route exact path='/product' component={Product} />
                    <Route exact path='/add-product' component={AddProduct} />

                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
    </div>
);

export default App;