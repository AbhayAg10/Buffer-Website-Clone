import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}