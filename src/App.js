import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import  ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState ({
        currentUser : user,
      });
    });

  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
      return (
        <div className="App">
          <BrowserRouter>
            <Header currentUser={this.state.currentUser}></Header>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/shop" component={ShopPage}></Route>
              <Route path="/signin" component={SignInAndSignUpPage}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
