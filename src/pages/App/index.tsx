import React from 'react';
import store from 'reducers/index';
import {Provider} from 'react-redux';
import Navigation from 'pages/Navigation';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                Hello App
                <Navigation/>
            </div>
        </Provider>
    );
}

export default App;
