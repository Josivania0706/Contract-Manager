import { Route, Routes } from "react-router-dom"
import { Home, Login } from "../pages"

export const RoutesPages = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}