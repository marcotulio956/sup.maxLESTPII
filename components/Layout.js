import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout