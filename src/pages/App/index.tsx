import React from 'react';
import store from 'reducers/index';
import {Provider} from 'react-redux';

import Navigation from 'pages/Navigation';
import Content from 'pages/Content';
import {Outlet} from 'react-router-dom';
import Router from 'router';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="content vh100 vw100">
          <Outlet />
        </div>
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;
