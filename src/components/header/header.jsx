import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from  '../../redux/user/user.selectors'
const Header = ({currentUser, hidden}) =>(
    <div className="header">
        <Link className="logo-container " to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            
            {
            currentUser ?
            <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
        <CartDropDown/>
        }
    </div>
)
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
//     currentUser: currentUser,
//     hidden: hidden
// })
// const mapStateToProps = state =>({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// })
export default connect(mapStateToProps)(Header);