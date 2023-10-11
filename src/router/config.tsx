import React from 'react';
import {Outlet} from 'react-router-dom';
import {RouteSetting} from 'modules';
import App from 'pages/App';
import Button from 'pages/Button';


export const config: RouteSetting[] = [{
  path: '/demo',
  label: 'demo',
  isParentHide: true,
  element: <App/>,
  children: [{
    path: 'components',
    label: 'Components',
    element: <Outlet/>,
    children: [{
      path: 'button',
      label: 'Button',
      element: <Button/>,
    }],
  }, {
    path: 'pages',
    label: 'Pages',
    element: <div>Page</div>,
    children: [{
      path: 'news',
      label: 'News',
      element: <div>Nes</div>,
    }],
  }],
}];

export default config;
