import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import  ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); 
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      this.props.setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
      return (
        <div className="App">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/shop" component={ShopPage}></Route>
              <Route path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}></Route>
              <Route exact path='/checkout' component={CheckoutPage}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
