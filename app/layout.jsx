import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => (
    <html>
        <body>
            <main>
                <Navbar/>
                {children}
                <Footer/>    
            </main>
        </body>
    </html>
)

export default Layout;