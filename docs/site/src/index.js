import {AppContainer} from 'react-hot-loader';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RedBox from 'redbox-react';
import React from 'react';
import ReactPerf from 'react-addons-perf';
import ReactDOM from 'react-dom';
import App from './components/App';
// import a11y from 'react-a11y';

// if (process.env.NODE_ENV !== 'production') {
//   a11y(React, {includeSrcNode: true});
// }


window.Perf = ReactPerf;


const docs = (state = {dark: false}, action) => {
  if (action.type === 'TOGGLE_THEME_SHADE') {
    return {...state, dark: !state.dark};
  }
  return state;
};

export const store = createStore(docs);

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer errorReporter={RedBox}>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer errorReporter={RedBox}>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}