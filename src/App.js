import Redirectt from './Redirectt'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {



  return (<BrowserRouter>
    <Switch>
      <Route path="/:keyID" >
        <Redirectt />
      </Route>
    </Switch>
  </BrowserRouter>

  );
}


export default App;
