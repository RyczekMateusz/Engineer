import '../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import Page from './Page'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <aside>
          <Navigation />
        </aside>
        <section>
          <Page />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
