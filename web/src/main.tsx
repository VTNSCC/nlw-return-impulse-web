import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App' //tem que colocar chaves pra n precisar usar o export default
//Evita de esquecer alterar o nome das coisas

import './global.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
