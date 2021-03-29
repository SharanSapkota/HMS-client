import logo from './logo.svg';
import './App.css';
import { BrowserView, MobileView } from "react-device-detect";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from './components/pages/Header/Header'
import Breakfast from './components/pages/Header/categories/Breakfast/Breakfast'
import Lunch from './components/pages/Header/categories/Lunch/Lunch';
import Dinner from './components/pages/Header/categories/Dinner/Dinner';
import Drinks from './components/pages/Header/categories/Drinks/Drinks';


function App() {

  return (
    <>
    <MobileView >
    <>
    <Router>
    <Switch>
      <Route exact path='/' component={Header} />
      <Route exact path='/breakfast' component={Breakfast} />
      
      
       <Route exact path='/lunch' component={Lunch} />
      <Route exact path='/dinner' component={Dinner} />
      <Route exact path='/drinks' component={Drinks} />
      </Switch>
      </Router>
    </>
    </MobileView>
    <BrowserView>This is browser view</BrowserView>
    </>
  );
}

export default App;
