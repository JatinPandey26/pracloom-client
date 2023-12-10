import './App.css'
import './baseStyle.scss'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AnimatedCursor from 'react-animated-cursor'
import SignUp from "./pages/SignUp.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Login from "./pages/Login.jsx";
import ClientRegister from "./pages/ClientRegister.jsx";
import ProtectedRoute from "./utils/Protected.jsx";
import {Toaster} from "react-hot-toast";
import NotForAuthenticatedRoute from "./utils/NotForAuthenticatedRoute.jsx";
import {useQuery} from "react-query";
import {AxiosInstance} from "./utils/AxiosInstance.js";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {login, setUser} from "./redux/Reducers/UserReducer.js";
import {getBearerToken} from "./utils/data.js";
import PlatFormNavbar, {PlatformSidebar} from "./components/PlatFormLayOut.jsx";
import BecomeAClient from "./components/BecomeAClient.jsx";
import './styles/platform-layout.scss'
import Inventory from "./pages/Inventory.jsx";


function App() {

    const dispatch = useDispatch()

    async function fetchUser() {
        return await AxiosInstance.get('/auth/profile')
    }

    const {data} = useQuery('getUser', fetchUser)
    console.log(data)
    useEffect(() => {
        if (data) {
            dispatch(login(getBearerToken()))
            dispatch(setUser(data?.data))
        }
    }, [data]);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"}>
                <Route path={""} element={<Root/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"signup"} element={<NotForAuthenticatedRoute Component={SignUp}/>}/>
                    <Route path={"login"} element={<NotForAuthenticatedRoute Component={Login}/>}/>
                    <Route path={"client-register"} element={<ProtectedRoute Component={ClientRegister}/>}/>
                    <Route path={"*"} element={<h1>404</h1>}/>
                </Route>
                <Route path={"platform"} element={<ProtectedRoute Component={PlatformRoot}/>}>
                    <Route index element={<h1>Platform</h1>}/>
                    <Route path={"parallelism"} element={<ProtectedRoute Component={BecomeAClient}/>}/>
                    <Route path={"inventory"} element={<ProtectedRoute Component={Inventory}/>}/>

                    <Route path={"*"} element={<h1>404</h1>}/>
                </Route>
            </Route>
        )
    )

    return (
        <div className={"base-wrapper"}>
            {/*<AnimatedCursor/>*/}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <RouterProvider router={router}/>
                <Toaster position="bottom-left"/>
            </LocalizationProvider>
        </div>
    )
}

const Root = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

const PlatformRoot = () => {
    return (
        <div className={'platform-wrapper'}>
            <PlatFormNavbar/>
            <div style={{display: "flex", height: '94vh', width: '100vw'}}>
                <PlatformSidebar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default App
