

import './App.css';


import {
  createBrowserRouter,
  RouterProvider
}
  from "react-router-dom"

import Home from "../src/Pages/Home"
import PerfilLDV from "../src/Pages/Perfil/LaDolceVitaTr"
import PerfilHS from './Pages/Perfil/HiokiSushi';
import { NomePerfil } from './components/PefilListCard/styles';

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
      ImgProd: '',
      NomePerfil: ''
    }} />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
