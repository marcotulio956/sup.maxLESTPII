import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>SupMax Gym</title>
                <meta name="description" content="Descrição da academia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout