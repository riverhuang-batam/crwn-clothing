import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import HomePages from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

export default class App extends Component {
    constructor(){
        super();
        this.state= {
            currentUser: null
        }
    }

    unsubscribeFromAuth=null;
    componentDidMount(){
        this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser:{
                            id:snapShot.id,
                            ...snapShot.data()
                        }
                    });
                    console.log(this.state)
                })
            }
            this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePages}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        )
    }
}
