import React from 'react';
import store from 'reducers/index'
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                Hello App
            </div>
        </Provider>
    );
}

export default App;