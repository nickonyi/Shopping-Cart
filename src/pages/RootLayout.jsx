import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Cart from "../components/Cart"
import Footer from "../components/Footer"


export default function RootLayout(){
    return (
       <>
       <Header/>
       <Outlet />
       <Cart />
       <Footer />
       </>
    )
}