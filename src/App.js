import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './App.scss';
import Feature from './Component/Feature';
import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';

const App = () => {
  return (
    <>

      <Router>
        <Route path={'/'} component={Header} />
        <Switch>
          <Route path={'/'} exact={true} component={Home} />
          <Route path={'/feature'} exact={true} component={Feature} />
          <Route path={'/about'} exact={true} component={About} />
          <Route path={'/contact'} exact={true} component={Contact} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
