import {BrowserRouter, Route, Routes} from "react-router";
import { Home, Login } from "./pages";
import App from "./App";
import Register from "./pages/Register";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}