import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from './pages/Index';
import { Navbar } from './components/layouts/Navbar';
import { About } from './pages/About';
import { Blog } from './pages/Blog';

export const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>

);

ReactDom.render(<Router />, document.querySelector('.root'));
