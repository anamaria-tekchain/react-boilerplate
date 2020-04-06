import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

import globalStyles from './styles/global.css';

ReactDOM.render(
    React.createElement(App),
    document.querySelector('.appContainer')
);

if (module.hot) {
    module.hot.accept();
}