import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <>
            <header className="border-b border-gray-500 shadow-sm mb-20">
                <nav className="w-[60%] mx-auto flex justify-between py-5">
                    <h2 className="text-[#5A7A0A] font-bold text-xl tracking-wider">Animal Care</h2>
                    <ul>
                        <li className="list-none inline-block mx-3 text-[#5A7A0A] font-bold hover:cursor-pointer hover:text-[#FAB036] transition-colors"><NavLink to="/" className={({isActive}) => isActive ? "text-[#FAB036]" : "" } >Home</NavLink></li>
                        <li className="list-none inline-block mx-3 text-[#5A7A0A] font-bold hover:cursor-pointer hover:text-[#FAB036] transition-colors"><NavLink to="/about" className={({isActive}) => isActive ? "text-[#FAB036]" : "" } >About</NavLink></li>
                        <li className="list-none inline-block mx-3 text-[#5A7A0A] font-bold hover:cursor-pointer hover:text-[#FAB036] transition-colors"><NavLink to="/animals" className={({isActive}) => isActive ? "text-[#FAB036]" : "" } >Animals</NavLink></li>
                        <li className="list-none inline-block mx-3 text-[#5A7A0A] font-bold hover:cursor-pointer hover:text-[#FAB036] transition-colors">Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;