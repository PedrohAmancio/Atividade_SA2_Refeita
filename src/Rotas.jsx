import { Routes, Route, Router } from "react-router-dom";
// isso funciona nessa verção? import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";

const Rotas = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas()