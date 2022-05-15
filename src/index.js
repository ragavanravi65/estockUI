import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { CompanyContextProvider } from './store/CompanyContext'; 
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <CompanyContextProvider>
    <App />
    </CompanyContextProvider>
);
