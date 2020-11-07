import NavBar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
function App() {
  return (
   <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
   </>
  );
}

export default App;
