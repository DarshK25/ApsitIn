import PropTypes from "prop-types"; 
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen bg-base-100'>
            <Navbar />
            <main className='max-w-7xl mx-auto px-4 py-6'>{children}</main>
        </div> 
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired, //This is required because Validating children as a node (React elements)
};
//otherwise children are undefined
export default Layout;
