
import { FaShoppingCart } from "react-icons/fa"
import Toggle from "../component/Toggle"

export default function Navbar() {
    return(
        <>
            <div className="navbar-conteiner">
                <div className="menu-principal">
                    <FaShoppingCart />
                    <Toggle />
                    
                </div>
            </div>
        </>
    )
}