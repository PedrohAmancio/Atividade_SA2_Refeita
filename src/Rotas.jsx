import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './src/pages/Home';
import DetalhesDDs from './src/pages/DetalhesDDs';
import DetalhesEletric from "./src/pages/DetalhesEletric";
import DetalhesMec from "./src/pages/DetalhesMec";
import Historia from "./src/pages/Historia";
import router from "./Rotas";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path: 'Desenvolvimento-de-sistemas',
                element: <DetalhesDDs/>
            },
            {
                path: 'Eletronica-e-eletrotecnica',
                element: <DetalhesEletric/>
            },
            {
                path: 'Mecanica',
                element: <DetalhesMec/>
            },
            {
                path: 'Historia-do-SENAI',
                element: <Historia/>
            }
        ]
    }
]);