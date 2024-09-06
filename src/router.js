import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./page/Home";


export default function AppRouter(){

    return(

<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>} />

</Routes>

</BrowserRouter>

)
}