import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './Start';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Start />, document.getElementById('root'));
registerServiceWorker();
