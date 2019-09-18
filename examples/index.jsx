import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Examples from './Examples';

if (typeof window !== 'undefined') {
  ReactDOM.render(<Examples />, window.document.getElementById('root'));
}
