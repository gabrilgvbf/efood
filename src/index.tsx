import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1 - configurando o Router

import {
  createBrowserRouter,
  RouterProvider
}
  from "react-router-dom"

import Home from "../src/Pages/Home"
import PerfilLDV from "../src/Pages/Perfil/LaDolceVitaTr"
import PerfilHS from './Pages/Perfil/HiokiSushi';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "PerfilLDV",
    element: <PerfilLDV produto={{
      id: 0,
      NomeProduto: '',
      TexApresent: '',
      ImgProd: ''
    }} />
  },
  {
    path: "PerfilHS",
    element: <PerfilHS produto={{
      id: 0,
      NomeProduto: '',
      TexApresent: '',
      ImgProd: ''
    }} />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
