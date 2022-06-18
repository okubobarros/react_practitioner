import Footer from './Footer/index';
import Navbar from './Navbar/index';


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;