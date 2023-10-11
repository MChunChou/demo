import React from 'react';

import App from 'pages/App';

export default [{
    path: '/demo',
    element: <App/>,
    children: [{
      path: 'buttons',
      element: <div>buttons</div>,
    }],
}];
