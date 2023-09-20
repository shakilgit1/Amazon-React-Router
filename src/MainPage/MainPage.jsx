
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import './m.css'

const MainPage = () => {
    return (
        <div >
        <nav className='flex justify-evenly items-center max-w-screen-xl mx-auto shadow-xl rounded-lg py-4'>
            <h2 className='text-4xl'>Amazon</h2>
            <div className='flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
            </div>
            
         </nav>

        <div className='max-w-screen-xl mx-auto'>
        <Outlet></Outlet>
        </div>

         <Footer></Footer>
            
        </div>
    );
};

export default MainPage;