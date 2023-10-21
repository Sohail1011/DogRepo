import '../style/Navbar.css';
import DogiLogo from "../assets/Perro.png";

export const Header = () => {
    return (
        <div className="primary">
            <img src={DogiLogo} height={150} alt="DogiHouse" />
            <h1>DogiHouse</h1>
        </div>
    )
}
