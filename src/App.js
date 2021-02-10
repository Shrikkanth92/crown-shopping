import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  return (
    <div>
        "Hats Page";
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/hats" component={HatsPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
