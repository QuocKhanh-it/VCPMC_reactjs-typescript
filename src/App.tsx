import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import PageRender from './PageRender';

function App() {
  return (
     <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={PageRender} exact />
                    <Route path="/:page" component={PageRender} exact />
                    <Route path="/:page/:control" component={PageRender} exact />
                    <Route path="/:page/:control/:tag" component={PageRender} exact />
                    <Route path="/:page/:control/:tag/:id" component={PageRender} exact />
                    <Route path="/:page/:control/:tag/:id/:action" component={PageRender} exact />
                </Switch>
            </BrowserRouter>
        </>
  );
}

export default App;
