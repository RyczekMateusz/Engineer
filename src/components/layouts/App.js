import '../styles/App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
