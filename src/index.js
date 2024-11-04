import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import NavBar  from './Components/Home/Navbar';
import Presentacion from './Components/Home/Presentacion';
import Funcionalidades from './Components/Home/Funcionalidades';
import Demo from './Components/Home/Demo';
import Descuentos from './Components/Home/Descuento';
import Footer from './Components/Home/Footer';
import Funcionamiento from './Components/Home/Funcionamiento';
import Casos from './Components/Home/Casos';
import Brindamos from './Components/Home/Brindamos';
import Resenas from './Components/Home/Resenas';
import Planes from './Components/Home/Planes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
