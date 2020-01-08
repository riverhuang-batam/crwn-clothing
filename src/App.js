import React, {Component} from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom'
import HomePages from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import  { setCurrentUser } from './redux/user/user.actions'
class App extends Component {
    // constructor(){
    //     super();
    //     this.state= {
    //         currentUser: null
    //     }
    // }

    unsubscribeFromAuth=null;
    componentDidMount(){
        const {setCurrentUser} = this.props;
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
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePages}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndSignUpPage/>)} />
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = ({ user }) =>({
    setCurrentUser: user.currentUser
})

const  mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)