import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';
import Message from './components/Message.jsx';
import NotFound from './components/NotFound.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute  component={AboutPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/inbox' component={InboxPage}>
          <Route path='/inbox/messages/:messageId'component={Message} />
        </Route>
        <Route path='*' component={NotFound} />
      </Route>
    </Router>,
    document.getElementById('root')
);
