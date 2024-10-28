import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:id', name: 'User Profile' },
    ];
    return (
        <nav className="bg-blue-300 p-5">
            <div className=" md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <RiMenu2Fill className="text-xl"></RiMenu2Fill>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-12': '-top-60'} bg-blue-300 px-5`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;