import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Welcome} />
      <Route path='/question' exact component={Question} />
      <Route path='/results' exact component={Results} />      
    </Router>
  );
}

export default App;
