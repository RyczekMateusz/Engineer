import '../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import Page from './Page'
import { Provider } from 'react-redux';
import store from '../store/Store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <aside>
            <Navigation />
          </aside>
          <section>
            <Page />
          </section>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
