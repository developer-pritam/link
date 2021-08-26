import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          {() => {
            window.open("https://google.com", '_top')
            return (
              <></>
            )
          }}
        </Route>
        <Route path="/:keyID" >
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

