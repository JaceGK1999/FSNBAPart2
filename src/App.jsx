import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Holder from './views/Holder';
import Main from './views/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/char">
            <Main />
          </Route>
          <Route>
            <Holder path="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
