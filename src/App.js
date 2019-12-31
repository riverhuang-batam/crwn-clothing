import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import HomePages from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import './App.css';

export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePages}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    
                </Switch>
            </div>
        )
    }
}
