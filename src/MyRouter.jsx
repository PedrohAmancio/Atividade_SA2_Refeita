import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './src/pages/Home';
import Mecanica from './src/pages/Mecanica';
import DDS from './src/pages/DDS'
import PinturaIndustrialDetalhamento from './src/pages/Eletrica'
import HistoriaSENAI from "./src/pages/HistoriaSENAI";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path: 'Mecanica',
                element: <Mecanica/>
            },
            {
                path: 'DDS',
                element: <DDS/>
            },
            {
                path: 'Eletrica',
                element: <PinturaIndustrialDetalhamento/>
            },
            {
                path: 'Historia',
                element: <HistoriaSENAI/>
            }
        ]
    }
]);