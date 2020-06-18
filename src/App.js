import React from 'react';

import Main from './components/MainComponent';

import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import  {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
            <div > 
              <Main/>
            </div>
      </BrowserRouter>
    </Provider>
    ); 
};

export default App;
