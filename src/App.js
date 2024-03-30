// import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Features from './components/Features';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Posts />
          </Route>
          <Route  path='/createPost'>
            <CreatePost />
          </Route>
          <Route  path='/features'>
            <Features />
          </Route>
        </Switch>
      </Router >
      <Footer />
    </>
  );
}

export default App;
