import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProviderContext } from "./Mycontext/Context";

import HomePage from "./page/Home";


export default function AppRouter(){

    return(

<BrowserRouter>

<ProviderContext>
<Routes>

<Route path="/" element={<HomePage/>} />

</Routes>
</ProviderContext>

</BrowserRouter>

)
}